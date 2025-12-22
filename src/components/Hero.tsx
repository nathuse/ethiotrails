"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const destinations = [
{
  id: 1,
  title: "Danakil Depression",
  subtitle: "EXPLORE",
  description: "One of the hottest and lowest places on Earth, featuring active volcanoes, colorful salt formations, and otherworldly landscapes in the Afar region.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765017193723.png?width=1920&height=1080&resize=contain",
  cardImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765017193723.png?width=1920&height=1080&resize=contain",
  rating: 4.7,
  location: "Afar Region",
  href: "/natural-wonders"
},
{
  id: 2,
  title: "Lalibela Churches",
  subtitle: "DISCOVER",
  description: "Marvel at the magnificent rock-hewn churches carved from single blocks of granite, a testament to medieval Ethiopian engineering and devotion.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Ethiopia-Lalibela.-Monolithic-church-of-Saint-George-Bet-Giyorgis-in-Amharic-in-the-shape-of-a-cross-1-scaled-1762798041372.webp?width=1920&height=1080&resize=contain",
  cardImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Ethiopia-Lalibela.-Monolithic-church-of-Saint-George-Bet-Giyorgis-in-Amharic-in-the-shape-of-a-cross-1-scaled-1762798041372.webp?width=1920&height=1080&resize=contain",
  rating: 4.9,
  location: "Lalibela",
  href: "/ancient-heritage"
},
{
  id: 3,
  title: "Simien Mountains",
  subtitle: "ADVENTURE",
  description: "Trek through dramatic landscapes home to endemic wildlife including gelada baboons and Ethiopian wolves in this UNESCO World Heritage Site.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765017325533.png?width=1920&height=1080&resize=contain",
  cardImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765017325533.png?width=1920&height=1080&resize=contain",
  rating: 4.8,
  location: "Simien Mountains",
  href: "/natural-wonders"
},
{
  id: 4,
  title: "Omo Valley Tribes",
  subtitle: "CULTURE",
  description: "Experience the rich cultural tapestry of diverse ethnic groups preserving ancient traditions in one of Africa's most fascinating regions.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765017268230.png?width=1920&height=1080&resize=contain",
  cardImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765017268230.png?width=1920&height=1080&resize=contain",
  rating: 4.6,
  location: "Omo Valley",
  href: "/cultural-diversity"
}];


export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = destinations.length - 1;
      if (nextIndex >= destinations.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentDestination = destinations[currentIndex];
  const prevIndex = currentIndex === 0 ? destinations.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === destinations.length - 1 ? 0 : currentIndex + 1;
  const prevDestination = destinations[prevIndex];
  const nextDestination = destinations[nextIndex];

  const slideVariants = {
    enter: {
      opacity: 0
    },
    center: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full">
          <img
            src={currentDestination.image}
            alt={currentDestination.title}
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-center">
            {/* Left Content */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative">
                {/* Text Content */}
                <div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-white/80 text-sm lg:text-base tracking-[0.3em] font-light mb-4 uppercase">
                    {currentDestination.subtitle}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight">
                    {currentDestination.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-base lg:text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                    {currentDestination.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}>
                    <Link
                      href={currentDestination.href}
                      prefetch={true}
                      className="inline-block">
                      <span className="text-white text-2xl sm:text-3xl font-semibold tracking-tight hover:text-white/80 transition-colors cursor-pointer">
                        Explore Ethiopia
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right - Preview Images with Before/After on Left/Right */}
            <div className="flex items-center gap-4">
              {/* Before Image (Previous) - LEFT */}
              <button
                onClick={() => paginate(-1)}
                className="relative w-20 h-28 sm:w-24 sm:h-32 lg:w-32 lg:h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer group opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={prevDestination.cardImage}
                  alt={prevDestination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
              </button>

              {/* Main Preview Card - CENTER */}
              <Link href={currentDestination.href} prefetch={true}>
                <div className="relative w-48 h-60 sm:w-64 sm:h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group">
                  <img
                    src={currentDestination.cardImage}
                    alt={currentDestination.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2 text-white/70 text-xs sm:text-sm">
                      <span>{currentDestination.location}</span>
                    </div>
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                      {currentDestination.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) =>
                          <span key={i} className="text-yellow-400 text-xs sm:text-sm">
                            {i < Math.floor(currentDestination.rating) ? "★" : "☆"}
                          </span>
                        )}
                      </div>
                      <span className="text-white/90 text-xs sm:text-sm font-medium">
                        {currentDestination.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* After Image (Next) - RIGHT */}
              <button
                onClick={() => paginate(1)}
                className="relative w-20 h-28 sm:w-24 sm:h-32 lg:w-32 lg:h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer group opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={nextDestination.cardImage}
                  alt={nextDestination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {destinations.map((_, index) =>
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ?
              "w-12 bg-white" :
              "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to ${destinations[index].title}`} />
        )}
      </div>
    </section>
  );
}