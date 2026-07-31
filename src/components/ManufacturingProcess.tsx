"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Ruler, Cog, FlaskConical, Truck } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Ruler,
  Cog,
  FlaskConical,
  Truck
};

export default function ManufacturingProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, steps } = homeData.process;

  return (
    <section id="process" className="section-pad" style={{ background: "var(--tint-1)", borderTop: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ marginBottom: 16, justifyContent: "center" }}>
              MANUFACTURING SEQUENCE
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, color: "var(--brand-deep)", lineHeight: 1.1, marginBottom: 16 }}
            >
              Precision Metallurgy. From Raw Spec to Field-Ready Casting.
            </h2>
            <p style={{ color: "var(--brand-deep)", fontSize: 16, maxWidth: 620, margin: "0 auto", lineHeight: 1.65, opacity: 0.9 }}>
              Every casting undergoes automated polymer injection modeling, CNC lathe profiling, and 100% hydrostatic pressure testing before shipment.
            </p>
          </motion.div>
        </div>

        {/* Desktop timeline */}
        <div className="process-desktop" style={{ display: "none", position: "relative" }}>
          {/* Grid of Spec Strip Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, border: "1px solid var(--hairline)", borderRadius: "6px", overflow: "hidden" }}>
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || Lightbulb;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="industrial-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    padding: "32px 24px",
                    background: "var(--white)",
                    borderRight: i < 4 ? "1px solid var(--hairline)" : "none",
                    borderTop: "none",
                    borderBottom: "none",
                    borderLeft: "none",
                    overflow: "hidden",
                    minHeight: 280,
                  }}
                >
                  {/* Large Numeral in --hairline / --brand-blue */}
                  <div
                    className="font-display"
                    style={{
                      position: "absolute",
                      right: 12,
                      top: 4,
                      fontSize: 84,
                      fontWeight: 700,
                      color: "var(--brand-blue)",
                      opacity: 0.12,
                      lineHeight: 1,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: 42,
                    height: 42,
                    background: "var(--tint-2)",
                    border: "1px solid var(--hairline)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    zIndex: 1,
                  }}>
                    <Icon size={20} color="var(--brand-blue)" strokeWidth={1.5} />
                  </div>

                  <h3
                    className="font-display"
                    style={{ fontSize: 18, fontWeight: 700, color: "var(--brand-deep)", marginBottom: 8, zIndex: 1 }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--brand-deep)", lineHeight: 1.55, marginBottom: 12, flex: 1, zIndex: 1, opacity: 0.9 }}>{step.desc}</p>
                  <p className="font-mono-spec" style={{ fontSize: 10, color: "var(--brand-blue)", fontWeight: 700, zIndex: 1 }}>{step.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="process-mobile" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Lightbulb;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                className="industrial-card"
                style={{ display: "flex", gap: 16, padding: "20px", background: "var(--white)", position: "relative", overflow: "hidden" }}
              >
                <div
                  className="font-display"
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 0,
                    fontSize: 64,
                    fontWeight: 700,
                    color: "var(--brand-blue)",
                    opacity: 0.12,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {step.num}
                </div>
                <div style={{ width: 40, height: 40, background: "var(--tint-2)", border: "1px solid var(--hairline)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} color="var(--brand-blue)" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "var(--brand-deep)", marginBottom: 4 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--brand-deep)", lineHeight: 1.5, marginBottom: 6, opacity: 0.9 }}>{step.desc}</p>
                  <p className="font-mono-spec" style={{ fontSize: 10, color: "var(--brand-blue)", fontWeight: 700 }}>{step.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .process-desktop { display: block !important; }
          .process-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}
