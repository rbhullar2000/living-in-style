"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          inquiryType: "",
          message: "",
        })
      } else {
        const errorData = await res.json()
        setErrorMessage(errorData.error || "An unknown error occurred")
        setStatus("error")
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Network error occurred")
      setStatus("error")
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our properties or services? We're here to help you find your perfect furnished
              accommodation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm mb-1">Email</p>
                      <a
                        href="mailto:info@livinginstyle.ca"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        info@livinginstyle.ca
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm mb-1">Phone</p>
                      <a href="tel:+16049160916" className="text-sm text-muted-foreground hover:text-primary">
                        +1 (604) 916-0916
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Serving Vancouver, Whistler,
                        <br />
                        and surrounding areas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm mb-1">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For immediate assistance, call or WhatsApp us directly.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://wa.me/16049160916" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone and Inquiry Type Row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (604) 123-4567"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => updateFormData("inquiryType", value)}
                        >
                          <SelectTrigger id="inquiryType">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="booking">Booking Request</SelectItem>
                            <SelectItem value="property">Property Information</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => updateFormData("subject", e.target.value)}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your needs, preferred dates, location, or any questions you have..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => updateFormData("message", e.target.value)}
                        required
                        className="resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </Button>

                    {/* Status Messages */}
                    {status === "success" && (
                      <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <p className="text-sm text-green-800 dark:text-green-300">
                          Thank you for reaching out! We've received your message and will respond within 24 hours.
                        </p>
                      </div>
                    )}
                    {status === "error" && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                        <div className="text-sm text-red-800 dark:text-red-300">
                          <p className="font-semibold mb-1">Something went wrong</p>
                          {errorMessage && <p className="mb-2">Error: {errorMessage}</p>}
                          <p>Please try again or contact us directly at info@livinginstyle.ca</p>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
