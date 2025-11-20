import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, phone, subject, inquiryType, message } = data

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      // Fallback to nodemailer if Resend is not configured
      const nodemailer = await import("nodemailer")

      const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587")
      const useSSL = smtpPort === 465

      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: useSSL,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
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
    }

    // Use Resend API
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

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Living In Style <onboarding@resend.dev>", // You'll need to configure your domain in Resend
        to: process.env.EMAIL_TO,
        reply_to: email,
        subject: `New Contact Message – ${subject}`,
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to send email via Resend")
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("[v0] Contact email failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Email failed to send.",
      },
      { status: 500 },
    )
  }
}
 
