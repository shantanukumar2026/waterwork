"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Award, LucideIcon } from "lucide-react";
import homeData from "@/data/home.json";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Target,
  ShieldCheck,
  Award,
};

export default function TrustGuarantee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { value: "0.0%", label: "FIELD FAILURE RATE", desc: "Across 25+ years of municipal & industrial installations." },
    { value: "50+", label: "YEAR SERVICE LIFE", desc: "ASTM A48 & A536 metallurgy built for multi-decade wear." },
    { value: "100%", label: "FOUNDRY PRESSURE TESTED", desc: "Every valve & casting hydro-tested before field dispatch." },
    { value: "50", label: "US STATES APPROVED", desc: "Specified on municipal DOT & AWWA standard submittals." }
  ];

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        background: "var(--brand-deep)",
        padding: "90px 0",
        overflow: "hidden",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 10 }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow-label" style={{ color: "var(--brand-bright)", justifyContent: "center", marginBottom: 12 }}>
              PROOF OF PERFORMANCE
            </div>
            <h2 className="font-display" style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              margin: 0,
              lineHeight: 1.1
            }}>
              Zero Field Failures Across 25+ Years of Municipal Service.
            </h2>
            <p style={{
              color: "var(--white)",
              fontSize: "1.05rem",
              maxWidth: 620,
              margin: "16px auto 0",
              fontWeight: 400,
              opacity: 0.9,
            }}>
              Our metallurgical precision and 100% in-house hydrostatic testing deliver field performance trusted by public works departments nationwide.
            </p>
          </motion.div>
        </div>

        {/* Data / Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24
        }} className="halo-grid">
          {stats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--hairline)",
                borderRadius: "6px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div className="font-display" style={{ fontSize: 44, fontWeight: 700, color: "var(--brand-bright)", lineHeight: 1, marginBottom: 8 }}>
                {st.value}
              </div>
              <div className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>
                {st.label}
              </div>
              <p style={{ fontSize: 13, color: "var(--white)", opacity: 0.85, margin: 0, lineHeight: 1.5 }}>
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
