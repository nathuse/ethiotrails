"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CulturalDiversityPage() {
  const router = useRouter()

  const cultures = [
    {
      title: "Tribal Communities of the Omo Valley",
      description: "Meet indigenous tribes like the Mursi, Hamar, and Karo peoples, each maintaining unique traditions, ceremonies, and ways of life passed down through generations.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764999561978.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Religious Festivals and Celebrations",
      description: "Experience vibrant festivals like Timkat (Epiphany) and Meskel (Finding of the True Cross), where ancient traditions come alive through colorful processions and ceremonies.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764999608709.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Traditional Music and Dance",
      description: "Discover the rich musical heritage of Ethiopia, from the hypnotic sounds of the masenqo to energetic shoulder-shaking eskista dance performances.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764999661657.png?width=1920&height=1080&resize=contain"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-green/20 to-ethiopian-red/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1600&q=80')] bg-cover bg-center opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Cultural Diversity of Ethiopia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the remarkable tapestry of cultures, with over 80 ethnic groups speaking more than 80 languages, each contributing unique traditions and heritage.
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
              Ethiopia is a mosaic of cultures, where ancient traditions and modern life coexist harmoniously. 
              With over 80 ethnic groups, each with their own language, customs, and traditions, Ethiopia offers 
              visitors a unique opportunity to witness the extraordinary diversity of human culture within a single nation.
            </p>
          </motion.div>

          {/* Cultures Grid */}
          <div className="space-y-24">
            {cultures.map((culture, index) => (
              <motion.div
                key={culture.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={culture.image}
                      alt={culture.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {culture.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {culture.description}
                  </p>
                  <Button 
                    className="mt-4"
                    style={{ backgroundColor: 'var(--ethiopian-green)' }}
                    onClick={() => router.push("/packages")}
                  >
                    Experience Culture
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