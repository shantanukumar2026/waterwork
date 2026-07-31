"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Settings, 
  Maximize, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Droplet, 
  Target, 
  Building2, 
  MoreHorizontal,
  LucideIcon 
} from "lucide-react";
import homeData from "@/data/home.json";

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Activity,
  Maximize,
  ShieldCheck,
  Layers,
  Droplet,
  Target,
  Building2
};

export default function Solutions() {
  const solutions = homeData.solutions.items;
  const header = homeData.solutions.header;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section id="solutions" className="section-pad" style={{ background: "var(--paper)", position: "relative", borderTop: "1px solid var(--line)" }}>

      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        
        {/* Header */}
        <div ref={ref} style={{ marginBottom: 36, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ marginBottom: 16 }}>
              {header.tagline}
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2.4rem, 6vw, 3.8rem)", fontWeight: 800, color: "var(--deep)", lineHeight: 1.05, textTransform: "uppercase" }}>
              {header.title}<br />
              <span style={{ color: "var(--water)" }}>
                {header.highlight}
              </span>
            </h2>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 24 }} className="solutions-layout">
          
          {/* ────── LEFT SIDEBAR: Category Tabs ────── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
            className="solutions-tabs"
          >
            {solutions.map((sol) => {
              const isActive = activeTab === sol.id;
              const Icon = iconMap[sol.icon] || Settings;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  className="industrial-card"
                  style={{
                    textAlign: "left",
                    background: isActive ? "var(--deep)" : "var(--surface)",
                    border: "1px solid var(--line)",
                    padding: "20px",
                    borderRadius: "0px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--line-strong)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "var(--line)";
                    }
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: "0px",
                      background: isActive ? "rgba(255,255,255,0.1)" : "var(--paper)",
                      border: "1px solid var(--line)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <Icon size={18} color={isActive ? "var(--water)" : "var(--water)"} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono-spec" style={{ fontSize: 10, fontWeight: 700, color: isActive ? "var(--water)" : "var(--ink-soft)" }}>
                      SPEC {sol.id}
                    </span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 17, fontWeight: 800, color: isActive ? "#FFFFFF" : "var(--deep)", margin: 0, textTransform: "uppercase" }}>
                    {sol.title}
                  </h3>
                </button>
              );
            })}
          </motion.div>

          {/* ────── RIGHT MAIN CONTAINER ────── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={inView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="industrial-card"
            style={{ 
              background: "var(--surface)", 
              borderRadius: "0px", 
              border: "1px solid var(--line)", 
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}
              >
                {/* 1. Tech Specs Header Bar */}
                <div style={{ 
                  padding: "14px 28px", 
                  borderBottom: "1px solid var(--line)", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  background: "var(--paper)" 
                }}>
                  <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
                    {Object.entries(activeSolution.specs).map(([key, val]) => (
                      <div key={key}>
                        <div className="font-mono-spec" style={{ fontSize: 9, color: "var(--ink-soft)", fontWeight: 600 }}>{key}</div>
                        <div className="font-mono-spec" style={{ fontSize: 12, color: "var(--deep)", fontWeight: 700 }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--water)", fontWeight: 700 }}>
                    SYS-0{solutions.findIndex(s => s.id === activeTab) + 1}
                  </div>
                </div>

                {/* 2. Inner Split Layout */}
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr" }} className="solution-split-grid">
                  
                  {/* Left Column: Title, Subtitle, How It Works, Key Benefits */}
                  <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 24, borderRight: "1px solid var(--line)" }}>
                    
                    {/* Title & Description */}
                    <div>
                      <h3 className="font-display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", marginBottom: 10, lineHeight: 1.1 }}>
                        {activeSolution.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                        {activeSolution.desc}
                      </p>
                    </div>

                    {/* HOW IT WORKS Section (4 Steps) */}
                    {activeSolution.howItWorks && (
                      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}>
                        <div className="eyebrow-label" style={{ marginBottom: 12 }}>
                          HOW IT WORKS
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }} className="steps-grid">
                          {activeSolution.howItWorks.map((st, idx) => (
                            <div key={st.step} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 6 }}>
                              
                              {/* Step Card Graphic Box */}
                              <div style={{ 
                                background: "var(--paper)", 
                                border: "1px solid var(--line)", 
                                borderRadius: "0px", 
                                padding: 6,
                                position: "relative",
                                height: 105,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden"
                              }}>
                                {/* Step number badge */}
                                <div className="font-mono-spec" style={{ 
                                  position: "absolute", 
                                  top: 4, 
                                  left: 4, 
                                  background: "var(--deep)", 
                                  color: "#FFFFFF", 
                                  width: 18, 
                                  height: 18, 
                                  fontSize: 9, 
                                  fontWeight: 700, 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                }}>
                                  {st.step}
                                </div>

                                {/* Clean Technical SVG Diagram for Step */}
                                <StepSvgDiagram step={st.step} />
                              </div>

                              {/* Description Text */}
                              <div style={{ fontSize: 11, color: "var(--ink)", lineHeight: 1.35, fontWeight: 400 }}>
                                {st.text}
                              </div>

                              {/* Arrow Connector */}
                              {idx < activeSolution.howItWorks.length - 1 && (
                                <div style={{ position: "absolute", right: -6, top: 44, zIndex: 5 }} className="step-arrow">
                                  <ArrowRight size={12} color="var(--water)" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* KEY BENEFITS Section */}
                    {activeSolution.keyBenefits && (
                      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}>
                        <div className="eyebrow-label" style={{ marginBottom: 12 }}>
                          KEY BENEFITS
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="benefits-grid">
                          {activeSolution.keyBenefits.map((ben, idx) => {
                            const BenIcon = iconMap[ben.icon] || ShieldCheck;
                            return (
                              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <div style={{ 
                                  width: 32, 
                                  height: 32, 
                                  borderRadius: "0px", 
                                  border: "1px solid var(--line)", 
                                  background: "var(--paper)", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  marginBottom: 4
                                }}>
                                  <BenIcon size={16} color="var(--water)" strokeWidth={1.5} />
                                </div>
                                <div className="font-display" style={{ fontSize: 12, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase" }}>{ben.title}</div>
                                <div style={{ fontSize: 10, color: "var(--ink-soft)", lineHeight: 1.3 }}>{ben.desc}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Visual Product Diagram */}
                  <div style={{ padding: 24, background: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16, position: "relative" }}>
                    
                    {/* Main Interactive Card */}
                    <div className="industrial-card" style={{ 
                      background: "var(--surface)", 
                      border: "1px solid var(--line)", 
                      borderRadius: "0px", 
                      padding: 20, 
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}>
                      {/* 3D Product Image + Connecting Dashed Lines + Callouts */}
                      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 14, alignItems: "center", flex: 1, position: "relative" }}>
                        
                        {/* 3D Casting Product Image */}
                        <div style={{ position: "relative", height: 300, width: "100%" }}>
                          <Image
                            src={activeSolution.image}
                            alt={activeSolution.title}
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                          />
                        </div>

                        {/* Callout Badges with Dashed Lines */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 18, position: "relative" }}>
                          {activeSolution.callouts?.map((call, idx) => {
                            const CallIcon = iconMap[call.icon] || ShieldCheck;
                            return (
                              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8, position: "relative" }}>
                                
                                {/* Dashed indicator line pointing to product */}
                                <div 
                                  className="dashed-indicator"
                                  style={{ 
                                    position: "absolute", 
                                    left: -48, 
                                    top: 12, 
                                    width: 40, 
                                    borderTop: "1px dashed var(--line-strong)",
                                    pointerEvents: "none" 
                                  }} 
                                />

                                <div style={{ 
                                  width: 24, 
                                  height: 24, 
                                  borderRadius: "0px", 
                                  background: "var(--paper)", 
                                  border: "1px solid var(--line)", 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  marginTop: 1,
                                }}>
                                  <CallIcon size={12} color="var(--water)" strokeWidth={1.5} />
                                </div>

                                <div>
                                  <div className="font-display" style={{ fontSize: 11, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", lineHeight: 1.2 }}>
                                    {call.title}
                                  </div>
                                  <div style={{ fontSize: 10, color: "var(--ink-soft)", lineHeight: 1.3, marginTop: 2 }}>
                                    {call.desc}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    </div>

                    {/* Bottom "IDEAL FOR" Card */}
                    <div style={{ 
                      background: "var(--surface)", 
                      border: "1px solid var(--line)", 
                      borderRadius: "0px", 
                      padding: "14px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12
                    }}>
                      <div style={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: "0px", 
                        background: "var(--deep)", 
                        color: "#FFFFFF", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Building2 size={16} color="var(--water)" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-mono-spec" style={{ fontSize: 9, fontWeight: 700, color: "var(--water)", marginBottom: 2 }}>
                          IDEAL FOR
                        </div>
                        <div style={{ fontSize: 11, color: "var(--ink)", fontWeight: 500, lineHeight: 1.4 }}>
                          {activeSolution.idealFor || "Municipal drainage systems, roadway catch basins, industrial sites, parks, and urban infrastructure projects."}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1280px) {
          .solutions-layout { grid-template-columns: 1fr !important; }
          .solutions-tabs { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; }
          .solution-split-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .solutions-tabs { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .step-arrow { display: none !important; }
          .dashed-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// ────── Step Diagram Component (Crisp technical SVG illustrations) ──────
function StepSvgDiagram({ step }: { step: number }) {
  if (step === 1) {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="10" width="30" height="40" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5"/>
        <rect x="22" y="14" width="16" height="32" rx="2" fill="#2563EB" opacity="0.8"/>
        <path d="M10 20H50" stroke="#64748B" strokeWidth="2" strokeDasharray="3 3"/>
        <path d="M20 5L30 14L40 5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="10" width="20" height="40" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5"/>
        <path d="M30 15V45" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
        <path d="M25 35L30 42L35 35" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 25C20 30 25 25 30 30" stroke="#60A5FA" strokeWidth="2"/>
      </svg>
    );
  }
  if (step === 3) {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="8" width="16" height="14" rx="2" fill="#2563EB"/>
        <rect x="20" y="24" width="20" height="14" rx="2" fill="#60A5FA"/>
        <rect x="18" y="40" width="24" height="14" rx="2" fill="#93C5FD"/>
        <path d="M10 20L10 40M10 20L7 24M10 20L13 24M10 40L7 36M10 40L13 36" stroke="#2563EB" strokeWidth="2"/>
      </svg>
    );
  }
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="20" height="34" rx="3" fill="#2563EB"/>
      <path d="M10 44H50V52H10V44Z" fill="#64748B"/>
      <circle cx="30" cy="48" r="3" fill="#60A5FA"/>
      <path d="M15 36L30 44L45 36" stroke="#38BDF8" strokeWidth="2" strokeDasharray="2 2"/>
    </svg>
  );
}
