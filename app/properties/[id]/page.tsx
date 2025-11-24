export const dynamic = "force-dynamic"

import { notFound } from "next/navigation"
import { getPropertyById } from "@/lib/properties"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyMap } from "@/components/property-map"
// 👇 Removed PropertyReviews import
// import { PropertyReviews } from "@/components/property-reviews"
import { BookingForm } from "@/components/booking-form"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  MapPin,
  Users,
  Home,
  Wifi,
  Tv,
  Coffee,
  Car,
  Shield,
  Waves,
  Mountain,
  UtensilsCrossed,
  Sofa,
  Dumbbell,
  Snowflake,
  Building2,
  Sparkles,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params)
  const property = await getPropertyById(id)

  if (!property) notFound()

  const getAmenityIcon = (amenity: string, index: number) => {
    const a = amenity.toLowerCase()

    if (
      a.includes("orangerie") ||
      a.includes("café") ||
      a.includes("cafe") ||
      a.includes("restaurant") ||
      a.includes("tim hortons") ||
      a.includes("iga") ||
      a.includes("medina") ||
      a.includes("botanist") ||
      a.includes("bar") ||
      a.includes("lounge")
    )
      return UtensilsCrossed

    if (a.includes("spa")) return Sparkles

    // Furniture and furnishings
    if (a.includes("furnished")) return Sofa

    if (a.includes("kitchen") || a.includes("gourmet") || a.includes("appliances")) return Building2

    // Internet
    if (a.includes("wifi")) return Wifi

    // Television - only match if it's primarily about TV (starts with it or is standalone)
    if (a.startsWith("tv") || a.startsWith("television") || a === "tv" || a === "television") return Tv

    // Parking
    if (a.includes("parking")) return Car

    // Security and services
    if (a.includes("security") || a.includes("doorman") || a.includes("concierge")) return Shield

    // Pool
    if (a.includes("pool")) return Waves

    if (
      a.includes("mountain") ||
      a.includes("deck") ||
      a.includes("terrace") ||
      a.includes("rooftop") ||
      a.includes("balcony") ||
      a.includes("patio") ||
      a.includes("fire pit")
    )
      return Mountain

    // Fitness
    if (a.includes("fitness") || a.includes("center") || a.includes("gym")) return Dumbbell

    // Climate control
    if (a.includes("air") || a.includes("conditioning") || a.includes("ac")) return Snowflake

    // Laundry
    if (a.includes("washer") || a.includes("laundry") || a.includes("dryer")) return Home

    if (a.includes("floor") || a.includes("ceiling") || a.includes("hardwood") || a.includes("marble")) return Building2

    // Default fallback icons
    const icons = [Wifi, Tv, Coffee, Home, Users, Car, Calendar, Shield, Waves, Mountain]
    return icons[index % icons.length]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <PropertyGallery id={id} images={property.images} />

        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Right-side labels (no rating/review) */}
                <div className="flex items-center mt-4 md:mt-0">
                  {property.availability ? (
                    <Badge variant="outline" className="mr-2">
                      {property.availability}
                    </Badge>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{property.guests} guests</span>
                </div>
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  <span>{property.beds} bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{property.baths} bathrooms</span>
                </div>
              </div>

              <Separator className="my-6" />

              {property.id === "LHermitage" && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Building2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">L'Hermitage Hotel & Residences</h3>
                        <p className="text-sm text-muted-foreground">Luxury Residences</p>
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
                        <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">BC Place, Rogers Arena, Robson Street Shopping, Pacific Centre Mall</h3>
                        <p className="text-sm text-muted-foreground">Walking Distance</p>
                      </CardContent>
                    </Card>
                   <Card>
                      <CardContent className="pt-6 text-center">
                        <Car className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Secure Underground Parking</h3>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {property.id === "FairmontPacificRim" && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Building2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Fairmont Pacific Rim</h3>
                        <p className="text-sm text-muted-foreground">Five-Star Luxury</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Waves className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Infinity Pool & Spa</h3>
                        <p className="text-sm text-muted-foreground">Rooftop with Cabanas</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Concierge & Valet</h3>
                        <p className="text-sm text-muted-foreground">24/7 Service</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Waterfront Location</h3>
                        <p className="text-sm text-muted-foreground">Steps to Seawall & Convention Centre</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {property.id === "CoalHarbour" && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Building2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Italian Dada Kitchen</h3>
                        <p className="text-sm text-muted-foreground">Gaggenau Appliances</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Mountain className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Stanley Park</h3>
                        <p className="text-sm text-muted-foreground">Blocks Away</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Waves className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Indoor Pool & Hot Tub</h3>
                        <p className="text-sm text-muted-foreground">Building Amenities</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Coal Harbour Marina</h3>
                        <p className="text-sm text-muted-foreground">Prestigious Waterfront Address</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {property.id === "CultusLake" && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Waves className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Cultus Lake Access</h3>
                        <p className="text-sm text-muted-foreground">Walking Distance</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Mountain className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Hiking Trails</h3>
                        <p className="text-sm text-muted-foreground">Nature at Your Doorstep</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Pet-Friendly</h3>
                        <p className="text-sm text-muted-foreground">Bring Your Furry Friends</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Coffee className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Large Outdoor Deck</h3>
                        <p className="text-sm text-muted-foreground">BBQ & Fire Pit</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {property.id === "WaterStreetByThePark" && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Building2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">27th Floor Penthouse</h3>
                        <p className="text-sm text-muted-foreground">Brand New 2026</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Mountain className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Panoramic Views</h3>
                        <p className="text-sm text-muted-foreground">Okanagan Lake & Mountains</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Sofa className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">378 sq ft Balcony</h3>
                        <p className="text-sm text-muted-foreground">Private Outdoor Space</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-1">Cultural District</h3>
                        <p className="text-sm text-muted-foreground">Marina, Wineries & Dining</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">About this property</h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {
                    property.description
                      .replace(/<p>\s*/g, "\n\n") // turn <p> into paragraph breaks
                      .replace(/<\/p>/g, "") // remove </p>
                      .replace(/<br\s*\/?>/g, "\n") // support <br>
                  }
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.amenities.map((a, i) => {
                    const Icon = getAmenityIcon(a, i)
                    return (
                      <div key={i} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                        <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{a}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Location</h2>
                <PropertyMap lat={property.lat} lng={property.lng} title={property.title} />
              </div>

              {/* 👇 Removed Reviews section entirely */}
              {/*
              <div>
                <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
                <PropertyReviews property={property} />
              </div>
              */}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <BookingForm price={property.price} pricePeriod={property.pricePeriod} /> {/* Added pricePeriod prop */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
