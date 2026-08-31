"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  AlertCircle,
  FileText,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { track } from "@vercel/analytics";

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    zip: "76513",
    serviceCategory: "Hail & Storm Damage Insurance Claim",
    timeframe: "As soon as possible",
    notes: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dispatchNumber, setDispatchNumber] = useState("");

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f59e0b", "#fbbf24", "#ffffff", "#10b981"],
      });
    } catch {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      toast.error("Please provide your name, phone number, and address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setDispatchNumber(data.dispatchId || "BBR-76513");
        triggerConfetti();
        toast.success("Inspection Request Dispatched!", {
          description: `Juan & Austin's team will call you at ${formData.phone} shortly.`,
        });

        try {
          track("inspection_requested", {
            service: formData.serviceCategory,
            zip: formData.zip,
          });
        } catch {}
      } else {
        toast.error(data.error || "Submission failed. Please call us directly.");
      }
    } catch (err) {
      toast.error("Network error. Please call our Belton dispatch at (254) 239-4393.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="quote-form"
      className="py-16 md:py-24 bg-gradient-to-b from-[#0a0d14] via-[#0e131d] to-[#0a0d14] relative border-t border-slate-800"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Guarantees & Why Big Boy */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="hazard">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              100% Free Inspection
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Schedule Your <span className="text-gradient-amber">Zero-Obligation</span> Roof & Attic Inspection
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you suspect recent Bell County hail damage, noticed missing shingle tabs, or need an honest second opinion before speaking to your insurance company—we&apos;re here for you.
            </p>

            {/* Benefit Bullets */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full 21-Point Digital Report</h4>
                  <p className="text-xs text-slate-400">High-res photos of shingles, flashing, decking, and pipe boots provided with zero pressure.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">We Meet Your Adjuster On The Roof</h4>
                  <p className="text-xs text-slate-400">We point out legitimate storm damage directly to the insurance adjuster so nothing gets missed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Nail Left Behind Sweep</h4>
                  <p className="text-xs text-slate-400">Double magnetic rolling sweeps around your driveway, grass, and flowerbeds on every job.</p>
                </div>
              </div>
            </div>

            {/* Direct Phone Call Link */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Need Emergency Dispatch?
                </span>
                <span className="text-sm font-black text-white">Call Juan or Austin directly:</span>
              </div>
              <a
                href="tel:+12542394393"
                className="px-3.5 py-2 rounded-lg bg-amber-500 text-slate-950 font-black text-xs hover:bg-amber-400 transition-colors shadow-sm shrink-0"
              >
                (254) 239-4393
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-slate-800 bg-slate-900/90 shadow-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />

              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in-50 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Inspection Request Received!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Dispatch ticket <span className="font-mono text-amber-400 font-bold">{dispatchNumber}</span> has been assigned to our Belton crew.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto space-y-1">
                    <p className="font-bold text-slate-200">What happens next?</p>
                    <p>1. Our coordinator will call you at {formData.phone} to confirm your inspection time.</p>
                    <p>2. A licensed roofer will arrive on-site with full safety gear and drone equipment.</p>
                  </div>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        address: "",
                        zip: "76513",
                        serviceCategory: "Hail & Storm Damage Insurance Claim",
                        timeframe: "As soon as possible",
                        notes: "",
                        honeypot: "",
                      });
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-4 mb-4">
                    <h3 className="text-xl font-black text-white">
                      Request Inspection & Estimate
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fast response • No credit card required • 100% Free
                    </p>
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website_field"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Homeowner Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. John Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  {/* Phone & ZIP Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-7 space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="(254) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="sm:col-span-5 space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        ZIP Code *
                      </label>
                      <Input
                        type="text"
                        placeholder="76513"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        maxLength={5}
                        required
                      />
                    </div>
                  </div>

                  {/* Street Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Street Address in Central Texas *
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. 104 Heritage Way, Belton, TX"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  {/* Service Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Primary Roofing Need
                    </label>
                    <Select
                      value={formData.serviceCategory}
                      onValueChange={(val) => setFormData({ ...formData, serviceCategory: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select service..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Hail & Storm Damage Insurance Claim">
                          ⚡ Hail / Wind Storm Damage (Insurance Claim)
                        </SelectItem>
                        <SelectItem value="Complete Roof Replacement">
                          🏠 Complete Roof Replacement (IKO Architectural)
                        </SelectItem>
                        <SelectItem value="Emergency Roof Leak Repair">
                          🚨 Emergency Leak Repair / Missing Shingles
                        </SelectItem>
                        <SelectItem value="Gutters & Siding Restoration">
                          💧 Seamless Gutters & Downspouts
                        </SelectItem>
                        <SelectItem value="Free Pre-Sale or Buying Inspection">
                          🔍 Free 21-Point Buyer / Seller Inspection
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Timeframe */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Preferred Timeline
                    </label>
                    <Select
                      value={formData.timeframe}
                      onValueChange={(val) => setFormData({ ...formData, timeframe: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="As soon as possible">
                          🔴 ASAP (Active leak or emergency)
                        </SelectItem>
                        <SelectItem value="Within 2 to 3 days">
                          🟡 Within 2-3 Days (Standard Inspection)
                        </SelectItem>
                        <SelectItem value="This Weekend">
                          🟢 This Weekend
                        </SelectItem>
                        <SelectItem value="Next week / Planning ahead">
                          ⚪ Planning Ahead / Pre-claim check
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Notes or Damage Description (Optional)
                    </label>
                    <Textarea
                      placeholder="Describe what you're experiencing (e.g. ceiling water spot, adjuster meeting scheduled for Thursday, high wind tore off shingles)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hazard"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full text-base font-black tracking-wide"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Dispatching Inspection Request...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Book Free Inspection Now
                      </span>
                    )}
                  </Button>

                  {/* Privacy & Reassurance Microcopy */}
                  <div className="flex items-center justify-center gap-2 text-center text-[11px] text-slate-400 pt-1">
                    <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>🔒 100% Free • No Obligation • Dispatched to Juan & Austin&apos;s Local Crew</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
