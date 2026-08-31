"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star, ShieldCheck, Heart } from "lucide-react";
import { track } from "@vercel/analytics";

export default function Footer() {
  const handleFooterCall = () => {
    try {
      track("phone_click", { location: "footer_nap", number: "(254) 239-4393" });
    } catch {}
  };

  const serviceAreas = [
    "Belton (76513)",
    "Temple (76501, 76502, 76504)",
    "Salado (76571)",
    "Killeen (76542)",
    "Harker Heights (76548)",
    "Troy (76579)",
    "Morgan's Point Resort",
    "Nolanville",
    "Georgetown",
    "Greater Bell County",
  ];

  return (
    <footer className="bg-[#07090e] border-t border-slate-800 text-slate-400 pt-16 pb-28 md:pb-12 text-sm relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 bg-slate-900 shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Big Boy Roofing Mascot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white uppercase tracking-tight">
                  Big Boy Roofing
                </span>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Built for the People!
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Locally owned and operated roofing contractors in Belton, TX. Founded by Juan Barron and Austin Farr to deliver honest storm damage inspections, IKO certified roof replacements, leak repairs, and seamless insurance claim advocacy across Bell County.
            </p>

            {/* Google & FB Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-amber-400 font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                4.8★ on Google (21 Reviews)
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-blue-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                96% Recommended on FB
              </div>
            </div>
          </div>

          {/* Contact & NAP Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Belton Headquarters
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Physical Location:</strong>
                  <span>2012 S Wall St, Belton, TX 76513</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Phone / Dispatch:</strong>
                  <a
                    href="tel:+12542394393"
                    onClick={handleFooterCall}
                    className="text-amber-400 hover:underline font-bold text-sm"
                  >
                    (254) 239-4393
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direct Email:</strong>
                  <a
                    href="mailto:Juanbarron1214@gmail.com"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Juanbarron1214@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Operating Hours:</strong>
                  <span>7:00 AM – 7:00 PM (Mon – Sat)</span>
                  <span className="block text-amber-400/80 text-[11px]">24/7 Emergency Storm Dispatch</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Roofing Services
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">
                  Bell County Coverage
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-amber-400 transition-colors">
                  Insurance Claim Process
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-amber-400 transition-colors">
                  The Big Boy Standard
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#quote-form" className="hover:text-amber-400 transition-colors font-bold text-amber-400">
                  Free Inspection Form
                </a>
              </li>
            </ul>
          </div>

          {/* Bell County Service Territory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-2">
              Serving Bell, McLennan, Coryell, and Williamson Counties.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Big Boy Roofing LLC. All Rights Reserved. • Belton, TX
          </div>
          <div className="flex items-center gap-4">
            <span>Fully Licensed & Insured in Texas</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Built for the People <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Central TX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
