"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Headset, Download, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    
    const phoneNumber = "919895600504";
    const text = `Hello, I have a new enquiry:
  Name: ${name}
  Email: ${email}
  Service: ${service}
  Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-20 mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-[#c4c6d3]/20">
        
        {/* Left Column: Info */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-16 bg-primary text-white">
          <span className="text-xs uppercase tracking-[0.2em] text-[#00BFEA] mb-4 block font-black">
            Let's Talk
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 sm:mb-8 leading-[1.1] text-white tracking-tight">
            Ready to make your <br /> systems smarter?
          </h2>
          <p className="font-body font-[600] text-white/90 mb-12 leading-relaxed text-base md:text-lg text-justify">
            Whether you have a fully defined project brief or an early-stage problem you need to think through, our team is ready to engage. We work with clients across time zones and respond to every serious enquiry within one business day.
          </p>

          <div className="space-y-8">
            {/* Email / Web */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                <Mail className="w-6 h-6 text-[#00BFEA]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-white/60 mb-1">Email / Web</p>
                <div className="text-base font-bold text-white">
                  <p>info@acadeno.com</p>
                  <p>www.acadeno.com</p>
                </div>
              </div>
            </div>

            {/* Head quarters */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                <MapPin className="w-6 h-6 text-[#00BFEA]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-white/60 mb-1">Head quarters</p>
                <div className="text-base font-bold text-white leading-[1.4]">
                  <p>Acadeno Technologies Private Limited</p>
                  <p>Unit 19, Sahya Building, Govt. Cyber Park,</p>
                  <p>Nellikkode (PO), Kozhikode, Keralam, India - 673016</p>
                </div>
              </div>
            </div>

            {/* Office */}
            <a href="tel:+914954600504" className="flex gap-6 items-start hover:translate-x-1 transition-transform group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-[#00BFEA]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#00BFEA] group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-white/60 mb-1 group-hover:text-white transition-colors">Office</p>
                <p className="text-base font-bold text-white transition-colors">+91 4954-600-504</p>
              </div>
            </a>

            {/* Sales */}
            <a href="tel:+919895600504" className="flex gap-6 items-start hover:translate-x-1 transition-transform group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-[#00BFEA]/20 transition-colors">
                <Headset className="w-6 h-6 text-[#00BFEA] group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-white/60 mb-1 group-hover:text-white transition-colors">Sales</p>
                <p className="text-base font-bold text-white transition-colors">+91 9895-600-504</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div id="contact-form" className="p-6 sm:p-8 md:p-10 lg:p-20 bg-white relative z-10 flex flex-col justify-center scroll-mt-20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-[11px] uppercase tracking-widest font-[900] text-on-surface-variant">Full Name</label>
                <input 
                  id="name" 
                  name="name" 
                  autoComplete="name"
                  className="w-full bg-surface border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-sm p-5 font-bold text-on-surface placeholder:text-slate-400 outline-none transition-all"
                  placeholder="Your name" 
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-[11px] uppercase tracking-widest font-[900] text-on-surface-variant">Email Address</label>
                <input 
                  id="email" 
                  name="email" 
                  autoComplete="email"
                  className="w-full bg-surface border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-sm p-5 font-bold text-on-surface placeholder:text-slate-400 outline-none transition-all"
                  placeholder="some@example.com" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="service" className="text-[11px] uppercase tracking-widest font-[900] text-on-surface-variant">Service Interest</label>
              <div className="relative">
                <select 
                  id="service" 
                  name="service"
                  className="w-full bg-surface border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-sm p-5 font-bold text-on-surface appearance-none cursor-pointer outline-none transition-all"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="AI Integration">AI Integration</option>
                  <option value="Custom AI Solutions">Custom AI Solutions</option>
                  <option value="Full-Stack Engineering">Full-Stack Engineering</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-[11px] uppercase tracking-widest font-[900] text-on-surface-variant">Project Brief</label>
              <textarea 
                id="message" 
                name="message"
                className="w-full bg-surface border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-sm p-5 font-bold text-on-surface placeholder:text-slate-400 outline-none transition-all resize-none"
                placeholder="Tell us about your technical challenges..." 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                type="submit"
                className="w-full h-[64px] bg-[linear-gradient(90deg,#00BFEA,#7B2FBE,#F05A22,#00BFEA)] bg-[length:300%_100%] text-white font-[900] rounded-2xl transition-all duration-500 hover:animate-continuous-color-loop active:scale-[0.98] flex items-center justify-center gap-3 text-lg shadow-xl shadow-[#00BFEA]/20"
              >
                <MessageSquare className="w-5 h-5" />
                Chat with Us
              </button>
              
              <button 
                type="button"
                className="w-full h-[64px] border-2 border-slate-100 text-on-surface font-[900] rounded-2xl transition-all hover:bg-slate-50 active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
              >
                <Download className="w-5 h-5" />
                Download Company Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
