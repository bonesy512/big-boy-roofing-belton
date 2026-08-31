import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import CoverageLookup from "@/components/sections/CoverageLookup";
import ServicesGrid from "@/components/sections/ServicesGrid";
import InsuranceWalkthrough from "@/components/sections/InsuranceWalkthrough";
import BigBoyStandard from "@/components/sections/BigBoyStandard";
import QuoteFormSection from "@/components/sections/QuoteFormSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import { Phone, Calendar, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with 3D Architectural Canvas & Dual CTAs */}
      <HeroSection />

      {/* 2. Interactive Bell County Coverage Lookup */}
      <CoverageLookup />

      {/* 3. 6 Core Services Grid */}
      <ServicesGrid />

      {/* 4. Insurance Claim Guidance & Adjuster Meeting Walkthrough */}
      <InsuranceWalkthrough />

      {/* 5. The Big Boy Standard ("Built for the People!") */}
      <BigBoyStandard />

      {/* 6. Instant Roof Inspection Intake Form */}
      <QuoteFormSection />

      {/* 7. Verified Local Reviews & Social Proof */}
      <TestimonialsSection />

      {/* 8. FAQ Section */}
      <FaqSection />

      {/* 9. Final Pre-Footer High-Impact Conversion Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-black uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            2012 S Wall St, Belton, TX
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 max-w-2xl mx-auto">
            Ready For An Honest, Free Roof Inspection in Bell County?
          </h2>
          <p className="text-slate-950 font-bold text-sm sm:text-base max-w-xl mx-auto opacity-90">
            Call Juan Barron & Austin Farr directly or book your inspection online in 30 seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+12542394393"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-amber-300 hover:text-white font-black text-sm sm:text-base shadow-xl transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Dispatch: (254) 239-4393</span>
            </a>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-950 font-extrabold border-2 border-slate-950 text-sm sm:text-base shadow-xl"
            >
              <a href="#quote-form">
                <Calendar className="w-4 h-4 mr-1.5" />
                Schedule Free Inspection
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
