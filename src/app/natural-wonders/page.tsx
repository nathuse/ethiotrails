"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function NaturalWondersPage() {
  const router = useRouter()

  const attractions = [
    {
      title: "Simien Mountains",
      description: "A UNESCO World Heritage Site featuring dramatic peaks, deep valleys, and unique wildlife including the Gelada baboons and Ethiopian wolf.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764846696729.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Danakil Depression",
      description: "One of the hottest places on Earth, featuring colorful sulfur springs, salt flats, and active volcanoes creating an otherworldly landscape.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764846757353.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Blue Nile Falls",
      description: "Known locally as 'Tis Issat' (smoking water), this spectacular waterfall spans over 400 meters during the rainy season.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764846803539.png?width=1920&height=1080&resize=contain"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-green/20 to-ethiopian-yellow/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600&q=80')] bg-cover bg-center opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Natural Wonders of Ethiopia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover breathtaking landscapes, from towering mountain peaks to volcanic depression, showcasing nature's most spectacular creations.
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
              Ethiopia is home to some of the most dramatic and diverse landscapes on the African continent. 
              From the jagged peaks of the Simien Mountains to the otherworldly terrain of the Danakil Depression, 
              the country offers natural wonders that captivate and inspire visitors from around the world.
            </p>
          </motion.div>

          {/* Attractions Grid */}
          <div className="space-y-24">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={attraction.image}
                      alt={attraction.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4 w-full">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {attraction.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {attraction.description}
                  </p>
                  <Button 
                    className="mt-4"
                    style={{ backgroundColor: 'var(--ethiopian-green)' }}
                    onClick={() => router.push("/about-ethiopia")}
                  >
                    Plan Your Visit
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