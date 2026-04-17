"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D0E14] text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 items-start">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="relative w-[300px] h-[72px] overflow-hidden">
                 {/* Full Horizontal Logo */}
                 <div className="absolute inset-0 h-full w-full">
                    <Image 
                      src="/assets/newlogo.png" 
                      alt="Acadeno logo" 
                      fill 
                      className="object-contain object-left pointer-events-none" 
                      style={{ clipPath: "inset(0 82% 0 0)" }}
                    />
                    <Image 
                      src="/assets/newlogo.png" 
                      alt="Acadeno text" 
                      fill 
                      className="object-contain object-left pointer-events-none" 
                      style={{ 
                        clipPath: "inset(0 0 0 18%)",
                        filter: "brightness(0) invert(1)"
                      }}
                    />
                  </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Integrating minds, technologies, and possibilities.
            </p>
            <div className="space-y-1">
              <p className="text-[#94A3B8] text-[11px] font-medium uppercase tracking-wider">HEAD QUARTERS</p>
              <p className="text-[#94A3B8] text-xs leading-relaxed opacity-80">
                Acadeno Technologies Private Limited<br />
                Unit 19, Sahya Building, Govt. Cyber Park,<br />
                Nellikkode (PO), Kozhikode, Keralam, India - 673016
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] mb-8 text-slate-400 font-headline">Navigation</h2>
            <ul className="space-y-3">
              <li><Link className="text-slate-400 hover:text-[#00BFEA] transition-colors text-sm font-normal leading-[1.8]" href="/#what-we-do">What We Do</Link></li>
              <li><Link className="text-slate-400 hover:text-[#00BFEA] transition-colors text-sm font-normal leading-[1.8]" href="/#capabilities">Capabilities</Link></li>
              <li><Link className="text-slate-400 hover:text-[#00BFEA] transition-colors text-sm font-normal leading-[1.8]" href="/#tech-stack">Tech Stack</Link></li>
              <li><Link className="text-slate-400 hover:text-[#00BFEA] transition-colors text-sm font-normal leading-[1.8]" href="/#why-acadeno">Why Acadeno</Link></li>
              <li><Link className="text-slate-400 hover:text-[#00BFEA] transition-colors text-sm font-normal leading-[1.8]" href="/#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] mb-8 text-slate-400 font-headline">Industries</h2>
            <ul className="space-y-3">
              <li><Link className="text-slate-400 hover:text-[#7B2FBE] transition-colors text-sm font-normal leading-[1.8]" href="/healthcare">Healthcare</Link></li>
              <li><Link className="text-slate-400 hover:text-[#7B2FBE] transition-colors text-sm font-normal leading-[1.8]" href="/bfsi">BFSI</Link></li>
              <li><Link className="text-slate-400 hover:text-[#7B2FBE] transition-colors text-sm font-normal leading-[1.8]" href="/retail">Retail</Link></li>
              <li><Link className="text-slate-400 hover:text-[#7B2FBE] transition-colors text-sm font-normal leading-[1.8]" href="/logistics">Logistics</Link></li>
              <li><Link className="text-slate-400 hover:text-[#7B2FBE] transition-colors text-sm font-normal leading-[1.8]" href="/education">Education</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] mb-8 text-slate-400 font-headline">Legal</h2>
            <ul className="space-y-3">
              <li><Link className="text-slate-400 hover:text-white transition-colors text-sm font-normal leading-[1.8]" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-colors text-sm font-normal leading-[1.8]" href="/terms">Terms of Service</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-colors text-sm font-normal leading-[1.8]" href="/governance">Governance</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-colors text-sm font-normal leading-[1.8]" href="/security">Security</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] mb-8 text-slate-400 font-headline">Connect</h2>
            <ul className="space-y-4">
              <li>
                <a href="tel:+914954600504" className="flex gap-4 group items-start">
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#00BFEA] group-hover:scale-110 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-0.5 font-headline">Office</p>
                    <p className="text-sm font-bold text-white transition-colors group-hover:text-[#00BFEA]">+91 4954-600-504</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919895600504" target="_blank" className="flex gap-4 group items-start">
                   <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#00BFEA] group-hover:scale-110 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-0.5 font-headline">Sales</p>
                    <p className="text-sm font-bold text-white transition-colors group-hover:text-[#00BFEA]">+91 9895-600-504</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@acadeno.com" className="flex items-center gap-3 group">
                   <div className="w-4 h-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#00BFEA] group-hover:scale-110 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-slate-400 group-hover:text-white text-sm transition-colors">info@acadeno.com</span>
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a aria-label="Acadeno LinkedIn" href="https://linkedin.com/company/acadeno" target="_blank" className="text-slate-500 hover:text-[#0077b5] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a aria-label="Instagram" href="https://instagram.com/acadeno" target="_blank" className="text-slate-500 hover:text-[#E4405F] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a aria-label="X" href="https://x.com/acadeno" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/></svg>
                </a>
              </li>
            </ul>

            {/* Location Map */}
            <div className="mt-8">
              <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-slate-400 font-headline">LOCATION</h2>
              <div className="rounded-2xl overflow-hidden border border-white/5 shadow-lg relative group h-[160px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1956.549939491404!2d75.835075!3d11.2540626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bcaf3c6a96d%3A0xfa10743fda00772f!2sAcadeno%20Technologies%20Private%20Limited%20-CSEZ%20Unit!5e0!3m2!1sen!2sin!4v1776069015511!5m2!1sen!2sin"
                  className="w-full h-full grayscale invert opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a 
                  href="https://www.google.com/maps/place/Acadeno+Technologies+Private+Limited+-CSEZ+Unit/" 
                  target="_blank" 
                  className="absolute inset-0 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Statement */}
      <div className="w-full text-center mb-12 opacity-10 select-none pointer-events-none">
        <h3 className="font-headline text-3xl md:text-5xl font-extrabold italic tracking-tighter uppercase text-white">
          Technically superior. Structurally sound.
        </h3>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 pt-8">
        <div className="max-w-[1700px] mx-auto px-6 flex justify-center items-center">
          <p className="text-slate-400 text-[11px] font-medium tracking-wide text-center uppercase">
            © {new Date().getFullYear()} ACADENO TECHNOLOGIES PRIVATE LIMITED SEZ. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
