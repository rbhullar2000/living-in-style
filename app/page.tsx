import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeaturedProperties } from "@/components/featured-properties"
import { HeroSection } from "@/components/hero-section"
import { PopularLocations } from "@/components/popular-locations"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our handpicked selection of premium furnished properties available for rent.
            </p>
          </div>
          <FeaturedProperties />
          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/properties">View Properties</Link>
            </Button>
          </div>
        </section>

{/*}        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Popular Locations</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore furnished properties in these trending destinations.
              </p>
            </div>
            <PopularLocations />      
          </div>   
        </section>*/}

        <section className="container py-12 md:py-16 lg:py-20">
          <HowItWorks />
        </section>
      </main>
      <Footer />
    </div>
  )
}
