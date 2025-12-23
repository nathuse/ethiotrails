"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsMoreDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsMoreDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: "Ethiopia", href: "/about-ethiopia" },
    { name: "Tours", href: "/tours" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" }];

  const moreLinks = [
    { name: "Attractions", href: "/packages" },
    { name: "Wildlife", href: "/packages/wildlife" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Coffee", href: "/coffee" },
    { name: "Calendar", href: "/unique-calendar" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      "bg-black/60 backdrop-blur-xl border-b border-white/5" :
      "bg-transparent"}`
      }>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765011120946.png?width=1920&height=1080&resize=contain"
              alt="Ethio Trails Logo"
              className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group">

                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
            )}
            
            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-sm font-medium text-white/90 hover:text-white transition-colors relative group flex items-center gap-1"
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </button>
              
              {/* Dropdown Menu */}
              {isMoreDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Get Started Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-[var(--ethiopian-green)] hover:bg-[var(--ethiopian-green)]/90 text-white border-none font-medium px-6">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-6 bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10 shadow-xl">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
              {/* More Section in Mobile */}
              <li className="!mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-semibold text-white/50 mb-2 px-4 uppercase tracking-widest">
                  Explore More
                </p>
                <ul className="space-y-1">
                  {moreLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="block py-3 px-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              
              <li className="!mt-6 pt-6 border-t border-white/10">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-[var(--ethiopian-green)] hover:bg-[var(--ethiopian-green)]/90 text-white w-full justify-center py-6 text-base font-semibold rounded-lg shadow-lg shadow-[var(--ethiopian-green)]/20">
                    Get Started
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>);

}