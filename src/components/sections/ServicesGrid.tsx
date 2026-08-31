"use client";

import React from "react";
import {
  Home,
  CloudLightning,
  ShieldAlert,
  Droplets,
  Wrench,
  SearchCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  badge: string;
  description: string;
  features: string[];
  ctaText: string;
}

const services: ServiceItem[] = [
  {
    icon: Home,
    title: "Complete Roof Replacement",
    badge: "IKO Certified Systems",
    description:
      "Full residential tear-off and replacement engineered for intense Texas sun, heavy wind, and hail. Premium IKO architectural shingles, synthetic underlayment, and lifetime limited warranties.",
    features: [
      "IKO Dynasty & Cambridge Class-4 impact shingles",
      "Ice & water barrier in all critical valleys",
      "Full ridge vent ventilation upgrade",
      "Zero-Nail yard magnet guarantee",
    ],
    ctaText: "Get Replacement Estimate",
  },
  {
    icon: CloudLightning,
    title: "Hail & Storm Damage Restoration",
    badge: "Insurance Claim Specialists",
    description:
      "Central Texas storms leave hidden granule loss, bruised matting, and creased shingles. We conduct drone surveys and meet your adjuster on-site to ensure your full roof replacement is approved.",
    features: [
      "Digital drone & high-pitch roof damage mapping",
      "Line-item Xactimate insurance scope review",
      "Direct claim assistance from start to finish",
      "Zero out-of-pocket beyond your deductible",
    ],
    ctaText: "Schedule Storm Damage Check",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Leak Repair & Tarping",
    badge: "Rapid Response Dispatch",
    description:
      "Water dripping through your ceiling or blown-off shingles after high winds? Our Belton dispatch team provides rapid emergency tarping and pinpoint leak diagnosis to prevent costly interior damage.",
    features: [
      "Same-day emergency dispatch across Bell County",
      "Pipe jack, chimney & valley flashing repairs",
      "Missing shingle tab color-matched replacement",
      "Full water intrusion diagnostic inspection",
    ],
    ctaText: "Call For Emergency Leak Repair",
  },
  {
    icon: Droplets,
    title: "Seamless Gutters & Drainage",
    badge: "Custom On-Site Fabrication",
    description:
      "Protect your Belton foundation and landscaping from Texas flash floods. Custom seamless 5-inch and 6-inch aluminum gutters roll-formed on-site for a leak-free, custom-fit finish.",
    features: [
      "Heavy-gauge seamless aluminum (custom colors)",
      "High-capacity downspouts & splash guards",
      "Leaf and debris gutter guard systems",
      "Fascia board repair & rot inspection",
    ],
    ctaText: "Explore Gutter Systems",
  },
  {
    icon: Wrench,
    title: "Siding & Exterior Trim Restorations",
    badge: "Hardie & Vinyl Craftsmanship",
    description:
      "Complete curb-appeal and weatherproofing upgrades. Replace storm-battered siding, rotted fascia, soffits, and exterior trim with durable, weather-resistant materials.",
    features: [
      "James Hardie fiber cement siding installation",
      "Soffit & fascia replacement and venting",
      "Storm & hail impact siding repairs",
      "Exterior weatherproofing and paint prep",
    ],
    ctaText: "Get Siding & Trim Quote",
  },
  {
    icon: SearchCheck,
    title: "21-Point Free Roof & Drone Inspection",
    badge: "100% Free • No Pressure",
    description:
      "Know exactly what condition your roof is in. Our certified inspectors climb the roof, fly 4K drones over steep pitches, and inspect your attic for ventilation and moisture issues.",
    features: [
      "High-resolution 4K drone photography",
      "Attic decking & ventilation evaluation",
      "Written inspection report with timestamps",
      "Ideal for pre-sale or insurance verification",
    ],
    ctaText: "Claim Free 21-Point Inspection",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="hazard">
            <Home className="w-3.5 h-3.5 mr-1" />
            Texas Craftsmanship
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Roofing Services Engineered for <span className="text-gradient-amber">Central Texas Weather</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From single-shingle emergency fixes to full insurance-backed roof replacements across Belton, Temple, and Bell County.
          </p>
        </div>

        {/* 6-Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="industrial-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all" />

                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-[11px] font-bold text-amber-300 border-amber-500/30 bg-amber-500/5">
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    {service.features.map((feat, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full justify-between text-xs font-bold hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400"
                  >
                    <a href="#quote-form">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Not sure if your roof has storm damage?</h4>
            <p className="text-xs text-slate-400">
              Let Juan & Austin perform a complimentary 21-point photo inspection. Zero sales pressure guaranteed.
            </p>
          </div>
          <Button asChild variant="hazard" size="default" className="shrink-0">
            <a href="#quote-form">Schedule Free Inspection</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
