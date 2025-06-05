import { NextRequest, NextResponse } from 'next/server'
import { format } from 'date-fns'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, checkIn, checkOut, guests, price } = data

    // Validate data
    if (!name || !email || !checkIn || !checkOut || !guests || !price) {
      return NextResponse.json({ success: false, error: 'Missing booking fields' }, { status: 400 })
    }

    const formattedCheckIn = format(new Date(checkIn), 'MMMM d, yyyy')
    const formattedCheckOut = format(new Date(checkOut), 'MMMM d, yyyy')

    const nodemailer = await import('nodemailer')

    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: 'New Booking Request – Living In Style',
      text: `You have received a new booking request:

Name: ${name}
Email: ${email}

Check-in: ${formattedCheckIn}
Check-out: ${formattedCheckOut}
Guests: ${guests}
Monthly Rate: $${Number(price).toLocaleString()}

Please follow up with the client.`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking email failed:', error)
    return NextResponse.json({ success: false, error: 'Email failed to send.' }, { status: 500 })
  }
}
