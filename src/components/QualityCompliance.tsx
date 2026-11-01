"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldAlert, CheckCircle, Search, Award } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Search,
  ShieldAlert,
  CheckCircle,
  Award
};

export default function QualityCompliance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, workflow } = homeData.quality;

  return (
    <section
      id="quality"
      style={{
        background: "var(--deep)",
        padding: "64px 0",
        position: "relative",
        borderTop: "1px solid var(--line-strong)"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }} className="quality-container">

        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ color: "var(--water)", marginBottom: 16, justifyContent: "center" }}>
              {header.tagline}
            </div>

            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 16, textTransform: "uppercase" }}>
              {header.title} <span style={{ color: "var(--water)" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#CBD5E1", fontSize: 15, maxWidth: 640, margin: "0 auto", lineHeight: 1.6, fontWeight: 400 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Workflow Timeline */}
        <div style={{ position: "relative", padding: "20px 0" }}>
          {/* Connecting Line Desktop */}
          <div style={{ display: "none", position: "absolute", top: 60, left: "10%", right: "10%", height: 1, background: "var(--line-strong)" }} className="qc-line" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, position: "relative", zIndex: 10 }}>
            {workflow.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || Search;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                >
                  <div style={{
                    width: 72,
                    height: 72,
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--line-strong)",
                    marginBottom: 20,
                    position: "relative"
                  }}>
                    <Icon size={28} color="var(--water)" />

                    {/* Step Number Badge */}
                    <div className="font-mono-spec" style={{
                      position: "absolute",
                      top: -8,
                      right: -8,
                      width: 24,
                      height: 24,
                      background: "var(--water)",
                      borderRadius: "0px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 11,
                    }}>
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="font-display" style={{ color: "#FFFFFF", fontSize: 17, fontWeight: 800, marginBottom: 8, textTransform: "uppercase" }}>{step.title}</h3>
                  <p style={{ color: "#CBD5E1", fontSize: 13, lineHeight: 1.55, margin: 0, fontWeight: 400 }}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .qc-line { display: block !important; }
        }
        @media (max-width: 768px) {
          .quality-container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
