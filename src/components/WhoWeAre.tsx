"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const GeoHighlight = ({ children, timezone, tooltip }: { children: React.ReactNode, timezone: string, tooltip: string }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <span className="relative inline-block text-[#1e293b] font-medium border-b-2 border-[#3b82f6] cursor-help group transition-all hover:bg-blue-500/5 px-1 rounded-sm">
      {children}
      <span className="absolute bottom-[125%] left-1/2 -translate-x-1/2 mb-1 px-3.5 py-1.5 bg-[#0f172a] text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-mono tracking-tight shadow-lg pointer-events-none translate-y-1 group-hover:translate-y-0 z-50">
        {tooltip}: {time}
      </span>
    </span>
  );
};

export default function WhoWeAre() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-[1700px] mx-auto relative overflow-hidden bg-white">
      {/* Blueprint Grid Background exactly as per style.css */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 relative z-10">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-12 xl:col-span-7 text-center xl:text-left">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#191c1f] mb-4 sm:mb-6 tracking-[-0.02em] leading-tight">
            Who We Are
          </h2>
          
          <div className="space-y-6">
            <p className="font-headline text-lg sm:text-2xl md:text-3xl font-extrabold text-[#191c1f] leading-tight mb-4 sm:mb-6">
              We don't rebuild what works. <br />
              We make it work smarter.
            </p>

            <div className="space-y-6 sm:space-y-10">
              <p className="font-body font-semibold text-base sm:text-lg md:text-xl leading-relaxed text-[#191c1f]/80">
                Acadeno Technologies Private Limited is an enterprise software development and AI engineering company 
                headquartered in Calicut, Keralam — operating from{" "}
                <GeoHighlight timezone="Asia/Kolkata" tooltip="Calicut">
                  Govt Cyberpark
                </GeoHighlight>
                <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] ml-2 animate-pulse align-middle shadow-[0_0_6px_#10b981]" />, 
                one of India's most advanced SEZ technology hubs.
              </p>

              <p className="font-body font-semibold text-base sm:text-lg md:text-xl leading-loose text-[#191c1f]/80">
                Founded in 2025, we were built around a single, focused belief: that artificial intelligence should 
                integrate into the tools your business already depends on — not replace them. Our team of specialists 
                and architects works across industries and geographies to layer intelligence into existing software without 
                the cost and complexity of rebuilding.
              </p>

              <p className="font-body font-semibold text-base sm:text-lg md:text-xl leading-loose text-[#191c1f]/80">
                We serve clients across the{" "}
                <GeoHighlight timezone="America/New_York" tooltip="NY">USA</GeoHighlight>,{" "}
                <GeoHighlight timezone="Europe/London" tooltip="London">UK</GeoHighlight>, 
                Europe, and the{" "}
                <GeoHighlight timezone="Asia/Dubai" tooltip="Dubai">Middle East</GeoHighlight> 
                — delivering solutions precise in execution and built to perform at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Component exactly as per glass-component-wrap */}
        <div className="hidden xl:flex xl:col-span-5 relative flex-col justify-center">
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#e2e8f0] shadow-sm group">
            <Image 
              src="/assets/pcb_circuit_macro.webp" 
              alt="Macro view of high-tech circuit board" 
              fill 
              sizes="(max-width: 1280px) 0vw, 40vw"
              className="object-cover opacity-20 grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Stat Cards - Exact Positions and Styles from old CSS */}
            <div className="absolute top-[20%] left-[6%] bg-white/90 backdrop-blur-md px-6 py-4 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/50 z-10">
              <p className="text-[#1e293b] font-headline font-bold text-sm">Est. 2025</p>
            </div>

            <div className="absolute top-[50%] right-[6%] bg-white/90 backdrop-blur-md px-6 py-4 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/50 z-10">
              <p className="text-[#1e293b] font-headline font-bold text-sm">18+ AI Specialists</p>
            </div>

            <div className="absolute bottom-[15%] left-[10%] bg-white/90 backdrop-blur-md px-6 py-4 rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/50 z-10">
              <p className="text-[#1e293b] font-headline font-bold text-sm">Global SEZ Operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
