"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const partnersList = [
  { file: "APWA.JPG", name: "APWA" },
  { file: "AWWA.JPG", name: "AWWA" },
  { file: "MassDOt.JPG", name: "MassDOT" },
  { file: "NEPCA.JPG", name: "NEPCA" },
  { file: "NHDOTlogo.JPG", name: "NHDOT" },
  { file: "NHE.jpg", name: "NHE" },
  { file: "NPCA-Logo.JPG", name: "NPCA" },
  { file: "NY-CMA.jpg", name: "NY-CMA" },
  { file: "Nassau+Logo copy.JPG", name: "Nassau" },
  { file: "PEI.JPG", name: "PEI" },
  { file: "PennDOT-Logo.png", name: "PennDOT" },
  { file: "RIDOT.jpg", name: "RIDOT" },
  { file: "aia copy.jpg", name: "AIA" },
  { file: "canada-ccppa.JPG", name: "Canada CCPPA" },
  { file: "ccmpa copy.jpg", name: "CCMPA" },
  { file: "conn copy.JPG", name: "Conn" },
  { file: "maine.JPG", name: "Maine" },
  { file: "nj copy.JPG", name: "NJ" },
  { file: "ny state copy.JPG", name: "NY State" },
  { file: "ny.JPG", name: "NY" },
  { file: "pcany.jpg", name: "PCANY" },
  { file: "penn copy.JPG", name: "Penn" },
  { file: "ppa.JPG", name: "PPA" },
  { file: "suffolk copy.JPG", name: "Suffolk" },
  { file: "vt copy.JPG", name: "VT" }
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate the list so the marquee scrolls seamlessly
  const marqueeItems = [...partnersList, ...partnersList];

  return (
    <section ref={ref} style={{ padding: "64px 0", background: "var(--deep)", position: "relative", overflow: "hidden", borderTop: "1px solid var(--line-strong)" }}>

      {/* Left Fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(90deg, var(--deep) 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />
      {/* Right Fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 150, background: "linear-gradient(270deg, var(--deep) 0%, transparent 100%)", zIndex: 10, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 1 }} className="partners-container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ color: "var(--water)", marginBottom: 14, justifyContent: "center" }}>
              GLOBAL SPECIFICATION NETWORK
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", lineHeight: 1.1 }}>
              Trusted by <span style={{ color: "var(--water)" }}>Industry Leaders</span>
            </h2>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="marquee-container" style={{ position: "relative", width: "100%", overflow: "hidden", padding: "16px 0" }}>

          <motion.div
            className="marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40
            }}
            style={{ display: "flex", gap: "32px", width: "max-content", alignItems: "center" }}
          >
            {marqueeItems.map((p, i) => (
              <div
                key={i}
                className="marquee-item industrial-card"
                style={{
                  width: "150px",
                  height: "76px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff",
                  borderRadius: "0px",
                  padding: "8px 14px",
                  border: "1px solid var(--line-strong)",
                  flexShrink: 0
                }}
              >
                <Image
                  src={`/partners/${p.file}`}
                  alt={p.name}
                  fill
                  style={{ objectFit: "contain", padding: "8px" }}
                  unoptimized={true}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <style>{`
        .marquee-item {
          opacity: 0.9;
          transition: all 0.25s ease;
        }
        .marquee-item:hover {
          opacity: 1 !important;
          transform: translateY(-2px) !important;
          border-color: var(--water) !important;
        }
        @media (max-width: 768px) {
          .partners-container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
