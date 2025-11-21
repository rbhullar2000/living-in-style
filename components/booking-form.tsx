"use client"

import { useState } from "react"
import { Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input" // Make sure you have an Input component

interface BookingFormProps {
  price: number
  pricePeriod?: "week" | "month" // Added pricePeriod prop
}

export function BookingForm({ price, pricePeriod = "month" }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState("1")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [openCheckIn, setOpenCheckIn] = useState(false)
  const [openCheckOut, setOpenCheckOut] = useState(false)

  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-end">
          <span className="text-2xl font-bold">${price.toLocaleString()}</span>
          <span className="text-muted-foreground"> / {pricePeriod}</span>{" "}
          {/* Use pricePeriod prop instead of hardcoded "month" */}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />

        <Input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Input type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <div className="grid grid-cols-2 gap-2">
          {/* ✅ Check-in */}
          <Popover open={openCheckIn} onOpenChange={setOpenCheckIn}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("justify-start text-left font-normal", !checkIn && "text-muted-foreground")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {checkIn ? checkIn.toLocaleDateString() : "Check-in"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  setCheckIn(date)
                  setOpenCheckIn(false)
                }}
                weekStartsOn={0} // Sunday
                classNames={{
                  months: "flex flex-col space-y-4",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-sm font-medium",
                  nav: "flex items-center",
                  nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                  table: "w-full border-collapse",
                  head_row: "flex",
                  head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "h-9 w-9 text-center text-sm p-0 relative",
                  day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                  day_selected: "bg-black text-white hover:bg-black",
                  day_today: "bg-muted text-muted-foreground",
                  day_outside: "opacity-50",
                  day_disabled: "opacity-50",
                  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                }}
              />
            </PopoverContent>
          </Popover>

          {/* ✅ Check-out */}
          <Popover open={openCheckOut} onOpenChange={setOpenCheckOut}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("justify-start text-left font-normal", !checkOut && "text-muted-foreground")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {checkOut ? checkOut.toLocaleDateString() : "Check-out"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={checkOut}
                onSelect={(date) => {
                  setCheckOut(date)
                  setOpenCheckOut(false) // ✅ fix applied here
                }}
                weekStartsOn={0}
                classNames={{
                  months: "flex flex-col space-y-4",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-sm font-medium",
                  nav: "flex items-center",
                  nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                  table: "w-full border-collapse",
                  head_row: "flex",
                  head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "h-9 w-9 text-center text-sm p-0 relative",
                  day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                  day_selected: "bg-black text-white hover:bg-black",
                  day_today: "bg-muted text-muted-foreground",
                  day_outside: "opacity-50",
                  day_disabled: "opacity-50",
                  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Number of guests" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Guest</SelectItem>
            <SelectItem value="2">2 Guests</SelectItem>
            <SelectItem value="3">3 Guests</SelectItem>
            <SelectItem value="4">4 Guests</SelectItem>
          </SelectContent>
        </Select>

        <textarea
          placeholder="Message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />

        <Button
          className="w-full mt-4"
          onClick={async () => {
            if (!checkIn || !checkOut) {
              alert("Please select both check-in and check-out dates.")
              return
            }

            const res = await fetch("/api/bookings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name,
                email,
                phone,
                message,
                checkIn: checkIn.toISOString(),
                checkOut: checkOut.toISOString(),
                guests,
                price,
              }),
            })

            if (res.ok) {
              alert("Booking submitted! You will receive a confirmation email shortly.")
            } else {
              alert("Something went wrong. Please try again.")
            }
          }}
        >
          Reserve
        </Button>
      </CardContent>
    </Card>
  )
}
