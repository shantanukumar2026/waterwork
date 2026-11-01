"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import homeData from "../data/home.json";

export default function InfrastructureFacilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, facilities } = homeData.infrastructure;

  return (
    <section 
      id="infrastructure" 
      style={{ 
        background: "var(--paper)", 
        padding: "64px 0",
        borderTop: "1px solid var(--line)"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }} className="infrastructure-container">
        
        <div ref={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32, marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ marginBottom: 12 }}>
              FACILITIES &amp; PRODUCTION FOOTPRINT
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "var(--deep)", lineHeight: 1.1, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "var(--water)" }}>{header.highlight}</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ maxWidth: 480 }}>
            <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div 
          className="facility-grid"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: 20,
            gridAutoFlow: "dense"
          }}
        >
          {facilities.map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                gridColumn: `span ${fac.span}`,
                height: 360,
                background: "var(--deep)",
                position: "relative",
                overflow: "hidden",
                borderRadius: "0px",
                border: "1px solid var(--line)",
                boxShadow: "0 10px 30px rgba(15,23,42,0.08)"
              }}
              className="facility-card"
            >
              <video
                src={fac.video}
                autoPlay
                loop
                muted
                playsInline
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.6 }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15, 23, 42, 0.45), rgba(30, 143, 194, 0.25))", zIndex: 1, mixBlendMode: "multiply" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)", zIndex: 2 }} />

              {/* Content Overlay */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 3 }}>
                <div style={{ maxWidth: "80%" }}>
                  <h3 className="font-display" style={{ color: "#fff", fontSize: 22, fontWeight: 800, textTransform: "uppercase", marginBottom: 6 }}>{fac.title}</h3>
                  <p style={{ color: "var(--paper)", fontSize: 13, margin: 0, lineHeight: 1.5, fontWeight: 400 }}>{fac.desc}</p>
                </div>
                
                <div className="fac-icon-wrap" style={{ width: 44, height: 44, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0px", transition: "all 0.3s" }}>
                  <ArrowUpRight size={18} color="#fff" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .facility-card:hover .fac-icon-wrap {
          background: var(--water) !important;
          border-color: var(--water) !important;
          transform: rotate(45deg);
        }
        @media (max-width: 1024px) {
          .facility-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .infrastructure-container {
            padding: 0 32px !important;
          }
        }
        @media (max-width: 768px) {
          .facility-grid {
            grid-template-columns: 1fr !important;
          }
          .facility-card {
            grid-column: span 1 !important;
            height: 280px !important;
          }
          .infrastructure-container {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
