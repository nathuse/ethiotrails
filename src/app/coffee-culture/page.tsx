"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CoffeeCulturePage() {
  const router = useRouter()

  const experiences = [
    {
      title: "Traditional Coffee Ceremony",
      description: "Experience the sacred Ethiopian coffee ceremony, a cultural ritual that brings communities together through the roasting, grinding, and brewing of fresh coffee beans.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764848710682.png?width=1920&height=1080&resize=contain"
    },
    {
      title: "Coffee Origin Tours",
      description: "Visit the birthplace of Arabica coffee in the lush highlands of Kaffa and Sidamo, where wild coffee still grows in ancient forests.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
    },
    {
      title: "Organic Coffee Farms",
      description: "Explore sustainable coffee farms where traditional cultivation methods preserve both quality and the environment, producing world-renowned Ethiopian beans.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764848750297.png?width=1920&height=1080&resize=contain"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-yellow/20 to-ethiopian-green/20" />
        <div className="absolute inset-0 bg-[url('https://images.sbs.com.au/dims4/default/2182227/2147483647/strip/true/crop/1200x675+0+113/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Ffood%2Fpublic%2Fethiopian-coffee-lead.jpg')] bg-cover bg-center opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ethiopian Coffee Culture
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the birthplace of coffee and immerse yourself in centuries-old traditions that have shaped the world's love affair with this beloved beverage.
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
              Ethiopia is recognized as the birthplace of coffee, where the Arabica coffee plant was first discovered centuries ago. 
              Today, coffee remains deeply woven into Ethiopian culture through the traditional coffee ceremony, a social event that 
              symbolizes hospitality, friendship, and respect. Join us to experience authentic coffee culture where it all began.
            </p>
          </motion.div>

          {/* Experiences Grid */}
          <div className="space-y-24">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {experience.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                  <Button 
                    className="mt-4"
                    style={{ backgroundColor: 'var(--ethiopian-yellow)', color: 'var(--foreground)' }}
                    onClick={() => router.push("/about-ethiopia")}
                  >
                    Book Experience
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