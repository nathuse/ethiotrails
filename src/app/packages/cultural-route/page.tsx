"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, MapPin, Clock, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CulturalRoutePage() {
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
          backgroundImage: "url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764324259115.png?width=1920&height=1080&resize=contain)",
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

            Cultural Route
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">

            Immerse Yourself in Ethiopia's Living Traditions
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ethiopian-yellow/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">

            <h2 className="text-3xl font-bold mb-6 text-white">Package Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Ethiopia is home to over 80 distinct ethnic groups, each with their own languages, traditions, and customs. The Cultural Route offers an authentic journey into the heart of Ethiopia's incredible diversity, connecting you directly with local communities and their time-honored ways of life.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the colorful tribes of the Omo Valley to the highland traditions of the Amhara and Oromo people, this immersive experience goes beyond typical tourism. Participate in traditional ceremonies, learn ancient crafts, share meals with local families, and witness cultural practices that have remained unchanged for centuries. This is cultural tourism at its most authentic and respectful.
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
              "Visit remote Omo Valley tribes with unique traditions",
              "Attend vibrant local market days and festivals",
              "Participate in traditional coffee ceremonies",
              "Learn ancient weaving and pottery techniques",
              "Addis Ababa city tours,National Museum (Lucy fossil), Ethnographic Museum, Holy Trinity Cathedral",
              "Witness traditional dance and music performances"].
              map((highlight, index) =>
              <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-ethiopian-yellow mt-2 flex-shrink-0"></div>
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
              <p className="text-gray-400">7-14 days</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <User className="w-8 h-8 mb-3 text-ethiopian-yellow" />
              <h3 className="font-semibold text-lg mb-2 text-white">Group Size</h3>
              <p className="text-gray-400">Small groups (4-8)</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-3 text-ethiopian-red" />
              <h3 className="font-semibold text-lg mb-2 text-white">Approach</h3>
              <p className="text-gray-400">Responsible tourism</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12">

            <h2 className="text-3xl font-bold mb-6 text-white">Cultural Experiences</h2>
            <div className="space-y-4">
              {[
              {
                title: "Omo Valley Tribal Encounters",
                description: "Meet the Mursi, Hamar, Karo, and other tribes known for their distinctive body decorations and ancient traditions"
              },
              {
                title: "Traditional Coffee Ceremony",
                description: "Participate in the elaborate coffee ritual that's central to Ethiopian hospitality and social life"
              },
              {
                title: "Market Day Immersion",
                description: "Experience bustling local markets where tribes gather to trade, socialize, and showcase their colorful attire"
              },
              {
                title: "Artisan Workshops",
                description: "Learn traditional crafts from master weavers, potters, and blacksmiths keeping ancient techniques alive"
              }].
              map((experience, index) =>
              <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-ethiopian-yellow/50 transition-all backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-white">{experience.title}</h3>
                  <p className="text-gray-300">{experience.description}</p>
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
              "Culturally-sensitive local guides and interpreters",
              "All accommodation (mix of hotels and homestays)",
              "Three meals daily featuring local cuisine",
              "Cultural workshop and ceremony participation",
              "Community visit fees distributed fairly to locals",
              "Transportation in comfortable 4WD vehicles",
              "Photography guidance respecting local customs"].
              map((item, index) =>
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-ethiopian-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-3 h-3 text-ethiopian-yellow" />
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
            className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-ethiopian-yellow/10 to-ethiopian-red/10 border border-ethiopian-yellow/20 backdrop-blur-sm">

            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Experience Authentic Ethiopian Culture?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us to learn more about our responsible cultural tourism approach and how we work directly with communities to ensure mutually beneficial experiences.
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
