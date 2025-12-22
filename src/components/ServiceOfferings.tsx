"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Binoculars, Calendar, Landmark, Mountain, Users, TreePine, ChevronLeft, ChevronRight, Church, Camera, Compass, Bird } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const serviceOfferings = [
  {
    icon: Binoculars,
    title: "Bird Watching",
    description: "Discover Ethiopia's incredible avian diversity with over 860 bird species, including 23 endemic species found nowhere else on Earth.",
    color: "var(--ethiopian-green)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765195496742.png?width=1920&height=1080&resize=contain",
    href: "/packages/bird-watching",
  },
  {
    icon: Calendar,
    title: "Days Excursion",
    description: "Perfect day trips and short getaways exploring Ethiopia's hidden gems, from scenic landscapes to cultural sites near major cities.",
    color: "var(--ethiopian-yellow)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764251254742.png?width=1920&height=1080&resize=contain",
    href: "/packages/days-excursion",
  },
  {
    icon: Landmark,
    title: "Historic Route",
    description: "Journey through 3,000 years of history visiting ancient rock-hewn churches, medieval castles, and UNESCO World Heritage Sites.",
    color: "var(--ethiopian-red)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250825228.png?width=1920&height=1080&resize=contain",
    href: "/packages/historic-route",
  },
  {
    icon: Mountain,
    title: "Adventure",
    description: "Thrilling expeditions through dramatic landscapes, from trekking the Simien Mountains to exploring the otherworldly Danakil Depression.",
    color: "var(--ethiopian-green)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250833917.png?width=1920&height=1080&resize=contain",
    href: "/packages/adventure",
  },
  {
    icon: Users,
    title: "Cultural Route",
    description: "Immerse yourself in Ethiopia's rich cultural tapestry, meeting diverse ethnic groups and experiencing authentic traditions firsthand.",
    color: "var(--ethiopian-yellow)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764324259115.png?width=1920&height=1080&resize=contain",
    href: "/packages/cultural-route",
  },
  {
    icon: TreePine,
    title: "Wildlife",
    description: "Encounter unique Ethiopian wildlife in pristine national parks, from endemic species to the majestic Ethiopian wolf and gelada baboon.",
    color: "var(--ethiopian-red)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764250696464.png?width=1920&height=1080&resize=contain",
    href: "/packages/wildlife",
  },
]

const specialInterestTours = [
  {
    icon: Church,
    title: "Religious Festivals",
    description: "Timket, Meskel, Genna",
    color: "var(--ethiopian-red)",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture Ethiopia's beauty",
    color: "var(--ethiopian-yellow)",
  },
  {
    icon: Compass,
    title: "Customized Private Journey",
    description: "Tailored to your interests",
    color: "var(--ethiopian-green)",
  },
  {
    icon: Bird,
    title: "Birdwatching Tours",
    description: "860+ species to discover",
    color: "var(--ethiopian-red)",
  },
]

export default function ServiceOfferings() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 4000) // Rotate every 4 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  const slideVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = serviceOfferings.length - 1
      if (nextIndex >= serviceOfferings.length) nextIndex = 0
      return nextIndex
    })
  }

  const currentService = serviceOfferings[currentIndex]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of tour packages and experiences
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center" style={{ perspective: '2000px' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute w-full max-w-md mx-auto"
              >
                <div 
                  className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
                  style={{
                    backgroundImage: `url(${currentService.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onClick={() => router.push(currentService.href)}
                >
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                    <div className="text-center space-y-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: currentService.color }}
                      >
                        <currentService.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-white font-bold text-3xl md:text-4xl">
                        {currentService.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-card shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-card shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {serviceOfferings.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to ${serviceOfferings[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* Description Section - Animated */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {currentService.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Special Interest Tours Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
            Special Interest (Solo) Tours
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {specialInterestTours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border-2 border-border rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${tour.color}20` }}
                  >
                    <tour.icon
                      className="w-6 h-6 md:w-7 md:h-7"
                      style={{ color: tour.color }}
                    />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">
                    {tour.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {tour.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}