"use client"

import { Separator } from "@/components/ui/separator"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User, Heart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
         <Link href="/" className="text-lg font-semibold leading-tight">
  Luxury Short-Term Furnished Rentals in BC | LivingInStyle.ca
</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/properties" className="text-sm font-medium hover:text-primary">
            Find Properties
          </Link>

           <Link href="/about/living-in-style" className="text-sm font-medium hover:text-primary">
            About
          </Link>


          <Link href="/terms-of-service" className="text-sm font-medium hover:text-primary">
  Terms of Service
</Link>

          <Link href="/contact" className="text-sm font-medium hover:text-primary">
          Contact
          </Link>
        {/*}  <Link href="/how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <Link href="/list-property" className="text-sm font-medium hover:text-primary">
            List Your Property
          </Link> */}
        </nav>
{/*
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">Create Account</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/saved">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Saved Properties</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/messages">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Messages</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
*/}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

{isMenuOpen && (
  <div className="container md:hidden py-4 pb-6">
    <nav className="flex flex-col gap-4">
      <Link
        href="/properties"
        className="text-sm font-medium hover:text-primary"
        onClick={() => setIsMenuOpen(false)}
      >
        Find Properties
      </Link>

      <Link
        href="/about/living-in-style"
        className="text-sm font-medium hover:text-primary"
        onClick={() => setIsMenuOpen(false)}
      >
        About
      </Link>

      <Link
        href="/terms-of-service"
        className="text-sm font-medium hover:text-primary"
        onClick={() => setIsMenuOpen(false)}
      >
        Terms of Service
      </Link>

      <Link
        href="/contact"
        className="text-sm font-medium hover:text-primary"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </Link>
    </nav>
  </div>
)}
    </header>
  )
}
