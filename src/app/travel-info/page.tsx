"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Banknote, 
  FileText, 
  Shirt, 
  Clock, 
  Globe, 
  Compass,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Backpack
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const needToKnowItems = [
  {
    icon: Banknote,
    title: "Currency",
    description: "The local currency is the Ethiopian Birr (ETB). While ATMs are available in major cities like Addis Ababa, Bahir Dar, and Gondar, it's wise to carry some cash for rural areas. Major hotels and airlines accept credit cards.",
    color: "#10b981" // emerald-500
  },
  {
    icon: FileText,
    title: "Visa Requirements",
    description: "Most nationalities require a visa. The e-Visa (online) is the most convenient option. Ensure your passport has at least 6 months validity from your date of entry.",
    color: "#fbbf24" // amber-400
  },
  {
    icon: Clock,
    title: "Time & Calendar",
    description: "Ethiopia follows its own unique 13-month calendar and a 12-hour clock that starts at sunrise. When booking tours, always clarify if the time is 'Ethiopian time' or 'International time'.",
    color: "#ef4444" // red-500
  },
  {
    icon: Shirt,
    title: "Dress Code",
    description: "Ethiopia is a conservative country. When visiting churches or mosques, shoulders and knees should be covered. Women should carry a light scarf to cover their hair in religious sites.",
    color: "#fbbf24"
  },
  {
    icon: Globe,
    title: "Connectivity",
    description: "Ethio Telecom is the primary provider. You can easily buy a local SIM card with your passport. Wi-Fi is common in city hotels but can be intermittent in remote regions.",
    color: "#ef4444"
  }
];

const goodToKnowItems = [
  {
    title: "Tipping Culture",
    content: "Tipping is appreciated but not mandatory. In restaurants, 10% is standard. For guides and drivers, it depends on the service quality and duration of the trip."
  },
  {
    title: "Coffee Ceremony",
    content: "If invited to a coffee ceremony, it's a sign of great respect. It usually involves three rounds of coffee (Abol, Tona, Baraka). Don't rush; it's a social event!"
  },
  {
    title: "Dietary Needs",
    content: "Ethiopian food is excellent for vegetarians, especially on 'fasting days' (Wednesdays and Fridays). Injera is gluten-free if made from 100% Teff."
  },
  {
    title: "Photography",
    content: "Always ask before taking photos of people. In some tribal areas, people may request a small fee for photos. Photography in churches may have specific rules."
  },
  {
    title: "Safety",
    content: "Ethiopia is generally safe for travelers. However, like anywhere, be aware of your surroundings in crowded markets and avoid walking alone late at night in unfamiliar areas."
  },
  {
    title: "Bargaining",
    content: "Bargaining is common in markets and for souvenir shopping. Always do it respectfully and with a smile. Prices in fixed-shops and pharmacies are usually non-negotiable."
  }
];

const packingList = [
  "Comfortable walking shoes/boots",
  "Lightweight, breathable clothing",
  "Warm layers for cool highland nights",
  "Sunscreen, hat, and sunglasses",
  "Insect repellent",
  "Universal power adapter (Type C/F/G)",
  "Personal first-aid kit",
  "Modest attire for religious sites",
  "Reusable water bottle"
];

export default function TravelInfoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white/60 hover:text-white hover:bg-white/5 border border-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium tracking-wide">Essential Travel Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
              Travel Information
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know for a smooth and unforgettable journey through the Land of Origins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Need to Know */}
      <section className="py-20 px-4 bg-white/[0.01]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <AlertCircle className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold">What You Need to Know</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {needToKnowItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Good to Know */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">Good to Know</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {goodToKnowItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing List & CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-emerald-900/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <Backpack className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold">Packing Essentials</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {packingList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center lg:text-left space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready for Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">
                  Adventure?
                </span>
              </h2>
              <p className="text-lg text-white/60">
                Still have questions? Our travel experts are here to help you plan every detail of your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-7 text-lg rounded-2xl shadow-lg shadow-emerald-500/20">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/packages">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white px-10 py-7 text-lg rounded-2xl">
                    Explore Tours
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

