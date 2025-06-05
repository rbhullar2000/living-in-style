export const dynamic = 'force-dynamic';

import { notFound } from "next/navigation"
import { getPropertyById } from "@/lib/properties"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyMap } from "@/components/property-map"
import { PropertyReviews } from "@/components/property-reviews"
import { BookingForm } from "@/components/booking-form"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calendar, MapPin, Users, Home, Wifi, Tv, Coffee, Car,
  Shield, Waves, Mountain, Building
} from "lucide-react"

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params); // ✅ THIS LINE FIXES THE ERROR
  const property = await getPropertyById(id)

  if (!property) notFound()

  const getAmenityIcon = (amenity: string, index: number) => {
    if (amenity.toLowerCase().includes("wifi")) return Wifi
    if (amenity.toLowerCase().includes("tv")) return Tv
    if (amenity.toLowerCase().includes("kitchen")) return Coffee
    if (amenity.toLowerCase().includes("parking")) return Car
    if (amenity.toLowerCase().includes("security") || amenity.toLowerCase().includes("doorman")) return Shield
    if (amenity.toLowerCase().includes("pool")) return Waves
    if (amenity.toLowerCase().includes("mountain") || amenity.toLowerCase().includes("deck")) return Mountain
    if (amenity.toLowerCase().includes("fitness") || amenity.toLowerCase().includes("center")) return Building
    if (amenity.toLowerCase().includes("washer") || amenity.toLowerCase().includes("laundry")) return Home
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
                <div className="flex items-center mt-4 md:mt-0">
                  <Badge variant="outline" className="mr-2">{property.availability}</Badge>
                  <div className="flex items-center">
                    <span className="text-lg font-bold mr-1">★ {property.rating}</span>
                    <span className="text-muted-foreground">({property.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center"><Users className="h-5 w-5 mr-2" /><span>{property.guests} guests</span></div>
                <div className="flex items-center"><Home className="h-5 w-5 mr-2" /><span>{property.beds} bedrooms</span></div>
                <div className="flex items-center"><Calendar className="h-5 w-5 mr-2" /><span>{property.baths} bathrooms</span></div>
              </div>

              <Separator className="my-6" />

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">About this property</h2>
                <p className="text-muted-foreground">{property.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((a, i) => {
                    const Icon = getAmenityIcon(a, i)
                    return <div key={i} className="flex items-center"><Icon className="h-5 w-5 mr-3" /><span>{a}</span></div>
                  })}
                </div>
              </div>

              <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Location</h2>
  <PropertyMap
    lat={property.lat}
    lng={property.lng}
    title={property.title}
  />
</div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
                <PropertyReviews property={property} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <BookingForm price={property.price} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}