"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-12 px-6 md:px-10 max-w-[1700px] mx-auto overflow-hidden min-h-[80vh] flex items-center">
      
      {/* Precision Blueprint Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(#1a365d 1.5px, transparent 1.5px),
            linear-gradient(90deg, #1a365d 1.5px, transparent 1.5px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(0, 40, 109, 0.05) 0%, transparent 60%)`,
        }}
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.2] tracking-tight text-on-surface mb-8">
            Your software, <br />
            <span 
              className="text-6xl md:text-[90px] lg:text-[120px] inline-block pb-8 bg-clip-text text-transparent animate-gradient-flow"
              style={{ 
                backgroundImage: 'linear-gradient(90deg, #00BFEA, #7B2FBE, #F05A22, #00BFEA)',
                backgroundSize: '200% 100%'
              }}
            >
              made intelligent.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-bold text-on-surface/90 max-w-3xl mb-10 leading-relaxed font-body">
            We embed AI directly into the systems your business already runs — no replacements, no disruption, no starting over. Just measurably smarter operations from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/#contact" className="no-underline">
              <button className="px-12 py-5 bg-primary text-white font-extrabold rounded-xl text-lg hover:opacity-90 transition-all active:scale-95 text-center tracking-wide font-body w-full sm:w-auto">
                Discuss Your Project
              </button>
            </Link>
            <Link href="/#capabilities" className="no-underline">
              <button className="px-12 py-5 bg-surface-container-lowest outline outline-1 outline-[rgba(196,198,211,0.15)] text-on-surface font-extrabold rounded-xl text-lg hover:bg-gray-50 transition-all active:scale-95 text-center tracking-wide font-body w-full sm:w-auto">
                View Our Capabilities
              </button>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center px-8 first:pl-0">
              <span className="text-4xl font-extrabold text-on-surface leading-none font-body">16+</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1 font-body">Service Areas</span>
            </div>
            <div className="w-px h-10 bg-outline-variant flex-shrink-0" />
            <div className="flex flex-col items-center px-8">
              <span className="text-4xl font-extrabold text-on-surface leading-none font-body">7+</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1 font-body">Global Clients</span>
            </div>
            <div className="w-px h-10 bg-outline-variant flex-shrink-0" />
            <div className="flex flex-col items-center px-8">
              <span className="text-4xl font-extrabold text-on-surface leading-none font-body">SEZ</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1 font-body">Govt Cyberpark</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 relative group">
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-square rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest outline outline-1 outline-[rgba(196,198,211,0.15)] transform transition-transform duration-300 hover:-translate-y-2">
            <Image 
              src="/assets/finalhero.jpg" 
              alt="Abstract Neural Network Representation of Acadeno AI Integration" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

