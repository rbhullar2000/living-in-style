import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Living In Style | Short-Term Furnished Rentals BC',
  description: 'Discover premium short-term furnished rentals across British Columbia with Living In Style. Ideal for business travelers, relocations, and extended stays.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
