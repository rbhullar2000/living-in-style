"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import Image from "next/image";

export function HeroSection() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
  <section className="relative">
    {/* Optional overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10 z-10" /> */}

    <div
      className="h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png?height=600&width=1200')" }}
    />

    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <Image
              src="/LISlogo_black.png"
              alt="Living In Style Logo"
              width={150}
              height={50}
              priority
            />
          </div>
   
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your Perfect Furnished Home
          </h1>

           <p className="text-xl text-black max-w-2xl mx-auto">
            NOW TAKING BOOKINGS FOR FIFA WORLD CUP 2026 VANCOUVER
          </p>
        
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover premium furnished properties for short and long-term rentals worldwide.
          </p>
        </div>
{/*}
          <div className="bg-background rounded-lg p-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Where do you want to stay?" className="pl-10" />
              </div>

              <div className="relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? date.toLocaleDateString() : "Check-in date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Select>
                  <SelectTrigger>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Number of guests" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="3">3 guests</SelectItem>
                    <SelectItem value="4">4 guests</SelectItem>
                    <SelectItem value="5">5+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div> 
          </div> */}
        </div>
      </div>
    </section>
  )
}
