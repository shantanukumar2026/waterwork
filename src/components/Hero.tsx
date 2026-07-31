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
            background: "linear-gradient(180deg, rgba(0, 38, 95, 0.85) 0%, rgba(0, 43, 102, 0.95) 100%)",
          }}
        />
        {/* Wave Overlay / Tech Blueprint Pattern */}
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
          gap: 36,
          alignItems: "center",
        }}
        className="hero-container"
      >
        {/* Left Column Content (50%) */}
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
              marginBottom: 12
            }}
          >
            <ShieldCheck size={13} color="#00BBFF" />
            <span style={{ color: "#00BBFF", fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              TRUSTED. TESTED. BUILT TO LAST.
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 800,
              fontStyle: "normal",
              lineHeight: 1.05,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              marginBottom: 14,
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
              color: "rgba(255, 255, 255, 0.88)",
              fontSize: "0.98rem",
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: 600,
              marginBottom: 16
            }}
          >
            From AWWA-compliant ductile iron castings to modular sampling solutions—engineered for strength, reliability, and performance.
          </p>

          {/* 4-Card Feature Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, maxWidth: 660, marginBottom: 14 }} className="hero-feature-grid">
            <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(0, 187, 255, 0.2)", borderRadius: "8px", padding: "10px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <ShieldCheck size={14} color="#00BBFF" />
                <span style={{ fontSize: 9, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>AWWA COMPLIANT</span>
              </div>
              <p style={{ fontSize: 10, color: "rgba(255, 255, 255, 0.65)", margin: 0, lineHeight: 1.25 }}>Built to industry standards</p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(0, 187, 255, 0.2)", borderRadius: "8px", padding: "10px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Link2 size={14} color="#00BBFF" />
                <span style={{ fontSize: 9, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>DURABLE BY DESIGN</span>
              </div>
              <p style={{ fontSize: 10, color: "rgba(255, 255, 255, 0.65)", margin: 0, lineHeight: 1.25 }}>High-strength ductile iron</p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(0, 187, 255, 0.2)", borderRadius: "8px", padding: "10px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Settings size={14} color="#00BBFF" />
                <span style={{ fontSize: 9, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>PRECISION ENGINEERED</span>
              </div>
              <p style={{ fontSize: 10, color: "rgba(255, 255, 255, 0.65)", margin: 0, lineHeight: 1.25 }}>Tested for reliable performance</p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(0, 187, 255, 0.2)", borderRadius: "8px", padding: "10px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Droplet size={14} color="#00BBFF" />
                <span style={{ fontSize: 9, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.02em" }}>BUILT TO PROTECT</span>
              </div>
              <p style={{ fontSize: 10, color: "rgba(255, 255, 255, 0.65)", margin: 0, lineHeight: 1.25 }}>Protecting today. Preserving tomorrow.</p>
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, color: "rgba(255, 255, 255, 0.85)", fontWeight: 600 }}>
            <CheckCircle2 size={15} color="#0085F4" />
            <span>Supporting clean water. Strengthening communities. Building a better future.</span>
          </div>
        </motion.div>

        {/* Right Column Product Showcase Image & Telemetry Card (50%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            background: "#FFFFFF",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 20px 50px rgba(0, 30, 80, 0.4)",
            border: "1px solid rgba(0, 187, 255, 0.3)",
            maxWidth: 390,
            width: "100%",
            justifySelf: "end"
          }}
          className="hero-right-card"
        >
          {/* Header Status Row */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <BarChart3 size={17} color="#0085F4" />
              <span className="font-display" style={{ fontSize: 11, fontWeight: 800, color: "#004AAD", textTransform: "uppercase", letterSpacing: "0.04em" }}>COMMAND & TELEMETRY</span>
            </div>
          </div>

          {/* Product Image Box */}
          <div style={{ position: "relative", width: "100%", height: 130, borderRadius: "8px", overflow: "hidden", marginBottom: 14, border: "1px solid #E2E8F0" }}>
            <Image src="/images/hero_bright_usa.png" alt="AWWA C110 Hydro Vault" fill style={{ objectFit: "cover" }} priority />
            <div style={{ position: "absolute", bottom: 6, left: 6, background: "#004AAD", color: "#FFFFFF", padding: "3px 8px", borderRadius: "4px", fontSize: 9.5, fontWeight: 800 }} className="font-display">
              AWWA C110 HYDRO VAULT
            </div>
          </div>

          {/* Spec Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", background: "#F0F7FF", borderRadius: "5px" }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: "#0085F4", textTransform: "uppercase" }}>SPECIFICATION</span>
              <span style={{ fontSize: 10.5, fontWeight: 800, color: "#004AAD" }}>AWWA C110 / C153</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", background: "#F0F7FF", borderRadius: "5px" }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: "#0085F4", textTransform: "uppercase" }}>PRESSURE RATING</span>
              <span style={{ fontSize: 10.5, fontWeight: 800, color: "#004AAD" }}>350 PSI RATING</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", background: "#F0F7FF", borderRadius: "5px" }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: "#0085F4", textTransform: "uppercase" }}>LOAD RATING</span>
              <span style={{ fontSize: 10.5, fontWeight: 800, color: "#004AAD" }}>AASHTO H-20 HEAVY</span>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link 
              href="#contact" 
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                width: "100%", 
                padding: "12px 18px", 
                background: "#0085F4", 
                color: "#FFFFFF", 
                borderRadius: "7px", 
                fontWeight: 800, 
                fontSize: 11.5, 
                textTransform: "uppercase", 
                textDecoration: "none",
                transition: "background 0.2s"
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
                padding: "12px 18px", 
                background: "#FFFFFF", 
                color: "#0085F4", 
                border: "1px solid #0085F4", 
                borderRadius: "7px", 
                fontWeight: 800, 
                fontSize: 11.5, 
                textTransform: "uppercase", 
                textDecoration: "none",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F0F7FF")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
            >
              <span>EXPLORE CATALOGUE</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right Stat Card Bar (Cleaned Single Badge) */}
      <div
        className="hero-stat-bar"
        style={{
          position: "absolute",
          bottom: 16,
          right: 60,
          background: "rgba(0, 35, 90, 0.65)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0, 187, 255, 0.3)",
          borderRadius: "12px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          zIndex: 15
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Droplet size={22} color="#00BBFF" />
          <div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>100%</div>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#00BBFF", textTransform: "uppercase", marginTop: 3 }}>COMMITTED TO CLEAN WATER</div>
          </div>
        </div>
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
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(0, 133, 244, 0.25)",
                border: "1px solid rgba(0, 187, 255, 0.4)",
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
                e.currentTarget.style.background = "rgba(0, 133, 244, 0.25)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Icon size={15} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
