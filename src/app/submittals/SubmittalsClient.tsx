"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  Search,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { SUBMITTALS_LIST, SubmittalItem } from "@/data/submittalsData";

export default function SubmittalsClient() {
  const { user, isAuthenticated, saveSubmittal, removeSubmittal } = useAuth();
  const [filterCat, setFilterCat] = useState("all");
  const [search, setSearch] = useState("");
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Submittals" },
    { id: "castings", label: "Castings & Iron" },
    { id: "valves", label: "Valves & Controls" },
    { id: "enclosures", label: "Boxes & Enclosures" },
    { id: "drainage", label: "Drainage & Stormwater" },
    { id: "quality", label: "Quality & Certifications" },
  ];

  const filtered = SUBMITTALS_LIST.filter(item => {
    const matchCat = filterCat === "all" || item.category.toLowerCase().includes(filterCat);
    const q = search.toLowerCase();
    const matchQ = item.title.toLowerCase().includes(q) || item.code.toLowerCase().includes(q) || item.standard.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const handleDownload = (item: SubmittalItem) => {
    setDownloadMsg(`Downloading ${item.title} (${item.format})`);
    setTimeout(() => setDownloadMsg(null), 4000);
  };

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 165, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 40px" }} className="submittals-container">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 8, listStyle: "none", padding: 0, margin: 0, fontSize: 12 }} className="font-mono-spec">
              <li>
                <Link href="/" style={{ color: "var(--ink-soft)", textDecoration: "none" }}>HOME</Link>
              </li>
              <li><ChevronRight size={12} color="var(--ink-soft)" /></li>
              <li>
                <span style={{ color: "var(--deep)", fontWeight: 700 }}>ENGINEERING SUBMITTALS &amp; CAD LIBRARY</span>
              </li>
            </ol>
          </nav>

          {/* Hero Banner Card */}
          <div
            className="industrial-card"
            style={{
              background: "var(--deep)",
              color: "#FFFFFF",
              border: "1px solid var(--line-strong)",
              padding: "48px 40px",
              marginBottom: 40,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 28,
            }}
          >
            <div style={{ maxWidth: 840 }}>
              <div className="eyebrow-label" style={{ color: "var(--water)", marginBottom: 14 }}>
                <ShieldCheck size={14} style={{ marginRight: 6 }} /> OFFICIAL MUNICIPAL SPECIFICATION PACKAGES
              </div>
              <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 16, color: "#FFFFFF" }}>
                Engineering Submittals &amp; AutoCAD Drawing Library
              </h1>
              <p style={{ fontSize: 15, color: "var(--paper)", lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
                Download verified technical data sheets, AutoCAD DWG 2D/3D details, material test certificates, and AASHTO H-20 load test submittals for North American municipal infrastructure projects.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {isAuthenticated ? (
                <Link href="/portal" className="btn-primary" style={{ padding: "12px 24px", fontSize: 12, textAlign: "center" }}>
                  OPEN MY SPEC BINDER ({user?.savedSubmittals.length || 0}) <ArrowRight size={14} />
                </Link>
              ) : (
                <Link href="/login" className="btn-primary" style={{ padding: "12px 24px", fontSize: 12, textAlign: "center" }}>
                  CLIENT PORTAL SIGN IN <ArrowRight size={14} />
                </Link>
              )}
              <Link href="/quality" className="btn-outline" style={{ padding: "10px 24px", fontSize: 11, textAlign: "center", color: "#FFFFFF", borderColor: "var(--line-strong)" }}>
                VIEW ISO 9001 CERTIFICATIONS
              </Link>
            </div>
          </div>

          {/* Download Toast Notification */}
          {downloadMsg && (
            <div style={{ background: "#ECFDF5", border: "1px solid #10B981", color: "#065F46", padding: "14px 20px", marginBottom: 24, fontSize: 14, display: "flex", alignItems: "center", gap: 12 }}>
              <CheckCircle2 size={18} color="#10B981" />
              <span>{downloadMsg}</span>
            </div>
          )}

          {/* Search & Filter Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <div style={{ position: "relative", flex: "1 1 360px", maxWidth: 460 }}>
              <Search size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search submittal name, standard, or code..."
                style={{
                  width: "100%",
                  padding: "12px 14px 12px 42px",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "0px",
                  fontSize: 13,
                  fontFamily: "var(--font-sans), sans-serif",
                  outline: "none"
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
              />
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilterCat(c.id)}
                  className="font-mono-spec"
                  style={{
                    padding: "10px 16px",
                    background: filterCat === c.id ? "var(--deep)" : "var(--surface)",
                    color: filterCat === c.id ? "#FFFFFF" : "var(--deep)",
                    border: "1px solid var(--line)",
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submittals Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 24 }}>
            {filtered.map((item) => {
              const isSaved = user?.savedSubmittals.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="industrial-card"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "0px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <span
                        className="font-mono-spec"
                        style={{
                          padding: "3px 8px",
                          background: "var(--paper)",
                          border: "1px solid var(--line)",
                          fontSize: 10,
                          fontWeight: 700,
                          color: "var(--water)"
                        }}
                      >
                        {item.code}
                      </span>
                      <span
                        className="font-mono-spec"
                        style={{
                          padding: "3px 8px",
                          background: item.format === "DWG / CAD" ? "#EFF6FF" : "var(--paper)",
                          border: "1px solid var(--line)",
                          fontSize: 10,
                          fontWeight: 700,
                          color: item.format === "DWG / CAD" ? "#1D4ED8" : "var(--deep)"
                        }}
                      >
                        {item.format}
                      </span>
                    </div>

                    <h3 className="font-display" style={{ fontSize: 17, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", lineHeight: 1.3, marginBottom: 8 }}>
                      {item.title}
                    </h3>

                    <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink)", marginBottom: 8 }}>
                      STANDARD: <strong style={{ color: "var(--deep)" }}>{item.standard}</strong>
                    </div>

                    <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55, margin: "0 0 20px 0", fontWeight: 400 }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                    <div className="font-mono-spec" style={{ fontSize: 10, color: "var(--ink-soft)" }}>
                      {item.revision} • {item.fileSize}
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                      {isAuthenticated && (
                        <button
                          onClick={() => isSaved ? removeSubmittal(item.id) : saveSubmittal(item.id)}
                          className="btn-outline"
                          style={{
                            padding: "6px 12px",
                            fontSize: 11,
                            background: isSaved ? "#EFF6FF" : "transparent",
                            borderColor: isSaved ? "var(--water)" : "var(--line)",
                            color: isSaved ? "var(--water)" : "var(--deep)"
                          }}
                        >
                          {isSaved ? "SAVED ✓" : "+ BINDER"}
                        </button>
                      )}

                      <button
                        onClick={() => handleDownload(item)}
                        className="btn-primary"
                        style={{ padding: "6px 16px", fontSize: 11 }}
                      >
                        <Download size={12} /> DOWNLOAD {item.format}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .submittals-container { padding: 0 20px !important; }
        }
      `}</style>
    </div>
  );
}

