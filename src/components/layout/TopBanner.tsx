"use client";

import React from "react";
import { Phone, Zap, AlertTriangle } from "lucide-react";
import { track } from "@vercel/analytics";

export default function TopBanner() {
  const handleBannerCall = () => {
    try {
      track("phone_click", { location: "top_banner", number: "(254) 239-4393" });
    } catch {
      // analytics fallback
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-xs sm:text-sm font-bold py-2.5 px-4 shadow-md overflow-hidden border-b border-amber-400/50">
      <div className="container mx-auto flex items-center justify-between gap-3 text-center">
        <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-slate-950 text-amber-400 px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider animate-pulse">
            <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
            Bell County Storm Watch
          </span>
          <span className="hidden sm:inline text-slate-950 font-extrabold">•</span>
          <span className="font-bold text-slate-950">
            Free Same-Week Drone & Roof Inspections Active in Belton, Temple & Killeen
          </span>
        </div>

        <a
          href="tel:+12542394393"
          onClick={handleBannerCall}
          className="hidden md:inline-flex items-center gap-1.5 bg-slate-950 text-amber-300 hover:text-white px-3.5 py-1 rounded-full text-xs font-black transition-all hover:scale-105 shadow-sm shrink-0"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call Dispatch: (254) 239-4393</span>
        </a>
      </div>
    </div>
  );
}
