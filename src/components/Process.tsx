"use client";

import React, { useEffect, useRef } from 'react';

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "Detailed technical sessions to audit systems and goals — no generic proposals."
  },
  {
    id: 2,
    title: "Scoping",
    description: "Defining precise deliverables, timelines, and commercial terms with NDA execution."
  },
  {
    id: 3,
    title: "Engineering",
    description: "Direct access to lead engineers with regular progress updates — no surprises."
  },
  {
    id: 4,
    title: "Testing",
    description: "Rigorous QA against real-world environments, not just internal benchmarks."
  },
  {
    id: 5,
    title: "Deployment",
    description: "Full deployment with source code transfer and operational training."
  },
  {
    id: 6,
    title: "Support",
    description: "Post-deployment partnership to ensure long-term stability and scaling."
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathBgRef = useRef<SVGPathElement>(null);
  const pathFillRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !pathBgRef.current || !pathFillRef.current) return;

      const container = containerRef.current;
      const nodes = container.querySelectorAll('.step-node');
      const containerRect = container.getBoundingClientRect();
      const nodeData = Array.from(nodes).map(node => node.getBoundingClientRect());

      let pathD = "";
      nodeData.forEach((nodeRect, i) => {
        const x = (nodeRect.left + nodeRect.width / 2) - containerRect.left;
        const y = (nodeRect.top + nodeRect.height / 2) - containerRect.top;
        if (i === 0) pathD = `M ${x} ${y}`;
        else {
          const prevRect = nodeData[i - 1];
          const px = (prevRect.left + prevRect.width / 2) - containerRect.left;
          const py = (prevRect.top + prevRect.height / 2) - containerRect.top;
          const cy = (py + y) / 2;
          pathD += ` C ${px} ${cy}, ${x} ${cy}, ${x} ${y}`;
        }
      });

      pathBgRef.current.setAttribute('d', pathD);
      pathFillRef.current.setAttribute('d', pathD);

      const length = pathFillRef.current.getTotalLength();
      pathFillRef.current.style.strokeDasharray = `${length} ${length}`;
      handleScroll();
    };

    const handleScroll = () => {
      if (!containerRef.current || !pathFillRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress
      const start = viewportHeight * 0.8;
      const totalDist = rect.height + viewportHeight * 0.2;
      let progress = (start - rect.top) / totalDist;
      progress = Math.max(0, Math.min(1, progress));

      const length = pathFillRef.current.getTotalLength();
      pathFillRef.current.style.strokeDashoffset = (length * (1 - progress)).toString();

      // Activate nodes
      const nodes = containerRef.current.querySelectorAll('.step-node');
      nodes.forEach((node, idx) => {
        const nodeProgress = idx / (nodes.length - 1);
        if (progress >= nodeProgress - 0.05) {
          node.classList.add('node-active');
        } else {
          node.classList.remove('node-active');
        }
      });
    };

    window.addEventListener('resize', updatePath);
    window.addEventListener('scroll', handleScroll);
    
    // Initial delays for rendering
    setTimeout(updatePath, 100);
    setTimeout(updatePath, 500);

    return () => {
      window.removeEventListener('resize', updatePath);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="process" className="py-32 px-6 overflow-hidden bg-white relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-[#1a365d] mb-8 tracking-tight">
            From first conversation to live deployment.
          </h2>
          <p className="text-xl md:text-2xl font-bold text-slate-500 max-w-2xl mx-auto">
            Structured engagement designed for enterprise agility and clarity.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Snake SVG */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <path
              ref={pathBgRef}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={pathFillRef}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-[stroke-dashoffset] duration-300 ease-out"
              style={{ filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.5))' }}
            />
          </svg>

          {/* Steps Grid */}
          <div className="relative z-10 flex flex-col gap-24 lg:gap-32">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`flex items-center gap-12 lg:gap-24 w-full ${
                  idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'
                }`}
              >
                {/* Node */}
                <div className="flex-shrink-0 relative">
                  <div className="step-node w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-2xl md:text-3xl font-black text-slate-300 shadow-xl transition-all duration-700 relative z-10">
                    {step.id}
                  </div>
                  {/* Glow effect for active node */}
                  <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-0 transition-opacity duration-700 active-glow" />
                </div>

                {/* Content Box */}
                <div className="flex-1 max-w-2xl">
                  <div className={`p-8 md:p-12 bg-white rounded-3xl border border-slate-50 shadow-2xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all duration-500 group ${
                    idx % 2 === 0 ? 'hover:-translate-x-2' : 'hover:translate-x-2'
                  }`}>
                    <h3 className="text-2xl md:text-3xl font-black text-[#1a365d] mb-4 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg font-bold text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .step-node.node-active {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: scale(1.1);
        }
        .step-node.node-active + .active-glow {
          opacity: 0.2;
        }
        
        @media (max-width: 768px) {
          svg { display: none; }
          .flex-row-reverse { flex-direction: row; text-align: left; }
          .step-node { width: 48px; height: 48px; font-size: 18px; }
          .gap-24 { gap: 40px; }
        }
      `}</style>
    </section>
  );
}
