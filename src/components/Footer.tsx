"use client";

import { Facebook, Youtube, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    explore: [
      { name: "Destinations", href: "/about-ethiopia" },
      { name: "Culture", href: "/culture" },
      { name: "History", href: "/history" },
      { name: "", href: "/about-ethiopia" }
    ],
    resources: [
      { name: "Tours and Destinations", href: "/travel-guide" },
      { name: "Gallery", href: "/gallery" },
      { name: "Travel Info (FAQ)", href: "/travel-info" }
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact" }
    ]
  };

  const handleLocationClick = () => {
    const lat = 9.011385392850059;
    const lng = 38.749971889828664;
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+251913359007";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ethiotrail2018@gmail.com";
  };

  return (
    <footer id="contact" className="bg-[#0a0a0f] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6cd46d78-a3fb-47d7-88f1-915e4fe932bc/visual-edit-uploads/1763754547902-1hm9xmbpj5g.png)] bg-contain bg-no-repeat bg-left flex-shrink-0 !w-[550px] !h-full"></div>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Discover the land of origins. Experience rich history, diverse cultures, and breathtaking landscapes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-white/60">
              <div onClick={handleLocationClick} className="flex items-center space-x-2 cursor-pointer hover:text-[var(--ethiopian-green)] transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Ras Mekonnen Avenue, Addis Ababa</span>
              </div>
              <div onClick={handlePhoneClick} className="flex items-center space-x-2 cursor-pointer hover:text-[var(--ethiopian-yellow)] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+251913359007</span>
              </div>
              <div onClick={handleEmailClick} className="flex items-center space-x-2 cursor-pointer hover:text-[var(--ethiopian-red)] transition-colors">
                <Mail className="w-4 h-4" />
                <span>ethiotrail2018@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/1D43jANLW2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--ethiopian-green)]/10 hover:bg-[var(--ethiopian-green)]/20 flex items-center justify-center text-[var(--ethiopian-green)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/humble_ethiopia_tours?igsh=dGIwbDJ3OGJlaWE2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--ethiopian-yellow)]/10 hover:bg-[var(--ethiopian-yellow)]/20 flex items-center justify-center text-[var(--ethiopian-yellow)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Driving-in-Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--ethiopian-red)]/10 hover:bg-[var(--ethiopian-red)]/20 flex items-center justify-center text-[var(--ethiopian-red)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="!w-[205px]">
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link, idx) => link.name && (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[var(--ethiopian-green)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[var(--ethiopian-green)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-[var(--ethiopian-green)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">© 2025 Ethio Trails.</p>
          <p className="text-sm text-white/60">Website Development: +251 979310820</p>
        </div>
      </div>
    </footer>
  );
}