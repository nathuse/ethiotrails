"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
"Only African nation never colonized",
"Home to 13-month calendar system",
"Birthplace of Arabica coffee",
"Ancient Christian traditions dating back millennia"];


export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/visual-edit-uploads/1762802033908-v0ezf2iix7p.jpg"
                    alt="Ethiopian culture"
                    className="object-cover w-full h-full" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/visual-edit-uploads/1762802724033-o734v2frtig.jpg"
                    alt="Ethiopian coffee"
                    className="object-cover w-full h-full" />

                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/visual-edit-uploads/1762802615069-9zl04xfbl3q.jpg"
                    alt="Ethiopian landscape"
                    className="object-cover w-full h-full" />

                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/visual-edit-uploads/1762802260509-p0h2ea80p1s.webp"
                    alt="Ethiopian heritage"
                    className="object-cover !w-full !h-full !max-w-full" />

                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ethiopian-green)]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--ethiopian-yellow)]/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <div className="inline-block bg-[var(--ethiopian-red)]/10 text-[var(--ethiopian-red)] px-4 py-2 rounded-full mb-6 !opacity-[0.58] !font-(family-name:--font-inter) !text-lg !font-bold !block !underline !border-0 !w-[133px] !h-12">
              <span className="text-sm !bg-transparent !font-bold">About Ethiopia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Nation of Pride and Heritage
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ethiopia stands as a beacon of African independence and cultural richness. With over 3,000 years of documented history, it is home to some of humanity's oldest civilizations and continues to preserve its unique identity.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From the rock-hewn churches of Lalibela to the ancient obelisks of Axum, Ethiopia offers a journey through time unlike any other destination.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) =>
              <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--ethiopian-green)] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              )}
            </div>

            <Link href="/about-ethiopia">
              <Button
                size="lg"
                className="bg-[var(--ethiopian-red)] hover:bg-[var(--ethiopian-red)]/90 text-white !whitespace-pre-line">
                Learn More About Ethiopia
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>);

}