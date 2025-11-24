"use client" // Converting to client component for interactive gallery

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  MapPin,
  Users,
  Wifi,
  Car,
  Building2,
  Shield,
  Mail,
  MessageCircle,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  Grid,
  Sofa,
  Mountain,
  Snowflake,
  Dumbbell,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FifaBookingForm } from "@/components/fifa-booking-form"
import { PropertyMap } from "@/components/property-map"
import { useState } from "react"

export default function FifaClientPage() {
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const propertyImages = [
    "/Lhermitage_kitchen.JPG",
    "/Lhermitage_entry.jpg",
    "/Lhermitage_bedroom.JPG",
    "/Lhermitage_bathroom.JPG",
    "/Lhermitage_livingroom.JPG",
    "/Lhermitage_office.JPG",
    "/Lhermitage_building.jpg",
    "/Lhermitage_lounge.jpg",
    "/Lhermitage_boardroom.jpg",
    "/Lhermitage_gym.jpg",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/background.png')] opacity-10 bg-cover bg-center" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1">
                FIFA World Cup 2026
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Luxury FIFA 2026 Accommodation
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">Downtown Vancouver • 30+ Nights Only</p>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Limited Availability: Only One Suite at L'Hermitage for FIFA June-July 2026 — enquire now to reserve.
              </p>
              <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
                Premium 1-bedroom suite at L’Hermitage Residences — just a 10-minute walk to BC Place. Steps from SkyTrain, Yaletown, and Robson shopping. Exclusive event-period pricing available for media crews, FIFA staff, and corporate sponsors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-blue-50">
                  <a href="#booking">Request Event Pricing</a>
                </Button>
                <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-blue-50">
                  <a href="#property">View Property Details</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Special Event Pricing Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FIFA 2026 Event Pricing</h2>
                <p className="text-muted-foreground text-lg">Premium rates for June &amp; July 2026 tournament dates</p>
              </div>

              <div className="max-w-3xl mx-auto">
                {/* Event packages */}
                <Card className="border-2 border-blue-600">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl">Event Packages</CardTitle>
                    <CardDescription className="text-base">Best value for 30–60+ day stays</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-8 py-6 px-4 bg-muted/30 rounded-lg">
                      <div className="text-gray-600 text-xs uppercase tracking-widest mb-3 font-medium">
                        Tournament Package Pricing
                      </div>
                      <div className="flex items-baseline justify-center gap-4 mb-3">
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-light tracking-tight">$30,000</div>
                        </div>
                        <span className="text-xl text-muted-foreground font-light">to</span>
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-light tracking-tight">$60,000</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic">Based on exact dates and length of stay</p>
                    </div>
                    <div className="text-gray-700 text-sm mb-8 max-w-2xl mx-auto leading-relaxed space-y-2">
                      <p className="text-balance">
                        Pricing is customized for your specific dates and requirements during the June/July tournament
                        period.
                      </p>
                      <p className="text-xs text-gray-600">
                        <span className="font-medium">Example:</span> June (30 days) packages start at approximately
                        $30,000. Full June + July (60 days) tournament packages available up to $60,000 depending on
                        exact dates and requirements.
                      </p>
                    </div>
                    <ul className="space-y-3 text-left max-w-xl mx-auto text-sm">
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Priority for full-tournament &amp; full-month bookings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Concierge-style support &amp; corporate invoicing available</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Flexible payment terms for corporate clients</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Exact pricing is customized based on dates, number of guests and specific requirements. Example: Full
                  June stay (30 days) might start at ~$30k; full June-July (60 days) packages available up to ~$60k.
                  Only one suite remains for FIFA 2026.
                </p>
                <p className="font-semibold">
                  Special consideration for full-tournament bookings &amp; corporate packages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details Section */}
        <section id="property" className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">L'Hermitage Residences</h2>
                <p className="text-xl text-muted-foreground">788 Richards Street, Downtown Vancouver</p>
              </div>

              <div className="relative mb-12">
                <div className="grid md:grid-cols-6 gap-4">
                  {/* Main large image - Kitchen */}
                  <div className="md:col-span-4 md:row-span-2">
                    <Image
                      src="/Lhermitage_kitchen.JPG"
                      alt="L'Hermitage Kitchen"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Top right - Living room */}
                  <div className="md:col-span-2">
                    <Image
                      src="/Lhermitage_entry.jpg"
                      alt="L'Hermitage Entry"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Bottom right - Bedroom with View All Photos button overlay */}
                  <div className="md:col-span-2 relative">
                    <Image
                      src="/Lhermitage_bedroom.JPG"
                      alt="L'Hermitage Bedroom"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="secondary" className="gap-2">
                            <Grid className="h-4 w-4" />
                            View All Photos
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl">
                          <DialogHeader>
                            <DialogTitle>L'Hermitage Property Photos</DialogTitle>
                            <DialogDescription>Browse all photos of this luxury suite</DialogDescription>
                          </DialogHeader>
                          <div className="relative h-[60vh] mt-4">
                            <Image
                              src={propertyImages[currentImageIndex] || "/placeholder.svg"}
                              alt={`Property image ${currentImageIndex + 1}`}
                              fill
                              className="object-contain"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80"
                              onClick={prevImage}
                            >
                              <ChevronLeft className="h-4 w-4" />
                              <span className="sr-only">Previous image</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80"
                              onClick={nextImage}
                            >
                              <ChevronRight className="h-4 w-4" />
                              <span className="sr-only">Next image</span>
                            </Button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/80 px-2 py-1 rounded-md text-sm">
                              {currentImageIndex + 1} / {propertyImages.length}
                            </div>
                          </div>
                          <div className="grid grid-cols-5 gap-2 mt-4">
                            {propertyImages.map((image, index) => (
                              <button
                                key={index}
                                className={`relative h-20 ${index === currentImageIndex ? "ring-2 ring-primary" : ""}`}
                                onClick={() => setCurrentImageIndex(index)}
                              >
                                <Image
                                  src={image || "/placeholder.svg"}
                                  alt={`Property thumbnail ${index + 1}`}
                                  fill
                                  className="object-cover rounded"
                                />
                              </button>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Building2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-1">L'Hermitage Hotel & Residences</h3>
                    <p className="text-sm text-muted-foreground">Luxury Residences</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-1">BC Place Stadium & FIFA 2026 match hub</h3>
                    <p className="text-sm text-muted-foreground">10-Minute Walk</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <UtensilsCrossed className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-1">Signature Dining & Everyday Essentials (On-Site Amenities)</h3>
                    <p className="text-sm text-muted-foreground">
                      L'Orangerie at L'Hermitage, Café Medina, IGA Marketplace, Tim Hortons
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Car className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-1">Secure Underground Parking</h3>
                    <p className="text-sm text-muted-foreground">Included</p>
                  </CardContent>
                </Card>
              </div>

              {/* FIFA-Optimized Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <h3 className="text-2xl font-bold mb-4">Perfect for FIFA 2026 Teams & Officials</h3>
                <p className="text-muted-foreground mb-4">
                  This exceptional 1-bedroom luxury suite at L'Hermitage Residences offers the ideal base for FIFA World
                  Cup 2026 professionals. Located at 788 Richards Street in the heart of downtown Vancouver, you'll be
                  just a 10-minute walk from BC Place Stadium — the epicenter of Vancouver's FIFA 2026 action. Also
                  minutes from Rogers Arena, Yaletown, Skytrain and Robson shopping.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suite features a fully furnished interior with a gourmet kitchen, modern appliances, and an
                  open-air balcony perfect for relaxing after match days. It also has a fast WiFi/in-suite workspace.
                  With hotel-style amenities including 24-hour concierge, rooftop terrace access, fitness center, and
                  resident lounge, you'll have everything needed for a productive and comfortable extended stay during
                  the tournament.
                </p>
                <p className="text-muted-foreground mb-4">
                  L'Hermitage provides the perfect blend of luxury accommodation and professional functionality.
                  High-speed WiFi ensures seamless connectivity for media teams and broadcast crews, while the
                  building's prestigious address and white-glove service meet the expectations of FIFA officials,
                  corporate sponsors, and international delegations.
                </p>
                <p className="text-muted-foreground mb-4">
                  Experience the heart and soul of L'Hermitage in our exquisite lounge, L'Orangerie, offering a
                  luxurious and timeless experience. L'Orangerie at L'Hermitage offers seasonal cuisine, regional wines,
                  and handcrafted cocktails in a refined lounge setting. Enjoy the signature High Tea with delicate
                  bites and premium teas — a perfect indulgence any time of day.
                </p>
                <p className="text-muted-foreground mb-4">
                  Just a 10-minute walk from BC Place Stadium (FIFA 2026 match hub) and minutes from Rogers Arena, the
                  Vancouver Public Library & SkyTrain access, this residence offers event-ready convenience. Stroll to
                  Café Medina for brunch, pick up essentials from IGA Marketplace, or enjoy coffee at Tim Hortons — all
                  just moments from your door. The neighbourhood is also home to several of Vancouver's best salons,
                  restaurants, and boutique shops, giving you endless options for dining and leisure.
                </p>
                <p className="text-muted-foreground">
                  The location offers unmatched convenience — walking distance to BC Place, direct metro access,
                  world-class dining in Yaletown, and proximity to Rogers Arena and the Vancouver Convention Centre.
                  Whether you're covering matches, coordinating events, or entertaining clients, this residence provides
                  a sophisticated home base in Vancouver's most connected neighborhood.
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Sofa className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Fully Furnished</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">24/7 Concierge Service</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <UtensilsCrossed className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">L'Orangerie at L'Hermitage, Café Medina, IGA Marketplace, Tim Hortons</span>
                </div>
                 <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Mountain className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Boardroom / meeting space</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Mountain className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Rooftop Terrace</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Dumbbell className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Fitness Centre</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Wifi className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">High-Speed WiFi</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Car className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Secure Underground Parking Included</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Snowflake className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Central Air Conditioning</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Fully equipped gourmet kitchen</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">In-suite laundry</span>
                </div>
              </div>

              {/* Location Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Location</h3>
                <PropertyMap lat={49.2809} lng={-123.1166} title="788 Richards Street - FIFA 2026" />
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Who This Unit Is Ideal For</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Media Teams</h3>
                    <p className="text-sm text-muted-foreground">
                      International broadcast crews and journalists covering the tournament
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Shield className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">FIFA Staff</h3>
                    <p className="text-sm text-muted-foreground">
                      Officials and administrative personnel during the World Cup
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Building2 className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Corporate Sponsors</h3>
                    <p className="text-sm text-muted-foreground">
                      Sponsor teams and corporate partners requiring premium accommodation
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Wifi className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Production Crews</h3>
                    <p className="text-sm text-muted-foreground">
                      Broadcast production and technical teams with connectivity needs
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">VIP Travelers</h3>
                    <p className="text-sm text-muted-foreground">
                      High-net-worth individuals seeking luxury downtown accommodation
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <MapPin className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Federations</h3>
                    <p className="text-sm text-muted-foreground">
                      International football federations and delegation members
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Direct Contact</h2>
              <p className="text-muted-foreground mb-8">
                Get in touch directly for immediate assistance with your FIFA 2026 booking
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a href="mailto:info@livinginstyle.ca" className="text-blue-600 dark:text-blue-400 hover:underline">
                      info@livinginstyle.ca
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <MessageCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/17788897964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +1 (778) 889-7964
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking" className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Event Booking</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 24 hours with custom pricing and availability
                </p>
              </div>
              <FifaBookingForm />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your FIFA 2026 Accommodation</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Limited availability for June & July 2026. Book now to guarantee your premium downtown location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-blue-50">
                <a href="#booking">Request Pricing Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-blue-900 hover:bg-blue-50"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
