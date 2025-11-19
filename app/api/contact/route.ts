import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, phone, subject, inquiryType, message } = data

    console.log("[v0] Contact form submission received:", { name, email, subject })
    console.log("[v0] SMTP Config check:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS,
      emailTo: process.env.EMAIL_TO,
    })

    if (!name || !email || !subject || !message) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    console.log("[v0] Creating nodemailer transporter...")
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

    console.log("[v0] Attempting to send email...")
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Message – ${subject}`,
      html: emailHtml,
    })

    console.log("[v0] Email sent successfully!")
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("[v0] Contact email failed:", error)
    console.error("[v0] Error details:", error.message, error.stack)
    return NextResponse.json(
      {
        success: false,
        error: "Email failed to send.",
      },
      { status: 500 },
    )
  }
}
