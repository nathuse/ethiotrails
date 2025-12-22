"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Music, Palette, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const culturalAspects = [
  {
    title: "Ethnic Diversity",
    icon: Users,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/diverse-ethiopian-ethnic-groups-in-tradi-62a89fc6-20251110204617.jpg",
    description: "Ethiopia is home to over 80 distinct ethnic groups, each with unique languages, traditions, and customs. The major groups include the Oromo (largest ethnic group, about 35% of the population), Amhara (known for their historical influence and Amharic language, the official language of Ethiopia), Tigray (concentrated in northern Ethiopia with rich historical heritage), Somali (predominantly in the eastern regions with pastoral traditions), and Sidama (known for their agricultural practices and coffee cultivation). Each group maintains distinct cultural practices, traditional dress, and social structures that contribute to Ethiopia's rich cultural tapestry."
  },
  {
    title: "Traditional Dance & Music",
    icon: Music,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/ethiopian-traditional-dance-performance--f9a96d50-20251110204633.jpg",
    description: "Ethiopian music and dance are distinctive and captivating. The most famous dance is 'eskista,' characterized by intense shoulder movements and intricate body control. Traditional music features the unique pentatonic scale and is performed with instruments like the masinko (one-stringed fiddle), krar (lyre), and washint (flute). Each ethnic group has its own musical traditions and dance styles. Religious music, especially in the Ethiopian Orthodox Church, uses ancient modes and is accompanied by drums (kebero) and sistrums. Modern Ethiopian music blends traditional sounds with contemporary styles, creating a unique fusion appreciated worldwide."
  },
  {
    title: "Traditional Crafts & Art",
    icon: Palette,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/ethiopian-traditional-crafts-and-artifac-b8b96710-20251110204618.jpg",
    description: "Ethiopian craftsmanship showcases centuries of artistic tradition. Handwoven textiles feature intricate patterns and vibrant colors, with traditional cotton shawls (netela) and scarves (kuta) adorned with colorful borders. Ethiopian crosses are exquisitely crafted in silver and brass, each design unique to different regions. Basket weaving produces beautiful, tightly woven baskets in various colors and patterns, often used for serving injera. Pottery, woodcarving, and jewelry-making are also important crafts. Ethiopian religious art, particularly icon painting, follows ancient Byzantine traditions with distinctive Ethiopian characteristics, featuring saints and biblical scenes in vivid colors."
  },
  {
    title: "Traditional Clothing & Fashion",
    icon: Heart,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/A-Guide-to-Ethiopias-Unique-and-Diverse-Culture-scaled-1762798284534.jpg?width=1920&height=1080&resize=contain",
    description: "Traditional Ethiopian clothing is elegant and symbolic. The most iconic garment is the white cotton shawl called 'netela' for women and 'kuta' for men, often featuring colorful woven borders that indicate regional origin. For special occasions, women wear the 'habesha kemis,' an ankle-length white dress with elaborate embroidered necklines and borders. Men wear the 'netela' over white shirts and pants. The Oromo people are known for their colorful traditional attire, while Tigray traditional dress features distinct patterns. Modern Ethiopian fashion increasingly blends traditional elements with contemporary designs, creating unique fusion styles celebrated both locally and internationally."
  },
  {
    title: "Coffee Ceremony",
    icon: Heart,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/traditional-ethiopian-coffee-ceremony-ha-82f175e4-20251110185654.jpg",
    description: "The Ethiopian coffee ceremony is a profound social and cultural ritual that can last two to three hours. Fresh coffee beans are first roasted over an open flame, filling the air with aromatic smoke. The beans are then ground by hand using a mortar and pestle, and brewed in a special clay pot called a 'jebena.' The coffee is served in three rounds - 'abol' (first and strongest), 'tona' (second), and 'baraka' (third, meaning blessing). The ceremony is accompanied by burning incense, traditional snacks like popcorn or bread, and lively conversation. This ritual represents hospitality, community bonding, and respect for guests."
  },
  {
    title: "Religious Festivals",
    icon: Heart,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ethiopia_addis-ababa_silhouettes-1-e1505197403380-1762804541811.jpg?width=1920&height=1080&resize=contain",
    description: "Ethiopian religious festivals are vibrant celebrations deeply embedded in the culture. Timkat (Epiphany) in January commemorates Jesus's baptism with colorful processions where replicas of the Ark of the Covenant are paraded through streets. Meskel (Finding of the True Cross) in September features massive bonfires and celebrations. Fasika (Easter) is preceded by 55 days of fasting and culminates in joyous festivities. Genna (Christmas) on January 7th is celebrated with church services and traditional games. Muslim communities celebrate Eid al-Fitr and Eid al-Adha with prayers, feasts, and charitable giving. These festivals unite communities regardless of religious differences."
  }
];

export default function CulturePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10"></div>
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/diverse-ethiopian-ethnic-groups-in-tradi-62a89fc6-20251110204617.jpg"
          alt="Ethiopian Culture"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Ethiopian Culture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-3xl mx-auto"
          >
            A vibrant tapestry of traditions, arts, and diverse communities
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

      {/* Cultural Aspects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {culturalAspects.map((aspect, index) => {
              const Icon = aspect.icon;
              const isReverse = index % 2 === 1;

              return (
                <motion.div
                  key={aspect.title}
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
                        src={aspect.image}
                        alt={aspect.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className={isReverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="inline-flex items-center space-x-2 bg-[var(--ethiopian-yellow)]/10 text-[var(--ethiopian-yellow)] px-4 py-2 rounded-full mb-6">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-semibold">Cultural Heritage</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                      {aspect.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {aspect.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-[var(--ethiopian-yellow)] via-[var(--ethiopian-green)] to-[var(--ethiopian-red)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">80+</div>
              <div className="text-sm opacity-90">Ethnic Groups</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90+</div>
              <div className="text-sm opacity-90">Languages Spoken</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">13</div>
              <div className="text-sm opacity-90">Months in Calendar</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000s</div>
              <div className="text-sm opacity-90">Years of Tradition</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}