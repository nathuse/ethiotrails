"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Mountain, Church, ArrowLeft, Banknote, FileText, Syringe, Shirt, Backpack, Sparkles, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Land of Origins",
    icon: MapPin,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/breathtaking-panoramic-view-of-ethiopian-1b0a257c-20251110185706.jpg",
    description: "Ethiopia, officially known as the Federal Democratic Republic of Ethiopia, is a landlocked country in the Horn of Africa. It is the second-most populous nation in Africa with over 120 million people, and the tenth-largest by area, covering 1,100,000 square kilometers. Ethiopia is a land of dramatic contrasts, from the highest peaks of the Simien Mountains to the lowest point in the Danakil Depression, one of the hottest places on Earth."
  },
  {
    title: "Ancient Civilization",
    icon: Church,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/obelisk-kingdom-Aksum-Ethiopian-name-city-1762803969647.webp?width=1920&height=1080&resize=contain",
    description: "Ethiopia is home to one of the world's oldest civilizations, with a documented history spanning over 3,000 years. The Kingdom of Aksum was one of the four great powers of the ancient world, alongside Rome, Persia, and China. Ethiopia was one of the first Christian nations, adopting Christianity in the 4th century AD. The country is dotted with ancient sites including the rock-hewn churches of Lalibela, the obelisks of Axum, and the medieval castles of Gondar."
  },
  {
    title: "Ethiopian Orthodox Christianity",
    icon: Church,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ethiopia_addis-ababa_silhouettes-1-e1505197403380-1762804541811.jpg?width=1920&height=1080&resize=contain",
    description: "The Ethiopian Orthodox Tewahedo Church is one of the oldest Christian denominations in the world, with roots dating back to the 4th century AD when Christianity was declared the state religion under King Ezana of Axum. The word 'Tewahedo' means 'being made one' in Ge'ez, the ancient Ethiopian language. The church maintains unique traditions including the use of the Ge'ez language in liturgy, distinctive religious art and iconography, sacred music performed with traditional instruments like the kebero drum and sistrum, and elaborate ceremonial practices."
  },
  {
    title: "Stunning Landscapes",
    icon: Mountain,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/monkeys-Gelada-Simien-Mountains-National-Park-Ethiopia-1765629668215.jpg?width=1920&height=1080&resize=contain",
    description: "Ethiopia's diverse geography includes the Ethiopian Highlands, the Rift Valley, and vast lowland regions. The Simien Mountains, a UNESCO World Heritage site, feature dramatic cliffs and unique wildlife including the Gelada baboon. The Great Rift Valley runs through the country, creating a chain of beautiful lakes. The Blue Nile originates from Lake Tana, providing 85% of the Nile's water. From lush highlands to arid deserts, Ethiopia's landscapes are breathtaking."
  },
  {
    title: "Rich Cultural Heritage",
    icon: Users,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/vibrant-ethiopian-cultural-celebration-p-06762e5b-20251110185659.jpg",
    description: "Ethiopia is a mosaic of over 80 ethnic groups, each with its own language, culture, and traditions. The country has never been colonized, preserving its unique cultural identity. Ethiopian music, featuring the distinctive pentatonic scale, and traditional dances are captivating. The cuisine, centered around injera (a sourdough flatbread) and spicy stews called 'wat', is unique and flavorful. Traditional clothing varies by region, with the white cotton 'netela' being widely recognized."
  }
];

const needToKnowItems = [
  {
    icon: Banknote,
    title: "Currency",
    description: "The local currency is the Ethiopian Birr (ETB). ATMs are available in major cities, and credit cards are accepted in larger hotels and restaurants.",
    color: "var(--ethiopian-green)",
    badge: null
  },
  {
    icon: FileText,
    title: "Visa Requirements",
    description: "Tourists visiting Ethiopia need a Visa. The easiest option for many is the e-Visa, available online for most nationalities.",
    color: "var(--ethiopian-yellow)",
    badge: null
  },
  {
    icon: null,
    title: "Language",
    description: "Amharic is Ethiopia's official language, but English is widely spoken in tourist areas, hotels, and by guides.",
    color: "var(--ethiopian-red)",
    badge: "አ"
  },
  {
    icon: Shirt,
    title: "Dress Code",
    description: "Women are encouraged to pack a scarf to cover their hair in churches and mosques to maintain a respectful environment amongst worshippers.",
    color: "var(--ethiopian-yellow)",
    badge: null
  },
  {
    icon: Church,
    title: "Cultural & Religious Diversity",
    description: "Ethiopia is home to diverse cultures and religions: Ethiopian Orthodox Christianity, Islam, and some Indigenous traditions too!",
    color: "var(--ethiopian-red)",
    badge: null
  }
];

const packingList = [
  "Footwear: Good walking shoes with ankle support",
  "Day pack",
  "Light jacket",
  "Walking stick",
  "Sunglasses",
  "Sunscreen",
  "Torch/Flashlight",
  "Insect repellent spray",
  "Sun hat"
];

const stats = [
  { value: "3,000+", label: "Years of History", href: "/history" },
  { value: "80+", label: "Ethnic Groups", href: "/cultural-diversity" },
  { value: "9", label: "UNESCO Sites", href: "/ancient-heritage" },
  { value: "120M+", label: "Population", href: "/natural-wonders" }
];

export default function AboutEthiopiaPage() {
  const [showBackButton, setShowBackButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 300) {
        setShowBackButton(true);
      } else {
        setShowBackButton(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--ethiopian-green)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ethiopian-yellow)]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[var(--ethiopian-red)]/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20220525-093226_Facebook-1765629620786.jpg?width=1920&height=1080&resize=contain)',
            backgroundPosition: 'center 40%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--ethiopian-yellow)]/30 to-transparent" />
        <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--ethiopian-green)]/20 to-transparent" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center pt-32">
          <Link href="/">
            <Button variant="ghost" className="mb-10 w-fit hover:bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
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
              <div className="w-16 h-0.5 bg-[var(--ethiopian-yellow)]" />
              <span className="text-[var(--ethiopian-yellow)] font-medium tracking-[0.2em] uppercase text-sm">
                Land of Origins
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
            >
              Discover
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopian-green)] via-[var(--ethiopian-yellow)] to-[var(--ethiopian-red)]">
                Ethiopia
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed"
            >
              A land of ancient civilizations, stunning landscapes, and rich cultural heritage
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
            <div className="w-1 h-2 rounded-full bg-[var(--ethiopian-yellow)]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Banner */}
      <section className="relative py-16 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={stat.href} className="group block text-center">
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopian-green)] via-[var(--ethiopian-yellow)] to-[var(--ethiopian-red)] mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 group-hover:text-white/90 transition-colors">
                    {stat.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-32">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isReverse = index % 2 === 1;

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative group ${isReverse ? 'lg:col-start-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--ethiopian-green)]/20 to-[var(--ethiopian-yellow)]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                      <div className="aspect-[4/3]">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
                      <Icon className="w-5 h-5 text-[var(--ethiopian-yellow)]" />
                      <span className="text-sm font-medium text-white/80">{section.title}</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                      {section.title}
                    </h2>
                    
                    <p className="text-lg text-white/60 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need to Know Section */}
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
              <Sparkles className="w-5 h-5 text-[var(--ethiopian-yellow)]" />
              <span className="text-[var(--ethiopian-yellow)] font-medium tracking-wider uppercase text-xs">Essential Info</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Need to Know
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Essential information for your Ethiopian adventure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {needToKnowItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                  <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-300">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      {item.badge ? (
                        <span className="text-2xl font-bold" style={{ color: item.color }}>{item.badge}</span>
                      ) : (
                        Icon && <Icon className="w-6 h-6" style={{ color: item.color }} />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Packing List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--ethiopian-green)]/10 via-[var(--ethiopian-yellow)]/5 to-[var(--ethiopian-red)]/10 rounded-3xl blur-xl" />
              <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--ethiopian-green)]/20 flex items-center justify-center">
                    <Backpack className="w-7 h-7 text-[var(--ethiopian-green)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Good to Have</h3>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {packingList.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--ethiopian-green)] to-[var(--ethiopian-yellow)]" />
                      <span className="text-sm text-white/70">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--ethiopian-green)]/10 via-[var(--ethiopian-yellow)]/5 to-[var(--ethiopian-red)]/10 rounded-[2.5rem] blur-xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-[2rem] p-12 sm:p-16 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[var(--ethiopian-yellow)] to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--ethiopian-green)]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--ethiopian-yellow)]/10 rounded-full blur-3xl" />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--ethiopian-yellow)]/10 mb-8">
                  <Globe className="w-8 h-8 text-[var(--ethiopian-yellow)]" />
                </div>
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Explore Ethiopia?
              </h3>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Let us help you plan your perfect Ethiopian adventure
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/packages">
                  <Button size="lg" className="bg-[var(--ethiopian-green)] hover:bg-[var(--ethiopian-green)]/90 text-white font-semibold px-8">
                    View Tours
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}