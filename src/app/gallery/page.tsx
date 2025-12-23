"use client";

import { ArrowLeft, Camera, Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function GalleryPage() {
  const images = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250627_044104_Photos-1766473200626.jpg?width=1200&height=800&resize=contain",
      title: "Somali Ostrich",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250627_044115_Photos-1766473200629.jpg?width=1200&height=800&resize=contain",
      title: "Soemmerring's Gazelle",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250627_044141_Photos-1766473200628.jpg?width=1200&height=800&resize=contain",
      title: "Hamadryas Baboon",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250627_044243_Photos-1766473200627.jpg?width=1200&height=800&resize=contain",
      title: "Mountain Nyala",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20241209_185931_Gallery-1766473238230.png?width=1200&height=800&resize=contain",
      title: "Dorze Tribe Hut",
      category: "Heritage"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250820_232801_Drive-1766470294659.jpg?width=1200&height=800&resize=contain",
      title: "Danakil Salt Flats",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250820_232614_Drive-1766470294776.jpg?width=1200&height=800&resize=contain",
      title: "Assale Lake Sunset",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250820_232326_Drive-1766470706450.jpg?width=1200&height=800&resize=contain",
      title: "Salt Desert Horizon",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250820_232404_Drive-1766470706178.jpg?width=1200&height=800&resize=contain",
      title: "Erta Ale Caldera",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250627_044309_Photos-1766470706181.jpg?width=1200&height=800&resize=contain",
      title: "Mountain Nyala",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250627_044318_Photos-1766470706233.jpg?width=1200&height=800&resize=contain",
      title: "Bale Mountains Wildlife",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250627_044410_Photos-1766470706179.jpg?width=1200&height=800&resize=contain",
      title: "Savannah Gazelles",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250721_144423_Gallery-1766470706230.jpg?width=1200&height=800&resize=contain",
      title: "Walia Ibex",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250721_144531_Gallery-1766470706178.jpg?width=1200&height=800&resize=contain",
      title: "Greater Kudu",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250721_144549_Gallery-1766470706319.jpg?width=1200&height=800&resize=contain",
      title: "Ethiopian Wolf",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250901_175649_Photos-1766470294661.jpg?width=1200&height=800&resize=contain",
      title: "Simien Mountains Road",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20250820_232915_Drive-1766470294773.jpg?width=1200&height=800&resize=contain",
      title: "Lake Tana Palm Trees",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/yamunaflaherty.hararsml1-1-1766469346589.jpg?width=1200&height=800&resize=contain",
      title: "Harar Old Town Street",
      category: "Culture"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/yamunaflaherty.hararsml21-1-1766469346635.jpg?width=1200&height=800&resize=contain",
      title: "Harar Market Entrance",
      category: "Culture"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Ura_Kidane_Mehret_Church_01-resized-1766469405948.jpg?width=1200&height=800&resize=contain",
      title: "Ura Kidane Mehret Church",
      category: "Heritage"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/unnamed-1766469405799.webp?width=1200&height=800&resize=contain",
      title: "Breathtaking Landscape",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/tana-ethiopia-april-1-2019-260nw-2115553556-1766469434427.jpg?width=1200&height=800&resize=contain",
      title: "Lake Tana Pelicans",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/simien-mountains-landscape-lobelia-trees-2-1766469453843.jpg?width=1200&height=800&resize=contain",
      title: "Simien Mountains Lobelia",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251025_110809_Gallery-1766469561711.jpg?width=1200&height=800&resize=contain",
      title: "Traditional Attire",
      category: "People"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251025_105919_Photos-1766469695671.jpg?width=1200&height=800&resize=contain",
      title: "Cultural Portrait",
      category: "People"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20251007_222527_Gallery-1766469801844.jpg?width=1200&height=800&resize=contain",
      title: "Omo Valley Resident",
      category: "People"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/obelisk-kingdom-Aksum-Ethiopian-name-city-1762803969647.webp?width=1200&height=800&resize=contain",
      title: "Axum Obelisk",
      category: "Heritage"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/monkeys-Gelada-Simien-Mountains-National-Park-Ethiopia-1765629668215.jpg?width=1200&height=800&resize=contain",
      title: "Gelada Baboons",
      category: "Wildlife"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ethiopia_addis-ababa_silhouettes-1-e1505197403380-1762804541811.jpg?width=1200&height=800&resize=contain",
      title: "Religious Celebration",
      category: "Culture"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot_20220525-093226_Facebook-1765629620786.jpg?width=1200&height=800&resize=contain",
      title: "Ethiopian Landscape",
      category: "Nature"
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765447035934.png?width=1200&height=800&resize=contain",
      title: "Majestic Highlands",
      category: "Nature"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null));
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-white/80 hover:text-white hover:bg-white/10 border border-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium tracking-wide">Tour Gallery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
            Visual Journey
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experience the beauty of Ethiopia through our lens. From ancient heritage to vibrant cultures and breathtaking nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-emerald-400 text-sm font-medium mb-2">{image.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <div className="flex items-center text-white/60 text-sm">
                  <Maximize2 className="w-4 h-4 mr-2" />
                  View Larger
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 z-0" />
            <div className="relative z-10 w-full h-full max-w-6xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-0 right-0 md:-top-12 md:-right-12 z-50 text-white/60 hover:text-white transition-colors bg-white/10 p-2 rounded-full border border-white/10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 md:px-10 z-[60] pointer-events-none">
                <button 
                  className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-white/80 hover:text-white transition-all bg-black/60 hover:bg-black/80 rounded-full border border-white/20 group pointer-events-auto shadow-2xl"
                  onClick={handlePrev}
                >
                  <ChevronLeft className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:-translate-x-1" />
                </button>
                <button 
                  className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-white/80 hover:text-white transition-all bg-black/60 hover:bg-black/80 rounded-full border border-white/20 group pointer-events-auto shadow-2xl"
                  onClick={handleNext}
                >
                  <ChevronRight className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="relative w-full h-full max-h-[80vh] aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                <Image
                  src={images[selectedImage].url.replace("width=1200&height=800", "width=2000&height=1200")}
                  alt={images[selectedImage].title}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-px bg-emerald-500"></span>
                    <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">{images[selectedImage].category}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{images[selectedImage].title}</h3>
                  <p className="text-white/60 text-sm">{selectedImage + 1} / {images.length}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 text-center">
          <p className="text-white/40 mb-8 italic">More images coming soon as we explore more of this beautiful land.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500">
              Book Your Adventure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

