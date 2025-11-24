import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Furnished Stay</h3>
            <p className="text-sm text-muted-foreground mb-4">
              
            </p>
          {/*}  <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/living-in-style" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            {/*}  <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
{/*}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-foreground">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-muted-foreground hover:text-foreground">
                  Cancellation Options
                </Link>
              </li>
              <li>
                <Link href="/covid" className="text-muted-foreground hover:text-foreground">
                  COVID-19 Response
                </Link>
              </li>
            </ul>
          </div>
*/}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
             {/*} <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li> */}
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
             {/*} <li>
                <Link href="/sitemap" className="text-muted-foreground hover:text-foreground">
                  Sitemap
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

<div className="flex justify-right items-center gap-8 mb-8">
    <Image
      src="/LISlogo_black.png"
      alt="Living In Style Logo"
      width={180}
      height={50}
    />
    <Image
      src="/ccglogo_black.png"
      alt="Caprock Capital Group Logo"
      width={180}
      height={50}
    />
  </div>

        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Caprock Capital Group Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
