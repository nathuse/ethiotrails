"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plannedTours = [
  {
    id: 1,
    title: "Ethiopia Cultural, Tribal & Nature Discovery",
    duration: "12 Days",
    subtitle: "From Ancient Heritage to the Wild Omo Valley and the Majestic Bale Mountains",
    highlights: [
      "Visit Lucy at the National Museum",
      "Explore the iconic Mursi tribe with lip-plate tradition",
      "Witness bull-jumping ceremonies of the Hamar people",
      "Meet the artistic Kara tribe",
      "UNESCO World Heritage Site - Konso",
      "Boat trip on Lake Chamo with Nile crocodiles",
      "Traditional Sidama coffee ceremony",
      "Sanetti Plateau & Ethiopian wolf sighting",
      "Bale Mountains National Park wildlife"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Addis Ababa & City Highlights",
        description: "Upon arrival, our representative warmly welcomes you and transfers you to your hotel for a short rest and traditional Ethiopian coffee. Your afternoon begins with a visit to the National Museum, home of Lucy — the 3.2-million-year-old hominid fossil that changed human history — along with other remarkable archaeological finds. Continue to the magnificent Holy Trinity Cathedral, admired for its architecture, artwork, and as the resting place of Emperor Haile Selassie and Empress Menen Asfaw. If time permits, drive to the top of Mount Entoto for a sweeping panoramic view of Addis Ababa.",
        accommodation: "Chosen Hotel"
      },
      {
        day: 2,
        title: "Fly to Jinka • Gateway to the Lower Omo Valley",
        description: "Fly to Jinka, the heart of the Lower Omo Valley. After check-in, explore the Jinka Museum for an introduction to the region's diverse tribes. After lunch, visit the Ari people, the largest ethnic group in the Omo Valley, known for their agriculture and vibrant traditions.",
        accommodation: "Nasa Hotel / Eco Omo Lodge"
      },
      {
        day: 3,
        title: "Mago National Park • Mursi Tribe • Drive to Turmi",
        description: "This morning, travel to Mago National Park to meet the iconic Mursi tribe, famous for the women's lip-plate tradition — an ancient symbol of beauty and identity. Return to Jinka for lunch, then drive to Turmi, home of the warm and colorful Hamar people. If there is a bull-jumping ceremony (not guaranteed), you may witness this powerful rite of passage into adulthood or Hammer village.",
        accommodation: "Chosen Lodge in Turmi (930m)"
      },
      {
        day: 4,
        title: "Kara & Nyangatom Tribes Exploration",
        description: "Begin your day with an excursion to visit the artistic Kara tribe, renowned for their striking body and face painting using white chalk, charcoal, and red ochre. Continue to the Nyangatom tribe, respected and feared warriors known for crocodile hunting traditions and for living along the borders of Ethiopia, South Sudan, Kenya, and Uganda. Return to Turmi.",
        accommodation: "Turmi (930m)"
      },
      {
        day: 5,
        title: "Arbore Tribe • Konso UNESCO Cultural Landscape",
        description: "Drive early to meet the Arbore people, Cushitic-speaking pastoralists whose name symbolizes the \"Land of Bulls.\" Continue to Konso, a UNESCO World Heritage Site famed for its terraced hillsides, walled villages, carved wooden grave markers (waka), and the towering generation poles erected every 18 years to honor lineage and heritage.",
        accommodation: "Kanta Lodge (1650m)"
      },
      {
        day: 6,
        title: "Arba Minch • Lake Chamo • Dorze Village",
        description: "Arrive in Arba Minch, beautifully set below the Amaro Mountains and overlooking the Nechisar plains. Enjoy views of Lakes Chamo and Abaya, divided by the natural \"Bridge of God.\" Take a boat trip on Lake Chamo, famous for the world's largest Nile crocodiles, hippos, and abundant aquatic birdlife. After lunch, drive to the highland village of Dorze, known for its unique beehive-shaped houses and exceptional traditional weaving.",
        accommodation: "Arba Minch (1285m)"
      },
      {
        day: 7,
        title: "Sidama Region • Coffee Culture of Yirgalem",
        description: "Drive to Yirgalem and experience the peaceful nature of the Sidama region. Visit Aregash Lodge, where Sidama culture, traditions, and Ethiopia's celebrated coffee origin come to life. Enjoy an authentic coffee ceremony — roasting, grinding, and brewing fresh beans in the traditional way.",
        accommodation: "Yirgalem Lodge"
      },
      {
        day: 8,
        title: "Tutu Fela Archaeological Site • Drive to Hawassa",
        description: "Visit Tutu Fela, home to over 80 carved stelae marking ancient graves — symbols of bravery, gender, or social status. Continue to Hawassa, enjoy lunch, and take a scenic boat trip on Lake Hawassa for birdwatching and hippo sightings.",
        accommodation: "Hawassa Lodge / Resort"
      },
      {
        day: 9,
        title: "Hawassa Market • Bale Mountains National Park",
        description: "In the morning, visit the colorful Fish Market at Amora Gedel where fishermen sell fresh tilapia as birds and colobus monkeys gather nearby. Then drive to the spectacular Bale Mountains National Park, passing through lush farmlands. At the park headquarters in Dinsho, look out for mountain nyala, Menelik's bushbuck, and Bohor reedbuck.",
        accommodation: "Goba / Robe Hotel"
      },
      {
        day: 10,
        title: "Sanetti Plateau • Ethiopian Wolf • Harenna Forest",
        description: "Take an early morning drive across Africa's highest road to the breathtaking Sanetti Plateau (over 4,300m). Here lives the world's rarest canid — the Ethiopian wolf. Reach Tulu Dimtu (4377m), the second-highest peak in Ethiopia. Descend into the mystical Harenna Forest, one of Ethiopia's last true rainforests and home to the elusive black-maned lions, Bale monkeys, and other endemic wildlife. Drive back to Goba/Robe.",
        accommodation: "Goba / Robe Hotel"
      },
      {
        day: 11,
        title: "Langano Relaxation",
        description: "Drive through scenic farmlands and the wildlife-rich \"Geysey land,\" spotting again mountain nyala, Menelik's bushbuck, and reedbuck. Stop for lunch in Shashemene, then continue to the peaceful lakeside shores of Lake Langano for relaxation.",
        accommodation: "Chosen Resort / Lodge"
      },
      {
        day: 12,
        title: "Abijatta–Shalla National Park • Return to Addis Ababa • Farewell Dinner",
        description: "After breakfast, visit Abijatta–Shalla National Park, home to flamingos, gazelles, ostriches, and other bird species. Drive back to Addis Ababa, have lunch en route, and enjoy time for shopping. In the evening, enjoy a farewell cultural dinner accompanied by traditional music and dance. Transfer to your hotel or the airport for your departure.",
        accommodation: "End of Tour"
      }
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG-20240816-WA0004-1765634560599.jpg?width=1920&height=1080&resize=contain"
  },
  {
    id: 2,
    title: "Ethiopia Cultural & Adventure Expedition",
    duration: "14 Days",
    subtitle: "From the Walled City of Harar to the Sacred Rock Churches of Lalibela",
    highlights: [
      "The walled Islamic city of Harar Jegol – a living heritage of peace",
      "The fiery Erta Ale Volcano and surreal Dallol landscapes",
      "Rock-hewn churches of Tigray and the ancient ruins of Axum",
      "The spiritual wonder of Lalibela, Ethiopia's \"New Jerusalem\"",
      "Authentic encounters with Afar and Harari cultures",
      "Natural hot springs at Doho Lodge and volcanic landscapes of Afar",
      "Hyena Feeding Ceremony in Harar",
      "UNESCO World Heritage Sites - Harar, Axum, and Lalibela"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Addis Ababa: The City of Origins",
        description: "Upon arrival at Bole International Airport, our representative will warmly greet you and transfer you to your hotel for rest and a light meal. In after, discover the treasures of Addis Ababa: the National Museum (home of the famous fossil \"Lucy\"), Trinity church, and Entoto Mountain (2,300m), offering a panoramic view of the capital.",
        accommodation: "Chosen hotel in Addis Ababa"
      },
      {
        day: 2,
        title: "Fly to Dire Dawa: Gateway to the East",
        description: "After breakfast, take a morning flight to Dire Dawa, one of Ethiopia's most charming old towns. Enjoy a guided city tour and explore the bustling Konel Market, filled with color, culture, and life.",
        accommodation: "Chosen hotel in Dire Dawa"
      },
      {
        day: 3,
        title: "From Dire Dawa to Harar: The Walled City of Peace",
        description: "Visit the lively Kefira Market early in the morning, where locals trade fruits, grains, and handmade goods. After breakfast, drive to Harar, the fourth holiest city of Islam and a UNESCO World Heritage Site. In the evening, witness the famous Hyena Feeding Ceremony, a centuries-old local tradition where man and beast meet in harmony.",
        accommodation: "Chosen hotel in Harar"
      },
      {
        day: 4,
        title: "Explore Harar Jegol: Ethiopia's Living Museum",
        description: "Stroll through the narrow alleys of Harar Jegol, visiting centuries-old mosques, shrines, and Harari homes. Immerse yourself in the local culture and vibrant marketplaces brimming with spices and traditional crafts.",
        accommodation: "Chosen hotel in Harar"
      },
      {
        day: 5,
        title: "Journey to Doho Lodge: Nature's Spa",
        description: "Drive through changing landscapes to Doho Lodge, set amid the Afar region's volcanic terrain. Unwind in the natural hot springs, surrounded by lush birdlife — the perfect rest before your desert adventure begins.",
        accommodation: "Doho Lodge"
      },
      {
        day: 6,
        title: "Doho to Semera: Gateway to the Afar Desert",
        description: "Visit the Allolobad hot springs in the way before continuing to Semera, A capital of the Afar region. Learn about the nomadic Afar tribe and their desert lifestyle.",
        accommodation: "Hotel in Semera"
      },
      {
        day: 7,
        title: "Semera to Erta Ale: The Fire Mountain",
        description: "Travel across the volcanic land toward Lake Afdera, known for its crystal salt waters. After lunch, continue to Erta Ale Volcano, one of the world's few continuously active lava lakes. As night falls, hike up to the crater rim (approx. 45 minutes) to witness the glowing molten lava under the starlit sky — a once-in-a-lifetime experience.",
        accommodation: "Camping near Erta Ale"
      },
      {
        day: 8,
        title: "Sunrise over Erta Ale & Drive to Hamedela",
        description: "Wake before dawn to see the sunrise over the volcano, then return for breakfast and begin your journey to Hamedela, near the vast salt plains for Sun set of the Danakil Depression.",
        accommodation: "Camping under the stars"
      },
      {
        day: 9,
        title: "Dallol: Ethiopia's Colorful Otherworld",
        description: "Explore the surreal landscape of Dallol, often described as \"another planet on Earth.\" Discover sulfur ponds, salt mountains, and vibrant mineral formations. After a picnic breakfast, return for lunch and continue your scenic drive to Mekelle.",
        accommodation: "Hotel in Mekelle"
      },
      {
        day: 10,
        title: "From Mekelle to the Tigray Mountains",
        description: "Drive north to the Gheralta region, home to the ancient rock-hewn Tigray monastery and churches (7th–13th centuries). These architectural marvels, carved high into sandstone cliffs, offer both spiritual and visual awe. After lunch, continue to Axum, once the center of the powerful Axumite Empire.",
        accommodation: "Chosen hotel in Axum"
      },
      {
        day: 11,
        title: "Axum: The Birthplace of Ethiopian Civilization",
        description: "Discover the ancient treasures of Axum — from the massive Obelisks and royal tombs to St. Mary of Zion Church, believed to house the Ark of the Covenant.",
        accommodation: "Chosen hotel in Axum"
      },
      {
        day: 12,
        title: "Fly to Lalibela: The Eighth Wonder of the World",
        description: "Take a short flight to Lalibela, a UNESCO World Heritage Site and one of Ethiopia's most spiritual destinations. Begin exploring the northern cluster of rock-hewn churches, including the magnificent Bet Medhane Alem and Bet Maryam.",
        accommodation: "Chosen hotel in Lalibela"
      },
      {
        day: 13,
        title: "Discover Lalibela's Hidden Wonders",
        description: "Continue your exploration with the southern group of churches, including Bet Giyorgis (St. George), the most iconic and beautifully carved church of all. Immerse yourself in local life with optional visits to local homes or honey-wine houses.",
        accommodation: "Chosen hotel in Lalibela"
      },
      {
        day: 14,
        title: "Fly Back to Addis Ababa & Farewell",
        description: "Fly back to Addis Ababa for a final city visit. Explore Merkato, Africa's largest open-air market, and shop for souvenirs. In the evening, enjoy a traditional Ethiopian dinner with live cultural music and dance, celebrating your journey across Ethiopia. After dinner, transfer to your hotel or the airport for your international departure.",
        accommodation: "End of Tour"
      }
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG-20240814-WA0003-1765634681939.jpg?width=1920&height=1080&resize=contain"
  }
];

export default function ToursPage() {
  const [showBackButton, setShowBackButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expandedTour, setExpandedTour] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white overflow-x-hidden">
      <Header />

      {/* Floating Back Button */}
      <Link href="/">
        <Button
          className={`fixed top-24 left-4 z-50 bg-[#0a0a0f]/90 backdrop-blur-sm hover:bg-[#0a0a0f] text-white border border-white/10 shadow-lg transition-all duration-300 ${
            showBackButton ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--ethiopian-green)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ethiopian-yellow)]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[var(--ethiopian-red)]/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_20190521_110155-1765634889235.jpg?width=1920&height=1080&resize=contain)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center pt-32">
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
                Curated Experiences
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
            >
              Planned
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--ethiopian-green)] via-[var(--ethiopian-yellow)] to-[var(--ethiopian-red)]">
                Tours
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed"
            >
              Expertly crafted journeys through Ethiopia's cultural, tribal, and natural wonders
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            {plannedTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                  {/* Tour Header with Image */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="relative h-[400px] lg:h-auto">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${tour.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                    </div>

                    {/* Tour Info */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[var(--ethiopian-green)]/20 rounded-full border border-[var(--ethiopian-green)]/30">
                          <Clock className="w-4 h-4 text-[var(--ethiopian-green)]" />
                          <span className="text-sm font-medium text-white">{tour.duration}</span>
                        </div>
                      </div>

                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {tour.title}
                      </h2>

                      <p className="text-lg text-white/60 mb-8 leading-relaxed">
                        {tour.subtitle}
                      </p>

                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-[var(--ethiopian-yellow)] mt-1" />
                          <div>
                            <p className="text-sm text-white/50 mb-1">Duration</p>
                            <p className="text-white font-semibold">{tour.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[var(--ethiopian-yellow)] mt-1" />
                          <div>
                            <p className="text-sm text-white/50 mb-1">Type</p>
                            <p className="text-white font-semibold">Cultural & Nature</p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        onClick={() => setExpandedTour(expandedTour === tour.id ? null : tour.id)}
                        className="bg-[var(--ethiopian-green)] hover:bg-[var(--ethiopian-green)]/90 text-white font-semibold px-8"
                      >
                        {expandedTour === tour.id ? "Hide Details" : "View Full Itinerary"}
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedTour === tour.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="border-t border-white/10"
                    >
                      {/* Highlights */}
                      <div className="p-8 lg:p-12 border-b border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Tour Highlights</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {tour.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-[var(--ethiopian-yellow)] mt-2 flex-shrink-0" />
                              <p className="text-white/70">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Itinerary */}
                      <div className="p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-white mb-8">Detailed Itinerary</h3>
                        <div className="space-y-8">
                          {tour.itinerary.map((day, idx) => (
                            <motion.div
                              key={day.day}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1, duration: 0.5 }}
                              className="relative pl-8 border-l-2 border-white/10"
                            >
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--ethiopian-yellow)] border-4 border-[#0a0a0f]" />
                              
                              <div className="mb-2">
                                <span className="text-[var(--ethiopian-yellow)] text-sm font-semibold uppercase tracking-wider">
                                  Day {day.day}
                                </span>
                              </div>
                              
                              <h4 className="text-xl font-bold text-white mb-3">
                                {day.title}
                              </h4>
                              
                              <p className="text-white/60 leading-relaxed mb-3">
                                {day.description}
                              </p>
                              
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-white/40">Accommodation:</span>
                                <span className="text-white/70 font-medium">{day.accommodation}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="p-8 lg:p-12 bg-gradient-to-br from-[var(--ethiopian-green)]/10 to-transparent border-t border-white/10">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">Ready to Book This Tour?</h4>
                            <p className="text-white/60">Contact us to customize your journey</p>
                          </div>
                          <Link href="/contact">
                            <Button className="bg-[var(--ethiopian-green)] hover:bg-[var(--ethiopian-green)]/90 text-white font-semibold px-8">
                              Contact Us
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Tours Coming Soon */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--ethiopian-yellow)]/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <Users className="w-16 h-16 text-[var(--ethiopian-yellow)] mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">More Tours Coming Soon</h3>
              <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                We're constantly adding new curated experiences. Contact us to create a custom tour tailored to your interests.
              </p>
              <Link href="/contact">
                <Button className="bg-[var(--ethiopian-yellow)] hover:bg-[var(--ethiopian-yellow)]/90 text-black font-semibold px-8">
                  Request Custom Tour
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}