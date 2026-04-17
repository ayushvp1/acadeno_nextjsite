"use client";

import React from 'react';
import Link from 'next/link';

const techStack = [
  {
    category: "AI & MACHINE LEARNING",
    path: "/tech/ai-ml",
    colors: { primary: "#00BFEA", secondary: "#007FA0", tinted: "rgba(0,191,234,0.08)" },
    items: [
      { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "OpenAI API", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
      { name: "Gemini API", icon: "https://cdn.simpleicons.org/googlegemini/8E75B1" }
    ]
  },
  {
    category: "PROGRAMMING",
    path: "/tech/programming",
    colors: { primary: "#7B2FBE", secondary: "#521E80", tinted: "rgba(123,47,190,0.08)" },
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FF0000" },
      { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" }
    ]
  },
  {
    category: "WEB & MOBILE",
    path: "/tech/web-mobile",
    colors: { primary: "#F05A22", secondary: "#A83B10", tinted: "rgba(240,90,34,0.08)" },
    items: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/05998B" },
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" }
    ]
  },
  {
    category: "CLOUD & INFRASTRUCTURE",
    path: "/tech/cloud-infra",
    colors: { primary: "#1B3F8B", secondary: "#0F2658", tinted: "rgba(27,63,139,0.08)" },
    items: [
      { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { name: "Microsoft Azure", icon: "https://img.icons8.com/color/48/azure-1.png" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
      { name: "Linux / Ubuntu", icon: "https://cdn.simpleicons.org/linux/FCC624" }
    ]
  },
  {
    category: "DATA & STORAGE",
    path: "/tech/data-storage",
    colors: { primary: "#7C4F00", secondary: "#4F3200", tinted: "rgba(124,79,0,0.08)" },
    items: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Apache Kafka", icon: "https://cdn.simpleicons.org/apachekafka/231F20" },
      { name: "Apache Spark", icon: "https://cdn.simpleicons.org/apachespark/E25A1C" },
      { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Tableau", icon: "https://img.icons8.com/color/48/tableau-software.png" },
      { name: "Metabase", icon: "https://cdn.simpleicons.org/metabase/509EE3" }
    ]
  },
  {
    category: "IOT & AUTOMATION",
    path: "/tech/iot-automation",
    colors: { primary: "#460079", secondary: "#2B004A", tinted: "rgba(70,0,121,0.08)" },
    items: [
      { name: "MQTT", icon: "https://cdn.simpleicons.org/mqtt/660066" },
      { name: "Zigbee", icon: "https://cdn.simpleicons.org/zigbee/EB0440" },
      { name: "ROS", icon: "https://cdn.simpleicons.org/ros/22314E" },
      { name: "Raspberry Pi", icon: "https://cdn.simpleicons.org/raspberrypi/C51A4A" },
      { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D" }
    ]
  }
];

export default function TechStack() {
  const size = 560;
  const depth = 80; // depth of the 3D box (height of side walls)

  return (
    <section id="tech-stack" className="py-48 bg-white relative overflow-hidden text-black">
      {/* Precision Blueprint Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#1a365d 1px, transparent 1px),
            linear-gradient(90deg, #1a365d 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-48 text-center mx-auto">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-[#191c1f] mb-6">
            Our Technology Stack
          </h2>
          <p className="text-xl md:text-2xl font-bold text-slate-500">
            Engineered for reliability. Precisely aligned.
          </p>
        </div>

        <div className="iso-layout">
          <div className="iso-stack">
            {techStack.map((layer, idx) => {
              const mid = Math.ceil(layer.items.length / 2);
              return (
              <div key={idx} className="block-wrapper" style={{ zIndex: techStack.length - idx }}>
                {/* Vertical spine connector */}
                {idx > 0 && <div className="spine"></div>}
                
                <Link 
                  href={layer.path} 
                  className="block-link no-underline" 
                  style={{ zIndex: techStack.length - idx, position: 'relative', display: 'block' }}
                >
                  <div className="block-hit-area">
                    {/* PURE 3D ISOMETRIC ENGINE */}
                    <div className="iso-cuboid">
                      {/* TOP FACE */}
                      <div 
                        className="face top" 
                        style={{ 
                          background: `linear-gradient(${layer.colors.tinted}, ${layer.colors.tinted}), white`, 
                          borderColor: layer.colors.primary 
                        }}
                      >
                        <span className="heading" style={{ color: layer.colors.primary }}>{layer.category}</span>
                      </div>
                      
                      {/* LEFT FACE */}
                      <div 
                        className="face left" 
                        style={{ 
                          background: `linear-gradient(${layer.colors.tinted}, ${layer.colors.tinted}), white`, 
                          borderColor: layer.colors.primary 
                        }}
                      >
                        <div className="tag-row">
                          {layer.items.slice(0, mid).map((item, i) => (
                            <div key={i} className="tag" style={{ borderColor: layer.colors.primary }}>
                              <img src={item.icon} alt={item.name} className="tech-icon" />
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* RIGHT FACE */}
                      <div 
                        className="face right" 
                        style={{ 
                          background: `linear-gradient(${layer.colors.tinted}, ${layer.colors.tinted}), white`, 
                          borderColor: layer.colors.primary 
                        }}
                      >
                        <div className="tag-row">
                          {layer.items.slice(mid).map((item, i) => (
                            <div key={i} className="tag" style={{ borderColor: layer.colors.primary }}>
                              <img src={item.icon} alt={item.name} className="tech-icon" />
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )})}
          </div>
        </div>
      </div>

      <style jsx>{`
        .iso-layout {
          display: flex;
          justify-content: center;
          padding: 80px 0;
        }

        .iso-stack {
          display: flex;
          flex-direction: column;
          gap: 220px;
          align-items: center;
          position: relative;
        }

        .block-wrapper {
          position: relative;
        }

        .spine {
          position: absolute;
          width: 1.5px;
          background: #334e68;
          height: 220px;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.2;
          z-index: -1;
        }

        .block-hit-area {
          position: relative;
          width: 700px;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          cursor: pointer;
        }

        .block-hit-area:hover {
          transform: translateY(-25px);
        }

        .iso-cuboid {
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: 50%;
          top: 50%;
          margin-left: -${size / 2}px;
          margin-top: -${size / 2}px;
          transform-style: preserve-3d;
          transform: rotateX(60deg) rotateZ(45deg);
        }

        .face {
          position: absolute;
          background: white;
          border: 1.8px solid;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
        }

        .face.top {
          width: ${size}px;
          height: ${size}px;
          top: 0;
          left: 0;
          transform: translateZ(${depth}px);
        }

        .heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 1000;
          text-align: center;
          line-height: 1.1;
          transform: rotateZ(0deg) scaleY(1);
          width: 420px; 
        }

        .face.left {
          width: ${size}px;
          height: ${depth}px;
          top: ${size}px;
          left: 0;
          transform-origin: top left;
          transform: translateZ(${depth}px) rotateX(-90deg);
          padding: 10px 20px;
          justify-content: flex-end; 
          border-top: none;
        }

        .face.right {
          width: ${size}px;
          height: ${depth}px;
          top: ${size}px;
          left: ${size}px;
          transform-origin: top left;
          transform: translateZ(${depth}px) rotateZ(-90deg) rotateX(-90deg);
          padding: 10px 20px;
          justify-content: flex-start;
          border-top: none;
        }

        .tag-row {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: space-evenly;
          width: 100%;
        }

        .tag {
          padding: 6px 14px;
          border: 1.2px solid;
          font-size: 12.5px;
          font-weight: 800;
          background: white;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .tag:hover {
          background: #f8f9fd;
          transform: translateY(-2px);
        }

        .tech-icon {
          width: 16px;
          height: 16px;
          object-fit: contain;
          filter: grayscale(0.2);
          transition: filter 0.3s ease;
        }

        .tag:hover .tech-icon {
          filter: grayscale(0);
        }

        @media (max-width: 768px) {
          .iso-stack { gap: 60px; }
          .spine { display: none; }
          .block-hit-area { width: 100%; height: auto; transform: none !important; }
          .iso-cuboid { position: relative; width: 100%; height: auto; transform: none; left: auto; top: auto; margin: 0; }
          .face { position: relative; transform: none !important; width: 100% !important; height: auto !important; padding: 25px !important; border-radius: 12px; margin-bottom: 2px; left: auto !important; top: auto !important; }
          .heading { transform: none; font-size: 22px; width: auto; }
          .face.left, .face.right { border-top: 1.8px solid #1a365d; justify-content: center; }
          .tag-row { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

