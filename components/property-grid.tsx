"use client"

import { useState } from "react"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { properties } from "@/lib/properties"

export function PropertyGrid() {
  const [visibleProperties, setVisibleProperties] = useState(6)

  const loadMore = () => {
    setVisibleProperties((prev) => Math.min(prev + 3, properties.length))
  }

  // Ensure each property gets a usable `image` field
  const propertiesWithImage = properties.map((property) => ({
    ...property,
    image: property.images?.[0] || "/placeholder.svg",
  }))

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertiesWithImage.slice(0, visibleProperties).map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>

      {visibleProperties < properties.length && (
        <div className="flex justify-center">
          <Button onClick={loadMore} variant="outline" size="lg">
            Load More Properties
          </Button>
        </div>
      )}
    </div>
  )
}