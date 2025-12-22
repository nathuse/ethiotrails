import Link from "next/link"
import { Home, Search, Map } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Ethiopian Pattern Decoration */}
        <div className="mb-8 relative">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ethiopian-green via-ethiopian-yellow to-ethiopian-red">
            404
          </div>
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
            <div className="w-32 h-32 bg-ethiopian-green rounded-full absolute top-0 left-1/4"></div>
            <div className="w-32 h-32 bg-ethiopian-yellow rounded-full absolute top-0 right-1/4"></div>
            <div className="w-32 h-32 bg-ethiopian-red rounded-full absolute bottom-0 left-1/2"></div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Looks like you've wandered off the beaten path. Let's get you back to exploring Ethiopia!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ethiopian-green text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ethiopian-green text-ethiopian-green rounded-lg hover:bg-ethiopian-green hover:text-white transition-colors font-medium"
          >
            <Map className="w-5 h-5" />
            View Tour Packages
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Popular Pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about-ethiopia" className="text-sm hover:text-ethiopian-green transition-colors">
              About Ethiopia
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/culture" className="text-sm hover:text-ethiopian-green transition-colors">
              Culture
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/travel-guide" className="text-sm hover:text-ethiopian-green transition-colors">
              Travel Guide
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/contact" className="text-sm hover:text-ethiopian-green transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
