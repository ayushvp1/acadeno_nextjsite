"use client";

import React, { useEffect } from 'react';

const reasons = [
  {
    number: "01",
    title: "SPECIALIZATION",
    description: "Embedding AI into your existing software -- it's what we were built to do."
  },
  {
    number: "02",
    title: "IP SECURITY",
    description: "NDA-first approach with full source code transfer at delivery."
  },
  {
    number: "03",
    title: "PRICING",
    description: "Honest commercial terms. Enterprise tech without the inflated retainers."
  },
  {
    number: "04",
    title: "EXECUTION",
    description: "Zero corporate red tape. We move at the speed your business demands."
  },
  {
    number: "05",
    title: "ADVANTAGE",
    description: "SEZ-registered entity in Govt Cyberpark, Calicut — world-class infra, global pricing."
  },
  {
    number: "06",
    title: "PARTNERSHIP",
    description: "One accountable partner for your entire technology landscape."
  }
];

export default function WhyAcadeno() {
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

    const cards = document.querySelectorAll('.why-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-acadeno" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-[#fff9f5]">
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ 
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px' 
             }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-[#1a365d] mb-10 sm:mb-16 tracking-tight leading-tight">
          A different kind of technology partner.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className="why-card group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-[#1a365d10] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Large Background Number with Outline Effect */}
              <div className="absolute top-4 right-4 text-[7rem] font-black text-blue-900/[0.04] group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_rgba(59,130,246,0.4)] transition-all duration-700 leading-none select-none pointer-events-none font-outfit">
                {reason.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform" />
                  <h3 className="text-sm font-black text-[#1a365d] uppercase tracking-[0.2em]">
                    {reason.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg font-bold text-slate-600 leading-relaxed max-w-[90%] group-hover:text-slate-900 transition-colors">
                  {reason.description}
                </p>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .why-card.reveal {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
