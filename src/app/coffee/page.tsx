"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Coffee, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CoffeePage() {
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

  const ceremonySteps = [
    {
      number: "01",
      title: "Setting the Stage",
      description: "The ceremony typically begins by preparing a space dedicated to the ritual. Fresh green leaves, grass, or flowers are spread on the floor to symbolize purity and a warm welcome. A small charcoal stove is placed nearby, along with traditional coffee tools, cups, and incense. A special black clay pot, called a jebena, is the heart of the ceremony.",
      icon: "🌿"
    },
    {
      number: "02",
      title: "Washing & Selecting the Beans",
      description: "The ceremony starts with a bowl of raw, green coffee beans. The host — often traditionally a woman, dressed in white cotton attire — carefully cleans and sorts the beans, removing any impurities. This step reflects respect for the guests; every bean must be chosen with intention.",
      icon: "🌱"
    },
    {
      number: "03",
      title: "Roasting the Beans",
      description: "The beans are placed in a flat pan called a menkeshkesh and roasted over hot charcoal. As they begin to heat, the host continuously moves them around so they roast evenly. The beans slowly change color from green to light brown, then to a deep glossy black. Once the beans reach their peak roast, the host will wave the smoking pan toward the guests, inviting them to inhale the rich, fresh aroma — a symbolic blessing and the most unforgettable moment of the ceremony.",
      icon: "🔥"
    },
    {
      number: "04",
      title: "Grinding the Roasted Beans",
      description: "After roasting, the beans are allowed to cool slightly. They are then pounded by hand using a traditional mortar and pestle called mukecha and zenezena. Unlike electric grinders, hand grinding preserves aromatic oils and creates a coarse, natural texture. You'll hear a rhythmic, wooden tapping sound — a familiar soundtrack in Ethiopian homes during coffee time.",
      icon: "⚱️"
    },
    {
      number: "05",
      title: "Brewing in the Jebena",
      description: "The freshly ground coffee is poured into the jebena along with clean water. The pot is then placed back over hot charcoal and slowly brought to a boil. No rushing — this process takes patience. When steam begins to swirl from the neck of the jebena, the coffee is gently removed from the fire and allowed to settle. This slow brewing method creates a cup that is bold, earthy, and full-bodied.",
      icon: "🫖"
    },
    {
      number: "06",
      title: "Burning Incense",
      description: "During brewing, frankincense or traditional incense is burned beside the coffee area. The sweet smoke purifies the air and sets a calm, welcoming atmosphere. The ceremony becomes more than a drink — it becomes a sensory experience of sight, smell, sound, and taste.",
      icon: "🌫️"
    },
    {
      number: "07",
      title: "Serving the Coffee",
      description: "The brewed coffee is poured smoothly from the jebena into small handle-less cups called sini. A skilled host can pour from high above without spilling, keeping the grounds at the bottom of the pot. Sugar is common in most regions, niter kibbeh (spiced butter) is added in some communities, and salt is used in parts of Ethiopia's countryside. Snacks may include popcorn, traditional bread (difo dabo), or roasted barley (kolo).",
      icon: "🥣"
    },
    {
      number: "08",
      title: "Three Rounds of Coffee",
      description: "Traditionally, coffee is never served just once. It is prepared in three rounds, each with its own meaning: Awol – The first round, strongest and richest; Tona – The second round, slightly milder; Baraka – The third round, 'the blessing'. Guests are encouraged to stay for all three stages, which symbolize friendship, respect, and community unity.",
      icon: "☕☕☕"
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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600/8 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ethiopian-yellow)]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-orange-900/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/coffeeculture_bodyimage_2-1762797898309.jpg?width=1920&height=1080&resize=contain"
            alt="Ethiopian Coffee"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--ethiopian-yellow)]/20 to-transparent" />
        
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
              <div className="w-16 h-0.5 bg-amber-500" />
              <span className="text-amber-500 font-medium tracking-[0.2em] uppercase text-sm">
                The Birthplace of Coffee
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ethiopian
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[var(--ethiopian-yellow)] to-amber-600">
                Coffee Culture
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed"
            >
              Journey through the legendary discovery of coffee and experience the traditional Ethiopian coffee ceremony
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
            <div className="w-1 h-2 rounded-full bg-amber-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Origin Story Section */}
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
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-amber-500 font-medium tracking-wider uppercase text-xs">The Legend</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The Legend of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Kaldi</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-3xl overflow-hidden group"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765210672183.png?width=1920&height=1080&resize=contain"
                alt="Legend of Kaldi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/50 rounded-tl-lg" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/50 rounded-br-lg" />
                
                <p className="text-lg text-white/70 leading-relaxed mb-4">
                  The story begins in the ancient coffee forests of Ethiopia, where a goat herder named Kaldi noticed his goats dancing with unusual energy after eating bright red berries from a particular tree.
                </p>
                <p className="text-lg text-white/70 leading-relaxed mb-4">
                  Curious about this discovery, Kaldi brought the berries to a local monastery. The monks initially disapproved and threw the berries into the fire. But the aroma that arose was so enticing that they retrieved the roasted beans, ground them, and mixed them with hot water.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  This created the world&apos;s first cup of coffee. From these highlands of Ethiopia, coffee spread across the Arabian Peninsula and eventually to the entire world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coffee Ceremony Overview */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="w-5 h-5 text-amber-500" />
              <span className="text-amber-500 font-medium tracking-wider uppercase text-xs">Sacred Ritual</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ethiopian Traditional Coffee Ceremony
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              The Ethiopian coffee ceremony is more than a drink — it is a ritual of hospitality, community, and tradition that has been passed down for centuries. Known locally as &quot;Bunna&quot;, this ceremony can last <strong className="text-white">1 to 2 hours</strong>.
            </p>
          </motion.div>

          {/* Cultural Meaning Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="relative bg-gradient-to-br from-amber-500/10 via-white/5 to-orange-900/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-3xl blur-xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                    <Users className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Cultural Meaning</h3>
                </div>
                <p className="text-white/70 mb-6">The Ethiopian coffee ceremony is not just about drinking coffee — it is about:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { text: "Conversation and connection between family and neighbors", color: "amber-500" },
                    { text: "Hospitality and warmth toward guests", color: "ethiopian-green" },
                    { text: "Respect for traditions passed through generations", color: "ethiopian-red" },
                    { text: "Community unity and shared experiences", color: "ethiopian-yellow" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className={`w-2 h-2 rounded-full bg-${item.color} mt-2 flex-shrink-0`} style={{ backgroundColor: idx === 0 ? '#f59e0b' : idx === 1 ? 'var(--ethiopian-green)' : idx === 2 ? 'var(--ethiopian-red)' : 'var(--ethiopian-yellow)' }} />
                      <span className="text-sm text-white/60">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ceremony Steps */}
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
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-amber-500 font-medium tracking-wider uppercase text-xs">Step by Step</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The Ceremony Process
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Experience the authentic Ethiopian coffee ceremony through these time-honored steps
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {ceremonySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:border-amber-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 flex-shrink-0">
                        <span className="text-xl font-bold text-black">{step.number}</span>
                      </div>
                      <div className="text-4xl">{step.icon}</div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
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
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-amber-500 font-medium tracking-wider uppercase text-xs">For Visitors</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Why It Matters
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Authentic cultural experience",
                "A taste of the world's origin coffee",
                "Deep insight into Ethiopian hospitality",
                "Connection with local communities"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center text-white/60 mt-10 text-lg"
            >
              Many lodges, cultural restaurants, tour companies, and local families offer live ceremonies for travelers. This is your opportunity to experience coffee where it all began.
            </motion.p>
          </motion.div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-[var(--ethiopian-yellow)]/5 to-orange-900/10 rounded-[2.5rem] blur-xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-[2rem] p-12 sm:p-16 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--ethiopian-yellow)]/10 rounded-full blur-3xl" />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 mb-8">
                  <Coffee className="w-8 h-8 text-amber-500" />
                </div>
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Experience the Coffee Ceremony
              </h3>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Join us for an authentic Ethiopian coffee ceremony and taste the original flavors that started it all
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-500/90 text-black font-semibold px-8"
                  onClick={() => router.push("/contact")}
                >
                  Book a Tour
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => router.push("/packages/cultural-route")}
                >
                  Explore Cultural Experiences
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