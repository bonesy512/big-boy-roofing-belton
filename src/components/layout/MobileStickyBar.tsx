"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { track } from "@vercel/analytics";

export default function MobileStickyBar() {
  const handleStickyCall = () => {
    try {
      track("phone_click", { location: "mobile_sticky_bar", number: "(254) 239-4393" });
    } catch {}
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-3 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Direct Call Button */}
        <a
          href="tel:+12542394393"
          onClick={handleStickyCall}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 border border-amber-500/50 text-amber-400 font-extrabold text-xs tracking-wide shadow-md active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 fill-current shrink-0" />
          <span>Call (254) 239-4393</span>
        </a>

        {/* Free Inspection Form Anchor Button */}
        <a
          href="#quote-form"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow-amber active:scale-95 transition-all text-center"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>Free Inspection</span>
        </a>
      </div>
    </div>
  );
}
