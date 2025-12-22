"use client"

import { motion } from "framer-motion"
import { ArrowLeft, TreePine, MapPin, Clock, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function WildlifePage() {
  const router = useRouter()
  const [showFloatingBack, setShowFloatingBack] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBack(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <Header />
      
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250820_233636_Photos-1765279412691.jpg?width=1920&height=1080&resize=contain"
            alt="Wildlife Safari"
            fill
            className="object-cover object-[center_70%]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>

        <button
          onClick={() => router.push("/packages")}
          className="absolute top-8 left-8 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all z-10"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Packages</span>
        </button>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Wildlife Safari
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Encounter Ethiopia's Unique Endemic Species
          </motion.p>
        </div>
      </section>

      {showFloatingBack && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => router.push("/packages")}
          className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg hover:shadow-xl rounded-full transition-all border border-white/10"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
          <span className="font-medium text-white">Back to Packages</span>
        </motion.button>
      )}

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ethiopian-red/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Package Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Ethiopia's wildlife is as unique as its culture, featuring an extraordinary number of endemic species found nowhere else on Earth. From the Ethiopian wolf—the world's rarest canid—to the charismatic Gelada baboon, our wildlife safaris offer rare opportunities to observe species that exist only in Ethiopia's diverse ecosystems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Unlike the classic African safari experience, Ethiopia's wildlife adventures take you through dramatically varied habitats: Afro-alpine highlands, montane forests, savanna plains, and wetlands. Each ecosystem hosts its own unique assemblage of animals, making every day of your wildlife journey a new discovery. Our expert naturalist guides ensure meaningful wildlife encounters while supporting conservation efforts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Tour Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Track endangered Ethiopian wolves in Bale Mountains",
                "Observe massive Gelada baboon troops in Simien Mountains",
                "Spot rare mountain nyala and Menelik's bushbuck",
                "Visit national parks and protected conservation areas",
                "Photography opportunities with expert wildlife guides",
                "Support community-based conservation initiatives",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ethiopian-red mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-8 h-8 mb-3 text-ethiopian-green" />
              <h3 className="font-semibold text-lg mb-2 text-white">Duration</h3>
              <p className="text-gray-400">5-12 days</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Users className="w-8 h-8 mb-3 text-ethiopian-yellow" />
              <h3 className="font-semibold text-lg mb-2 text-white">Group Size</h3>
              <p className="text-gray-400">2-8 participants</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-3 text-ethiopian-red" />
              <h3 className="font-semibold text-lg mb-2 text-white">Best Time</h3>
              <p className="text-gray-400">Year-round options</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Featured Wildlife</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Ethiopian Wolf",
                  description: "The world's rarest canid with fewer than 500 remaining, found only in Ethiopian highlands. Best seen in Bale Mountains."
                },
                {
                  title: "Gelada Baboon",
                  description: "Large primates known as 'bleeding heart' baboons, living in impressive troops of up to 600 individuals in the Simien Mountains."
                },
                {
                  title: "Mountain Nyala",
                  description: "Elegant endemic antelope found only in Ethiopian highlands, most reliably seen in Bale Mountains National Park."
                },
                {
                  title: "Walia Ibex",
                  description: "Critically endangered wild goat endemic to the Simien Mountains, with remarkable cliff-climbing abilities."
                },
              ].map((wildlife, index) => (
                <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-ethiopian-red/50 transition-all backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-white">{wildlife.title}</h3>
                  <p className="text-gray-300">{wildlife.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">What's Included</h2>
            <div className="space-y-3">
              {[
                "4WD safari vehicles with excellent viewing angles",
                "Accommodation in lodges and camps within/near parks",
                "All meals during the safari",
                "National park entrance fees and permits",
                "Conservation fee supporting local wildlife projects",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-ethiopian-red/20 flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-3 h-3 text-ethiopian-red" />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-ethiopian-red/10 to-ethiopian-green/10 border border-ethiopian-red/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Discover Ethiopia's Unique Wildlife?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to plan your wildlife safari. We'll help you choose the best parks and timing for your target species, whether endemic mammals or spectacular birds.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-ethiopian-red text-white rounded-full font-semibold hover:bg-ethiopian-red/90 transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
