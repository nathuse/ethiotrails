"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Binoculars, MapPin, Clock, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BirdWatchingPage() {
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
      
      <section 
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG-20250812-WA0008-1765632714716.jpg?width=1920&height=1080&resize=contain)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <button
          onClick={() => router.push("/packages")}
          className="absolute top-8 left-8 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all"
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
            Bird Watching
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Discover Ethiopia's Rich Avian Diversity
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ethiopian-green/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Package Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Ethiopia is a paradise for bird watchers, home to over 860 species of birds, with more than 20 endemic species found nowhere else on Earth. Our bird watching tours take you through diverse habitats from highland plateaus to lowland savannas, offering unique opportunities to spot rare and spectacular species.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're an experienced ornithologist or a casual nature lover, Ethiopia's incredible avian diversity will captivate you. From the majestic Blue-winged Goose to the colorful White-cheeked Turaco, each day brings new discoveries in this ornithological treasure trove.
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
                "Spot endemic species like Ethiopian Siskin and Wattled Ibis",
                "Visit diverse habitats from mountains to lakes",
                "Expert local guides with extensive bird knowledge",
                "Prime locations including Bale Mountains and Rift Valley",
                "Photography opportunities with stunning landscapes",
                "Small group sizes for optimal viewing experience",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ethiopian-green mt-2 flex-shrink-0"></div>
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
              <p className="text-gray-400">5-14 days available</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Users className="w-8 h-8 mb-3 text-ethiopian-yellow" />
              <h3 className="font-semibold text-lg mb-2 text-white">Group Size</h3>
              <p className="text-gray-400">2-8 participants</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-3 text-ethiopian-red" />
              <h3 className="font-semibold text-lg mb-2 text-white">Best Season</h3>
              <p className="text-gray-400">September to February</p>
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
                "Professional bird guide with extensive local knowledge",
                "Transportation in comfortable 4WD vehicles",
                "Accommodation in lodges, Resorts, Hotels and camps",
                "All meals during the tour",
                "Park entrance fees and permits",
                "Bird checklist and field guide",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-ethiopian-green/20 flex items-center justify-center flex-shrink-0">
                    <Binoculars className="w-3 h-3 text-ethiopian-green" />
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
            className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-ethiopian-green/10 to-ethiopian-yellow/10 border border-ethiopian-green/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Bird Watching Adventure?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to customize your bird watching experience or get more information about specific itineraries and departure dates.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-ethiopian-green text-white rounded-full font-semibold hover:bg-ethiopian-green/90 transition-colors"
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