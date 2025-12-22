"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Sparkles, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import CalendarConverter from "@/components/CalendarConverter"
import { useState, useEffect } from "react"

export default function UniqueCalendarPage() {
  const router = useRouter()
  const [showBackButton, setShowBackButton] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY && currentScrollY > 300) {
        setShowBackButton(true)
      } else {
        setShowBackButton(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const features = [
    {
      title: "13 Months of Sunshine",
      description: "Ethiopia follows a unique calendar with 13 months - 12 months of 30 days each, plus a 13th month of 5 or 6 days. This ancient system creates a perpetual calendar that never changes.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765000076971.png?width=1920&height=1080&resize=contain",
      icon: Sun
    },
    {
      title: "Seven to Eight Years Behind",
      description: "The Ethiopian calendar is approximately 7-8 years behind the Gregorian calendar, meaning when it's 2024 elsewhere, it's around 2016-2017 in Ethiopia.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765000191265.png?width=1920&height=1080&resize=contain",
      icon: Calendar
    },
    {
      title: "Unique Timekeeping System",
      description: "Experience Ethiopia's distinctive time system where the 12-hour clock starts at sunrise (around 6 AM), making 7 AM 'one o'clock' in Ethiopian time.",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80",
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Header />

      {/* Floating Back Button */}
      <Link href="/">
        <Button
          className={`fixed top-24 left-4 z-50 bg-[var(--ethiopian-green)] hover:bg-[var(--ethiopian-green)]/90 text-white shadow-lg transition-all duration-300 ${
            showBackButton ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/8 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[var(--ethiopian-yellow)]/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765203935824.png?width=1920&height=1080&resize=contain"
            alt="Ethiopian Calendar"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center pt-32">
          <Link href="/about-ethiopia">
            <Button variant="ghost" className="mb-10 w-fit hover:bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Discover Ethiopia
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-16 h-0.5 bg-indigo-500" />
              <span className="text-indigo-400 font-medium tracking-[0.2em] uppercase text-sm">
                Ancient Timekeeping
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ethiopia&apos;s
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-500">
                Unique Calendar
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed"
            >
              Discover the fascinating calendar system with 13 months and a different year count that sets Ethiopia apart
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-indigo-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Calendar Converter Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-medium tracking-wider uppercase text-xs">Interactive Tool</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ethiopian Calendar <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Converter</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              See today&apos;s date in both calendars and convert any Gregorian date to its Ethiopian equivalent
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 rounded-3xl" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              <div className="relative">
                <CalendarConverter />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Is It Different */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Moon className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-400 font-medium tracking-wider uppercase text-xs">The Origins</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Why Is It Different?
              </h2>
            </div>

            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-indigo-500/50 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-indigo-500/50 rounded-br-lg" />
              
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Ethiopia proudly maintains its own ancient calendar system, one of the few countries in the world to do so. Based on the ancient Coptic calendar, the Ethiopian calendar offers a unique perspective on time, featuring 13 months and a year count that differs from the Gregorian calendar used in most of the world.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                The difference in year count stems from an alternative calculation of the Annunciation of Jesus. While the Gregorian calendar places this event in one year, the Ethiopian Orthodox Church&apos;s calculation places it 7-8 years later, resulting in Ethiopia being behind the Gregorian calendar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-medium tracking-wider uppercase text-xs">Key Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Makes It Unique
            </h2>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative h-[400px] rounded-3xl overflow-hidden group">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                    <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-indigo-500/30 transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
                          <feature.icon className="w-7 h-7 text-indigo-400" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-lg text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-purple-500/10 rounded-[2.5rem] blur-xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-[2rem] p-12 sm:p-16 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl" />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 mb-8">
                  <Calendar className="w-8 h-8 text-indigo-400" />
                </div>
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Experience Time Differently
              </h3>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Explore Ethiopia and experience a land where time truly moves at its own pace
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-indigo-500 hover:bg-indigo-500/90 text-white font-semibold px-8"
                  onClick={() => router.push("/contact")}
                >
                  Plan Your Visit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => router.push("/about-ethiopia")}
                >
                  Discover More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}