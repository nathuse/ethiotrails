import Header from "@/components/Header"
import Hero from "@/components/Hero"
import dynamic from "next/dynamic"

// Lazy load below-the-fold components for better performance
const ServiceOfferings = dynamic(() => import("@/components/ServiceOfferings"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
})

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
})

const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-muted/20" />
})

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-muted/20" />
})

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <ServiceOfferings />
      <Services />
      <About />
      <Footer />
    </div>
  )
}