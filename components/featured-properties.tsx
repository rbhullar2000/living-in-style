import { PropertyCard } from "@/components/property-card"
import { getFeaturedProperties } from "@/lib/properties"

export function FeaturedProperties() {
  const properties = getFeaturedProperties()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  )
}
