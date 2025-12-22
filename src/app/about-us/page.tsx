"use client";

import { motion, Variants } from "framer-motion";
import { Compass, Heart, Users, Shield, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const values = [
    { icon: Compass, title: "Local Expertise", desc: "Deep-rooted knowledge from local experts who know Ethiopia's stories and traditions.", color: "var(--ethiopian-green)" },
    { icon: Heart, title: "Authentic Experiences", desc: "Meaningful journeys that connect you with people, landscapes, and living cultures.", color: "var(--ethiopian-yellow)" },
    { icon: Users, title: "Personalized Service", desc: "Every tour is built with care, tailored to your interests and travel style.", color: "var(--ethiopian-red)" },
    { icon: Shield, title: "Responsible Travel", desc: "Safe, responsible, and sustainable tourism that supports local communities.", color: "var(--ethiopian-green)" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Header />

      <Link href="/">
        <Button
          className={`fixed top-20 left-4 z-50 bg-[var(--ethiopian-green)] hover:bg-[var(--ethiopian-green)]/90 text-white shadow-lg transition-all duration-300 ${
            showBackButton ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--ethiopian-green)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ethiopian-yellow)]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[var(--ethiopian-red)]/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <section className="relative min-h-[85vh] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250820_233636_Photos-1765279412691.jpg?width=1920&height=1080&resize=contain)',
            backgroundPosition: 'center 75%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--ethiopian-yellow)]/30 to-transparent" />
        <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--ethiopian-green)]/20 to-transparent" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center pt-20">
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
                Discover Ethiopia
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
            >
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopian-yellow)] via-[var(--ethiopian-green)] to-[var(--ethiopian-yellow)]">
                Ethiotrail
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed"
            >
              Where Every Road Has a Story
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
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" as const }}
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-[var(--ethiopian-yellow)]" />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-start mb-32"
          >
            <motion.div variants={itemVariants} className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-[var(--ethiopian-yellow)]" />
                <span className="text-[var(--ethiopian-yellow)] font-medium tracking-wider uppercase text-xs">Our Story</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                More Than <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopian-green)] to-[var(--ethiopian-yellow)]">Movement</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--ethiopian-green)] to-transparent rounded-full" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-white/70 leading-relaxed">
                At Ethiotrail Tours, we believe travel is more than movement—it is a journey into the soul of a land where history, nature, and culture meet in breathtaking harmony. Founded with a passion for Ethiopia&apos;s rich heritage, our mission is to guide travelers through the country&apos;s most authentic experiences.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We are a team of local experts who grew up with the stories, traditions, and rhythms of Ethiopia. Our deep-rooted knowledge allows us to craft meaningful journeys that go beyond sightseeing.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Whether you seek ancient historical wonders, vibrant cultural encounters, wildlife adventures, or immersive community experiences, Ethiotrail Tours is your trusted companion.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-[var(--ethiopian-yellow)] font-medium tracking-wider uppercase text-xs mb-4 block">What Drives Us</span>
              <h2 className="text-4xl sm:text-5xl font-bold">Our Values</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500" />
                  <div className="relative p-8">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div 
                    className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

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
                  <Sparkles className="w-8 h-8 text-[var(--ethiopian-yellow)]" />
                </div>
              </motion.div>

              <div className="space-y-4 mb-10">
                <p className="text-2xl sm:text-3xl text-white/90 font-light">
                  With Ethiotrail, every path leads to <span className="font-semibold text-[var(--ethiopian-yellow)]">discovery</span>.
                </p>
                <p className="text-2xl sm:text-3xl text-white/90 font-light">
                  Every encounter becomes a <span className="font-semibold text-[var(--ethiopian-green)]">story</span>.
                </p>
                <p className="text-2xl sm:text-3xl text-white/90 font-light">
                  Every journey becomes a <span className="font-semibold text-[var(--ethiopian-red)]">memory</span> forever.
                </p>
              </div>

              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8" />

              <p className="text-3xl sm:text-4xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopian-green)] via-[var(--ethiopian-yellow)] to-[var(--ethiopian-red)]">
                  Ethiotrail Tours
                </span>
              </p>
              <p className="text-white/50 mt-2 tracking-[0.3em] uppercase text-sm">
                Where Every Road Has a Story
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
