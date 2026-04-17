"use client";

import Image from "next/image";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-24 px-6 relative bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-16">

        {/* Vision Block */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 transform hover:scale-110 transition-transform duration-500">
            <img 
              src="https://img.icons8.com/color/120/vision.png" 
              alt="Vision Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-[#1e293b]">
            Our Vision
          </h3>
          <p className="text-lg md:text-xl font-bold text-slate-600 leading-[1.8] max-w-3xl mx-auto text-center">
            To be the world's most trusted AI integration partner — making intelligent technology accessible to every
            business, at every scale, across every market.
          </p>
        </div>

        <div className="w-24 h-px bg-slate-200 mx-auto"></div>

        {/* Mission Block */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 transform hover:scale-110 transition-transform duration-500">
            <img 
              src="https://img.icons8.com/color/120/goal--v1.png" 
              alt="Mission Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-[#1e293b]">
            Our Mission
          </h3>
          <p className="text-lg md:text-xl font-bold text-slate-600 leading-[1.8] max-w-3xl mx-auto text-center">
            To empower businesses globally by embedding AI intelligence into the software they already use — delivering
            world-class technology solutions that are precise, powerful, and priced for every scale.
          </p>
        </div>

      </div>
    </section>
  );
}
