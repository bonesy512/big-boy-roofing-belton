"use client";

import React from "react";
import { Star, ShieldCheck, ThumbsUp, MapPin, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ReviewItem {
  name: string;
  location: string;
  source: "Google Verified Review" | "Facebook Recommendation";
  rating: number;
  date: string;
  service: string;
  content: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Marcus R.",
    location: "Belton, TX (near Sparta Rd)",
    source: "Google Verified Review",
    rating: 5,
    date: "1 month ago",
    service: "Full Roof Replacement (Hail Damage)",
    content:
      "Juan and Austin are the real deal. After the spring hail storms, three different out-of-town companies knocked on our door making wild promises. We called Big Boy Roofing because they're based right here in Belton. Juan met our insurance adjuster on our roof, pointed out damage the adjuster didn't see, and got the full replacement approved. Done in one day, zero nails in my driveway.",
  },
  {
    name: "Sarah & David T.",
    location: "Temple, TX (West Temple)",
    source: "Facebook Recommendation",
    rating: 5,
    date: "3 weeks ago",
    service: "Emergency Leak Repair & Flashing",
    content:
      "Had water coming through our master bedroom ceiling during heavy rain. Called Big Boy Roofing at 8 PM and Austin was at our house the next morning. Found the rotted pipe boot, fixed it properly, and didn't try to upsell us on a whole new roof. Honest, hard-working guys. 100% recommend!",
  },
  {
    name: "Robert M.",
    location: "Salado, TX",
    source: "Google Verified Review",
    rating: 5,
    date: "2 months ago",
    service: "IKO Dynasty Architectural Shingles",
    content:
      "Big Boy Roofing did our roof and seamless gutters. The IKO Dynasty shingles in Appalachian look unbelievable on our house. The crew arrived at 7:00 AM sharp, protected all our shrubs and pool equipment with tarps, and left the property spotless. Truly 'Built for the People'.",
  },
  {
    name: "Elena G.",
    location: "Killeen / Harker Heights, TX",
    source: "Google Verified Review",
    rating: 5,
    date: "4 months ago",
    service: "Insurance Claim & Drone Inspection",
    content:
      "The 21-point drone report they gave us was super thorough. It had timestamped photos of hail impacts and broken shingle seals. When our insurance adjuster came out, Big Boy was there on the ladder with them. The whole process was seamless.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-b from-[#0a0d14] via-[#0d121c] to-[#0a0d14] relative border-t border-slate-800">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="hazard">
            <Star className="w-3.5 h-3.5 mr-1 fill-slate-950" />
            Verified Customer Feedback
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            What Central Texas Homeowners <span className="text-gradient-amber">Say About Us</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Backed by a 4.8★ Google rating and 96% Facebook recommendation from your neighbors in Belton, Temple, Salado, and Killeen.
          </p>

          {/* Social Proof Aggregate Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-white">4.8 / 5.0</span>
              <span className="text-slate-400">(21 Google Reviews)</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
              <ThumbsUp className="w-4 h-4 text-blue-400 fill-blue-400" />
              <span className="font-extrabold text-white">96% Recommended</span>
              <span className="text-slate-400">(16 Facebook Reviews)</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-extrabold text-white">870+ Followers</span>
              <span className="text-slate-400">(Bell County Community)</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="industrial-card p-6 sm:p-7 flex flex-col justify-between relative space-y-4"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-slate-800/80 pointer-events-none" />

              <div className="space-y-3">
                {/* Rating & Source */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-[10px] text-slate-400 border-slate-700 bg-slate-950">
                    {rev.source}
                  </Badge>
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-amber-400 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 shrink-0" />
                    {rev.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 block">
                    {rev.service}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
