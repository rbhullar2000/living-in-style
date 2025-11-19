import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, phone, subject, inquiryType, message } = data

    console.log('[v0] Contact form submission received:', { name, email, subject })

    if (!name || !email || !subject || !message) {
      console.log('[v0] Missing required fields')
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    console.log('[v0] SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS,
      emailTo: process.env.EMAIL_TO
    })

    const nodemailer = await import('nodemailer')

    const transporter = nodemailer.default.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const recipient = process.env.EMAIL_TO || process.env.SMTP_USER

    if (!recipient) {
      console.error('[v0] EMAIL_TO is missing in environment variables.')
      return NextResponse.json({ success: false, error: 'Recipient email not set.' }, { status: 500 })
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipient,
      subject: `New Contact Message – ${subject}`,
      text: `You have received a new contact form submission:

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${inquiryType ? `Inquiry Type: ${inquiryType}` : ''}
Subject: ${subject}

Message:
${message}

Please follow up with the client.`,
    }

    console.log('[v0] Attempting to send email...')
    await transporter.sendMail(mailOptions)
    console.log('[v0] Email sent successfully!')

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('[v0] Contact email failed:', error.message)
    console.error('[v0] Full error:', error)
    return NextResponse.json({ success: false, error: 'Email failed to send.' }, { status: 500 })
  }
}
