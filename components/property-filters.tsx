"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([1000, 5000])

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by city, neighborhood, or address" className="pl-10" />
        </div>

        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Refine your search with these filters.</SheetDescription>
              </SheetHeader>

              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Price Range (per month)</h3>
                  <div className="space-y-2">
                    <Slider
                      defaultValue={[1000, 5000]}
                      min={0}
                      max={10000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between">
                      <span>${priceRange[0].toLocaleString()}</span>
                      <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="bedrooms">
                    <AccordionTrigger>Bedrooms</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-4 gap-2">
                        {["Any", "1", "2", "3", "4+"].map((option) => (
                          <Button key={option} variant="outline" className="h-9">
                            {option}
                          </Button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="bathrooms">
                    <AccordionTrigger>Bathrooms</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-4 gap-2">
                        {["Any", "1", "2", "3", "4+"].map((option) => (
                          <Button key={option} variant="outline" className="h-9">
                            {option}
                          </Button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="amenities">
                    <AccordionTrigger>Amenities</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          "Air Conditioning",
                          "Washer/Dryer",
                          "Parking",
                          "Gym",
                          "Pool",
                          "Balcony",
                          "Pet Friendly",
                          "Elevator",
                          "Doorman",
                          "Dishwasher",
                        ].map((amenity) => (
                          <div key={amenity} className="flex items-center space-x-2">
                            <Checkbox id={`amenity-${amenity}`} />
                            <Label htmlFor={`amenity-${amenity}`}>{amenity}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lease-term">
                    <AccordionTrigger>Lease Term</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          "Short-term (1-3 months)",
                          "Medium-term (3-6 months)",
                          "Long-term (6+ months)",
                          "Flexible",
                        ].map((term) => (
                          <div key={term} className="flex items-center space-x-2">
                            <Checkbox id={`term-${term}`} />
                            <Label htmlFor={`term-${term}`}>{term}</Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <SheetFooter>
                <Button variant="outline" className="w-full sm:w-auto">
                  Reset
                </Button>
                <Button className="w-full sm:w-auto">Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" className="rounded-full">
          Price: $1,000 - $5,000
        </Button>
        <Button variant="secondary" size="sm" className="rounded-full">
          2+ Bedrooms
        </Button>
        <Button variant="secondary" size="sm" className="rounded-full">
          Available Now
        </Button>
      </div>
    </div>
  )
}
