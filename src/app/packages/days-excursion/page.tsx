"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DaysExcursionPage() {
  const router = useRouter();
  const [showFloatingBack, setShowFloatingBack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBack(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      <Header />
      
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764251254742.png?width=1920&height=1080&resize=contain)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>

        <div className="absolute inset-0 bg-black/50"></div>
        
        <button
          onClick={() => router.push("/packages")}
          className="absolute top-8 left-8 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all">

          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Packages</span>
        </button>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4">

            Days Excursion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">

            Short Getaways Packed with Ethiopian Wonders
          </motion.p>
        </div>
      </section>

      {showFloatingBack &&
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => router.push("/packages")}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg hover:shadow-xl rounded-full transition-all border border-white/10">

          <ArrowLeft className="w-5 h-5 text-white" />
          <span className="font-medium text-white">Back to Packages</span>
        </motion.button>
      }

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ethiopian-green/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">

            <h2 className="text-3xl font-bold mb-6 text-white">Package Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Perfect for travelers with limited time or those looking for quick escapes, our Days Excursion packages offer concentrated experiences of Ethiopia's best attractions. These carefully curated day trips and short getaways allow you to explore the country's highlights without committing to lengthy tours.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From sunrise hikes in the Entoto Mountains to sunset visits at ancient rock-hewn churches, our day excursions are designed to maximize your experience. Each trip includes comfortable transportation, expert guides, and authentic local experiences that showcase Ethiopia's diverse landscapes and rich culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">

            <h2 className="text-3xl font-bold mb-6 text-white">Tour Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
              "Flexible 1-3 day itineraries perfect for busy schedules",
              "Visit Addis Ababa's top cultural and historical sites",
              "Explore nearby natural wonders and scenic viewpoints",
              "Experience traditional coffee ceremonies and cuisine",
              "Small group or private tour options available",
              "Same-day departures and easy booking process"].
              map((highlight, index) =>
              <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ethiopian-yellow mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{highlight}</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12">

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-8 h-8 mb-3 text-ethiopian-green" />
              <h3 className="font-semibold text-lg mb-2 text-white">Duration</h3>
              <p className="text-gray-400">1-3 days</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Users className="w-8 h-8 mb-3 text-ethiopian-yellow" />
              <h3 className="font-semibold text-lg mb-2 text-white">Group Size</h3>
              <p className="text-gray-400">Flexible (1-15)</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-3 text-ethiopian-red" />
              <h3 className="font-semibold text-lg mb-2 text-white">Starting Point</h3>
              <p className="text-gray-400">Addis Ababa area</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">

            <h2 className="text-3xl font-bold mb-6 text-white">Popular Excursions</h2>
            <div className="space-y-4">
              {[
              {
                title: "Botanic Garden visiting",
                description: "A botanic garden that is laid out tidily and aesthetically offers opportunities for research, restful relaxation and enjoyment by tourists."
              },
              {
                title: "City Heritage Tour",
                description: "National Museum, Holy Trinity or Saint George Cathedral, and bustling Merkato market exploration or see how Ethiopia's coffee is processed and have the experience of going to Entoto Mountain."
              },
              {
                title: "Lake Bishoftu Day Trip",
                description: "Crater lakes, water sports, and relaxing lakeside dining just 50km from the capital"
              },
              {
                title: "Debre Libanos Monastery",
                description: "13th-century monastery, Portuguese Bridge, and endemic Gelada baboon viewing"
              },
              {
                title: "Tiya Stelae & Adadi Mariam Rock-Hewn Church",
                description: "Archaeological site in central Ethiopia featuring ancient stelae, combined with a visit to Adadi Mariam Rock-Hewn Church, one of Ethiopia's historic rock-carved churches located in the Gurage Zone of the Southern Nations, Nationalities, and Peoples Region."
              }].
              map((excursion, index) =>
              <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-ethiopian-yellow/50 transition-all backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-white !whitespace-pre-line">{excursion.title}</h3>
                  <p className="text-gray-300 !whitespace-pre-line !whitespace-pre-line">{excursion.description}</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">

            <h2 className="text-3xl font-bold mb-6 text-white">What's Included</h2>
            <div className="space-y-3">
              {[
              "Round-trip transportation from your hotel",
              "Professional English-speaking guide/driver",
              "Entrance fees to all sites",
              "Bottled water throughout the day",
              "Traditional lunch at local restaurant"].
              map((item, index) =>
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-ethiopian-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-3 h-3 text-ethiopian-yellow" />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-ethiopian-yellow/10 to-ethiopian-green/10 border border-ethiopian-yellow/20 backdrop-blur-sm">

            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Book Your Day Excursion?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to arrange your perfect day trip or multi-day excursion. We offer flexible scheduling and can customize any tour to your interests.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-ethiopian-yellow text-black rounded-full font-semibold hover:bg-ethiopian-yellow/90 transition-colors">

              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>);

}