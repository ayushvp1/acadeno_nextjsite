"use client";

import Image from "next/image";

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Header / Hero Section */}
      <header className="relative pt-32 pb-32 px-6 md:px-10 max-w-[1700px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <h1 className="font-headline text-5xl md:text-7xl font-[900] leading-[1.1] tracking-tight text-on-surface mb-8">
              Smarter Care. <br />
              <span className="bg-[linear-gradient(90deg,#00BFEA,#7B2FBE,#F05A22,#00BFEA)] bg-[length:300%_100%] bg-clip-text text-transparent animate-continuous-color-loop">
                AI Engineered.
              </span>
            </h1>
            <p className="text-on-surface font-body font-[600] leading-relaxed text-lg md:text-xl mb-10 text-justify">
              We integrate AI-driven intelligence into existing hospital EHRs, diagnostic tools, and scheduling systems
              to reduce error, save time, and prioritize clinical judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="px-12 py-5 bg-primary text-white font-[900] rounded-xl text-lg transition-all hover:opacity-90 active:scale-95 text-center shadow-lg shadow-primary/20">
                Deploy Your AI Solution
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3]">
              <Image 
                src="/assets/healthcare_banner.webp" 
                alt="AI Healthcare Integration" 
                fill 
                className="object-cover grayscale-[20%]"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Value Propositions Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-20">
            <h2 className="font-headline text-5xl md:text-6xl font-[900] text-on-surface mb-8">
              Clinical precision, <br />
              autonomous efficiency.
            </h2>
            <p className="text-on-surface font-body font-[600] leading-relaxed text-lg md:text-xl mb-10 text-justify max-w-4xl">
              Acadeno specializes in layering intelligence on top of what works — transforming data-heavy medical environments into proactive healthcare systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-10 rounded-[32px] bg-[#f8f9fd] border border-slate-100 hover:shadow-xl transition-all group active:scale-[0.98]">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h6"/><path d="M12 12v6"/></svg>
              </div>
              <h3 className="text-2xl font-[900] text-on-surface mb-4">Diagnostic Assistance</h3>
              <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                AI modules for medical imaging (MRI, CT, X-ray) that automate initial screening and flag high-priority discrepancies for radiologists.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-10 rounded-[32px] bg-[#f8f9fd] border border-slate-100 hover:shadow-xl transition-all group active:scale-[0.98]">
               <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/5 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3 className="text-2xl font-[900] text-on-surface mb-4">Operational Scheduling</h3>
              <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                Predictive engines that optimize operating theatre usage and outpatient scheduling based on historical flow and acuity metrics.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-10 rounded-[32px] bg-[#f8f9fd] border border-slate-100 hover:shadow-xl transition-all group active:scale-[0.98]">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3 className="text-2xl font-[900] text-on-surface mb-4">EHR Intelligence</h3>
              <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                Dynamic NLP layers that transform unstructured clinical notes into searchable, actionable data for research and longitudinal care.
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
              Integration without disruption.
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-[900] text-on-surface mb-3">HIPAA Compliant by Design</h3>
                  <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                    Our AI models are engineered for edge-deployment where necessary, ensuring patient data never leaves your secure network.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M20 9V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><rect x="10" y="9" width="12" height="8" rx="2"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-[900] text-on-surface mb-3">Retro-fitted Intelligence</h3>
                  <p className="text-lg font-[600] text-on-surface-variant leading-relaxed">
                    We don't replace your EMR. We build custom API layers that feed AI insights directly into the screens your nurses and doctors use daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-[#0d0e14] text-white p-12 md:p-16 rounded-[48px] shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full -mr-32 -mt-32 group-hover:bg-primary/30 transition-all duration-700" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-[900] mb-8 leading-tight">
                Ready to modernize your clinical workflow?
              </h3>
              <p className="text-lg font-[600] mb-12 text-white/70 leading-relaxed">
                Whether you are a hospital network or an EdTech provider in healthcare, Acadeno's architects are ready to audit your current systems and propose an AI layer that works.
              </p>
              <a href="/#contact" className="signature-gradient bg-[linear-gradient(90deg,#00BFEA,#7B2FBE,#F05A22,#00BFEA)] bg-[length:300%_100%] transition-all duration-500 hover:animate-continuous-color-loop hover:scale-[1.03] active:scale-[0.96] text-white text-lg font-[900] px-10 py-5 rounded-2xl inline-flex items-center gap-3">
                Start a Technical Audit
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
