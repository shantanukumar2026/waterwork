import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QualityCompliance from "@/components/QualityCompliance";
import TechnicalStandards from "@/components/TechnicalStandards";
import Sustainability from "@/components/Sustainability";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("quality");

export default function QualityPage() {
  return (
    <main style={{ paddingTop: 64, background: "#ffffff" }}>
      <Navbar />
      
      {/* Page Header */}
      <div style={{ paddingTop: 165, paddingBottom: 60, maxWidth: 1720, margin: "0 auto", paddingLeft: 60, paddingRight: 60 }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
          <a href="/" style={{ color: "#0085f4", textDecoration: "none" }}>Home</a>
          <span style={{ color: "#CBD5E1" }}>/</span>
          <span style={{ color: "#0F172A" }}>Quality & Compliance</span>
        </nav>
        <div className="pill-tag" style={{ marginBottom: 20 }}>
          <span className="dot" />
          Zero Compromise
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)", fontWeight: 800, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.015em", margin: 0 }}>
          QUALITY & <span style={{ color: "#0085f4" }}>COMPLIANCE</span>
        </h1>
      </div>

      <QualityCompliance />
      <TechnicalStandards />
      <Sustainability />
      <Footer />
    </main>
  );
}
