"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    title: "AI Integration into Existing Software",
    desc: "We embed AI directly into your current platforms -- no migration, no replacement, no operational disruption.",
    icon: "https://img.icons8.com/fluency/96/puzzle.png",
    color: "#e0f2fe",
    gradient: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)"
  },
  {
    title: "Custom AI Solutions & Models",
    desc: "Production-ready machine learning, computer vision, NLP, and predictive analytics -- built around your specific business requirements.",
    icon: "https://img.icons8.com/fluency/96/brain.png",
    color: "#f3e8ff",
    gradient: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)"
  },
  {
    title: "AI Agents & Intelligent Automation",
    desc: "Autonomous LLM agents, multi-agent orchestration, and robotic process automation engineered for complex workflows.",
    icon: "https://img.icons8.com/fluency/96/bot.png",
    color: "#fee2e2",
    gradient: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)"
  },
  {
    title: "RAG Knowledge Systems",
    desc: "Private knowledge pipelines, semantic search, and enterprise document intelligence -- keeping your data secure.",
    icon: "https://img.icons8.com/fluency/96/books.png",
    color: "#ffedd5",
    gradient: "linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)"
  },
  {
    title: "Web Application Development",
    desc: "Scalable, high-performance web applications built on modern full-stack frameworks, designed for reliability.",
    icon: "https://img.icons8.com/fluency/96/domain.png",
    color: "#fef9c3",
    gradient: "linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)"
  },
  {
    title: "Mobile Application Development",
    desc: "Cross-platform and native iOS/Android applications engineered for performance, scale, and seamless backend integration.",
    icon: "https://img.icons8.com/fluency/96/iphone.png",
    color: "#f0fdf4",
    gradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)"
  },
  {
    title: "API & System Integration",
    desc: "End-to-end interoperability across platforms through robust API architecture and custom middleware solutions.",
    icon: "https://img.icons8.com/fluency/96/api.png",
    color: "#ecfeff",
    gradient: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)"
  },
  {
    title: "Data Analytics & Business Intelligence",
    desc: "From raw data pipelines to executive dashboards -- we turn your operational data into clear, actionable intelligence.",
    icon: "https://img.icons8.com/fluency/96/analytics.png",
    color: "#f5f3ff",
    gradient: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)"
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud-native architecture, CI/CD automation, and infrastructure management across AWS, Google Cloud, and Azure.",
    icon: "https://img.icons8.com/fluency/96/cloud.png",
    color: "#faf5ff",
    gradient: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)"
  },
  {
    title: "Cybersecurity",
    desc: "Security assessments, vulnerability management, and hardened infrastructure -- protecting your systems and clients.",
    icon: "https://img.icons8.com/fluency/96/shield.png",
    color: "#fff1f2",
    gradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)"
  },
  {
    title: "IoT Solutions",
    desc: "Sensor integration, edge computing, and cloud-connected device ecosystems for industrial environments.",
    icon: "https://img.icons8.com/fluency/96/internet-of-things.png",
    color: "#f0f9ff",
    gradient: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
  },
  {
    title: "Embedded Systems",
    desc: "Microcontroller and edge device solutions engineered for real-time, mission-critical environments.",
    icon: "https://img.icons8.com/color/96/integrated-circuit.png",
    color: "#fdf4ff",
    gradient: "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)"
  },
  {
    title: "Robotics & Automation",
    desc: "Industrial robotics solutions that reduce operational overhead and bring precision to physical workflows.",
    icon: "https://img.icons8.com/fluency/96/robot.png",
    color: "#fff7ed",
    gradient: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)"
  },
  {
    title: "Smart City Solutions",
    desc: "IoT and AI-driven urban infrastructure systems -- purpose-built for efficient, scalable city operations.",
    icon: "https://img.icons8.com/fluency/96/city.png",
    color: "#f0fdfa",
    gradient: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)"
  },
  {
    title: "Digital Marketing",
    desc: "SEO, SEM, content strategy, and campaign analytics with clear performance metrics and accountable outcomes.",
    icon: "https://img.icons8.com/fluency/96/commercial.png",
    color: "#fefce8",
    gradient: "linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)"
  },
  {
    title: "AI Consulting & Training",
    desc: "Strategic AI advisory and structured training programmes -- helping organisations adopt AI with confidence.",
    icon: "https://img.icons8.com/color/96/consultation.png",
    color: "#eff6ff",
    gradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"
  }
];

export default function Capabilities() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden bg-[#f8f9fd]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-[#191c1f] leading-tight">
          What we engineer.
        </h2>
        <p className="text-xl md:text-2xl font-bold text-slate-600 mt-6 md:max-w-2xl mx-auto">
          Sixteen service areas. One consistent standard of delivery.
        </p>
      </div>

      <div className="capabilities-scroller overflow-hidden pb-12 cursor-grab active:cursor-grabbing">
        <div 
          className="capabilities-track flex gap-8 px-8 animate-capability-scroll w-max will-change-transform"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setActiveCard(null);
          }}
        >
          {/* First Set */}
          {capabilities.map((cap, idx) => (
            <div 
              key={`set1-${idx}`}
              className={`capability-card group ${activeCard === idx ? 'mobile-tapped' : ''}`}
              onClick={() => {
                setActiveCard(idx);
                setIsPaused(true);
              }}
            >
              <img src={cap.icon} className="capability-icon" alt={cap.title} />
              <h3>{cap.title}</h3>
              
              <div className="capability-overlay">
                <p>{cap.desc}</p>
              </div>
            </div>
          ))}
          {/* Duplicate Set for Infinite Loop */}
          {capabilities.map((cap, idx) => (
            <div 
              key={`set2-${idx}`}
              className={`capability-card group ${activeCard === (idx + capabilities.length) ? 'mobile-tapped' : ''}`}
              onClick={() => {
                setActiveCard(idx + capabilities.length);
                setIsPaused(true);
              }}
            >
              <img src={cap.icon} className="capability-icon" alt={cap.title} />
              <h3>{cap.title}</h3>
              
              <div className="capability-overlay">
                <p>{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes capability-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-capability-scroll {
          animation: capability-scroll 80s linear infinite;
        }
        .capabilities-scroller::-webkit-scrollbar {
          display: none;
        }
        .capability-card {
          flex: 0 0 auto;
          width: 280px;
          height: 320px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .capability-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.1);
        }
        .capability-icon {
          width: 80px;
          height: 80px;
          object-fit: contain;
          transition: transform 0.4s ease;
        }
        .capability-card:hover .capability-icon {
          transform: scale(1.15);
        }
        .capability-card h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #1e293b;
          text-align: center;
          line-height: 1.4;
        }
        .capability-overlay {
          position: absolute;
          inset: 0;
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          transform: translateY(100%);
          z-index: 10;
          background: linear-gradient(135deg, #2563eb, #7c3aed, #db2777);
        }
        .capability-card:hover .capability-overlay,
        .capability-card.mobile-tapped .capability-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .capability-overlay p {
          font-size: 15px;
          line-height: 1.7;
          color: #ffffff;
          font-weight: 700;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
