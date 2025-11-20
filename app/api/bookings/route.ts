import { type NextRequest, NextResponse } from "next/server"
import { format } from "date-fns"

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
      property,
    } = data

    if (!name || !email || !checkIn || !checkOut || !guests) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const formattedCheckIn = format(new Date(checkIn), "MMMM d, yyyy")
    const formattedCheckOut = format(new Date(checkOut), "MMMM d, yyyy")

    const resendApiKey = process.env.RESEND_API_KEY

    const isFifaBooking = bookingType === "FIFA 2026"

    const subject = isFifaBooking
      ? "New FIFA 2026 Event Booking Request – Living In Style"
      : "New Booking Request – Living In Style"

    let emailHtml = `
      <h2>New ${isFifaBooking ? "FIFA 2026 Event " : ""}Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `

    if (phone) {
      emailHtml += `<p><strong>Phone:</strong> ${phone}</p>`
    }

    if (isFifaBooking && organization) {
      emailHtml += `
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Organization Type:</strong> ${organizationType || "Not specified"}</p>
      `
    }

    if (property) {
      emailHtml += `<p><strong>Property:</strong> ${property}</p>`
    }

    emailHtml += `
      <p><strong>Check-in:</strong> ${formattedCheckIn}</p>
      <p><strong>Check-out:</strong> ${formattedCheckOut}</p>
      <p><strong>Guests:</strong> ${guests}</p>
    `

    if (price) {
      emailHtml += `<p><strong>Monthly Rate:</strong> $${Number(price).toLocaleString()}</p>`
    }

    if (message) {
      emailHtml += `
        <h3>Additional Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    }

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

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject,
        html: emailHtml,
      })

      return NextResponse.json({ success: true })
    }

    // Use Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Living In Style <onboarding@resend.dev>",
        to: process.env.EMAIL_TO,
        reply_to: email,
        subject,
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to send email via Resend")
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("[v0] Booking email failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Email failed to send.",
      },
      { status: 500 },
    )
  }
}
