"use client";

const StatSphere = ({ 
  number, 
  label, 
  description, 
  tintClass, 
  glowClass, 
  delay 
}: { 
  number: string, 
  label: string, 
  description: string, 
  tintClass: string, 
  glowClass: string,
  delay: string
}) => {
  return (
    <div className="sphere-wrapper group" style={{ transitionDelay: delay }}>
      <div className="relative">
        {/* Glow Background */}
        <div className={`sphere-glow ${glowClass}`} />
        
        {/* The Orb */}
        <div className={`sphere-orb ${tintClass}`}>
          <span className="sphere-number">{number}</span>
          <span className="sphere-label">{label}</span>
        </div>
      </div>
      
      <p className="sphere-desc mt-8 px-4 text-slate-600 font-bold leading-relaxed max-w-[280px] mx-auto">
        {description}
      </p>

      <style jsx>{`
        .sphere-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .sphere-wrapper:hover {
          transform: translateY(-15px);
        }
        .sphere-orb {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), inset 0 0 40px rgba(255, 255, 255, 0.5);
          z-index: 2;
          overflow: hidden;
        }
        .sphere-orb::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), transparent 40%, transparent 60%, rgba(255, 255, 255, 0.4));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .sphere-glow {
          position: absolute;
          width: 140%;
          height: 140%;
          top: -20%;
          left: -20%;
          border-radius: 50%;
          z-index: 1;
          filter: blur(45px);
          opacity: 0.5;
          transition: opacity 0.6s ease, transform 0.6s ease;
          pointer-events: none;
        }
        .sphere-wrapper:hover .sphere-glow {
          opacity: 0.4;
          transform: scale(1.15);
        }
        .sphere-number {
          font-family: var(--font-headline);
          font-size: 64px;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(to bottom, #1e293b, #0f172a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }
        .sphere-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1e293b;
        }
        .sphere-cyan-tint {
          background: rgba(0, 191, 234, 0.08);
          border-color: rgba(0, 191, 234, 0.3);
        }
        .sphere-purple-tint {
          background: rgba(123, 47, 190, 0.08);
          border-color: rgba(123, 47, 190, 0.3);
        }
        .sphere-orange-tint {
          background: rgba(240, 90, 34, 0.08);
          border-color: rgba(240, 90, 34, 0.3);
        }
        .sphere-cyan { background: radial-gradient(circle, #00BFEA 0%, transparent 70%); }
        .sphere-purple { background: radial-gradient(circle, #7B2FBE 0%, transparent 70%); }
        .sphere-orange { background: radial-gradient(circle, #F05A22 0%, transparent 70%); }
      `}</style>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Circuit Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(#94a3b8 1px, transparent 1px),
            linear-gradient(90deg, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      <div className="max-w-[1700px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
          
          <StatSphere 
            number="2025"
            label="FOUNDED"
            description="Founded in the dawn of the AI era in early 2025."
            tintClass="sphere-cyan-tint"
            glowClass="sphere-cyan"
            delay="0s"
          />

          <StatSphere 
            number="18"
            label="SPECIALISTS"
            description="AI engineers, architects, and full-stack developers."
            tintClass="sphere-purple-tint"
            glowClass="sphere-purple"
            delay="0.1s"
          />

          <StatSphere 
            number="7+"
            label="GLOBAL CLIENTS"
            description="Delivering enterprise value across the world."
            tintClass="sphere-orange-tint"
            glowClass="sphere-orange"
            delay="0.2s"
          />

        </div>
      </div>
    </section>
  );
}
