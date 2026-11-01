"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Link2, 
  Settings, 
  Droplet, 
  CheckCircle2, 
  BarChart3, 
  ArrowRight, 
  Search, 
  FileText, 
  Phone, 
  Mail, 
  User 
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 120px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#002B66",
        padding: "140px 0 70px",
        margin: 0,
        boxSizing: "border-box"
      }}
    >
      {/* High-Resolution Industrial Backdrop Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero_bright_usa.png"
          alt="Engineering Waterworks Infrastructure"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35, border: "none" }}
        />
        {/* Vibrant Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0, 38, 95, 0.88) 0%, rgba(0, 43, 102, 0.96) 100%)",
          }}
        />
        {/* Tech Blueprint Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(to right, rgba(0, 187, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 187, 255, 0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Main Content Container (50/50 Split Layout) */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 60px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 40,
          alignItems: "center",
        }}
        className="hero-container"
      >
        {/* Left Column Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* Top Pill Eyebrow Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0, 187, 255, 0.12)",
              border: "1px solid rgba(0, 187, 255, 0.35)",
              borderRadius: "100px",
              padding: "5px 14px",
              width: "fit-content",
              marginBottom: 14
            }}
          >
            <ShieldCheck size={13} color="#00BBFF" />
            <span style={{ color: "#00BBFF", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              TRUSTED. TESTED. BUILT TO LAST.
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
              fontWeight: 800,
              fontStyle: "normal",
              lineHeight: 1.05,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
              marginBottom: 16,
              textTransform: "uppercase"
            }}
          >
            ENGINEERING MULTI-DECADE<br />
            HYDRO INFRASTRUCTURE.<br />
            <span style={{ color: "#00BBFF" }}>BUILT TO PROTECT OUR WATERWAYS.</span>
          </h1>

          {/* Subhead Paragraph */}
          <p
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "1.05rem",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: 600,
              marginBottom: 20
            }}
          >
            From AWWA-compliant ductile iron castings to modular sampling solutions—engineered for strength, municipal reliability, and multi-decade service life.
          </p>

          {/* 4-Card Feature Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, maxWidth: 660, marginBottom: 18 }} className="hero-feature-grid">
            <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(0, 187, 255, 0.22)", borderRadius: "8px", padding: "12px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <ShieldCheck size={14} color="#00BBFF" />
                <span style={{ fontSize: 10, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>AWWA COMPLIANT</span>
              </div>
              <p style={{ fontSize: 11, color: "rgba(255, 255, 255, 0.7)", margin: 0, lineHeight: 1.3 }}>Built to industry standards</p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(0, 187, 255, 0.22)", borderRadius: "8px", padding: "12px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Link2 size={14} color="#00BBFF" />
                <span style={{ fontSize: 10, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>DURABLE METALLURGY</span>
              </div>
              <p style={{ fontSize: 11, color: "rgba(255, 255, 255, 0.7)", margin: 0, lineHeight: 1.3 }}>High-strength ductile iron</p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(0, 187, 255, 0.22)", borderRadius: "8px", padding: "12px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Settings size={14} color="#00BBFF" />
                <span style={{ fontSize: 10, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>PRECISION CNC</span>
              </div>
              <p style={{ fontSize: 11, color: "rgba(255, 255, 255, 0.7)", margin: 0, lineHeight: 1.3 }}>Tested for reliable performance</p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(0, 187, 255, 0.22)", borderRadius: "8px", padding: "12px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Droplet size={14} color="#00BBFF" />
                <span style={{ fontSize: 10, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>BUILT TO PROTECT</span>
              </div>
              <p style={{ fontSize: 11, color: "rgba(255, 255, 255, 0.7)", margin: 0, lineHeight: 1.3 }}>Preserving natural waterways</p>
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "rgba(255, 255, 255, 0.88)", fontWeight: 600 }}>
            <CheckCircle2 size={16} color="#0085F4" />
            <span>Supporting clean water. Strengthening municipal infrastructure across North America.</span>
          </div>
        </motion.div>

        {/* Right Column Product Showcase Image & Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            background: "#FFFFFF",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 24px 60px rgba(0, 20, 60, 0.45)",
            border: "1px solid rgba(0, 187, 255, 0.3)",
            maxWidth: 420,
            width: "100%",
            justifySelf: "end"
          }}
          className="hero-right-card"
        >
          {/* Header Status Row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <BarChart3 size={18} color="#0085F4" />
              <span className="font-display" style={{ fontSize: 12, fontWeight: 800, color: "#004AAD", textTransform: "uppercase", letterSpacing: "0.05em" }}>FEATURED HYDRO INFRASTRUCTURE</span>
            </div>
            <div style={{ background: "rgba(0, 133, 244, 0.1)", color: "#0085F4", fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 4 }}>
              AWWA SPEC
            </div>
          </div>

          {/* Product Image Box */}
          <div style={{ position: "relative", width: "100%", height: 160, borderRadius: "10px", overflow: "hidden", marginBottom: 16, background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <Image src="/images/2.webp" alt="AWWA C110 Hydro Vault" fill style={{ objectFit: "contain", padding: 12 }} priority />
            <div style={{ position: "absolute", bottom: 8, left: 8, background: "#004AAD", color: "#FFFFFF", padding: "4px 10px", borderRadius: "4px", fontSize: 10, fontWeight: 800 }} className="font-display">
              AWWA C110 HYDRO ENCLOSURE
            </div>
          </div>

          {/* Spec Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: "#F0F7FF", borderRadius: "6px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#0085F4", textTransform: "uppercase" }}>SPECIFICATION</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#004AAD" }}>AWWA C110 / C153</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: "#F0F7FF", borderRadius: "6px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#0085F4", textTransform: "uppercase" }}>PRESSURE RATING</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#004AAD" }}>350 PSI HYDRO TESTED</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: "#F0F7FF", borderRadius: "6px" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#0085F4", textTransform: "uppercase" }}>LOAD RATING</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#004AAD" }}>AASHTO H-20 HEAVY TRAFFIC</span>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link 
              href="#contact" 
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                width: "100%", 
                padding: "13px 18px", 
                background: "#0085F4", 
                color: "#FFFFFF", 
                borderRadius: "8px", 
                fontWeight: 800, 
                fontSize: 12, 
                textTransform: "uppercase", 
                textDecoration: "none",
                transition: "background 0.2s",
                boxShadow: "0 4px 14px rgba(0, 133, 244, 0.3)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#004AAD")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0085F4")}
            >
              <span>REQUEST A SUBMITTAL</span>
              <ArrowRight size={15} />
            </Link>
            
            <Link 
              href="/products" 
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                width: "100%", 
                padding: "13px 18px", 
                background: "#FFFFFF", 
                color: "#004AAD", 
                border: "1.5px solid #0085F4", 
                borderRadius: "8px", 
                fontWeight: 800, 
                fontSize: 12, 
                textTransform: "uppercase", 
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F0F7FF";
                e.currentTarget.style.borderColor = "#004AAD";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.borderColor = "#0085F4";
              }}
            >
              <span>EXPLORE CATALOGUE</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Far Right Floating Action Buttons */}
      <div
        className="hero-floating-actions"
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          zIndex: 20
        }}
      >
        {[
          { icon: Search, label: "Search Specs", href: "/products" },
          { icon: FileText, label: "Submittals", href: "/waterworks-castings" },
          { icon: Phone, label: "Call Us", href: "tel:+18005550199" },
          { icon: Mail, label: "Email Us", href: "#contact" },
          { icon: User, label: "Engineer Portal", href: "/company" }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              title={item.label}
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "rgba(0, 133, 244, 0.35)",
                border: "1px solid rgba(0, 187, 255, 0.45)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0085F4";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 133, 244, 0.35)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Icon size={16} />
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 1280px) {
          .hero-floating-actions { display: none !important; }
        }
        @media (max-width: 1024px) {
          .hero-section {
            padding: 100px 0 50px !important;
            min-height: auto !important;
          }
          .hero-container {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
            gap: 40px !important;
          }
          .hero-right-card {
            justify-self: center !important;
            max-width: 480px !important;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .hero-feature-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .hero-feature-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
