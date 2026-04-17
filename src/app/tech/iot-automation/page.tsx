"use client";

import Image from "next/image";
import { Cpu, Factory, Share2, Smartphone, Terminal, Zap } from "lucide-react";

export default function IotAutomationPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Header / Hero Section */}
      <header className="relative pt-32 pb-32 px-6 md:px-10 max-w-[1700px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <h1 className="font-headline text-5xl md:text-7xl font-[900] leading-[1.1] tracking-tight text-on-surface mb-8">
              IoT & Automation <br />
              <span className="bg-[linear-gradient(90deg,#00BFEA,#7B2FBE,#F05A22,#00BFEA)] bg-[length:300%_100%] bg-clip-text text-transparent animate-continuous-color-loop">
                Connected Hardware.
              </span>
            </h1>
            <p className="text-on-surface font-body font-[600] leading-relaxed text-lg md:text-xl mb-10 text-justify">
              We bridge the gap between physical hardware and digital intelligence, creating seamless ecosystems for industrial and consumer IoT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="px-12 py-5 bg-primary text-white font-[900] rounded-xl text-lg transition-all hover:opacity-90 active:scale-95 text-center shadow-lg shadow-primary/20">
                Deploy Your IoT Solution
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3]">
              <Image 
                src="/assets/tech_iot_hero.png" 
                alt="IoT & Automation" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Capabilities Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-20">
            <h2 className="font-headline text-5xl md:text-6xl font-[900] text-on-surface mb-8">
              Smarter assets, <br />
              autonomous control.
            </h2>
            <div className="w-20 h-2 bg-primary rounded-full mb-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-10 rounded-[32px] bg-[#f8f9fd] border border-slate-100 hover:shadow-xl transition-all group active:scale-[0.98]">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-[900] text-on-surface mb-4">Edge Computing</h3>
              <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                Real-time processing at the source for minimal latency and bandwidth efficiency in distributed systems.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-10 rounded-[32px] bg-[#f8f9fd] border border-slate-100 hover:shadow-xl transition-all group active:scale-[0.98]">
               <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/5 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-[900] text-on-surface mb-4">Industrial IoT (IIoT)</h3>
              <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                Smart manufacturing, asset tracking, and predictive maintenance for modern industrial environments.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-10 rounded-[32px] bg-[#f8f9fd] border border-slate-100 hover:shadow-xl transition-all group active:scale-[0.98]">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-[900] text-on-surface mb-4">Smart Ecosystems</h3>
              <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                Unified control and telemetry for distributed device networks with seamless software integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-[900] text-on-surface mb-10 leading-[1.2]">
              Hardware intelligence.
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/5">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-[900] text-on-surface mb-3">Consumer Electronics</h3>
                  <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                    Custom firmware and companion apps for lifestyle and consumer tech products.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/5">
                  <Terminal className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-[900] text-on-surface mb-3">Robotics Control</h3>
                  <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                    Advanced algorithms for robotic motion, sensing, and autonomous navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-[#0d0e14] text-white p-12 md:p-16 rounded-[48px] shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full -mr-32 -mt-32 group-hover:bg-primary/30 transition-all duration-700" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-[900] mb-8 leading-tight">
                Ready to transform your tech stack?
              </h3>
              <p className="text-lg font-[600] mb-12 text-white/70 leading-relaxed">
                Our architects are ready to evaluate your current systems and build a roadmap for modernization.
              </p>
              <a href="/#contact" className="signature-gradient bg-[linear-gradient(90deg,#00BFEA,#7B2FBE,#F05A22,#00BFEA)] bg-[length:300%_100%] transition-all duration-500 hover:animate-continuous-color-loop hover:scale-[1.03] active:scale-[0.96] text-white text-lg font-[900] px-10 py-5 rounded-2xl inline-flex items-center gap-3">
                Schedule a Technical Audit
                <Zap className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
