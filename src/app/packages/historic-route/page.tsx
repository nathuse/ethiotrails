"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Landmark, MapPin, Clock, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HistoricRoutePage() {
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
          backgroundImage: "url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250825228.png?width=1920&height=1080&resize=contain)",
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
            Historic Route
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Journey Through 3,000 Years of Civilization
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
              The Historic Route takes you on an unforgettable journey through Ethiopia's most significant ancient sites, spanning over 3,000 years of continuous civilization. This comprehensive tour visits the country's most treasured UNESCO World Heritage sites and reveals the fascinating stories of emperors, saints, and ancient kingdoms that shaped Ethiopian history.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the towering stelae of Axum to the rock-hewn churches of Lalibela and the medieval castles of Gondar, you'll experience the architectural marvels and spiritual depth that make Ethiopia one of the world's most historically rich destinations. This route is perfect for history enthusiasts and cultural explorers seeking to understand the roots of one of Africa's most ancient civilizations.
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
                "Visit Lalibela's 11 rock-hewn churches, carved from solid rock",
                "Explore ancient Axum, legendary home of the Ark of the Covenant",
                "Discover Gondar's 17th-century royal castles and palaces",
                "Experience Bahir Dar and the Blue Nile Falls",
                "Tour ancient monasteries on Lake Tana's islands",
                "Learn from expert historians and local guides",
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
              <p className="text-gray-400">7-12 days</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Users className="w-8 h-8 mb-3 text-ethiopian-yellow" />
              <h3 className="font-semibold text-lg mb-2 text-white">Group Size</h3>
              <p className="text-gray-400">4-12 travelers</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-3 text-ethiopian-red" />
              <h3 className="font-semibold text-lg mb-2 text-white">Difficulty</h3>
              <p className="text-gray-400">Easy to Moderate</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Key Destinations</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Lalibela - The New Jerusalem",
                  description: "Marvel at 11 medieval rock-hewn churches carved into living rock, including the iconic St. George's Church"
                },
                {
                  title: "Axum - Cradle of Ethiopian Civilization",
                  description: "Explore towering granite obelisks, ancient tombs, and the legendary chapel claiming to house the Ark of the Covenant"
                },
                {
                  title: "Gondar - The Camelot of Africa",
                  description: "Tour the Royal Enclosure with its medieval castles, Fasilides Bath, and beautifully frescoed Debre Berhan Selassie Church"
                },
                {
                  title: "Bahir Dar & Lake Tana",
                  description: "Visit ancient island monasteries adorned with stunning murals and witness the majestic Blue Nile Falls"
                },
              ].map((destination, index) => (
                <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-ethiopian-red/50 transition-all backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-white">{destination.title}</h3>
                  <p className="text-gray-300">{destination.description}</p>
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
                "Domestic flights between major historic sites",
                "Comfortable accommodation in quality hotels",
                "All meals (breakfast, lunch, and dinner)",
                "Expert historian guide throughout the journey",
                "All entrance fees and site permits",
                "Ground transportation in modern vehicles",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-ethiopian-red/20 flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-3 h-3 text-ethiopian-red" />
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
            className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-ethiopian-red/10 to-ethiopian-yellow/10 border border-ethiopian-red/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Explore Ethiopia's Historic Route?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to plan your journey through time. We offer customizable itineraries and can arrange private or group tours based on your preferences.
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
