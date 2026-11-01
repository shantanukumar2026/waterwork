"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Settings, ArrowUpDown, Lock } from "lucide-react";
import Image from "next/image";
import homeData from "../data/home.json";

export default function CurbBoxFeature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const { header } = homeData.curbbox;

  return (
    <section
      id="curb-box"
      className="curbbox-section"
      style={{
        backgroundColor: "#F8FAFC",
        position: "relative",
        overflow: "hidden",
        padding: "60px 0",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        borderTop: "1px solid #E2E8F0"
      }}
    >
      {/* Background blueprint elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage: "linear-gradient(rgba(0,133,244,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,133,244,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          zIndex: 0,
        }}
      />

      {/* Main Content Area */}
      <div
        className="curbbox-container"
        style={{
          maxWidth: 1440,
          width: "100%",
          margin: "0 auto",
          padding: "0 60px",
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          ref={ref}
          className="curbbox-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 60,
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* LEFT: Product Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              minHeight: "420px"
            }}
          >
            {/* Visual glow backdrop */}
            <div
              style={{
                position: "absolute",
                width: "80%",
                height: "80%",
                background: "radial-gradient(circle, rgba(0,133,244,0.12) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            {/* Curb Box Product Image */}
            <div style={{ position: "relative", width: "100%", maxWidth: 380, height: 400 }}>
              <Image
                src="/images/curb-box.webp"
                alt={header.title}
                fill
                style={{ objectFit: "contain", filter: "drop-shadow(0 20px 30px rgba(15,23,42,0.15))" }}
                priority
              />
            </div>

            {/* Left Callout Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="curbbox-callout-left"
              style={{ position: "absolute", top: "25%", left: 0, zIndex: 10, display: "flex", alignItems: "center" }}
            >
              <div style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "12px 18px",
                borderRadius: 8,
                border: "1px solid rgba(0, 133, 244, 0.25)",
                boxShadow: "0 10px 28px rgba(15,23,42,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 12
              }}>
                <div style={{ background: "#0085f4", borderRadius: 6, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck size={18} color="#fff" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#0085f4", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>MATERIAL SPEC</span>
                  <span style={{ color: "#0F172A", fontSize: 13, fontWeight: 800, textTransform: "uppercase", lineHeight: 1.2 }}>HIGH-YIELD<br />DUCTILE IRON</span>
                </div>
              </div>
            </motion.div>

            {/* Right Callout Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="curbbox-callout-right"
              style={{ position: "absolute", bottom: "25%", right: 0, zIndex: 10, display: "flex", alignItems: "center" }}
            >
              <div style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "12px 18px",
                borderRadius: 8,
                border: "1px solid rgba(0, 133, 244, 0.25)",
                boxShadow: "0 10px 28px rgba(15,23,42,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 12
              }}>
                <div style={{ background: "#0085f4", borderRadius: 6, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Settings size={18} color="#fff" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#0085f4", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>ADAPTABILITY</span>
                  <span style={{ color: "#0F172A", fontSize: 13, fontWeight: 800, textTransform: "uppercase", lineHeight: 1.2 }}>ADJUSTABLE<br />RISER CORE</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <div className="pill-tag" style={{ marginBottom: 18, alignSelf: "flex-start" }}>
              <span className="dot" />
              MUNICIPAL HARDWARE
            </div>

            <motion.h2
              className="font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.05,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              THE H2<br />
              <span style={{ color: "#0085f4" }}>CURB BOX SYSTEM</span>
            </motion.h2>

            <div style={{ width: 60, height: 3, background: "#0085f4", marginBottom: 20, borderRadius: 2 }} />

            <p style={{ color: "#334155", fontSize: 16, lineHeight: 1.65, marginBottom: 28, fontWeight: 400, maxWidth: 480 }}>
              Designed for multi-decade durability in harsh municipal environments, the H2 Curb Box sets the standard for public works reliability, frost protection, and clean shut-off access.
            </p>

            {/* Feature Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32, maxWidth: 480 }}>
              {[
                { icon: ShieldCheck, title: "DUCTILE-IRON & COMPOSITE BODY", desc: "AASHTO H-20 traffic load tested for highway corridors." },
                { icon: ArrowUpDown, title: "TELESCOPING ADJUSTABLE RISER", desc: "Precision height adjustment matching finished grade." },
                { icon: Lock, title: "LOCKING LID & PENTAGON BOLT", desc: "Heavy-duty tamper-proof security preventing unauthorized access." },
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      background: "#ffffff",
                      border: "1px solid #E2E8F0",
                      padding: "16px 18px",
                      borderRadius: 8,
                      boxShadow: "0 2px 8px rgba(15,23,42,0.02)"
                    }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: "6px",
                      background: "rgba(0,133,244,0.08)",
                      border: "1px solid rgba(0,133,244,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                      <Icon size={18} color="#0085f4" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "#0F172A", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.02em" }}>{feat.title}</span>
                      <span style={{ color: "#475569", fontSize: 13, marginTop: 2, lineHeight: 1.45 }}>{feat.desc}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="/products"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#0085f4",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                boxShadow: "0 4px 14px rgba(0,133,244,0.3)",
                alignSelf: "flex-start",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#004aad")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0085f4")}
            >
              EXPLORE WATERWORKS PRODUCTS <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .curbbox-container { padding: 0 24px !important; }
          .curbbox-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .curbbox-callout-left { left: 10px !important; }
          .curbbox-callout-right { right: 10px !important; }
        }
        @media (max-width: 640px) {
          .curbbox-callout-left, .curbbox-callout-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
