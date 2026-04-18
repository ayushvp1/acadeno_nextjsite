"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const industries = [
  {
    name: "Healthcare",
    focus: "Interoperability & Diagnostic Precision AI",
    icon: "https://img.icons8.com/color/120/medical-heart.png",
    color: "#FF5252"
  },
  {
    name: "BFSI",
    focus: "Fraud Detection & Intelligent Underwriting",
    icon: "https://img.icons8.com/color/120/bank.png",
    color: "#448AFF"
  },
  {
    name: "Retail",
    focus: "Hyper-Personalized Recommendation Engines",
    icon: "https://img.icons8.com/color/120/shopping-cart--v1.png",
    color: "#FFA000"
  },
  {
    name: "Logistics",
    focus: "Predictive Route & Inventory Optimization",
    icon: "https://img.icons8.com/color/120/truck.png",
    color: "#4CAF50"
  },
  {
    name: "Education",
    focus: "Adaptive Learning Platforms & Automated Grading",
    icon: "https://img.icons8.com/color/120/graduation-cap.png",
    color: "#7E57C2"
  }
];

export default function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.industry-card-new');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-surface">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(#1a365d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-[#1a365d] mb-4 sm:mb-6 tracking-tight leading-tight px-4">
            Engineering intelligence for <br className="hidden md:block" /> the sectors that move the world.
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00BFEA] via-[#7B2FBE] to-[#F05A22] mx-auto rounded-full" />
        </div>

        {/* Desktop Grid - Fixed 5 columns */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={`${industry.name}-desktop`} industry={industry} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet Autoscrolling Marquee */}
        <div className="lg:hidden w-full overflow-hidden py-4 -mx-4 px-4">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-4 px-4">
            {[...industries, ...industries, ...industries].map((industry, index) => (
              <div key={`${industry.name}-mobile-${index}`} className="w-[180px] sm:w-[240px] shrink-0">
                <IndustryCard industry={industry} index={index} isMobile />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .industry-card-new {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .industry-card-new.reveal {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33% - 10.66px)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
}

function IndustryCard({ industry, index, isMobile = false }: { industry: typeof industries[0], index: number, isMobile?: boolean }) {
  return (
    <Link
      href={`/${industry.name.toLowerCase()}`}
      className={`industry-card-new group relative bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden flex flex-col items-center text-center no-underline block ${isMobile ? 'p-6 h-full' : 'p-8'}`}
      style={{ 
        transitionDelay: isMobile ? '0ms' : `${index * 100}ms`,
        opacity: isMobile ? 1 : undefined,
        transform: isMobile ? 'none' : undefined
      }}
    >
      {/* Background Accent */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: industry.color }}
      />
      
      {/* Icon Container with Floating Effect */}
      <div className="mb-4 sm:mb-6 md:mb-8 relative transform group-hover:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: industry.color }}></div>
        <img 
          src={industry.icon} 
          alt={industry.name}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain relative z-10"
        />
      </div>

      <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-4 transition-all duration-500"
          style={{ color: industry.color }}>
        {industry.name}
      </h3>

      <p className="text-[10px] sm:text-sm font-bold text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors duration-500 line-clamp-2">
        {industry.focus}
      </p>

      {/* Glass Glare */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45 pointer-events-none group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-1000" />
    </Link>
  );
}
