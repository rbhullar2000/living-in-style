import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import type { Property } from "@/lib/properties"

export function PropertyReviews({ property }: { property?: Property }) {
  if (!property) return null // or <div>No property found.</div>
console.log("PropertyReviews received:", property)
  const reviews = property.reviewsList
  const average = property.rating
  const total = property.reviewCount

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="text-4xl font-bold mr-2">{average}</div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(average) ? "fill-primary text-primary" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">{total} reviews</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-muted-foreground mb-4">
            This property has consistently received high ratings for cleanliness, location, and amenities.
          </p>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-8">
        {reviews.map((review, i) => (
          <div key={i}>
            <div className="flex items-start">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage
                  src={`/placeholder.svg?height=40&width=40&text=${review.name.slice(0, 2)}`}
                  alt={review.name}
                />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{review.name}</div>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`h-3.5 w-3.5 ${j < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2">{review.comment}</p>
              </div>
            </div>
            {i !== reviews.length - 1 && <Separator className="my-6" />}
          </div>
        ))}
      </div>
    </div>
  )
}