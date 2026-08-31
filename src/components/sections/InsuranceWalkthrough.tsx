"use client";

import React from "react";
import Image from "next/image";
import {
  FileCheck,
  Camera,
  Users,
  ShieldCheck,
  ArrowRight,
  Phone,
  Calendar,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface StepItem {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    icon: Camera,
    title: "21-Point Drone & Attic Inspection",
    subtitle: "Documenting Actual Storm Damage",
    description:
      "We climb your roof and fly 4K drones to photograph hail spatter, wind creases, fractured fiberglass mats, and hidden leaks. You get a transparent digital photo report.",
    highlight: "100% Free • No Obligation",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Claim Filing & Xactimate Prep",
    subtitle: "Precision Insurance Itemization",
    description:
      "We prepare the exact line-item specifications using standard insurance pricing software (Xactimate), ensuring all code upgrades, drip edge, and decking requirements are accounted for.",
    highlight: "Zero Guesswork For Homeowner",
  },
  {
    number: "03",
    icon: Users,
    title: "We Meet Your Adjuster On The Roof",
    subtitle: "Advocating For Your Home",
    description:
      "When your insurance adjuster arrives, Juan Barron or Austin Farr is on your roof in safety gear to walk the inspection side-by-side with them, chalking hail hits and ensuring nothing is missed.",
    highlight: "98% Claim Approval Rate",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Precision Build & Magnetic Clean Sweep",
    subtitle: "Lifetime Craftsmanship Warranty",
    description:
      "Our experienced crew installs your new IKO architectural roof system in 1-2 days, followed by multiple magnetic roller sweeps so your driveway and yard are completely nail-free.",
    highlight: "Zero Deductible Surprises",
  },
];

export default function InsuranceWalkthrough() {
  return (
    <section id="insurance" className="py-16 md:py-24 bg-[#0a0d14] relative border-t border-slate-800">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="hazard">
            <FileCheck className="w-3.5 h-3.5 mr-1" />
            Insurance Claim Walkthrough
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How We Get Your Hail Claim <span className="text-gradient-amber">Approved & Built Right</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Dealing with insurance companies can be stressful. We make it simple by handling the technical measurements and climbing the roof with your adjuster.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="industrial-card p-6 sm:p-7 flex flex-col justify-between relative group"
              >
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-500/20 group-hover:text-amber-500/50 transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Showcase & Trust Banner */}
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8">
            <div className="lg:col-span-4 relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-800">
              <Image
                src="/images/team.jpg"
                alt="Big Boy Roofing team members inspecting roof in Belton"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-950/80 p-2 rounded-lg border border-slate-800">
                <span className="font-bold text-amber-400">Juan Barron & Austin Farr</span> on-site in Belton, TX
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-left">
              <Badge variant="outline" className="text-amber-400 border-amber-500/40">
                No Pressure • Homeowner Advocates
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                “We climb your roof so you don't have to negotiate alone.”
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Insurance adjusters are busy and often inspect 5-8 roofs a day in storm zones. If a contractor isn't there to point out cracked shingles, soft decking, and damaged flashing, you risk partial denials. Big Boy Roofing acts as your local advocate every step of the way.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild variant="hazard" size="default">
                  <a href="#quote-form">
                    <Calendar className="w-4 h-4 mr-2" />
                    Request Adjuster Walkthrough
                  </a>
                </Button>
                <a
                  href="tel:+12542394393"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Direct Line: (254) 239-4393
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
