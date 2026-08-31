"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Magnet,
  Award,
  MapPin,
  CheckCircle2,
  Phone,
  Flame,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PillarItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BigBoyStandard() {
  const pillars: PillarItem[] = [
    {
      icon: Magnet,
      title: "Double Magnetic Yard Sweep",
      description:
        "Every single crew is equipped with high-powered industrial rolling magnets. We sweep your driveway, grass, and flowerbeds twice to protect your tires and pets.",
    },
    {
      icon: Award,
      title: "IKO Certified Shingle Systems",
      description:
        "We build with IKO Dynasty and Cambridge architectural shingles featuring ArmourZone nailing strips for 130 MPH Texas wind resistance and algae resistance.",
    },
    {
      icon: MapPin,
      title: "Belton Physical Base (Not Storm Chasers)",
      description:
        "Our shop is located at 2012 S Wall St in Belton, TX. We don't chase hail storms and disappear out of state. We live and work in Bell County.",
    },
    {
      icon: ShieldCheck,
      title: "Lifetime Craftsmanship Warranty",
      description:
        "We stand 100% behind our nail placement, valley cuts, and flashing seals. If there's ever an issue, Juan and Austin come back and make it right.",
    },
  ];

  return (
    <section id="standard" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="hazard">
            <Flame className="w-3.5 h-3.5 mr-1" />
            Our Quality Pledge
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            The <span className="text-gradient-amber">Big Boy Standard</span>: Built for the People!
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We started Big Boy Roofing to eliminate high-pressure sales gimmicks, sloppy yard cleanup, and subpar contractor work in Central Texas.
          </p>
        </div>

        {/* Feature Grid with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Craftsmanship Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl group">
              <Image
                src="/images/roof-craft.jpg"
                alt="Texas craftsman home in Belton with new IKO architectural shingle roof"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Float Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold shrink-0">
                    IKO
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">
                      Premium Class-4 Impact Resistance
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Engineered for Texas hail, intense UV heat & 130 MPH winds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="industrial-card p-5 sm:p-6 space-y-3 flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
