import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Wifi, Car, Building2, Shield, Mail, MessageCircle, UtensilsCrossed } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FifaBookingForm } from "@/components/fifa-booking-form"

export const metadata = {
  title: "FIFA 2026 Luxury Accommodation | Downtown Vancouver",
  description:
    "30+ night bookings. Walking distance to BC Place. Ideal for media teams, FIFA staff, and corporate sponsors.",
}

export default function FifaPage() {
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
              <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
                Premium 1-bedroom suite at L'Hermitage Residences. Walking distance to BC Place. Exclusive event pricing
                for media teams, FIFA staff, and corporate sponsors.
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

              <div className="grid md:grid-cols-2 gap-6">
                {/* Nightly */}
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-2xl">Nightly Rate</CardTitle>
                    <CardDescription>Flexible short-term pricing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold mb-2">$1,200 – $3,000</div>
                    <div className="text-muted-foreground mb-4">per night (30-night minimum)</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        30-night minimum stay
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        Rates vary by match schedule &amp; demand
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        Parking included
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Event packages */}
                <Card className="border-2 border-blue-600">
                  <CardHeader>
                    <CardTitle className="text-2xl">Event Packages</CardTitle>
                    <CardDescription>Best value for 30–60+ day stays</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold mb-2">$30,000 – $60,000</div>
                    <div className="text-muted-foreground mb-4">
                      total for June/July stay (pricing depends on exact dates &amp; length of stay)
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        Priority for full-tournament &amp; full-month bookings
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        Concierge-style support &amp; corporate invoicing available
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        Flexible payment terms for corporate clients
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Exact pricing is customized based on dates, number of guests and specific requirements.
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

              {/* Property Images */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                <div className="md:col-span-2 lg:col-span-2 row-span-2">
                  <Image
                    src="/Lhermitage_livingroom.JPG"
                    alt="L'Hermitage Living Room"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <Image
                    src="/Lhermitage_kitchen.JPG"
                    alt="L'Hermitage Kitchen"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <Image
                    src="/Lhermitage_bedroom.JPG"
                    alt="L'Hermitage Bedroom"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
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
                    <h3 className="font-semibold mb-1">BC Place</h3>
                    <p className="text-sm text-muted-foreground">Walking Distance</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Car className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-1">Parking</h3>
                    <p className="text-sm text-muted-foreground">Included</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Wifi className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-1">Fast WiFi</h3>
                    <p className="text-sm text-muted-foreground">High-Speed Internet</p>
                  </CardContent>
                </Card>
              </div>

              {/* FIFA-Optimized Description */}
              <div className="prose prose-lg max-w-none mb-12">
                <h3 className="text-2xl font-bold mb-4">Perfect for FIFA 2026 Teams & Officials</h3>
                <p className="text-muted-foreground mb-4">
                  This exceptional 1-bedroom luxury suite at L'Hermitage Residences offers the ideal base for FIFA World
                  Cup 2026 professionals. Located at 788 Richards Street in the heart of downtown Vancouver, you'll be
                  just a 10-minute walk from BC Place Stadium — the epicenter of Vancouver's FIFA 2026 action.
                </p>
                <p className="text-muted-foreground mb-4">
                  The suite features a fully furnished interior with a gourmet kitchen, modern appliances, and an
                  open-air balcony perfect for relaxing after match days. With hotel-style amenities including 24-hour
                  concierge, rooftop terrace access, fitness center, and resident lounge, you'll have everything needed
                  for a productive and comfortable extended stay during the tournament.
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
                  Step outside and you'll find yourself surrounded by Vancouver's most desirable attractions and
                  conveniences. Stroll to Café Medina for brunch, pick up essentials from IGA Marketplace, or enjoy
                  coffee at Tim Hortons — all just moments from your door. The neighbourhood is also home to several of
                  Vancouver's best salons, restaurants, and boutique shops, giving you endless options for dining and
                  leisure.
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
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">24/7 Concierge Service</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <UtensilsCrossed className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">L'Orangerie at L'Hermitage, Café Medina, IGA Marketplace, Tim Hortons</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Rooftop Terrace</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Fitness Centre</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Wifi className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">High-Speed WiFi</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Car className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Parking Included</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Fully Furnished</span>
                </div>
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
                className="border-white text-blue-900 hover:bg-blue-50 bg-transparent"
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
