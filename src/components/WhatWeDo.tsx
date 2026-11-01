"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import homeData from "../data/home.json";

export default function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const data = homeData.story.whatWeDo;

  return (
    <section
      id="what-we-do"
      style={{
        background: "var(--paper)",
        color: "var(--deep)",
        padding: "64px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--line)"
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }} className="what-we-do-container">
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 60, alignItems: "center" }}>

          {/* Image & Features */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", order: 2 }}
          >
            <div style={{ position: "relative", width: "100%", height: 500, borderRadius: "0px", border: "1px solid var(--line)", overflow: "hidden" }}>
              <Image src={data.image} alt={data.title} fill style={{ objectFit: "cover" }} />
            </div>

            <div className="industrial-card" style={{ position: "absolute", bottom: -20, left: 20, right: 20, background: "var(--surface)", padding: "24px", borderRadius: "0px", border: "1px solid var(--line)", boxShadow: "0 10px 30px rgba(15,23,42,0.06)", maxWidth: 360 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {data.features.map((feature, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <CheckCircle2 color="var(--water)" size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <h4 className="font-display" style={{ margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", color: "var(--deep)", marginBottom: 2 }}>{feature.title}</h4>
                      <p style={{ margin: 0, fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.45, fontWeight: 400 }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ order: 1 }}
          >
            <div className="eyebrow-label" style={{ marginBottom: 16 }}>
              {data.tagline}
            </div>

            <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800, color: "var(--deep)", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase" }}>
              {data.title} <br />
              <span style={{ color: "var(--water)" }}>{data.highlight}</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {data.paragraphs.map((p, i) => (
                <p key={i} style={{ color: "var(--ink)", fontSize: 15, lineHeight: 1.65, fontWeight: 400, margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .what-we-do-container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
