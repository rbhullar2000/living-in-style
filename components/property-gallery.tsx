"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Grid } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface PropertyGalleryProps {
  id: string
  images?: string[]
}

export function PropertyGallery({ id, images = [] }: PropertyGalleryProps) {
  // Fallback images if none provided
  const defaultImages = [
    "/placeholder.svg?height=600&width=800&text=Living+Room",
    "/placeholder.svg?height=600&width=800&text=Bedroom",
    "/placeholder.svg?height=600&width=800&text=Kitchen",
    "/placeholder.svg?height=600&width=800&text=Bathroom",
    "/placeholder.svg?height=600&width=800&text=Balcony",
  ]

  const propertyImages = images.length > 0 ? images : defaultImages
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[500px]">
        <div className="relative md:col-span-2 md:row-span-2">
          <Image
            src={propertyImages[0] || "/placeholder.svg"}
            alt="Property main image"
            fill
            className="object-cover"
          />
        </div>

        <div className="hidden md:block relative">
          <Image src={propertyImages[1] || "/placeholder.svg"} alt="Property image" fill className="object-cover" />
        </div>

        <div className="hidden md:block relative">
          <Image src={propertyImages[2] || "/placeholder.svg"} alt="Property image" fill className="object-cover" />
        </div>

        <div className="hidden md:block relative">
          <Image src={propertyImages[3] || "/placeholder.svg"} alt="Property image" fill className="object-cover" />
        </div>

        <div className="hidden md:block relative">
          <Image src={propertyImages[4] || "/placeholder.svg"} alt="Property image" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="gap-2">
                  <Grid className="h-4 w-4" />
                  View All Photos
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl">
                <DialogHeader>
                  <DialogTitle>Property Photos</DialogTitle>
                  <DialogDescription>Browse all photos of this property</DialogDescription>
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
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="absolute bottom-4 right-4 gap-2 md:hidden">
            <Grid className="h-4 w-4" />
            View All Photos
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-5xl">
          <DialogHeader>
            <DialogTitle>Property Photos</DialogTitle>
            <DialogDescription>Browse all photos of this property</DialogDescription>
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
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
