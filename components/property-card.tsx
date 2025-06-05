import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: number
  image: string
  rating?: number
  reviews?: number
  beds: number
  baths: number
  available?: boolean
  featured?: boolean
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  image,
  rating,
  reviews,
  beds,
  baths,
  available = true,
  featured = false,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/properties/${id}`} className="block relative">
        <div className="aspect-[4/3] relative">
          <Image src={image || "/placeholder.svg?height=300&width=400"} alt={title} fill className="object-cover" />
          {featured && <Badge className="absolute top-2 left-2 z-10">Featured</Badge>}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
            {rating && (
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                <span className="text-sm font-medium">{rating}</span>
                {reviews && <span className="text-xs text-muted-foreground ml-1">({reviews})</span>}
              </div>
            )}
          </div>
          <div className="flex items-center text-muted-foreground text-sm mt-1">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-3 mt-2 text-sm">
            <span>
              {beds} {beds === 1 ? "bed" : "beds"}
            </span>
            <span>•</span>
            <span>
              {baths} {baths === 1 ? "bath" : "baths"}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="font-semibold">
            ${price.toLocaleString()}
            <span className="text-muted-foreground font-normal">/month</span>
          </div>
          {!available && (
            <Badge variant="outline" className="text-muted-foreground">
              Not Available
            </Badge>
          )}
        </CardFooter>
      </Link>
    </Card>
  )
}
