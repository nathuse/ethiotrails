"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function ArtCraftsPage() {
  const router = useRouter()

  const crafts = [
    {
      title: "Traditional Weaving and Textiles",
      description: "Discover intricate handwoven fabrics including the iconic white shamma with colorful borders, created using ancient techniques passed down through generations.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764999794249.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Ethiopian Religious Art",
      description: "Admire unique religious paintings and manuscripts featuring vibrant colors and distinctive Ethiopian artistic styles dating back to medieval times.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765202312507.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Handcrafted Jewelry and Metalwork",
      description: "Explore traditional silver crosses, beaded jewelry, and intricate metalwork created by skilled artisans using time-honored techniques.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764999897587.png?width=1920&height=1080&resize=contain"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-yellow/20 to-ethiopian-red/20" />
        <div className="absolute inset-0 bg-[url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765202239576.png?width=1920&height=1080&resize=contain')] bg-cover bg-center opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ethiopian Art & Crafts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in vibrant traditional art, exquisite textiles, and handcrafted treasures that reflect centuries of artistic excellence and cultural heritage.
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
              Ethiopian art and crafts represent a rich tradition of creativity and skill passed down through countless generations. 
              From vibrant handwoven textiles to intricate religious artwork and stunning jewelry, each piece tells a story of cultural 
              heritage, spiritual devotion, and artistic mastery that continues to thrive in modern Ethiopia.
            </p>
          </motion.div>

          {/* Crafts Grid */}
          <div className="space-y-24">
            {crafts.map((craft, index) => (
              <motion.div
                key={craft.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={craft.image}
                      alt={craft.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {craft.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {craft.description}
                  </p>
                  <Button 
                    className="mt-4"
                    style={{ backgroundColor: 'var(--ethiopian-yellow)', color: 'var(--foreground)' }}
                    onClick={() => router.push("/about-ethiopia")}
                  >
                    View Collection
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