import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import businessData from '@/data/data.json';

export default function TestimonialsSection() {
  const { verifiedReviews, socialProof } = businessData;

  return (
    <section id="reviews" className="relative py-20 bg-[#0c101a] border-t border-slate-800/80 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Central Texas Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved Across Belton, Temple & Bell County
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Real feedback from local homeowners who trusted Juan, Austin, and our crew with their homes, hail damage claims, and 1-day roof replacements.
          </p>

          {/* Social Proof Aggregate Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </span>
              <span className="font-bold text-white">{socialProof.googleRating}★</span>
              <span className="text-slate-400">({socialProof.googleReviews} Google Reviews)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">{socialProof.facebookRecommendation}</span>
              <span className="text-slate-400">on Facebook</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedReviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 backdrop-blur-sm group"
            >
              <div>
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {review.project && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {review.project}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-300 leading-relaxed relative">
                  <Quote className="w-5 h-5 text-slate-700/50 absolute -top-2 -left-1 -z-10" />
                  "{review.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                    {review.author}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {review.badge ? `${review.badge} • Verified Homeowner` : 'Verified Belton/Temple Homeowner'}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs text-amber-400">
                  {review.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
