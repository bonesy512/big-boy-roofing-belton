"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Star, ShieldCheck, Menu, X, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { track } from "@vercel/analytics";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePhoneClick = () => {
    try {
      track("phone_dispatch_click", { location: "navbar" });
    } catch {
      // analytics fallback
    }
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Coverage Map", href: "#coverage" },
    { name: "Insurance Claims", href: "#insurance" },
    { name: "The Standard", href: "#standard" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-2xl py-2.5"
          : "bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60 py-3.5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* Brand Logo & Slogan */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-amber-500 shadow-glow-amber bg-slate-900 shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.jpg"
              alt="Big Boy Roofing Mascot Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white uppercase group-hover:text-amber-400 transition-colors">
                Big Boy Roofing
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] uppercase font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Built for the People!
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.8★ (21 Reviews)
              </span>
              <span className="hidden md:inline text-slate-600">•</span>
              <span className="hidden md:flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-amber-500" />
                Belton, TX
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+12542394393"
            onClick={handlePhoneClick}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/60 text-slate-100 text-xs sm:text-sm font-bold transition-all shadow-sm group"
          >
            <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <Phone className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] text-slate-400 font-normal uppercase">Direct Dispatch</span>
              <span className="font-extrabold text-amber-400">(254) 239-4393</span>
            </div>
          </a>

          <Button asChild size="default" variant="hazard">
            <a href="#quote-form">
              <Calendar className="w-4 h-4 mr-1.5" />
              Free Inspection
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+12542394393"
            onClick={handlePhoneClick}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold shadow-glow-amber"
            aria-label="Call Big Boy Roofing"
          >
            <Phone className="w-5 h-5 fill-current" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                4.8★ Google (21 Reviews)
              </span>
              <span className="text-slate-300">Belton, Temple & Killeen</span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-amber-400 font-semibold text-base transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-800">
              <a
                href="tel:+12542394393"
                onClick={() => {
                  handlePhoneClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 font-bold text-center"
              >
                <Phone className="w-4 h-4 fill-current" />
                Call Dispatch: (254) 239-4393
              </a>

              <Button
                asChild
                size="lg"
                variant="hazard"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="#quote-form">
                  <Calendar className="w-5 h-5 mr-2" />
                  Request Free Drone & Roof Inspection
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
