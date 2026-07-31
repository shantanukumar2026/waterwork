"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe2, Ship, Plane, Truck } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Ship,
  Plane,
  Truck
};

export default function GlobalSupplyNetwork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, stats, modes } = homeData.globalNetwork;

  return (
    <section 
      id="global-network" 
      className="section-pad"
      style={{ 
        background: "var(--brand-deep)", 
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      {/* Background Map Graphic */}
      <div style={{ position: "absolute", top: "10%", right: "-10%", width: "70%", height: "80%", opacity: 0.15, pointerEvents: "none" }}>
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="var(--brand-bright)" />
          </pattern>
          <path d="M100,100 Q400,50 700,200 T750,500 Q400,600 150,450 Z" fill="url(#dotGrid)" />
          <path d="M200,200 Q400,100 600,250" stroke="var(--brand-bright)" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <path d="M300,300 Q500,400 700,300" stroke="var(--brand-bright)" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <circle cx="200" cy="200" r="6" fill="#FFFFFF" stroke="var(--brand-bright)" strokeWidth="2" />
          <circle cx="600" cy="250" r="6" fill="#FFFFFF" stroke="var(--brand-bright)" strokeWidth="2" />
          <circle cx="300" cy="300" r="6" fill="#FFFFFF" stroke="var(--brand-bright)" strokeWidth="2" />
          <circle cx="700" cy="300" r="6" fill="#FFFFFF" stroke="var(--brand-bright)" strokeWidth="2" />
        </svg>
      </div>

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        <div ref={ref} style={{ display: "flex", flexWrap: "wrap", gap: 60, alignItems: "center" }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ flex: "1 1 500px" }}
          >
            <div className="eyebrow-label" style={{ color: "var(--brand-bright)", marginBottom: 20 }}>
              GLOBAL LOGISTICS & DISPATCH
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.4rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 18 }}>
              Rapid Supply Network.<br />
              <span style={{ color: "var(--brand-bright)" }}>Built for Emergency Municipal Timelines.</span>
            </h2>
            
            <p style={{ color: "var(--white)", fontSize: 16, lineHeight: 1.65, marginBottom: 36, maxWidth: 540, fontWeight: 400, opacity: 0.9 }}>
              With distribution hubs strategically positioned in Melville NY, Stuart FL, and Toronto ON, we ship critical water management inventory anywhere in North America within 48 hours.
            </p>

            <div style={{ display: "flex", gap: 36, marginBottom: 40, borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", padding: "20px 0" }}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display" style={{ color: "var(--brand-bright)", fontSize: 38, fontWeight: 700, lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div className="font-mono-spec" style={{ color: "#FFFFFF", fontSize: 11, fontWeight: 600, marginTop: 6 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {modes.map((mode, i) => {
                const Icon = iconMap[mode.icon as keyof typeof iconMap] || Ship;
                return (
                  <div key={i} className="industrial-card" style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.06)", padding: "8px 14px", borderRadius: "4px", border: "1px solid var(--hairline)" }}>
                    <Icon size={16} color="var(--brand-bright)" strokeWidth={1.5} />
                    <span className="font-mono-spec" style={{ color: "#FFFFFF", fontSize: 11, fontWeight: 700 }}>{mode.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Map / Visual Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
          >
             <div style={{ width: "100%", height: 380, border: "1px solid var(--line-strong)", background: "var(--surface)", position: "relative", borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", zIndex: 1 }}>
                  <Globe2 size={56} color="var(--water)" style={{ marginBottom: 12 }} />
                  <div className="font-display" style={{ color: "var(--deep)", fontSize: 18, fontWeight: 800, textTransform: "uppercase" }}>Live Network Routing</div>
                  <div className="font-mono-spec" style={{ color: "var(--water)", fontSize: 11, marginTop: 4 }}>STATUS — ACTIVE DISPATCH</div>
                </div>

                {/* Radar sweep effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    width: 280, height: 280,
                    marginLeft: -140, marginTop: -140,
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, transparent 70%, rgba(30, 143, 194, 0.15) 100%)",
                    border: "1px solid var(--line)",
                    pointerEvents: "none"
                  }}
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
