"use client";

import Image from "next/image";

const countries = [
  { name: "Europe", flag: "https://flagcdn.com/w80/eu.png" },
  { name: "UK", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Middle East", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_of_the_Cooperation_Council_for_the_Arab_States_of_the_Gulf.svg" },
  { name: "Africa", flag: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_the_African_Union.svg" },
  { name: "India", flag: "https://flagcdn.com/w80/in.png" },
  { name: "USA", flag: "https://flagcdn.com/w80/us.png" },
];

export default function TrustBar() {
  return (
    <div className="trust-bar-premium h-[90px] flex items-stretch bg-white border-y border-black/5 overflow-hidden relative dark:bg-[#0d121a] dark:border-white/5">
      {/* Side Label */}
      <div className="trust-label-container flex items-center px-6 md:px-12 relative z-10 bg-inherit whitespace-nowrap">
        <span className="trust-label-text text-[#1e293b] text-[11px] font-[900] uppercase tracking-[0.25em] opacity-80 dark:text-white">
          Trusted by clients across:
        </span>
      </div>

      {/* Marquee Area */}
      <div className="trust-marquee-container flex-1 relative flex items-center overflow-hidden">
        <div 
          className="world-map-pattern absolute inset-0 opacity-[0.04] pointer-events-none dark:opacity-[0.07] dark:invert"
          style={{ 
            backgroundImage: "url('https://www.transparenttextures.com/patterns/world-map.png')",
            backgroundSize: "500px",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center"
          }}
        />
        <div className="premium-track flex items-center gap-[50px] px-[50px] animate-trust-scroll hover:[animation-play-state:paused] w-max will-change-transform">
          {/* First Set */}
          {countries.map((country, idx) => (
            <div key={`c1-${idx}`} className="country-pill flex items-center justify-center gap-3 py-[10px] pl-[10px] pr-6 bg-white/90 backdrop-blur-md border border-black/5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[3px] hover:bg-white hover:border-primary hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] dark:bg-slate-800/70 dark:border-white/10">
              <div className="relative w-[38px] h-[38px] shrink-0 border-2 border-white rounded-full overflow-hidden">
                <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
              </div>
              <span className="pill-name text-[#1e293b] text-sm font-bold dark:text-slate-200">{country.name}</span>
            </div>
          ))}
          {/* Duplicate for Loop */}
          {countries.map((country, idx) => (
            <div key={`c2-${idx}`} className="country-pill flex items-center justify-center gap-3 py-[10px] pl-[10px] pr-6 bg-white/90 backdrop-blur-md border border-black/5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[3px] hover:bg-white hover:border-primary hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] dark:bg-slate-800/70 dark:border-white/10">
              <div className="relative w-[38px] h-[38px] shrink-0 border-2 border-white rounded-full overflow-hidden">
                <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
              </div>
              <span className="pill-name text-[#1e293b] text-sm font-bold dark:text-slate-200">{country.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes trust-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-trust-scroll {
          animation: trust-scroll 45s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-trust-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
}
