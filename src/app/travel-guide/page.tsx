"use client";

import { ArrowLeft, Map, Book, Users, Phone, MapPin, Calendar, ChevronDown, Compass, Mountain, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function TravelGuidePage() {
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

  const guideServices = [
    { icon: Map, title: "Expert Local Guides", description: "Native Ethiopians with deep knowledge of the country's history, culture, and hidden gems." },
    { icon: Book, title: "Comprehensive Planning", description: "From itinerary planning to accommodation booking, we handle every detail." },
    { icon: Users, title: "Group & Private Tours", description: "Choose from group tours or private tours for a personalized experience." },
    { icon: Calendar, title: "Flexible Scheduling", description: "Customizable tour dates and durations from 3 days to 3 weeks." },
    { icon: MapPin, title: "Off the Beaten Path", description: "Discover hidden locations beyond typical tourist destinations." },
    { icon: Phone, title: "24/7 Support", description: "Round-the-clock assistance throughout your journey." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-600/6 rounded-full blur-[100px]" />
      </div>

      <Link href="/">
        <Button
          className={`fixed top-20 left-4 z-50 bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 ${
            showBackButton ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765447035934.png?width=1920&height=1080&resize=contain')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent" />

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white/80 hover:text-white hover:bg-white/10 border border-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium tracking-wide">Professional Travel Guides</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Guide to
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              Ethiopia
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the cradle of humanity with expert guidance. Our professional guides bring Ethiopia's rich history, diverse culture, and stunning landscapes to life.
          </p>

          <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-6 text-lg shadow-lg shadow-emerald-500/25">
            Book Your Guide
          </Button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/40" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Why Choose Our Travel Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideServices.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-emerald-500/20 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-emerald-500/20 rounded-br-2xl" />

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-emerald-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-300 transition-colors">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">Tour Types</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              What Our Guides Offer
            </h2>
          </div>

          <div className="space-y-16">
            <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                      <Book className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-400">Historical Tours</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed text-lg">
                    Explore Ethiopia's ancient heritage with guides who bring history to life. Visit the rock-hewn churches of Lalibela, the ancient city of Axum, and the medieval castles of Gondar.
                  </p>
                  <ul className="space-y-3">
                    {["UNESCO World Heritage Sites", "Ancient kingdoms and civilizations", "Religious and cultural landmarks"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/50">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-[45%] h-72 lg:h-80 rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763455753212.png?width=1920&height=1080&resize=contain"
                    alt="Ethiopian historical sites"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-500">
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center">
                      <Mountain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400">Nature & Adventure</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed text-lg">
                    Trek through the dramatic Simien Mountains, witness the otherworldly Danakil Depression, and explore the source of the Blue Nile. Our adventure guides know the best trails and viewpoints.
                  </p>
                  <ul className="space-y-3">
                    {["Mountain trekking and hiking", "Bird sighting and ornithology tours", "Wildlife watching expeditions", "Volcano and desert exploration"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/50">
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-[45%] h-72 lg:h-80 rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763455937804.png?width=1920&height=1080&resize=contain"
                    alt="Ethiopian nature and adventure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:border-red-500/30 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-400">Cultural Immersion</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed text-lg">
                    Experience authentic Ethiopian culture through coffee ceremonies, traditional meals, tribal visits in the Omo Valley, and participation in colorful festivals.
                  </p>
                  <ul className="space-y-3">
                    {["Traditional ceremonies and rituals", "Local community visits", "Festival celebrations and events"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/50">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-[45%] h-72 lg:h-80 rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763453573416.png?width=1920&height=1080&resize=contain"
                    alt="Ethiopian cultural immersion"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="relative p-12 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />

            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Ready to Explore Ethiopia?
            </h2>
            <p className="text-lg text-white/60 mb-10 relative max-w-xl mx-auto">
              Let our expert guides show you the best of Ethiopia. Contact us today to plan your perfect adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 shadow-lg shadow-emerald-500/25">
                  Contact Us
                </Button>
              </Link>
              <Link href="/packages">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8">
                  View Tour Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}