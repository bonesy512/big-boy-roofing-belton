"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Phone, Calendar, Star, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { track } from "@vercel/analytics";

// Client-only Full-Bleed 3D Storm Canvas
const RoofHeroCanvas = dynamic(
  () => import("@/components/canvas/RoofHeroCanvas"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function HeroSection() {
  const handleHeroCall = () => {
    try {
      track("phone_dispatch_click", { location: "hero" });
    } catch {
      // analytics fallback
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-[#070a12] via-[#0b101c] to-[#0a0d14] bg-grid-pattern min-h-[580px] md:min-h-[640px] flex items-center justify-center">
      {/* 1. Full-Bleed Atmospheric 3D Canvas (Absolute Background) */}
      <RoofHeroCanvas />

      {/* Atmospheric Glow & Vignette Overlays */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0d14] to-transparent pointer-events-none z-0" />

      {/* 2. Centered High-Impact Content Stack */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6 md:space-y-7">
          
          {/* Top Badges & Live Status */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Badge variant="hazard" className="py-1 px-3.5 shadow-md">
              <Zap className="w-3.5 h-3.5 mr-1.5 fill-slate-950" />
              Belton & Bell County, TX
            </Badge>
            <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-bold text-slate-300 backdrop-blur-sm shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.8 Google (21 Reviews)</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-cyan-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Live Storm Response</span>
            </div>
          </div>

          {/* Slogan & Main Headline */}
          <div className="space-y-3">
            <span className="text-amber-400 text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-widest block">
              Built for the People!
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mx-auto max-w-3xl">
              Belton’s Tough, Trusted <br className="hidden sm:block" />
              <span className="text-gradient-amber">Roofing & Storm</span> Restoration.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Belton's honest, hard-working roofing crew led by Juan Barron & Austin Farr. From emergency leak repairs to complete IKO architectural shingle replacements and insurance claim walkthroughs. Free honest inspections, zero pressure.
          </p>

          {/* Centered Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="tel:+12542394393"
              onClick={handleHeroCall}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base sm:text-lg shadow-glow-amber border border-amber-300 transition-all hover:scale-[1.03] active:scale-[0.98] text-center"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Dispatch: (254) 239-4393</span>
            </a>

            <Button
              asChild
              size="xl"
              variant="secondary"
              className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-800 text-white border-slate-700 hover:border-amber-500/60 font-bold px-8 shadow-lg"
            >
              <a href="#quote-form">
                <Calendar className="w-5 h-5 mr-2 text-amber-400" />
                Request Free Inspection
              </a>
            </Button>
          </div>

          {/* Centered Trust Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Free Drone & Roof Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero-Nail Magnetic Yard Sweep</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>We Meet Adjusters on Your Roof</span>
            </div>
          </div>

          {/* Founders Local Credential Pill */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <strong className="text-white">Juan Barron & Austin Farr</strong>
              <span>•</span>
              <span>2012 S Wall St, Belton, TX</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
