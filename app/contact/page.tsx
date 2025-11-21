"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, Calendar, Users } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("")
  const [propertyInterest, setPropertyInterest] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, subject, checkIn, checkOut, guests, propertyInterest, message }),
    })

    if (res.ok) {
      setStatus("success")
      setName("")
      setEmail("")
      setPhone("")
      setSubject("")
      setCheckIn("")
      setCheckOut("")
      setGuests("")
      setPropertyInterest("")
      setMessage("")
    } else {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative bg-[#E8DCC8] text-gray-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/background.png')] opacity-30 bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-gray-800 hover:bg-gray-900 text-white text-sm px-4 py-1">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">Contact Living In Style</h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-800">
              We're here to help with your luxury accommodation needs
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether you have questions about availability, pricing, or custom stays, our team is ready to assist you.
              Reach out through your preferred contact method below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple Ways to Reach Us</h2>
              <p className="text-muted-foreground text-lg">Choose the contact method that works best for you</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Mail className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-3">Send us a message anytime</p>
                  <a
                    href="mailto:info@livinginstyle.ca"
                    className="text-gray-800 dark:text-gray-200 hover:underline font-medium"
                  >
                    info@livinginstyle.ca
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Phone className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground mb-3">Call us during business hours</p>
                  <a href="tel:+17788897964" className="text-gray-800 dark:text-gray-200 hover:underline font-medium">
                    +1 (778) 889-7964
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <MessageCircle className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-3">Chat with us instantly</p>
                  <a
                    href="https://wa.me/17788897964"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:underline font-medium"
                  >
                    Message Us
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Response Time</h3>
                      <p className="text-sm text-muted-foreground">
                        We typically respond within 24 hours on business days. For urgent inquiries, please call or
                        WhatsApp us directly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Service Area</h3>
                      <p className="text-sm text-muted-foreground">
                        Premium furnished rentals in downtown Vancouver and surrounding areas. Contact us about specific
                        locations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 py-16">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="shadow-lg border-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="h-6 w-6" />
                Contact Form
              </CardTitle>
              <CardDescription>We're here to help you with questions, availability, or custom stays.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (778) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-1.5 block">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is your inquiry about?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="text-sm font-medium mb-1.5 block flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Preferred Check-in Date
                    </label>
                    <Input id="checkIn" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="text-sm font-medium mb-1.5 block flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Preferred Check-out Date
                    </label>
                    <Input id="checkOut" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guests" className="text-sm font-medium mb-1.5 block flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Number of Guests
                    </label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      placeholder="2"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="propertyInterest"
                      className="text-sm font-medium mb-1.5 block flex items-center gap-2"
                    >
                      <MapPin className="h-4 w-4" />
                      Property of Interest
                    </label>
                    <Input
                      id="propertyInterest"
                      type="text"
                      placeholder="e.g., Vancouver Downtown, Kelowna"
                      value={propertyInterest}
                      onChange={(e) => setPropertyInterest(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your needs, special requests, or questions..."
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <p className="text-sm text-muted-foreground">* Required fields</p>

                <Button type="submit" className="w-full" size="lg" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                  <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                      Message sent successfully! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-700 dark:text-red-300 text-sm font-medium">
                      Something went wrong. Please try again or contact us directly via email or phone.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
              <p className="text-muted-foreground text-lg">Quick answers to frequently asked questions</p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is the minimum stay requirement?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most of our properties require a minimum 30-night stay. For special events like FIFA 2026, custom
                    arrangements may apply. Contact us to discuss your specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are utilities and WiFi included?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! All our properties include utilities, high-speed WiFi, and premium amenities. Everything is
                    move-in ready from day one.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I check availability?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Browse our properties page or contact us directly with your preferred dates and requirements. We'll
                    provide real-time availability and custom pricing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer corporate packages?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work with corporate clients and offer flexible payment terms, invoicing, and dedicated support
                    for business travelers and relocations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
