"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Coffee, Users, Landmark, Palette, Globe, BookOpen, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const services = [
{
  icon: BookOpen,
  title: "History",
  description: "Explore Ethiopia's remarkable 3,000-year history from the Battle of Adwa to ancient civilizations.",
  color: "var(--ethiopian-red)",
  href: "/history",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/King-Melenik-II-of-Ethiopia-during-Battle-of-Adwa-1896-1762840076797.webp?width=1920&height=1080&resize=contain"
},
{
  icon: Heart,
  title: "Culture",
  description: "Discover diverse ethnic groups, traditional dances, crafts, and vibrant cultural celebrations.",
  color: "var(--ethiopian-yellow)",
  href: "/culture",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/ethiopian-traditional-dance-performance--f9a96d50-20251110204633.jpg"
},
{
  icon: Mountain,
  title: "Natural Wonders",
  description: "Explore breathtaking landscapes from the Simien Mountains to the Danakil Depression.",
  color: "var(--ethiopian-green)",
  href: "/natural-wonders",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Ethio_Beauty_8ieKhEGAkPzJ-g5qSvFk8j7d9hFoBlPRFPtsplwv9DAb7-b2vnArTFUbh3Srj3NdMbh9lptwIiVr83Lv6OEZg-1762794630868.jpg?width=1920&height=1080&resize=contain"
},
{
  icon: Coffee,
  title: "Coffee Culture",
  description: "Experience the birthplace of coffee with traditional ceremonies and organic farms.",
  color: "var(--ethiopian-yellow)",
  href: "/coffee-culture",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/generated_images/traditional-ethiopian-coffee-ceremony-ha-82f175e4-20251110185654.jpg"
},
{
  icon: Landmark,
  title: "Ancient Heritage",
  description: "Visit historical sites like Lalibela, Axum, and Gondar's royal castles.",
  color: "var(--ethiopian-red)",
  href: "/ancient-heritage",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Ethiopia-Lalibela.-Monolithic-church-of-Saint-George-Bet-Giyorgis-in-Amharic-in-the-shape-of-a-cross-1-scaled-1762798041372.webp?width=1920&height=1080&resize=contain"
},
{
  icon: Users,
  title: "Cultural Diversity",
  description: "Meet diverse communities and experience unique traditions across the nation.",
  color: "var(--ethiopian-green)",
  href: "/cultural-diversity",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/A-Guide-to-Ethiopias-Unique-and-Diverse-Culture-scaled-1762798284534.jpg?width=1920&height=1080&resize=contain"
},
{
  icon: Palette,
  title: "Art & Crafts",
  description: "Discover vibrant traditional art, textiles, and handcrafted treasures.",
  color: "var(--ethiopian-yellow)",
  href: "/art-crafts",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1762798977945.jpeg?width=1920&height=1080&resize=contain"
},
];

export default function Services() {
  const router = useRouter();

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Discover Ethiopia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ancient civilizations to natural wonders, explore what makes Ethiopia truly unique
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>

              <Card
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 group cursor-pointer overflow-hidden !w-full !h-full"
              onClick={() => router.push(service.href)}
              style={service.image ? {
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              } : undefined}>

                <CardContent className={`p-6 ${service.image ? 'relative min-h-[280px] flex flex-col justify-end' : ''}`}>
                  {service.image ?
                <>
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity group-hover:from-black/70"></div>
                      
                      {/* Content overlay */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </> :

                <>
                      <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}>

                        <service.icon
                      className="w-7 h-7"
                      style={{ color: service.color }} />

                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </>
                }
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}