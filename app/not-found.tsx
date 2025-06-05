import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md text-center">
          <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Property Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the property you're looking for. It may have been removed or the link is incorrect.
          </p>
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/properties">Browse All Properties</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
