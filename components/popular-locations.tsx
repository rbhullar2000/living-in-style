import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export function PopularLocations() {
  // In a real app, this data would come from an API or database
  const locations = [
    {
      id: "nyc",
      name: "New York",
      properties: 243,
      image: "/placeholder.svg?height=200&width=300&text=New+York",
    },
    {
      id: "sf",
      name: "San Francisco",
      properties: 186,
      image: "/placeholder.svg?height=200&width=300&text=San+Francisco",
    },
    {
      id: "miami",
      name: "Miami",
      properties: 158,
      image: "/placeholder.svg?height=200&width=300&text=Miami",
    },
    {
      id: "chicago",
      name: "Chicago",
      properties: 132,
      image: "/placeholder.svg?height=200&width=300&text=Chicago",
    },
    {
      id: "la",
      name: "Los Angeles",
      properties: 215,
      image: "/placeholder.svg?height=200&width=300&text=Los+Angeles",
    },
    {
      id: "seattle",
      name: "Seattle",
      properties: 94,
      image: "/placeholder.svg?height=200&width=300&text=Seattle",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((location) => (
        <Link key={location.id} href={`/properties?location=${location.id}`}>
          <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
            <div className="relative h-48">
              <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-semibold">{location.name}</h3>
                <p className="text-sm text-white/80">{location.properties} properties</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
