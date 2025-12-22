"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mountain, MapPin, Clock, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdventurePage() {
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
          backgroundImage: "url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250833917.png?width=1920&height=1080&resize=contain)",
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

            Adventure Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">

            Thrilling Experiences in Ethiopia's Wild Landscapes
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
              For thrill-seekers and outdoor enthusiasts, Ethiopia offers some of Africa's most spectacular adventure opportunities. From trekking through dramatic mountain ranges to exploring one of Earth's hottest places, our adventure tours combine adrenaline-pumping activities with breathtaking natural beauty.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience world-class trekking in the Simien and Bale Mountains, encounter unique wildlife in their natural habitats, camp under star-filled skies, and challenge yourself in landscapes that range from Afro-alpine highlands to volcanic deserts. Each adventure is led by experienced guides who prioritize both safety and authentic wilderness experiences.
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
              "Trek through UNESCO-listed Simien Mountains",
              "Explore the otherworldly Danakil Depression",
              "Bale Mountains wildlife  experience",
              "Wildlife encounters with endemic species",
              "Multi-day camping expeditions under the stars",
              "Challenge yourself with diverse terrain and climates"].
              map((highlight, index) =>
              <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ethiopian-green mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 !whitespace-pre-line">{highlight}</p>
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
              <p className="text-gray-400">5-21 days</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Users className="w-8 h-8 mb-3 text-ethiopian-yellow" />
              <h3 className="font-semibold text-lg mb-2 text-white">Group Size</h3>
              <p className="text-gray-400">4-10 adventurers</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-3 text-ethiopian-red" />
              <h3 className="font-semibold text-lg mb-2 text-white">Difficulty</h3>
              <p className="text-gray-400">Moderate to Challenging</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">

            <h2 className="text-3xl font-bold mb-6 text-white">Adventure Experiences</h2>
            <div className="space-y-4">
              {[
              {
                title: "Simien Mountains Trekking",
                description: "Multi-day treks through dramatic escarpments with jaw-dropping views, encountering Gelada baboons and Ethiopian wolves"
              },
              {
                title: "Danakil Depression Expedition",
                description: "Venture into one of Earth's hottest places to witness active lava lakes, colorful sulfur springs, and salt caravans"
              },
              {
                title: "Bale Mountains Adventure",
                description: "Trek through Afro-alpine moorlands, spot rare Ethiopian wolves, and explore the otherworldly Sanetti Plateau"
              }].
              map((adventure, index) =>
              <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-ethiopian-green/50 transition-all backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-white">{adventure.title}</h3>
                  <p className="text-gray-300">{adventure.description}</p>
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
              "Experienced mountain guides and support crew",
              "All camping equipment and sleeping bags",
              "Three meals daily plus snacks",
              "Park fees and permits",
              "Ground transportation to and from trailheads"].
              map((item, index) =>
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-ethiopian-green/20 flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-3 h-3 text-ethiopian-green" />
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
            className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-ethiopian-green/10 to-ethiopian-red/10 border border-ethiopian-green/20 backdrop-blur-sm">

            <h2 className="text-2xl font-bold mb-4 text-white">Ready for Your Ethiopian Adventure?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to discuss your fitness level and preferences. We'll match you with the perfect adventure experience and ensure you're fully prepared.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-ethiopian-green text-white rounded-full font-semibold hover:bg-ethiopian-green/90 transition-colors">

              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>);

}
