"use client";

import { useEffect, useRef, useState } from "react";

export default function AIFocus() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scanPos, setScanPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // We want the uncover to happen as the section moves from being fully visible 
      // towards the center/exit of the viewport.
      // Based on the user's logic: Starts when we reach the section, ends when we exit.
      
      const startPoint = viewportHeight * 0.9;
      const endPoint = viewportHeight * 0.1;
      const totalDistance = startPoint - endPoint;
      
      const progress = Math.max(0, Math.min(100, ((startPoint - rect.top) / totalDistance) * 100));
      setScanPos(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = "Most businesses don't lack software; they lack intelligence. At Acadeno, we embed AI modules directly into the systems your teams already use without disruption.";

  return (
    <section 
      id="what-we-do" 
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 relative overflow-hidden bg-white min-h-[auto] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center"
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#94a3b8 1px, transparent 1px),
            linear-gradient(90deg, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-20">
        <h2 className="font-headline text-2xl sm:text-4xl md:text-6xl font-extrabold mb-8 sm:mb-12 md:mb-16 text-[#191c1f] leading-tight tracking-tight px-0 sm:px-4">
          AI integration into software that <br className="hidden md:block" /> already exists.
        </h2>

        <div className="relative inline-block w-full">
          {/* Layer 1: Blurred & Faded Text (Bottom) */}
          <p className="text-base sm:text-xl md:text-3xl font-extrabold leading-[1.6] text-slate-400 blur-[3px] select-none opacity-60">
            {content}
          </p>

          {/* Layer 2: Sharp & Dark Text (Top - Clipped) */}
          <p 
            className="absolute inset-0 text-base sm:text-xl md:text-3xl font-extrabold leading-[1.6] text-[#1e293b]"
            style={{ 
              clipPath: `inset(0 ${100 - scanPos}% 0 0)`,
              transition: 'clip-path 0.1s ease-out'
            }}
          >
            {content}
          </p>

          {/* Vertical Scan Line */}
          <div 
            className="absolute top-[-5%] bottom-[-5%] w-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-30 transition-all duration-100 ease-out"
            style={{ 
              left: `${scanPos}%`,
              opacity: scanPos > 0 && scanPos < 100 ? 1 : 0
            }}
          />
        </div>
      </div>
    </section>
  );
}
