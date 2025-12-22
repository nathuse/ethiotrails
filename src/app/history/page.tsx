"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Crown, Sword, BookOpen, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

const historicalEvents = [
  {
    title: "Battle of Adwa (1896)",
    icon: Trophy,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765046803940.png",
    description: "The Battle of Adwa was a decisive victory for Ethiopia over Italy on March 1, 1896. Emperor Menelik II led Ethiopian forces to defeat the Italian army, making Ethiopia the only African nation to successfully resist European colonization during the Scramble for Africa. This historic victory became a symbol of African independence and resistance against colonial powers, inspiring anti-colonial movements across the continent. The battle demonstrated Ethiopia's military prowess and diplomatic skill, securing its sovereignty and earning international respect."
  },
  {
    title: "Kingdom of Aksum",
    icon: Crown,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/obelisk-kingdom-Aksum-Ethiopian-name-city-1762803969647.webp",
    description: "The Kingdom of Aksum (100 AD - 940 AD) was one of the four great powers of the ancient world, alongside Rome, Persia, and China. Located in what is now northern Ethiopia and Eritrea, Aksum was a major trading empire that minted its own currency and erected massive stone obelisks. The kingdom adopted Christianity in the 4th century under King Ezana, making it one of the first Christian states. Aksum's legacy includes the famous obelisks, ancient inscriptions, and a rich cultural heritage that continues to influence modern Ethiopia."
  },
  {
    title: "Queen of Sheba",
    icon: Crown,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/ancient-ethiopian-warriors-and-leaders-f-6e6f4607-20251110204618.jpg",
    description: "According to Ethiopian tradition, the Queen of Sheba, known as Makeda in Ethiopian history, ruled the Kingdom of Aksum around the 10th century BC. Her legendary visit to King Solomon of Israel is documented in religious texts including the Bible, the Quran, and the Ethiopian Kebra Nagast. The union between the Queen and Solomon is said to have produced Menelik I, the first emperor of Ethiopia, who brought the Ark of the Covenant to Ethiopia. This story forms the foundation of the Solomonic dynasty that ruled Ethiopia until 1974."
  },
  {
    title: "Medieval Ethiopian Empire",
    icon: Sword,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765046711553.png",
    description: "During the medieval period (1270-1855), Ethiopia flourished under the Solomonic dynasty. This era saw the construction of remarkable architectural achievements, including the rock-hewn churches of Lalibela in the 12th century, often called the 'Eighth Wonder of the World.' The medieval period also witnessed the rise of Gondar as the imperial capital in the 17th century, where magnificent castles and palaces were built. Ethiopian emperors maintained diplomatic relations with European powers and the Ottoman Empire, while preserving their Christian heritage and unique cultural identity."
  },
  {
    title: "Ethiopian Resistance & Independence",
    icon: BookOpen,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765046819760.png",
    description: "Ethiopia stands unique in Africa as the only nation never colonized by European powers. Beyond the Battle of Adwa, Ethiopia faced the Italian invasion of 1935-1941 during World War II. Emperor Haile Selassie's impassioned speech to the League of Nations in 1936 after the invasion became legendary. Ethiopian patriots continued guerrilla resistance throughout the occupation, and with Allied support, Ethiopia was liberated in 1941. This history of resistance has made Ethiopia a powerful symbol of African dignity and independence, influencing pan-African movements worldwide."
  }
];

export default function HistoryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10"></div>
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765046803940.png"
          alt="Ethiopian History"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Ethiopian History
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-3xl mx-auto"
          >
            3,000 years of remarkable civilization, triumph, and resilience
          </motion.p>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="outline"
          onClick={() => router.push("/about-ethiopia")}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Discover Ethiopia
        </Button>
      </div>

      {/* Historical Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {historicalEvents.map((event, index) => {
              const Icon = event.icon;
              const isReverse = index % 2 === 1;

              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isReverse ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                      isReverse ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="aspect-[16/9]">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className={isReverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="inline-flex items-center space-x-2 bg-[var(--ethiopian-red)]/10 text-[var(--ethiopian-red)] px-4 py-2 rounded-full mb-6">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-semibold">Historical Event</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                      {event.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Banner */}
      <section className="py-16 bg-gradient-to-r from-[var(--ethiopian-red)] via-[var(--ethiopian-yellow)] to-[var(--ethiopian-green)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">980 BC</div>
              <div className="text-sm opacity-90">Queen of Sheba Era</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100-940 AD</div>
              <div className="text-sm opacity-90">Kingdom of Aksum</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1270-1855</div>
              <div className="text-sm opacity-90">Medieval Empire</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1896</div>
              <div className="text-sm opacity-90">Battle of Adwa</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}