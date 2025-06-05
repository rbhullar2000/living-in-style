// app/api/map/route.ts
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs' // important if you're using nodemailer or need node modules

export async function GET(req: NextRequest) {
  const key = process.env.GOOGLE_MAPS_API_KEY

  if (!key) {
    return NextResponse.json({ error: 'API key not found' }, { status: 500 })
  }

  // Example request (adjust as needed)
  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Vancouver&key=${key}`)
  const data = await res.json()

  return NextResponse.json(data)
}