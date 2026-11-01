import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologyInnovation from "@/components/TechnologyInnovation";
import ManufacturingCapabilities from "@/components/ManufacturingCapabilities";
import { getSeoMetadata } from "@/data/seoConfig";

export const metadata = getSeoMetadata("capabilities");

export default function CapabilitiesPage() {
  return (
    <main style={{ paddingTop: 64, background: "#004aad" }}>
      <Navbar />

      {/* Page Header */}
      <div style={{ paddingTop: 165, paddingBottom: 60, maxWidth: 1720, margin: "0 auto", paddingLeft: 60, paddingRight: 60 }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
          <a href="/" style={{ color: "#CBD5E1", textDecoration: "none" }}>Home</a>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
          <span style={{ color: "#fff" }}>Capabilities</span>
        </nav>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33, 150, 243, 0.1)", border: "1px solid rgba(33, 150, 243, 0.3)", padding: "6px 16px", marginBottom: 20 }}>
          <span style={{ color: "#CBD5E1", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Production Power
          </span>
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)", fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.015em", margin: 0 }}>
          OUR <span style={{ color: "#60AEFF" }}>CAPABILITIES</span>
        </h1>
      </div>

      <TechnologyInnovation />
      <ManufacturingCapabilities />
      <Footer />
    </main>
  );
}
