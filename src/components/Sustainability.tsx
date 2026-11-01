"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplet, Recycle, Wind, TreePine } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Droplet,
  Recycle,
  Wind,
  TreePine
};

export default function Sustainability() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, initiatives } = homeData.sustainability;

  return (
    <section
      id="sustainability"
      style={{
        background: "var(--deep)",
        padding: "64px 0",
        position: "relative",
        borderTop: "1px solid var(--line-strong)"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }} className="sustainability-container">

        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ color: "var(--water)", marginBottom: 16, justifyContent: "center" }}>
              {header.tagline}
            </div>

            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 16, textTransform: "uppercase" }}>
              {header.title} <span style={{ color: "var(--water)" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#CBD5E1", fontSize: 15, maxWidth: 680, margin: "0 auto", lineHeight: 1.65, fontWeight: 400 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {initiatives.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Droplet;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ height: "100%" }}
              >
                <div
                  className="industrial-card"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--line-strong)",
                    borderTop: "3px solid var(--water)",
                    borderRadius: "0px",
                    padding: "36px 28px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <div style={{ width: 48, height: 48, background: "rgba(30, 143, 194, 0.12)", borderRadius: "0px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--line-strong)" }}>
                      <Icon size={22} color="var(--water)" />
                    </div>
                    <div className="font-display" style={{ color: "var(--water)", fontSize: 38, fontWeight: 800, lineHeight: 1, opacity: 0.4 }}>
                      {item.value}
                    </div>
                  </div>

                  <h3 className="font-display" style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 800, marginBottom: 10, textTransform: "uppercase" }}>{item.title}</h3>
                  <p style={{ color: "#CBD5E1", fontSize: 13, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sustainability-container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
