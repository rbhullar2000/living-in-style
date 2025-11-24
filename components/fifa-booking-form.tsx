"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from 'lucide-react'

export function FifaBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      organization: formData.get("organization"),
      organizationType: formData.get("organizationType"),
      checkIn: formData.get("checkIn"),
      checkOut: formData.get("checkOut"),
      guests: formData.get("guests"),
      message: formData.get("message"),
      bookingType: "FIFA 2026",
      property: "L'Hermitage Residences",
    }

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-green-600">Request Received!</CardTitle>
          <CardDescription>
            Thank you for your FIFA 2026 booking inquiry. We'll review your request and get back to you within 24 hours with pricing and availability.
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>FIFA 2026 Event Booking Request</CardTitle>
        <CardDescription>
          Please provide your details and we'll send you custom pricing for the tournament dates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required placeholder="John Smith" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" required placeholder="john@example.com" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="+1 (604) 123-4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizationType">Organization Type *</Label>
              <Select name="organizationType" required>
                <SelectTrigger id="organizationType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="media">Media/Broadcast</SelectItem>
                  <SelectItem value="fifa-staff">FIFA Staff</SelectItem>
                  <SelectItem value="corporate">Corporate Sponsor</SelectItem>
                  <SelectItem value="production">Production Crew</SelectItem>
                  <SelectItem value="federation">National Federation</SelectItem>
                  <SelectItem value="vip">VIP/Private</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization/Company Name *</Label>
            <Input id="organization" name="organization" required placeholder="ABC Broadcasting Corporation" />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkIn">Check-in Date *</Label>
              <div className="relative">
                <Input 
                  id="checkIn" 
                  name="checkIn" 
                  type="date" 
                  required 
                  min="2026-06-01"
                  className="pl-3"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkOut">Check-out Date *</Label>
              <div className="relative">
                <Input 
                  id="checkOut" 
                  name="checkOut" 
                  type="date" 
                  required 
                  min="2026-07-01"
                  className="pl-3"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Select name="guests" defaultValue="2">
                <SelectTrigger id="guests">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Requirements or Questions</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Tell us about your specific needs, preferred payment terms, or any special requirements..."
              rows={4}
            />
          </div>

          <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>Please note:</strong> This property requires a 30-day minimum stay for FIFA 2026 dates.
            </p>
            <p>
              Event pricing ranges from $30,000-$55,000/month depending on dates and duration.
            </p>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending Request..." : "Request Event Pricing"}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By submitting this form, you agree to be contacted regarding your FIFA 2026 booking inquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
