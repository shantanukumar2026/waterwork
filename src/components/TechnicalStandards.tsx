"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookmarkCheck, FileText, Anchor } from "lucide-react";
import homeData from "../data/home.json";

export default function TechnicalStandards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, button, items } = homeData.standards;

  return (
    <section id="standards" className="standards-section" style={{ 
        background: "#F8FAFC", 
        padding: "60px 0",
        borderTop: "1px solid #E2E8F0"
      }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }} className="standards-container">
        <div ref={ref} style={{ display: "flex", flexWrap: "wrap", gap: 60, alignItems: "center" }} className="standards-flex">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6 }}
            style={{ flex: "1 1 400px" }}
          >
            <div className="pill-tag" style={{ marginBottom: 20 }}>
              <span className="dot" />
              MUNICIPAL COMPLIANCE
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#004AAD", lineHeight: 1.1, marginBottom: 20, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "#0085f4" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#334155", fontSize: 16, lineHeight: 1.6, marginBottom: 32, fontWeight: 400 }}>
              {header.subtitle}
            </p>

            <div style={{ display: "flex", gap: 24, marginBottom: 36, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <BookmarkCheck size={22} color="#0085f4" />
                <span style={{ color: "#004AAD", fontWeight: 800, fontSize: 14 }}>Tested & Rated</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Anchor size={22} color="#0085f4" />
                <span style={{ color: "#004AAD", fontWeight: 800, fontSize: 14 }}>Structural Integrity</span>
              </div>
            </div>

            <button 
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#004aad";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0085f4";
                e.currentTarget.style.color = "#ffffff";
              }}
              style={{ 
                background: "#0085f4", 
                border: "none", 
                color: "#ffffff", 
                padding: "14px 28px", 
                fontSize: 13, 
                fontWeight: 800, 
                textTransform: "uppercase", 
                letterSpacing: "0.05em", 
                borderRadius: "6px",
                display: "inline-flex", 
                alignItems: "center", 
                gap: 10,
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "0 4px 14px rgba(0, 133, 244, 0.25)"
              }}
            >
              <FileText size={17} />
              {button}
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: "1 1 500px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}
            className="standards-grid"
          >
            {items.map((std, i) => (
              <div key={i} style={{ 
                background: "#ffffff", 
                border: "1px solid #E2E8F0", 
                padding: "28px 22px", 
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                transition: "all 0.25s ease",
                height: "100%",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 133, 244, 0.4)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 133, 244, 0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(15, 23, 42, 0.03)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              >
                <div style={{ width: 14, height: 4, background: "#0085f4", borderRadius: 2, marginBottom: 14 }} />
                <h4 style={{ color: "#004AAD", fontSize: 17, fontWeight: 800, marginBottom: 6, letterSpacing: "0.02em", textTransform: "uppercase" }}>{std.name}</h4>
                <p style={{ color: "#475569", fontSize: 13, margin: 0, fontWeight: 400, lineHeight: 1.55 }}>{std.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .standards-container { padding: 0 24px !important; }
          .standards-flex { gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
