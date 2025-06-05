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
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message – Living In Style`,
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
  } catch (error) {
    console.error('Contact email failed:', error)
    return NextResponse.json({ success: false, error: 'Email failed to send.' }, { status: 500 })
  }
}
