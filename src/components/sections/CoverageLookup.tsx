"use client";

import React, { useState } from "react";
import { MapPin, CheckCircle2, Clock, Shield, ArrowRight, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { track } from "@vercel/analytics";

interface CoverageData {
  city: string;
  zip: string;
  county: string;
  status: "Immediate Dispatch" | "Same-Day Active" | "Priority Scheduling";
  eta: string;
  hailRisk: "High Activity" | "Moderate" | "Active Watch";
  crew: string;
}

const coverageDatabase: Record<string, CoverageData> = {
  "76513": {
    city: "Belton",
    zip: "76513",
    county: "Bell County (Home Base)",
    status: "Immediate Dispatch",
    eta: "15 - 30 Minutes",
    hailRisk: "Active Watch",
    crew: "Juan & Austin Direct Squad",
  },
  "76501": {
    city: "Temple (East)",
    zip: "76501",
    county: "Bell County",
    status: "Same-Day Active",
    eta: "20 - 40 Minutes",
    hailRisk: "High Activity",
    crew: "Temple Mobile Unit 1",
  },
  "76502": {
    city: "Temple (South / West)",
    zip: "76502",
    county: "Bell County",
    status: "Same-Day Active",
    eta: "20 - 35 Minutes",
    hailRisk: "High Activity",
    crew: "Temple Mobile Unit 2",
  },
  "76504": {
    city: "Temple (North)",
    zip: "76504",
    county: "Bell County",
    status: "Same-Day Active",
    eta: "25 - 45 Minutes",
    hailRisk: "High Activity",
    crew: "Temple Mobile Unit 1",
  },
  "76571": {
    city: "Salado",
    zip: "76571",
    county: "Bell County",
    status: "Immediate Dispatch",
    eta: "15 - 30 Minutes",
    hailRisk: "Moderate",
    crew: "Salado / Belton Rapid Response",
  },
  "76542": {
    city: "Killeen",
    zip: "76542",
    county: "Bell County",
    status: "Same-Day Active",
    eta: "30 - 45 Minutes",
    hailRisk: "High Activity",
    crew: "Killeen / Fort Cavazos Team",
  },
  "76548": {
    city: "Harker Heights",
    zip: "76548",
    county: "Bell County",
    status: "Same-Day Active",
    eta: "25 - 40 Minutes",
    hailRisk: "Active Watch",
    crew: "Bell County West Unit",
  },
  "76579": {
    city: "Troy",
    zip: "76579",
    county: "Bell County",
    status: "Same-Day Active",
    eta: "25 - 40 Minutes",
    hailRisk: "Moderate",
    crew: "I-35 North Response",
  },
  "76657": {
    city: "Moody / Lorena",
    zip: "76657",
    county: "McLennan / Bell County",
    status: "Priority Scheduling",
    eta: "35 - 50 Minutes",
    hailRisk: "Moderate",
    crew: "Central Texas Field Unit",
  },
  "78626": {
    city: "Georgetown",
    zip: "78626",
    county: "Williamson County",
    status: "Priority Scheduling",
    eta: "35 - 55 Minutes",
    hailRisk: "Active Watch",
    crew: "South Corridor Team",
  },
};

export default function CoverageLookup() {
  const [zipInput, setZipInput] = useState("76513");
  const [selectedData, setSelectedData] = useState<CoverageData>(coverageDatabase["76513"]);
  const [searched, setSearched] = useState(true);

  const handleSearch = (zipToSearch: string) => {
    const cleanZip = zipToSearch.trim();
    setZipInput(cleanZip);

    if (coverageDatabase[cleanZip]) {
      setSelectedData(coverageDatabase[cleanZip]);
      setSearched(true);
      try {
        track("coverage_lookup_match", { zip: cleanZip, city: coverageDatabase[cleanZip].city });
      } catch {}
    } else if (cleanZip.length === 5) {
      // General Central Texas match
      setSelectedData({
        city: `Central Texas Area (${cleanZip})`,
        zip: cleanZip,
        county: "Bell & Surrounding Counties",
        status: "Same-Day Active",
        eta: "30 - 60 Minutes",
        hailRisk: "Active Watch",
        crew: "Big Boy Mobile Dispatch",
      });
      setSearched(true);
    }
  };

  const quickZips = [
    { label: "Belton (76513)", zip: "76513" },
    { label: "Temple (76502)", zip: "76502" },
    { label: "Salado (76571)", zip: "76571" },
    { label: "Killeen (76542)", zip: "76542" },
    { label: "Harker Heights (76548)", zip: "76548" },
  ];

  return (
    <section id="coverage" className="py-16 md:py-24 bg-slate-950 relative border-t border-b border-slate-800/80">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="hazard" className="mb-2">
            <MapPin className="w-3.5 h-3.5 mr-1" />
            Live Dispatch Radar
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Check Roof Inspection Availability in <span className="text-gradient-amber">Your Neighborhood</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Based at 2012 S Wall St in Belton, our mobile roofing inspection trucks cover all of Bell County and Central Texas daily.
          </p>
        </div>

        {/* Interactive Lookup Box */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
              <Input
                type="text"
                placeholder="Enter 5-digit ZIP (e.g. 76513, 76502, 76571)..."
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch(zipInput)}
                maxLength={5}
                className="pl-12 text-base font-bold bg-slate-950 text-white border-slate-700 h-13"
              />
            </div>
            <Button
              onClick={() => handleSearch(zipInput)}
              variant="default"
              size="lg"
              className="w-full sm:w-auto font-black px-8"
            >
              Check Availability
            </Button>
          </div>

          {/* Quick Select Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-800/80">
            <span className="text-xs text-slate-400 font-semibold">Popular Bell County Areas:</span>
            {quickZips.map((item) => (
              <button
                key={item.zip}
                onClick={() => handleSearch(item.zip)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all font-medium ${
                  zipInput === item.zip
                    ? "bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm"
                    : "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Active Result Card */}
          {searched && selectedData && (
            <div className="mt-6 p-6 rounded-xl bg-slate-950/80 border border-amber-500/40 animate-in fade-in-50 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* City & Status */}
                <div className="space-y-1 md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Target Location</span>
                  <h3 className="text-xl font-black text-white">{selectedData.city}</h3>
                  <p className="text-xs text-slate-400">{selectedData.county}</p>
                </div>

                {/* Dispatch Status */}
                <div className="space-y-1 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:px-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Dispatch Status</span>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    {selectedData.status}
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Arrival ETA: {selectedData.eta}
                  </p>
                </div>

                {/* Assigned Crew & Storm Risk */}
                <div className="space-y-1 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:px-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Storm Inspection Unit</span>
                  <p className="text-sm font-bold text-slate-200">{selectedData.crew}</p>
                  <p className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-amber-400" />
                    {selectedData.hailRisk} in Area
                  </p>
                </div>

                {/* CTA */}
                <div className="md:col-span-1 flex flex-col gap-2 md:pl-2">
                  <Button asChild size="default" variant="hazard" className="w-full text-xs font-black">
                    <a href={`#quote-form`}>
                      Claim Free Inspection
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </Button>
                  <a
                    href="tel:+12542394393"
                    className="text-center text-[11px] text-slate-400 hover:text-amber-400 transition-colors font-mono"
                  >
                    Or call (254) 239-4393
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
