import { PropertyFilters } from "@/components/property-filters"
import { PropertyGrid } from "@/components/property-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Find Properties | Living In Style",
  description: "Browse all available furnished rental properties in British Columbia",
}

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-8">Find Your Perfect Furnished Property</h1>
          <PropertyFilters />
          <PropertyGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
