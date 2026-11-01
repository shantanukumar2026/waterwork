"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import homeData from "../data/home.json";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { header, items } = homeData.testimonials;

  return (
    <section 
      id="testimonials" 
      className="testimonials-section" 
      style={{ 
        background: "var(--paper)", 
        position: "relative",
        width: "100%",
        padding: "64px 0",
        borderTop: "1px solid var(--line)"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }} className="testimonials-container">
        <div ref={ref} style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ marginBottom: 14, justifyContent: "center" }}>
              {header.tagline}
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "var(--deep)", lineHeight: 1.1, marginBottom: 16, textTransform: "uppercase" }}>
              {header.title} <span style={{ color: "var(--water)" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 15, maxWidth: 640, margin: "0 auto", lineHeight: 1.6, fontWeight: 400 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ height: "100%" }}
            >
              <div
                className="industrial-card"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "0px",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.03)",
                  padding: "36px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%"
                }}
              >
                <Quote size={36} color="var(--line)" style={{ position: "absolute", top: 28, right: 28 }} />
                
                <p style={{ color: "var(--ink)", fontSize: 15, lineHeight: 1.7, fontWeight: 500, marginBottom: 28, position: "relative", zIndex: 1 }}>
                  "{item.quote}"
                </p>
                
                <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                  <span className="font-mono-spec" style={{ color: "var(--water)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>H2 VERIFIED SPECIFICATION</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
