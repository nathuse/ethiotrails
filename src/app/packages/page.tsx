"use client";

import { motion } from "framer-motion";
import { Binoculars, Calendar, Landmark, Mountain, Users, TreePine, ArrowLeft, Map, Clock, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const whatsIncluded = [
  "Accommodation",
  "All meals",
  "Transportation 4x4 vehicles and Domestic flights",
  "All Entrance fee",
  "Guide or Driver Guide service",
  "Photography fee",
  "Bottles of water",
  "All government taxes"
];

const whatsNotIncluded = [
  "International flight",
  "Alcohol & Beverage",
  "Tourist Insurance",
  "Tips, Gratitude & Souvenirs",
  "Personal Expenses"
];

const birdingTours = [
  {
    title: "1-Day Birding Tour",
    subtitle: "Sululta Plains, Portuguese Bridge & Debre Libanos Forest",
    duration: "Full day (approx. 7:00 AM – 5:00 PM)",
    description: "Experience Ethiopia's incredible birdlife in just one day! This guided birding tour takes you through three exceptional habitats—open highland plains, dramatic gorge landscapes, and lush forest.",
    highlights: [
      "Blue-winged Goose",
      "Wattled Ibis",
      "Abyssinian Longclaw",
      "White-cheeked Turaco",
      "Tacazze Sunbird",
      "African Black Duck"
    ],
    itinerary: [
      {
        title: "Early Morning Departure",
        description: "Your day begins with a morning drive to the Sululta Plains, a rich highland grassland known for its abundance of birdlife."
      },
      {
        title: "Portuguese Bridge & Jemma Valley Views",
        description: "Continue to the historic Portuguese Bridge area, where dramatic cliffs and river valleys provide ideal habitats for raptors and cliff-loving species."
      },
      {
        title: "Debre Libanos Forest Exploration",
        description: "The tour concludes with a walk through the Debre Libanos Forest, one of the best places near Addis Ababa to encounter forest birds, monkeys, and diverse flora."
      }
    ]
  },
  
  {
    title: "3-Day Birding Tour",
    subtitle: "Bishoftu • Doho Lodge • Alidege Plains • Awash National Park",
    duration: "3 Days / 2 Nights",
    description: "A comprehensive birding experience focusing on Alidege Plains with extended time at Ethiopia's premier semi-arid birding hotspot.",
    highlights: [
      "Hunter's Sunbird",
      "Chestnut-bellied Sandgrouse",
      "Arabian Bustard",
      "Slate-colored Boubou",
      "Abyssinian Roller",
      "White-headed Buffalo-Weaver"
    ],
    itinerary: [
      {
        title: "Day 1: Bishoftu Lakes → Chelelek Wetland → Doho Lodge",
        description: "Depart for Bishoftu's Rift Valley lakes. Bird at Lake Hora and Chelelek Wetland for waterfowl and wetland species. Continue to Doho Lodge."
      },
      {
        title: "Day 2: Alidege Plains (Full Day) → Doho Lodge",
        description: "Full day exploring Alidege Plains for dry-country specialties including Hunter's Sunbird, Arabian Bustard, and Chestnut-bellied Sandgrouse. Evening bird walk at lodge."
      },
      {
        title: "Day 3: Awash National Park → Addis Ababa",
        description: "Morning in Awash National Park for savanna and woodland birds. Spot Pygmy Falcon, Abyssinian Roller, and Kori Bustard. Farewell dinner in Addis Ababa."
      }
    ]
  }
];

const packages = [
  {
    icon: Binoculars,
    title: "Bird Watching",
    description: "Discover Ethiopia's incredible avian diversity with over 860 bird species, including 23 endemic species found nowhere else on Earth.",
    color: "var(--ethiopian-green)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765195496742.png?width=1920&height=1080&resize=contain",
    href: "/packages/bird-watching"
  },
  {
    icon: Calendar,
    title: "Days Excursion",
    description: "Perfect day trips and short excursions to experience Ethiopia's highlights without extensive travel commitments.",
    color: "var(--ethiopian-yellow)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764251254742.png?width=1920&height=1080&resize=contain",
    href: "/packages/days-excursion"
  },
  {
    icon: Landmark,
    title: "Historic Route",
    description: "Journey through 3,000 years of civilization visiting UNESCO World Heritage sites and ancient monuments.",
    color: "var(--ethiopian-red)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250825228.png?width=1920&height=1080&resize=contain",
    href: "/packages/historic-route"
  },
  {
    icon: Mountain,
    title: "Adventure",
    description: "Thrilling expeditions for adrenaline seekers featuring trekking, climbing, and outdoor adventures in dramatic landscapes.",
    color: "var(--ethiopian-green)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250833917.png?width=1920&height=1080&resize=contain",
    href: "/packages/adventure"
  },
  {
    icon: Users,
    title: "Cultural Route",
    description: "Immerse yourself in Ethiopia's vibrant traditions, colorful festivals, and diverse ethnic communities.",
    color: "var(--ethiopian-yellow)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764324259115.png?width=1920&height=1080&resize=contain",
    href: "/packages/cultural-route"
  },
  {
    icon: TreePine,
    title: "Wildlife",
    description: "Encounter rare and endemic wildlife in pristine national parks and conservation areas across Ethiopia.",
    color: "var(--ethiopian-red)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250696464.png?width=1920&height=1080&resize=contain",
    href: "/packages/wildlife"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

export default function PackagesPage() {
  const router = useRouter();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white overflow-x-hidden">
      <Header />

      <Link href="/">
        <Button
          className={`fixed top-24 left-4 z-50 bg-[#1a1a1a]/90 hover:bg-[#1a1a1a] text-white border border-white/10 shadow-lg transition-all duration-300 ${
            showBackButton ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-ethiopian-green/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-ethiopian-yellow/5 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ethiopian-red/3 rounded-full blur-[150px]" />
      </div>
      
      <section className="relative min-h-[75vh] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250825228.png?width=1920&height=1080&resize=contain)',
            backgroundPosition: 'center 60%',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-ethiopian-yellow/20 to-transparent" />
        
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
              <div className="w-16 h-0.5 bg-ethiopian-yellow" />
              <span className="text-ethiopian-yellow font-medium tracking-[0.2em] uppercase text-sm">
                Explore Ethiopia
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
            >
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ethiopian-yellow via-ethiopian-green to-ethiopian-yellow">
                Attractions
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed"
            >
              Diverse Range of Ethiopian Adventures Awaits You
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
            <div className="w-1 h-2 rounded-full bg-ethiopian-yellow" />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ethiopian-green/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-ethiopian-yellow" />
              <span className="text-ethiopian-yellow font-medium tracking-wider uppercase text-xs">Featured Tours</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Our Birding Tours
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Carefully curated birding tours showcasing Ethiopia&apos;s incredible avian diversity and endemic species
            </p>
          </motion.div>

          <div className="space-y-8">
            {birdingTours.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500" />
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="bg-gradient-to-r from-ethiopian-green/10 via-ethiopian-yellow/5 to-ethiopian-red/10 p-8 md:p-10">
                    <div className="flex items-start gap-5">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)' }}
                      >
                        <Binoculars className="w-7 h-7 text-ethiopian-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                          {tour.title}
                        </h3>
                        <p className="text-lg text-gray-400 mb-3">
                          {tour.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{tour.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-gray-300 leading-relaxed">
                      {tour.description}
                    </p>
                  </div>

                  <div className="p-8 md:p-10 bg-white/[0.02]">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                          <Binoculars className="w-5 h-5 text-ethiopian-green" />
                          Key Bird Highlights
                        </h4>
                        <div className="space-y-3">
                          {tour.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-ethiopian-green mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-400">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                          <Map className="w-5 h-5 text-ethiopian-red" />
                          Itinerary Overview
                        </h4>
                        <div className="space-y-4">
                          {tour.itinerary.map((day, idx) => (
                            <div key={idx} className="relative pl-6 pb-4 border-l border-white/10 last:border-l-0 last:pb-0">
                              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-ethiopian-green" />
                              <h5 className="font-semibold text-sm mb-1 text-white">{day.title}</h5>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                {day.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                      <Link href="/contact">
                        <Button size="lg" className="bg-ethiopian-green hover:bg-ethiopian-green/90 text-white">
                          Book This Tour
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ethiopian-yellow/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-ethiopian-yellow" />
              <span className="text-ethiopian-yellow font-medium tracking-wider uppercase text-xs">Package Details</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              What&apos;s Included
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about what&apos;s covered in all our tour packages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-green/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-ethiopian-green/20 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-ethiopian-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">What&apos;s Included</h3>
                </div>
                <div className="space-y-4">
                  {whatsIncluded.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="w-6 h-6 rounded-full bg-ethiopian-green/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-ethiopian-green/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-ethiopian-green" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-red/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-ethiopian-red/20 flex items-center justify-center">
                    <XCircle className="w-7 h-7 text-ethiopian-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">What&apos;s Not Included</h3>
                </div>
                <div className="space-y-4">
                  {whatsNotIncluded.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="w-6 h-6 rounded-full bg-ethiopian-red/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-ethiopian-red/30 transition-colors">
                        <XCircle className="w-4 h-4 text-ethiopian-red" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-ethiopian-red/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-ethiopian-yellow" />
              <span className="text-ethiopian-yellow font-medium tracking-wider uppercase text-xs">Explore More</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              More Tour Attractions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our full range of specialized tour experiences across Ethiopia
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => router.push(pkg.href)}
              >
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                  <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-white/20 transition-colors" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${pkg.color}30` }}
                    >
                      <pkg.icon className="w-6 h-6" style={{ color: pkg.color }} />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-ethiopian-yellow transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2 text-ethiopian-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Explore Tours</span>
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ethiopian-green/10 via-ethiopian-yellow/5 to-ethiopian-red/10 rounded-[2.5rem] blur-xl" />
            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-[2rem] p-12 sm:p-16 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-ethiopian-yellow to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-ethiopian-green/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-ethiopian-yellow/10 rounded-full blur-3xl" />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ethiopian-yellow/10 mb-8">
                  <Sparkles className="w-8 h-8 text-ethiopian-yellow" />
                </div>
              </motion.div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Ready to Start Your Adventure?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Contact us today to customize your perfect Ethiopian journey
              </p>
              
              <Link href="/contact">
                <Button size="lg" className="bg-ethiopian-yellow hover:bg-ethiopian-yellow/90 text-black font-semibold px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}