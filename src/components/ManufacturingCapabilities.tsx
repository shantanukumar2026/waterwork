"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import homeData from "../data/home.json";

export default function ManufacturingCapabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { header, items } = homeData.capabilities;

  return (
    <section 
      id="capabilities" 
      style={{ 
        background: "#F8FAFC", 
        padding: "60px 0",
        borderTop: "1px solid #E2E8F0"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }} className="capabilities-container">
        
        <div ref={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32, marginBottom: 50 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="pill-tag" style={{ marginBottom: 18 }}>
              <span className="dot" />
              {header.tagline}
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#004AAD", lineHeight: 1.1, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "#0085f4" }}>{header.highlight}</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ maxWidth: 520 }}>
            <p style={{ color: "#334155", fontSize: 16, lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="capabilities-grid">
          {items.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ height: "100%" }}
            >
              <CapabilityCard cap={cap} />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1200px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 1024px) {
          .capabilities-container {
            padding: 0 24px !important;
          }
        }
        @media (max-width: 640px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function CapabilityCard({ cap }: { cap: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: hovered ? "0 16px 36px rgba(15, 23, 42, 0.08)" : "0 4px 16px rgba(15, 23, 42, 0.04)",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid #E2E8F0"
      }}
    >
      {/* Visual Image Placeholder Area */}
      <div style={{ height: 200, background: cap.imageColor || "#002B66", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.35, backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.12) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.12) 75%, transparent 75%, transparent)", backgroundSize: "20px 20px" }} />
        <div style={{ position: "absolute", bottom: -20, right: -20, width: 120, height: 120, borderRadius: "50%", border: "20px solid rgba(255,255,255,0.1)" }} />
        
        <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(15, 23, 42, 0.65)", backdropFilter: "blur(4px)", padding: "4px 12px", borderRadius: 4, color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          ISO 9001 Facility
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: "#004AAD", marginBottom: 10, textTransform: "uppercase" }}>{cap.title}</h3>
        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, margin: 0, fontWeight: 400 }}>{cap.desc}</p>
        
        <div style={{ marginTop: "auto", paddingTop: 20 }}>
          <div style={{ width: 40, height: 2, background: hovered ? "#0085f4" : "#E2E8F0", transition: "all 0.3s" }} />
        </div>
      </div>
    </div>
  );
}
