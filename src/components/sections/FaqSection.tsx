"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How do I know if my Belton or Temple roof has hail damage after a storm?",
    answer:
      "Hail damage is often invisible from the ground. It typically presents as bruised fiberglass mats, dislodged granules, dented metal flashing, and soft spots that compromise waterproofing. Over time, UV exposure causes these damaged areas to crack and leak. Big Boy Roofing provides a 100% free 21-point photo and drone inspection to verify whether you have legitimate storm damage before you contact your insurance company.",
  },
  {
    question: "Will my insurance rates increase if I file a hail damage claim in Texas?",
    answer:
      "In Texas, hail and wind storms are classified as 'Acts of God' or natural occurrences outside your control. Insurance carriers generally cannot single you out for rate increases based solely on a storm claim. Instead, rates in an entire ZIP code are adjusted based on regional weather patterns. If everyone in your neighborhood is getting new roofs approved and you don&apos;t file, you may be paying higher premiums without receiving the benefits.",
  },
  {
    question: "Do you charge anything for your drone and roof inspections?",
    answer:
      "No. Our 21-point roof and attic inspections are 100% free with zero obligation. We provide high-resolution photos and honest assessment notes. If your roof is in great shape, we&apos;ll tell you so you have peace of mind. If there is damage, we outline your options clearly.",
  },
  {
    question: "Why is it important to have Big Boy Roofing present when the insurance adjuster visits?",
    answer:
      "Insurance adjusters inspect dozens of storm-damaged homes each week. Having Juan Barron or Austin Farr on your roof with safety gear ensures that all damage—including valley metal, chimney crickets, ridge caps, and pipe boots—is documented on the spot. We speak the adjuster&apos;s language, share Xactimate line-item estimates, and advocate for full, fair claim coverage.",
  },
  {
    question: "Why does Big Boy Roofing recommend and install IKO shingle systems?",
    answer:
      "IKO Dynasty and Cambridge architectural shingles are engineered specifically for extreme Texas conditions. They feature the patented ArmourZone high-nailing strip for 130 MPH wind resistance, FastLock sealant strips, and Class 4 impact resistance options that help reduce homeowner insurance premiums.",
  },
  {
    question: "How long does a standard residential roof replacement take?",
    answer:
      "Most residential roof replacements in Belton, Temple, and Salado are completed in just 1 to 2 days. Our crew arrives early, covers your siding, landscaping, and AC units with protective tarps, tears off old materials down to the decking, makes necessary wood repairs, installs the new roofing system, and conducts double magnetic yard sweeps before leaving.",
  },
  {
    question: "How do you guarantee that nails won&apos;t puncture my car tires or hurt pets?",
    answer:
      "We use high-power magnetic rolling sweepers designed specifically for roofing debris. We sweep driveways, walkways, flowerbeds, and perimeter grass twice—once immediately after tear-off and once after final shingle installation. That&apos;s part of our Big Boy Standard.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="hazard">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            Homeowner Knowledge Base
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-gradient-amber">Roofing Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about Bell County hail claims, insurance adjusters, and roof replacements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-sm sm:text-base font-bold text-white hover:text-amber-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* FAQ Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-3">
            <h4 className="text-base font-bold text-white">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Call our local Belton office directly or submit your address for a quick consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href="tel:+12542394393"
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-slate-700 inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                Call (254) 239-4393
              </a>
              <Button asChild variant="hazard" size="sm">
                <a href="#quote-form">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  Schedule Free Inspection
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
