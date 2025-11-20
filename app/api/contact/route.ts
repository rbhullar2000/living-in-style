import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, subject, message } = data

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: 'Missing contact fields' }, { status: 400 })
    }

    const nodemailer = await import('nodemailer')

    const transporter = nodemailer.default.createTransport({
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
      console.error('EMAIL_TO is missing in environment variables.')
      return NextResponse.json({ success: false, error: 'Recipient email not set.' }, { status: 500 })
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipient,
      subject: `New Contact Message – ${subject}`,
      text: `You have received a new contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Please follow up with the client.`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Contact email failed:', error)
    return NextResponse.json({ success: false, error: 'Email failed to send.' }, { status: 500 })
  }
}
