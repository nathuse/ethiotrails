"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram, MessageCircle, ArrowLeft, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try emailing us directly at ethiotrail2018@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationClick = () => {
    const mapsUrl = `https://www.google.com/maps?q=9.011385392850059,38.749971889828664`;
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+251913359007";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/251913359007", "_blank", "noopener,noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Floating Back Button */}
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

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--ethiopian-green)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ethiopian-yellow)]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[var(--ethiopian-red)]/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765449483668.png?width=1920&height=1080&resize=contain)',
            backgroundPosition: 'center 60%',
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
                Reach Out
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
            >
              Get in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopian-yellow)] via-[var(--ethiopian-green)] to-[var(--ethiopian-yellow)]">
                Touch
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed"
            >
              Let&apos;s Plan Your Ethiopian Adventure Together
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

      {/* Contact Content */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-[var(--ethiopian-yellow)]" />
                  <span className="text-[var(--ethiopian-yellow)] font-medium tracking-wider uppercase text-xs">Contact Info</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  We&apos;re Here to
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopian-green)] to-[var(--ethiopian-yellow)]">Help</span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Have questions about Ethiopia or planning your visit? Reach out through any of these channels.
                </p>
              </motion.div>

              <div className="space-y-4">
                {/* Location */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  onClick={handleLocationClick}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-[var(--ethiopian-green)]/40 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--ethiopian-green)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-[var(--ethiopian-green)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Our Office</h3>
                        <p className="text-white/50 text-sm">Ras Mekonnen Avenue, Addis Ababa</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  onClick={handleWhatsAppClick}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-[#25D366]/40 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
                        <p className="text-white/50 text-sm">+251 913 359 007</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  onClick={handlePhoneClick}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-[var(--ethiopian-yellow)]/40 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--ethiopian-yellow)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-[var(--ethiopian-yellow)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Phone</h3>
                        <p className="text-white/50 text-sm">+251 913 359 007</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-[var(--ethiopian-red)]/40 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--ethiopian-red)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-[var(--ethiopian-red)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Email</h3>
                        <p className="text-white/50 text-sm">ethiotrail2018@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Business Hours */}
                <motion.div variants={itemVariants} className="group">
                  <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--ethiopian-green)]/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[var(--ethiopian-green)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                        <p className="text-white/50 text-sm">Mon-Fri: 8AM - 6PM</p>
                        <p className="text-white/50 text-sm">Sat: 8:30AM - 1:30PM</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div variants={itemVariants}>
                  <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                    <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.facebook.com/share/1D43jANLW2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[var(--ethiopian-green)]/10 hover:bg-[var(--ethiopian-green)]/20 flex items-center justify-center text-[var(--ethiopian-green)] transition-all hover:scale-110"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/humble_ethiopia_tours?igsh=dGIwbDJ3OGJlaWE2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[var(--ethiopian-yellow)]/10 hover:bg-[var(--ethiopian-yellow)]/20 flex items-center justify-center text-[var(--ethiopian-yellow)] transition-all hover:scale-110"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.youtube.com/@Driving-in-Ethiopia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[var(--ethiopian-red)]/10 hover:bg-[var(--ethiopian-red)]/20 flex items-center justify-center text-[var(--ethiopian-red)] transition-all hover:scale-110"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form - Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--ethiopian-green)]/10 via-[var(--ethiopian-yellow)]/5 to-[var(--ethiopian-red)]/10 rounded-[2rem] blur-xl" />
                <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 sm:p-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[var(--ethiopian-yellow)] to-transparent" />
                  
                  <div className="flex items-center gap-3 mb-2">
                    <Send className="w-5 h-5 text-[var(--ethiopian-yellow)]" />
                    <span className="text-[var(--ethiopian-yellow)] font-medium tracking-wider uppercase text-xs">Send Message</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
                    Start Your Journey
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white/70 text-sm">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[var(--ethiopian-yellow)]/50 rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white/70 text-sm">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[var(--ethiopian-yellow)]/50 rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/70 text-sm">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[var(--ethiopian-yellow)]/50 rounded-xl h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/70 text-sm">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+251 91 XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[var(--ethiopian-yellow)]/50 rounded-xl h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white/70 text-sm">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your travel plans..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[var(--ethiopian-yellow)]/50 rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[var(--ethiopian-green)] to-[var(--ethiopian-green)]/80 hover:from-[var(--ethiopian-green)]/90 hover:to-[var(--ethiopian-green)]/70 text-white font-semibold rounded-xl h-14 text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,155,0,0.3)]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}