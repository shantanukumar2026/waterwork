"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Activity, ShieldCheck, LucideIcon } from "lucide-react";
import homeData from "@/data/home.json";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
};

export default function TechnologyInnovation() {
  const technologies = homeData.technology.items;
  const header = homeData.technology.header;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      id="technology" 
      style={{ 
        background: "#ffffff",
        padding: "60px 0",
        position: "relative",
        borderTop: "1px solid #E2E8F0"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }} className="tech-container">
        
        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="pill-tag" style={{ marginBottom: 18 }}>
              <Zap size={14} color="#0085f4" />
              <span>{header.tagline}</span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 800, color: "#004AAD", lineHeight: 1.1, marginBottom: 18, textTransform: "uppercase" }}>
              {header.title} <span style={{ color: "#0085f4" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#334155", fontSize: 16, maxWidth: 680, margin: "0 auto", lineHeight: 1.6, fontWeight: 400 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="tech-grid">
          {technologies.map((tech, i) => {
            const Icon = iconMap[tech.icon] || Cpu;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ height: "100%" }}
              >
                <div
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    padding: "36px 28px",
                    borderRadius: "12px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.25s ease",
                    cursor: "default",
                    boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.borderColor = "rgba(0, 133, 244, 0.4)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 16px 36px rgba(0, 133, 244, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F8FAFC";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(15, 23, 42, 0.03)";
                  }}
                >
                  <div style={{ width: 56, height: 56, background: "rgba(0, 133, 244, 0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, border: "1px solid rgba(0, 133, 244, 0.2)" }}>
                    <Icon size={26} color="#0085f4" />
                  </div>
                  
                  <h3 style={{ color: "#004AAD", fontSize: 18, fontWeight: 800, marginBottom: 10, textTransform: "uppercase" }}>{tech.title}</h3>
                  <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>{tech.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 1200px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 1024px) {
          .tech-container {
            padding: 0 24px !important;
          }
        }
        @media (max-width: 640px) {
          .tech-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
