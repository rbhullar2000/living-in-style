import { type NextRequest, NextResponse } from "next/server"
import { format } from "date-fns"

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

    if (!name || !email || !checkIn || !checkOut || !guests) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const formattedCheckIn = format(new Date(checkIn), "MMMM d, yyyy")
    const formattedCheckOut = format(new Date(checkOut), "MMMM d, yyyy")

    const nodemailer = await import("nodemailer")

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
      console.error("EMAIL_TO is missing in environment variables.")
      return NextResponse.json({ success: false, error: "Recipient email not set." }, { status: 500 })
    }

    const isFifaBooking = bookingType === "FIFA 2026"

    const subject = isFifaBooking
      ? "New FIFA 2026 Event Booking Request – Living In Style"
      : "New Booking Request – Living In Style"

    let emailText = `You have received a new ${isFifaBooking ? "FIFA 2026 event " : ""}booking request:

Name: ${name}
Email: ${email}`

    if (phone) {
      emailText += `\nPhone: ${phone}`
    }

    if (isFifaBooking && organization) {
      emailText += `\nOrganization: ${organization}`
      emailText += `\nOrganization Type: ${organizationType || "Not specified"}`
    }

    if (property) {
      emailText += `\nProperty: ${property}`
    }

    emailText += `
Check-in: ${formattedCheckIn}
Check-out: ${formattedCheckOut}
Guests: ${guests}`

    if (price) {
      emailText += `\nMonthly Rate: $${Number(price).toLocaleString()}`
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

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Booking email failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Email failed to send.",
      },
      { status: 500 },
    )
  }
}
