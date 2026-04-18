"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 w-full z-[1000] backdrop-blur-md transition-all duration-300 h-[72px] md:h-[80px] ${
          isScrolled 
            ? "bg-[#0d0e14] border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]" 
            : "bg-white/95 border-b border-slate-100 shadow-sm"
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-10 max-w-[1700px] mx-auto h-full">

          <div 
            className="select-none flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" 
            style={{ width: isScrolled ? "62px" : "260px" }}
          >
            <Link href="/" className="flex items-center">
              <div className="relative h-[64px] flex items-center overflow-hidden w-full transition-all duration-700">
                {/* Full Horizontal Logo */}
                <div className={`absolute inset-0 h-full w-full transition-all duration-700 transform origin-left ${isScrolled ? "opacity-0 -translate-x-5" : "opacity-100 translate-x-0"}`}>
                  <div className="relative w-full h-full">
                    <Image 
                      src="/assets/newlogo.png" 
                      alt="Acadeno logo" 
                      fill 
                      sizes="(max-width: 768px) 40vw, 260px"
                      className="object-contain object-left pointer-events-none" 
                      style={{ clipPath: "inset(0 70% 0 0)" }}
                    />
                    <Image 
                      src="/assets/newlogo.png" 
                      alt="Acadeno text" 
                      fill 
                      sizes="(max-width: 768px) 40vw, 260px"
                      className={`object-contain object-left pointer-events-none transition-all duration-300 nav-brand-text ${isScrolled ? "brightness-0 invert" : ""}`} 
                      style={{ clipPath: "inset(0 0 0 30%)" }}
                    />
                  </div>
                </div>

                {/* Scrolled 'A' Symbol */}
                <div className={`absolute inset-0 h-full w-full transition-all duration-700 pointer-events-none ${isScrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                   <Image 
                    src="/assets/logo_Title.png" 
                    alt="Acadeno symbol" 
                    fill
                    sizes="64px"
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-[4px] h-full">
            <div className={`nav-tab relative flex items-center px-[12px] rounded-[10px] h-[50px] transition-all duration-250 group hover:bg-[linear-gradient(135deg,#00BFEA,#7B2FBE)] hover:shadow-[0_10px_40px_rgba(0,191,234,0.15)] active:scale-95`}>
              <a href="/#what-we-do" className={`font-body text-[13.5px] font-bold transition-all duration-300 z-10 group-hover:text-white ${isScrolled ? "text-white/75" : "text-[#191c1f]"}`}>What We Do</a>
            </div>
            <div className={`nav-tab relative flex items-center px-[12px] rounded-[10px] h-[50px] transition-all duration-250 group hover:bg-[linear-gradient(135deg,#00BFEA,#7B2FBE)] hover:shadow-[0_10px_40px_rgba(0,191,234,0.15)] active:scale-95`}>
              <a href="/#capabilities" className={`font-body text-[13.5px] font-bold transition-all duration-300 z-10 group-hover:text-white ${isScrolled ? "text-white/75" : "text-[#191c1f]"}`}>Capabilities</a>
            </div>

            <div className="relative h-full flex items-center group">
              <div className={`nav-tab relative flex items-center px-[12px] rounded-[10px] h-[50px] transition-all duration-250 group-hover:bg-[linear-gradient(135deg,#00BFEA,#7B2FBE)] group-hover:shadow-[0_10px_40px_rgba(0,191,234,0.15)] active:scale-95`}>
                <a href="/#tech-stack" className={`font-body text-[13.5px] font-bold transition-all duration-300 z-10 group-hover:text-white ${isScrolled ? "text-white/75" : "text-[#191c1f]"}`}>Tech Stack</a>
              </div>
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col gap-0.5 min-w-[260px]">
                  <Link href="/tech/ai-ml" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#00BFEA]" /> AI & Machine Learning
                  </Link>
                  <Link href="/tech/programming" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#7B2FBE]" /> Programming Languages
                  </Link>
                  <Link href="/tech/web-mobile" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#F05A22]" /> Web & Mobile
                  </Link>
                   <Link href="/tech/cloud-infra" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#1B3F8B]" /> Cloud & Infrastructure
                  </Link>
                   <Link href="/tech/data-storage" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#D4A017]" /> Data & Storage
                  </Link>
                   <Link href="/tech/iot-automation" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#7B2FBE]" /> IoT & Automation
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative h-full flex items-center group">
              <div className={`nav-tab relative flex items-center px-[12px] rounded-[10px] h-[50px] transition-all duration-250 group-hover:bg-[linear-gradient(135deg,#00BFEA,#7B2FBE)] group-hover:shadow-[0_10px_40px_rgba(0,191,234,0.15)] active:scale-95`}>
                <a href="/#industries" className={`font-body text-[13.5px] font-bold transition-all duration-300 z-10 group-hover:text-white ${isScrolled ? "text-white/75" : "text-[#191c1f]"}`}>Industries</a>
              </div>
              <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col gap-0.5 min-w-[240px]">
                  <Link href="/healthcare" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#00BFEA]" /> Healthcare
                  </Link>
                  <Link href="/bfsi" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#7B2FBE]" /> BFSI
                  </Link>
                  <Link href="/retail" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#F05A22]" /> Retail
                  </Link>
                  <Link href="/logistics" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#3b82f6]" /> Logistics
                  </Link>
                  <Link href="/education" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#10b981]" /> Education
                  </Link>
                </div>
              </div>
            </div>

            <div className={`nav-tab relative flex items-center px-[12px] rounded-[10px] h-[50px] transition-all duration-250 group hover:bg-[linear-gradient(135deg,#00BFEA,#7B2FBE)] hover:shadow-[0_10px_40px_rgba(0,191,234,0.15)] active:scale-95`}>
              <a href="/#about" className={`font-body text-[13.5px] font-bold transition-all duration-300 z-10 group-hover:text-white ${isScrolled ? "text-white/75" : "text-[#191c1f]"}`}>About Us</a>
            </div>
            
            <div className={`nav-tab relative flex items-center px-[12px] rounded-[10px] h-[50px] transition-all duration-250 group hover:bg-[linear-gradient(135deg,#00BFEA,#7B2FBE)] hover:shadow-[0_10px_40px_rgba(0,191,234,0.15)] active:scale-95`}>
               <a href="/#why-acadeno" className={`font-body text-[13.5px] font-bold transition-all duration-300 z-10 group-hover:text-white ${isScrolled ? "text-white/75" : "text-[#191c1f]"}`}>Why Acadeno</a>
            </div>

            <div className="relative h-full flex items-center group">
                <div className={`nav-tab relative flex items-center px-[12px] rounded-[10px] h-[50px] transition-all duration-250 group-hover:bg-[linear-gradient(135deg,#00BFEA,#7B2FBE)] group-hover:shadow-[0_10px_40px_rgba(0,191,234,0.15)] active:scale-95`}>
                    <a href="/#socials" className={`font-body text-[13.5px] font-bold transition-all duration-300 z-10 group-hover:text-white ${isScrolled ? "text-white/75" : "text-[#191c1f]"}`}>Socials</a>
                </div>
                 <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col gap-0.5 min-w-[200px]">
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#0077b5]" /> LinkedIn
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#1DA1F2]" /> Twitter / X
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 hover:pl-5 transition-all text-[#334155] hover:text-[#0f172a] font-body text-sm font-bold">
                            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#E4405F]" /> Instagram
                        </a>
                    </div>
                </div>
            </div>

            <div className={`nav-tab relative flex items-center px-[12px] rounded-[10px] h-[50px] transition-all duration-250 group hover:bg-[linear-gradient(135deg,#00BFEA,#7B2FBE)] hover:shadow-[0_10px_40px_rgba(0,191,234,0.15)] active:scale-95`}>
              <a href="/#contact" className={`font-body text-[13.5px] font-bold transition-all duration-300 z-10 group-hover:text-white ${isScrolled ? "text-white/75" : "text-[#191c1f]"}`}>Contact</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 h-full">
            <a 
                href="https://wa.me/919895600504" 
                target="_blank" 
                className="signature-gradient bg-[linear-gradient(90deg,#00BFEA,#7B2FBE,#F05A22,#00BFEA)] bg-[length:300%_100%] transition-all duration-500 hover:animate-continuous-color-loop hover:scale-[1.03] active:scale-[0.96] hover:shadow-[0_10px_40px_rgba(123,47,190,0.3)] text-white text-[13px] font-bold px-[32px] py-[14px] rounded-full shadow-lg shadow-[#00BFEA]/20"
            >
              Start a Conversation
            </a>
          </div>

          {/* Mobile UI */}
          <div className="lg:hidden flex items-center gap-2 h-full">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 flex flex-col justify-center items-center gap-[6px] focus:outline-none bg-[#f2f3f7] rounded-lg active:scale-95 transition-transform"
            >
              <span className="block w-6 h-[2px] bg-[#00286d] transition-all duration-300" />
              <span className="block w-6 h-[2px] bg-[#00286d] transition-all duration-300" />
              <span className="block w-6 h-[2px] bg-[#00286d] transition-all duration-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[1010] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div 
        className={`fixed top-0 right-0 w-[80%] max-w-sm h-[100dvh] bg-white shadow-2xl z-[1020] rounded-bl-[24px] flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-slate-100">
          <span className="font-headline font-extrabold text-[#00286d] text-lg uppercase tracking-tight">Menu</span>
          <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-[#f2f3f7] rounded-full active:scale-95 transition-transform text-[#191c1f]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
          <a href="/#what-we-do" onClick={() => setIsMenuOpen(false)} className="flex items-center min-h-[48px] font-headline font-bold text-[#191c1f] hover:text-[#00286d] transition-colors text-base uppercase tracking-tight">What We Do</a>
          <a href="/#capabilities" onClick={() => setIsMenuOpen(false)} className="flex items-center min-h-[48px] font-headline font-bold text-[#191c1f] hover:text-[#00286d] transition-colors text-base uppercase tracking-tight">Capabilities</a>
          
          <div className="flex flex-col">
            <button onClick={() => toggleMobileDropdown("tech")} className="flex items-center justify-between min-h-[48px] font-headline font-bold text-[#191c1f] hover:text-[#00286d] transition-colors text-base uppercase tracking-tight focus:outline-none">
              Tech Stack
              <svg className={`transition-transform duration-300 ${activeDropdown === "tech" ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === "tech" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col pl-4 gap-1 border-l-2 border-slate-100 ml-2 mt-1 mb-2">
                <Link href="/tech/ai-ml" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">AI & Machine Learning</Link>
                <Link href="/tech/programming" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Programming Languages</Link>
                <Link href="/tech/web-mobile" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Web & Mobile</Link>
                <Link href="/tech/cloud-infra" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Cloud & Infrastructure</Link>
                <Link href="/tech/data-storage" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Data & Storage</Link>
                <Link href="/tech/iot-automation" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">IoT & Automation</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <button onClick={() => toggleMobileDropdown("industries")} className="flex items-center justify-between min-h-[48px] font-headline font-bold text-[#191c1f] hover:text-[#00286d] transition-colors text-base uppercase tracking-tight focus:outline-none">
              Industries
              <svg className={`transition-transform duration-300 ${activeDropdown === "industries" ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === "industries" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col pl-4 gap-1 border-l-2 border-slate-100 ml-2 mt-1 mb-2">
                <Link href="/healthcare" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Healthcare</Link>
                <Link href="/bfsi" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">BFSI</Link>
                <Link href="/retail" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Retail</Link>
                <Link href="/logistics" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Logistics</Link>
                <Link href="/education" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Education</Link>
              </div>
            </div>
          </div>

          <a href="/#about" onClick={() => setIsMenuOpen(false)} className="flex items-center min-h-[48px] font-headline font-bold text-[#191c1f] hover:text-[#00286d] transition-colors text-base uppercase tracking-tight">About Us</a>
          <a href="/#why-acadeno" onClick={() => setIsMenuOpen(false)} className="flex items-center min-h-[48px] font-headline font-bold text-[#191c1f] hover:text-[#00286d] transition-colors text-base uppercase tracking-tight">Why Acadeno</a>
           
          <div className="flex flex-col">
            <button onClick={() => toggleMobileDropdown("socials")} className="flex items-center justify-between min-h-[48px] font-headline font-bold text-[#191c1f] hover:text-[#00286d] transition-colors text-base uppercase tracking-tight focus:outline-none">
              Socials
              <svg className={`transition-transform duration-300 ${activeDropdown === "socials" ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === "socials" ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col pl-4 gap-1 border-l-2 border-slate-100 ml-2 mt-1 mb-2">
                <a href="#" className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">LinkedIn</a>
                <a href="#" className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Twitter / X</a>
                <a href="#" className="text-sm font-bold py-2 text-[#191c1f]/80 hover:text-[#00286d] transition-colors">Instagram</a>
              </div>
            </div>
          </div>

          <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center min-h-[48px] font-headline font-bold text-[#191c1f] hover:text-[#00286d] transition-colors text-base uppercase tracking-tight">Contact</a>
        </div>
        
        <div className="p-6 border-t border-slate-100">
          <a href="https://wa.me/919895600504" className="w-full bg-[linear-gradient(90deg,#00BFEA,#7B2FBE,#F05A22,#00BFEA)] bg-[length:300%_100%] text-white text-[13px] font-bold px-6 py-[18px] rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all hover:animate-continuous-color-loop">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
             Start a Conversation
          </a>
        </div>
      </div>
    </>
  );
}
