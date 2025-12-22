"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AncientHeritagePage() {
  const router = useRouter()

  const sites = [
    {
      title: "Rock-Hewn Churches of Lalibela",
      description: "Marvel at 11 monolithic churches carved from solid rock in the 12th century, a UNESCO World Heritage Site and one of the world's most remarkable architectural achievements.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764849342494.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Ancient City of Axum",
      description: "Explore the ruins of the ancient Aksumite Empire, home to towering obelisks, ancient tombs, and the legendary Church of Our Lady Mary of Zion.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764849414311.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Gondar's Royal Castles",
      description: "Visit the 'Camelot of Africa' featuring 17th-century royal castles and palaces that showcase a unique blend of European, Arab, and Indian architectural influences.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764849468295.png?width=1920&height=1080&resize=contain"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-red/20 to-ethiopian-green/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1600&q=80')] bg-cover bg-center opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ancient Heritage of Ethiopia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through millennia of history, from ancient kingdoms to rock-hewn churches, uncovering the rich heritage of one of the world's oldest civilizations.
          </p>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="outline"
          onClick={() => router.push("/about-ethiopia")}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Discover Ethiopia
        </Button>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-4xl mx-auto mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ethiopia boasts over 3,000 years of documented history, making it one of the oldest nations in the world. 
              From the legendary Queen of Sheba to the powerful Aksumite Empire, and from medieval rock-hewn churches to royal 
              castles, Ethiopia's ancient heritage offers a fascinating glimpse into human civilization's remarkable achievements.
            </p>
          </motion.div>

          {/* Sites Grid */}
          <div className="space-y-24">
            {sites.map((site, index) => (
              <motion.div
                key={site.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={site.image}
                      alt={site.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {site.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {site.description}
                  </p>
                  <Button 
                    className="mt-4"
                    style={{ backgroundColor: 'var(--ethiopian-red)' }}
                    onClick={() => router.push("/about-ethiopia")}
                  >
                    Explore History
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}