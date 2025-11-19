import { NextRequest, NextResponse } from 'next/server'
import { format } from 'date-fns'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    
    const { 
      name, 
      email, 
      phone,
      organization,
      organizationType,
      checkIn, 
      checkOut, 
      guests, 
      price,
      message,
      bookingType,
      property
    } = data

    console.log('[v0] Booking form submission received:', { name, email, checkIn, checkOut })

    if (!name || !email || !checkIn || !checkOut || !guests) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const formattedCheckIn = format(new Date(checkIn), 'MMMM d, yyyy')
    const formattedCheckOut = format(new Date(checkOut), 'MMMM d, yyyy')

    const nodemailer = await import('nodemailer')

    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
        minVersion: 'TLSv1.2'
      },
      debug: true, // Enable debug output
      logger: true // Log information about the connection
    })

    const recipient = process.env.EMAIL_TO || process.env.SMTP_USER

    if (!recipient) {
      console.error('[v0] EMAIL_TO is missing in environment variables.')
      return NextResponse.json({ success: false, error: 'Recipient email not set.' }, { status: 500 })
    }

    console.log('[v0] Verifying SMTP connection...')
    try {
      await transporter.verify()
      console.log('[v0] SMTP connection verified successfully!')
    } catch (verifyError: any) {
      console.error('[v0] SMTP verification failed:', verifyError.message)
      throw verifyError
    }

    const isFifaBooking = bookingType === 'FIFA 2026'
    
    const subject = isFifaBooking 
      ? 'New FIFA 2026 Event Booking Request – Living In Style'
      : 'New Booking Request – Living In Style'

    let emailText = `You have received a new ${isFifaBooking ? 'FIFA 2026 event ' : ''}booking request:

Name: ${name}
Email: ${email}`

    if (phone) {
      emailText += `
Phone: ${phone}`
    }

    if (isFifaBooking && organization) {
      emailText += `

Organization: ${organization}
Organization Type: ${organizationType || 'Not specified'}`
    }

    if (property) {
      emailText += `

Property: ${property}`
    }

    emailText += `

Check-in: ${formattedCheckIn}
Check-out: ${formattedCheckOut}
Guests: ${guests}`

    if (price) {
      emailText += `
Monthly Rate: $${Number(price).toLocaleString()}`
    }

    if (message) {
      emailText += `

Additional Message:
${message}`
    }

    emailText += `

Please follow up with the client.`

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipient,
      subject,
      text: emailText,
    }

    console.log('[v0] Attempting to send email...')
    const info = await transporter.sendMail(mailOptions)
    console.log('[v0] Email sent successfully!', info.messageId)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('[v0] Booking email failed:', error.message)
    console.error('[v0] Full error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Email failed to send.',
      details: error.message 
    }, { status: 500 })
  }
}
