import { type NextRequest, NextResponse } from "next/server"
import { format } from "date-fns"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

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

    console.log("[v0] Booking form submission received:", { name, email, property, checkIn, checkOut })
    console.log("[v0] SMTP Config check:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS,
      emailTo: process.env.EMAIL_TO,
    })

    if (!name || !email || !checkIn || !checkOut || !guests) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const formattedCheckIn = format(new Date(checkIn), "MMMM d, yyyy")
    const formattedCheckOut = format(new Date(checkOut), "MMMM d, yyyy")

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

    console.log("[v0] Attempting to send booking email...")
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject,
      html: emailHtml,
    })

    console.log("[v0] Booking email sent successfully!")
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("[v0] Booking email failed:", error)
    console.error("[v0] Error details:", error.message, error.stack)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Email failed to send.",
        details: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
