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
    <div className="trust-bar-premium flex flex-col items-center bg-[#f8f9fd] border-y border-black/5 overflow-hidden relative py-6 sm:py-8">
      {/* Centered Label */}
      <div className="trust-label-container relative z-10 mb-6 sm:mb-8 text-center px-4">
        <span className="trust-label-text text-[#1e293b]/60 text-[10px] sm:text-[11px] font-[900] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
          TRUSTED BY CLIENTS ACROSS:
        </span>
      </div>

      {/* Marquee Area */}
      <div className="trust-marquee-container w-full relative flex items-center overflow-hidden h-[50px] sm:h-[60px]">
        <div
          className="world-map-pattern absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/world-map.png')",
            backgroundSize: "400px",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center"
          }}
        />
        <div className="premium-track-wrapper w-full overflow-hidden">
          <div className="premium-track flex items-center gap-6 sm:gap-[60px] px-4 sm:px-[60px] animate-trust-scroll hover:[animation-play-state:paused] w-fit will-change-transform">
            {/* First Set */}
            {countries.map((country, idx) => (
              <div key={`c1-${idx}`} className="country-pill flex items-center justify-center gap-2 sm:gap-4 transition-all duration-300 hover:scale-105">
                <div className="relative w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] shrink-0 border-2 border-white rounded-full overflow-hidden shadow-sm">
                  <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
                </div>
                <span className="pill-name text-[#1e293b] text-[13px] sm:text-[15px] font-bold tracking-tight">{country.name}</span>
              </div>
            ))}
            {/* Duplicate for Loop */}
            {countries.map((country, idx) => (
              <div key={`c2-${idx}`} className="country-pill flex items-center justify-center gap-2 sm:gap-4 transition-all duration-300 hover:scale-105">
                <div className="relative w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] shrink-0 border-2 border-white rounded-full overflow-hidden shadow-sm">
                  <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
                </div>
                <span className="pill-name text-[#1e293b] text-[13px] sm:text-[15px] font-bold tracking-tight">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes trust-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 30px)); }
        }
        .animate-trust-scroll {
          animation: trust-scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
        @media (max-width: 768px) {
          .animate-trust-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
}

