"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Building2, Waves, Construction, Leaf, Flame, Sprout, ArrowRight } from "lucide-react";
import homeData from "../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Waves,
  Construction,
  Leaf,
  Flame,
  Sprout
};

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { header, items } = homeData.industries;

  return (
    <section id="industries" className="industries-section" style={{ background: "var(--deep)", position: "relative", borderTop: "1px solid var(--line-strong)" }}>

      <div className="industries-container" style={{ maxWidth: 1720, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div ref={ref} style={{ marginBottom: 48, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ color: "var(--water)", marginBottom: 16, justifyContent: "center" }}>
              {header.tagline}
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              {header.title}<br />
              <span style={{ color: "var(--water)" }}>{header.highlight}</span>
            </h2>
            <p style={{ color: "#CBD5E1", fontSize: 15, maxWidth: 640, margin: "0 auto", lineHeight: 1.6, fontWeight: 400 }}>
              {header.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}>
          {items.map((ind, i) => {
            const Icon = iconMap[ind.icon as keyof typeof iconMap] || Building2;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ height: "100%" }}
              >
                <IndustryCard ind={ind} Icon={Icon} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .industries-section { padding: 64px 0; }
        .industries-container { padding: 0 60px; }
        @media (max-width: 768px) {
          .industries-section { padding: 48px 0; }
          .industries-container { padding: 0 20px; }
        }
      `}</style>
    </section>
  );
}

function IndustryCard({ ind, Icon }: { ind: any; Icon: React.ElementType }) {
  const [hovered, setHovered] = useState(false);
  const href = ind.slug ? `/industries/${ind.slug}` : "/industries";

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="industrial-card"
      style={{
        position: "relative",
        padding: "32px",
        background: hovered ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.02)",
        border: "1px solid var(--line-strong)",
        borderTop: `3px solid ${ind.accent || "var(--water)"}`,
        borderRadius: "0px",
        transition: "all 0.25s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textDecoration: "none",
        transform: hovered ? "translateY(-3px)" : "none"
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        border: "1px solid var(--line-strong)",
      }}>
        <Icon size={22} color={ind.accent || "var(--water)"} />
      </div>

      <h3 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF", marginBottom: 10, textTransform: "uppercase" }}>
        {ind.title}
      </h3>
      <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.6, marginBottom: 20, flex: 1, fontWeight: 400 }}>
        {ind.desc}
      </p>

      <div className="font-mono-spec" style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 11,
        fontWeight: 700,
        color: ind.accent || "var(--water)",
        letterSpacing: "0.1em",
        textTransform: "uppercase"
      }}>
        <span>Explore Industry Page</span>
        <ArrowRight size={14} style={{ transition: "transform 0.2s", transform: hovered ? "translateX(4px)" : "none" }} />
      </div>
    </Link>
  );
}
