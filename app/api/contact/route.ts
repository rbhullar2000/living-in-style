import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, phone, subject, inquiryType, message } = data

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ""}
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Message – ${subject}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Contact email failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Email failed to send.",
      },
      { status: 500 },
    )
  }
}
