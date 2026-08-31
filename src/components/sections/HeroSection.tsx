"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Phone, Calendar, ShieldCheck, Star, Award, CheckCircle2, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { track } from "@vercel/analytics";

// Client-only 3D Canvas
const RoofHeroCanvas = dynamic(
  () => import("@/components/canvas/RoofHeroCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] md:h-[520px] flex flex-col items-center justify-center rounded-2xl bg-slate-950/60 border border-slate-800/80 animate-pulse">
        <div className="w-16 h-16 rounded-full border-2 border-amber-500/30 border-t-amber-500 animate-spin mb-3" />
        <span className="text-xs font-mono text-slate-400">Loading 3D Architectural Roof Model...</span>
      </div>
    ),
  }
);

export default function HeroSection() {
  const handleHeroCall = () => {
    try {
      track("phone_click", { location: "hero_primary_cta", number: "(254) 239-4393" });
    } catch {
      // analytics fallback
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[#0a0d14] via-[#0d121c] to-[#0a0d14] bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Conversion Copy & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="hazard" className="py-1 px-3 shadow-md">
                <Zap className="w-3.5 h-3.5 mr-1.5 fill-slate-950" />
                Belton & Bell County, TX
              </Badge>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-bold text-slate-300">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.8 Google (21 Reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-amber-400 text-sm md:text-base font-extrabold uppercase tracking-widest">
                Built for the People!
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Belton’s Tough, Trusted <br className="hidden sm:block" />
                <span className="text-gradient-amber">Roofing & Storm</span> Restoration.
              </h1>
            </div>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Belton&apos;s honest, hard-working roofing crew led by Juan Barron & Austin Farr. From emergency leak repairs to complete IKO architectural shingle replacements and insurance claim walkthroughs. Free honest inspections, zero pressure.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="tel:+12542394393"
                onClick={handleHeroCall}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base sm:text-lg shadow-glow-amber border border-amber-300 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Dispatch: (254) 239-4393</span>
              </a>

              <Button
                asChild
                size="xl"
                variant="secondary"
                className="bg-slate-900/90 hover:bg-slate-800 text-white border-slate-700 hover:border-amber-500/60 font-bold"
              >
                <a href="#quote-form">
                  <Calendar className="w-5 h-5 mr-2 text-amber-400" />
                  Request Free Inspection
                </a>
              </Button>
            </div>

            {/* Microcopy & Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
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
          </div>

          {/* Right Column: 3D Interactive Model & Live Spec Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/60 shadow-2xl p-1 backdrop-blur-md">
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>Interactive 3D Truss</span>
              </div>

              {/* R3F 3D Canvas */}
              <RoofHeroCanvas />

              {/* Founder Tag under Canvas */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
                    BB
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      Juan Barron & Austin Farr
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Founders • 2012 S Wall St, Belton, TX
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="text-[11px] text-emerald-400 border-emerald-500/30">
                  Active Dispatch
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
