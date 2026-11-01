"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FileText,
  FileCheck,
  Download,
  Building2,
  ShieldCheck,
  LogOut,
  User,
  Clock,
  Layers,
  CheckCircle2,
  Plus,
  Search,
  ChevronRight,
  PhoneCall,
  Mail,
  Truck,
  ExternalLink,
  Award,
  AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { SUBMITTALS_LIST, SubmittalItem } from "@/data/submittalsData";

type PortalTab = "submittals" | "quotes" | "pricing" | "profile";

export default function PortalClient() {
  const router = useRouter();
  const { user, isAuthenticated, logout, removeSubmittal, saveSubmittal, demoLogin } = useAuth();
  const [activeTab, setActiveTab] = useState<PortalTab>("submittals");
  const [submittalFilter, setSubmittalFilter] = useState("all");
  const [submittalSearch, setSubmittalSearch] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // RFQ Modal State
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqProjectName, setRfqProjectName] = useState("");
  const [rfqCategory, setRfqCategory] = useState("Mechanical Joint Restraints");
  const [rfqNotes, setRfqNotes] = useState("");
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  const handleDownload = (item: SubmittalItem) => {
    setDownloadSuccess(`Downloaded ${item.title} (${item.format})`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleCreateRfq = (e: React.FormEvent) => {
    e.preventDefault();
    if (rfqProjectName) {
      setRfqSubmitted(true);
      setTimeout(() => {
        setRfqSubmitted(false);
        setRfqModalOpen(false);
        setRfqProjectName("");
        setRfqNotes("");
      }, 2000);
    }
  };

  if (!isAuthenticated || !user) {
    return (
      <div style={{ background: "var(--paper)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: 180, paddingBottom: 80 }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "48px 36px" }}>
              <div style={{ width: 56, height: 56, background: "rgba(30, 143, 194, 0.12)", border: "1px solid var(--water)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <ShieldCheck size={28} color="var(--water)" />
              </div>
              <h1 className="font-display" style={{ fontSize: 28, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", marginBottom: 12 }}>
                Engineering Portal Authentication Required
              </h1>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 540, margin: "0 auto 28px" }}>
                You must be logged in as an authorized municipal water engineer, utility contractor, or distributor to view stamped submittals, CAD models, and active project RFQs.
              </p>
              
              <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 32 }}>
                <Link href="/login" className="btn-primary" style={{ padding: "12px 28px", fontSize: 12 }}>
                  SIGN IN TO PORTAL <ChevronRight size={14} />
                </Link>
                <Link href="/register" className="btn-outline" style={{ padding: "12px 28px", fontSize: 12 }}>
                  REQUEST TRADE ACCESS
                </Link>
              </div>

              {/* 1-Click Demo Evaluation for quick inspection */}
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
                <p className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 12 }}>
                  Or instantly preview portal as a demo role:
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
                  <button onClick={() => demoLogin("engineer")} className="btn-outline" style={{ padding: "8px 14px", fontSize: 11 }}>
                    Sarah Jenkins (City Water P.E.)
                  </button>
                  <button onClick={() => demoLogin("contractor")} className="btn-outline" style={{ padding: "8px 14px", fontSize: 11 }}>
                    Marcus Vance (Utility Contractor)
                  </button>
                  <button onClick={() => demoLogin("distributor")} className="btn-outline" style={{ padding: "8px 14px", fontSize: 11 }}>
                    Elena Rostova (Master Distributor)
                  </button>
                </div>
              </div>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Filter Submittals
  const savedItems = SUBMITTALS_LIST.filter(item => user.savedSubmittals.includes(item.id));
  const availableItems = SUBMITTALS_LIST.filter(item => {
    const matchCat = submittalFilter === "all" || item.category.toLowerCase().includes(submittalFilter);
    const matchQuery = item.title.toLowerCase().includes(submittalSearch.toLowerCase()) || item.code.toLowerCase().includes(submittalSearch.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 165, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 40px" }} className="portal-container">
          
          {/* Top Breadcrumb & User Ribbon */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
            <nav aria-label="Breadcrumb">
              <ol style={{ display: "flex", alignItems: "center", gap: 8, listStyle: "none", padding: 0, margin: 0, fontSize: 12 }} className="font-mono-spec">
                <li>
                  <Link href="/" style={{ color: "var(--ink-soft)", textDecoration: "none" }}>HOME</Link>
                </li>
                <li><ChevronRight size={12} color="var(--ink-soft)" /></li>
                <li>
                  <span style={{ color: "var(--deep)", fontWeight: 700 }}>ENGINEERING CLIENT PORTAL</span>
                </li>
              </ol>
            </nav>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn-outline"
              style={{
                padding: "8px 16px",
                fontSize: 11,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#DC2626",
                borderColor: "#FCA5A5"
              }}
            >
              <LogOut size={14} /> SIGN OUT
            </button>
          </div>

          {/* User Profile Header Card */}
          <div
            className="industrial-card"
            style={{
              background: "var(--deep)",
              color: "#FFFFFF",
              border: "1px solid var(--line-strong)",
              padding: "36px 40px",
              marginBottom: 36,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 28,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              {/* Initials Avatar */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "var(--water)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontWeight: 800,
                  fontFamily: "var(--font-sans), sans-serif",
                  border: "2px solid rgba(255,255,255,0.2)",
                  flexShrink: 0
                }}
              >
                {user.avatarInitials}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                  <h1 className="font-display" style={{ fontSize: 26, fontWeight: 800, textTransform: "uppercase", margin: 0, color: "#FFFFFF" }}>
                    {user.name}
                  </h1>
                  <span
                    className="font-mono-spec"
                    style={{
                      padding: "3px 8px",
                      background: "rgba(30, 143, 194, 0.25)",
                      border: "1px solid var(--water)",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "var(--water)",
                      textTransform: "uppercase"
                    }}
                  >
                    {user.tier}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", fontSize: 13, color: "var(--paper)", opacity: 0.9 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Building2 size={14} color="var(--water)" />
                    <span>{user.company}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <User size={14} color="var(--water)" />
                    <span>{user.role}</span>
                  </div>
                  {user.licenseOrId && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Award size={14} color="var(--water)" />
                      <span>{user.licenseOrId}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Stats / Account Rep Card */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--line-strong)",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div>
                <div className="font-mono-spec" style={{ fontSize: 10, fontWeight: 700, color: "var(--water)", textTransform: "uppercase" }}>
                  ASSIGNED TECHNICAL REP
                </div>
                <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", marginTop: 2 }}>
                  David Sterling, Senior P.E.
                </div>
                <div style={{ fontSize: 11, color: "var(--paper)", opacity: 0.8, marginTop: 2 }}>
                  Texas &amp; Southern District Operations
                </div>
              </div>
              <a
                href="tel:+15127828880"
                className="btn-primary"
                style={{ padding: "8px 12px", fontSize: 10, whiteSpace: "nowrap" }}
              >
                <PhoneCall size={12} /> CALL REP
              </a>
            </div>
          </div>

          {/* Download Notification Banner */}
          {downloadSuccess && (
            <div style={{ background: "#ECFDF5", border: "1px solid #10B981", color: "#065F46", padding: "14px 20px", marginBottom: 24, fontSize: 14, display: "flex", alignItems: "center", gap: 12 }}>
              <CheckCircle2 size={18} color="#10B981" />
              <span>{downloadSuccess}</span>
            </div>
          )}

          {/* Portal Navigation Tabs */}
          <div style={{ display: "flex", gap: 8, borderBottom: "1px solid var(--line)", marginBottom: 32, overflowX: "auto" }} className="portal-tabs-bar">
            {[
              { id: "submittals", label: "Submittals & CAD Vault", icon: FileText, count: SUBMITTALS_LIST.length },
              { id: "quotes", label: "My Project Quotes (RFQs)", icon: FileCheck, count: user.recentQuotes.length },
              { id: "pricing", label: "Wholesale & Freight Tier", icon: Truck },
              { id: "profile", label: "Account & Compliance", icon: ShieldCheck },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as PortalTab)}
                  className="font-mono-spec"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 24px",
                    background: isActive ? "var(--surface)" : "transparent",
                    color: isActive ? "var(--deep)" : "var(--ink-soft)",
                    borderTop: isActive ? "3px solid var(--water)" : "3px solid transparent",
                    borderLeft: isActive ? "1px solid var(--line)" : "none",
                    borderRight: isActive ? "1px solid var(--line)" : "none",
                    borderBottom: "none",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: isActive ? 800 : 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s"
                  }}
                >
                  <TabIcon size={16} color={isActive ? "var(--water)" : "var(--ink-soft)"} />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span
                      style={{
                        padding: "2px 6px",
                        background: isActive ? "var(--deep)" : "var(--line)",
                        color: isActive ? "#FFFFFF" : "var(--deep)",
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* TAB 1: SUBMITTALS & CAD VAULT */}
          {activeTab === "submittals" && (
            <div>
              {/* Saved Binder Bar */}
              {savedItems.length > 0 && (
                <div style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "24px", marginBottom: 32 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", margin: 0 }}>
                        My Active Project Submittal Binder ({savedItems.length} Saved)
                      </h3>
                      <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: "4px 0 0 0" }}>
                        Directly bookmarked engineering drawings and AWWA compliance certificates for your jurisdiction.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setDownloadSuccess(`Generated complete Submittal Binder ZIP (${savedItems.length} specs)`);
                        setTimeout(() => setDownloadSuccess(null), 4000);
                      }}
                      className="btn-primary"
                      style={{ padding: "10px 20px", fontSize: 11 }}
                    >
                      <Download size={14} /> DOWNLOAD COMBINED BINDER (.ZIP)
                    </button>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
                    {savedItems.map((item) => (
                      <div key={item.id} className="industrial-card" style={{ background: "var(--paper)", padding: "16px 20px", border: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div className="font-mono-spec" style={{ fontSize: 10, color: "var(--water)", fontWeight: 700 }}>{item.code}</div>
                          <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: "var(--deep)", marginTop: 2 }}>{item.title}</div>
                          <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 4 }}>Format: <strong>{item.format}</strong> • {item.fileSize}</div>
                        </div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <button
                            onClick={() => handleDownload(item)}
                            title="Download File"
                            className="btn-outline"
                            style={{ padding: "6px 10px", fontSize: 10 }}
                          >
                            <Download size={12} />
                          </button>
                          <button
                            onClick={() => removeSubmittal(item.id)}
                            title="Remove from Binder"
                            style={{ background: "none", border: "none", color: "var(--ink-soft)", cursor: "pointer", fontSize: 12 }}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Search & Category Filter */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
                <div style={{ position: "relative", flex: "1 1 340px", maxWidth: 440 }}>
                  <Search size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                  <input
                    type="text"
                    value={submittalSearch}
                    onChange={(e) => setSubmittalSearch(e.target.value)}
                    placeholder="Search submittal title, AWWA standard, or code..."
                    style={{
                      width: "100%",
                      padding: "10px 14px 10px 40px",
                      background: "var(--surface)",
                      border: "1px solid var(--line)",
                      fontSize: 13,
                      fontFamily: "var(--font-sans), sans-serif",
                      outline: "none"
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                  />
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    { id: "all", label: "All Formats" },
                    { id: "castings", label: "Castings & Iron" },
                    { id: "valves", label: "Valves & Controls" },
                    { id: "enclosures", label: "Boxes & Enclosures" },
                    { id: "certifications", label: "ISO / Quality Certs" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSubmittalFilter(cat.id)}
                      className="font-mono-spec"
                      style={{
                        padding: "8px 14px",
                        background: submittalFilter === cat.id ? "var(--deep)" : "var(--surface)",
                        color: submittalFilter === cat.id ? "#FFFFFF" : "var(--deep)",
                        border: "1px solid var(--line)",
                        fontSize: 11,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Master Submittals Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 20 }}>
                {availableItems.map((item) => {
                  const isSaved = user.savedSubmittals.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      className="industrial-card"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--line)",
                        padding: "24px",
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

                        <h4 className="font-display" style={{ fontSize: 16, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", lineHeight: 1.3, marginBottom: 8 }}>
                          {item.title}
                        </h4>

                        <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink)", marginBottom: 8 }}>
                          STANDARD: <strong style={{ color: "var(--deep)" }}>{item.standard}</strong>
                        </div>

                        <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, margin: "0 0 16px 0" }}>
                          {item.description}
                        </p>
                      </div>

                      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink-soft)" }}>
                          Size: {item.fileSize}
                        </span>

                        <div style={{ display: "flex", gap: 8 }}>
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

                          <button
                            onClick={() => handleDownload(item)}
                            className="btn-primary"
                            style={{ padding: "6px 14px", fontSize: 11 }}
                          >
                            <Download size={12} /> DOWNLOAD
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: MY PROJECT QUOTES (RFQs) */}
          {activeTab === "quotes" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
                <div>
                  <h3 className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", margin: 0 }}>
                    Active Project Submittals &amp; Engineering RFQs
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: "4px 0 0 0" }}>
                    Track municipal specification reviews, contractor takeoffs, and jobsite staging dates.
                  </p>
                </div>

                <button
                  onClick={() => setRfqModalOpen(true)}
                  className="btn-primary"
                  style={{ padding: "12px 24px", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}
                >
                  <Plus size={16} /> SUBMIT NEW PROJECT RFQ / SPECIFICATION
                </button>
              </div>

              {/* Quotes Listing */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {user.recentQuotes.length === 0 ? (
                  <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "48px", textAlign: "center" }}>
                    <p style={{ fontSize: 15, color: "var(--ink-soft)", margin: 0 }}>
                      No active project RFQs on file. Click "Submit New Project RFQ" to request an engineering takeoff or volume quote.
                    </p>
                  </div>
                ) : (
                  user.recentQuotes.map((q) => (
                    <div
                      key={q.id}
                      className="industrial-card"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--line)",
                        padding: "24px 32px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 20
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                          <span className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "var(--water)" }}>
                            {q.id}
                          </span>
                          <span
                            className="font-mono-spec"
                            style={{
                              padding: "2px 8px",
                              fontSize: 10,
                              fontWeight: 700,
                              background: q.status === "Engineering Stamped" ? "#ECFDF5" : q.status === "Dispatched" ? "#EFF6FF" : "#FFFBEB",
                              color: q.status === "Engineering Stamped" ? "#065F46" : q.status === "Dispatched" ? "#1E40AF" : "#92400E",
                              border: "1px solid rgba(0,0,0,0.06)"
                            }}
                          >
                            {q.status}
                          </span>
                        </div>

                        <h4 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "var(--deep)", margin: "0 0 6px 0" }}>
                          {q.project}
                        </h4>

                        <div className="font-mono-spec" style={{ fontSize: 12, color: "var(--ink-soft)", display: "flex", gap: 16 }}>
                          <span>Submitted: {q.date}</span>
                          <span>•</span>
                          <span>Catalog Items: {q.itemsCount} Units</span>
                          {q.totalEst && (
                            <>
                              <span>•</span>
                              <span>Est Value: <strong style={{ color: "var(--deep)" }}>{q.totalEst}</strong></span>
                            </>
                          )}
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: 12 }}>
                        <button
                          onClick={() => alert(`Opening project file packet for ${q.id}...`)}
                          className="btn-outline"
                          style={{ padding: "8px 16px", fontSize: 11 }}
                        >
                          VIEW TAKEOFF DETAILS
                        </button>
                        <a
                          href="tel:+15127828880"
                          className="btn-primary"
                          style={{ padding: "8px 16px", fontSize: 11 }}
                        >
                          <PhoneCall size={12} /> EXPEDITE JOB
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 3: WHOLESALE & FREIGHT TIER */}
          {activeTab === "pricing" && (
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 32 }} className="portal-two-col">
              <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "36px" }}>
                <div className="eyebrow-label" style={{ marginBottom: 12 }}>
                  COMMERCIAL TERMS &amp; JURISDICTION
                </div>
                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", marginBottom: 20 }}>
                  Assigned Pricing Schedule: {user.tier}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                  {[
                    { label: "Payment Terms", value: "Net 60 Municipal Water Authority" },
                    { label: "Regional Warehouses", value: "Melville NY, Stuart FL, Toronto ON" },
                    { label: "Emergency Jobsite Dispatch", value: "Guaranteed 48-Hour Express Staging" },
                    { label: "Buy American Act / AIS", value: "100% Certified on All Stamped Runs" },
                    { label: "Freight Minimum", value: "FOB Destination on orders > $15,000" },
                  ].map((row, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid var(--line)", fontSize: 13 }}>
                      <span className="font-mono-spec" style={{ color: "var(--ink-soft)", fontWeight: 600 }}>{row.label}</span>
                      <strong style={{ color: "var(--deep)" }}>{row.value}</strong>
                    </div>
                  ))}
                </div>

                <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: "20px" }}>
                  <div className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "var(--water)", textTransform: "uppercase", marginBottom: 6 }}>
                    NEED CONTAINERLOAD OR HIGHWAY CONTRACT PRICING?
                  </div>
                  <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, margin: "0 0 14px 0" }}>
                    For major metropolitan infrastructure bond work (&gt; 500 tons ductile iron or stormwater column grates), contact the senior commercial desk.
                  </p>
                  <Link href="/calculator" className="btn-primary" style={{ display: "inline-flex", padding: "8px 16px", fontSize: 11 }}>
                    OPEN WATERWORKS WEIGHT &amp; CAPACITY CALCULATOR <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Staging Map & Logistics Card */}
              <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "36px" }}>
                <h4 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", marginBottom: 16 }}>
                  Direct Hub Dispatch
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { hub: "Melville, NY (HQ)", phone: "+1 (512) 782-8880", status: "Primary Foundry Inventory" },
                    { hub: "Stuart, FL Hub", phone: "(772) 297-0700", status: "Southeast DOT Ready" },
                    { hub: "Toronto, ON Hub", phone: "+1 (438) 805-9990", status: "Canadian Municipal Depot" }
                  ].map((h, idx) => (
                    <div key={idx} style={{ padding: "14px", background: "var(--paper)", border: "1px solid var(--line)" }}>
                      <div className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "var(--deep)" }}>{h.hub}</div>
                      <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--water)", marginTop: 2 }}>{h.phone}</div>
                      <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 4 }}>{h.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ACCOUNT & COMPLIANCE */}
          {activeTab === "profile" && (
            <div style={{ maxWidth: 840, margin: "0 auto" }}>
              <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "36px" }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", marginBottom: 20 }}>
                  Account &amp; Entity Verification Profile
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }} className="profile-grid">
                  <div>
                    <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink-soft)" }}>FULL NAME</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--deep)", marginTop: 4 }}>{user.name}</div>
                  </div>
                  <div>
                    <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink-soft)" }}>BUSINESS EMAIL</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--deep)", marginTop: 4 }}>{user.email}</div>
                  </div>
                  <div>
                    <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink-soft)" }}>ORGANIZATION</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--deep)", marginTop: 4 }}>{user.company}</div>
                  </div>
                  <div>
                    <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink-soft)" }}>ENTITY ROLE</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--deep)", marginTop: 4 }}>{user.role}</div>
                  </div>
                  <div>
                    <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink-soft)" }}>LICENSE / P.E. VERIFICATION</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--deep)", marginTop: 4 }}>{user.licenseOrId || "Verified on File"}</div>
                  </div>
                  <div>
                    <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--ink-soft)" }}>COMMERCIAL TIER</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--water)", marginTop: 4 }}>{user.tier}</div>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    Need to update your corporate tax exemption or municipal certificate?
                  </span>
                  <a href="mailto:engineering@h2industries.com" className="btn-outline" style={{ padding: "8px 16px", fontSize: 11 }}>
                    EMAIL COMPLIANCE DESK
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* RFQ Creation Modal */}
      {rfqModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            zIndex: 1000
          }}
          onClick={() => setRfqModalOpen(false)}
        >
          <div
            className="industrial-card"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              maxWidth: 640,
              width: "100%",
              padding: "36px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", margin: 0 }}>
                Submit Project RFQ / Spec Package
              </h3>
              <button onClick={() => setRfqModalOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "var(--deep)" }}>
                ✕
              </button>
            </div>

            {rfqSubmitted ? (
              <div style={{ padding: "32px 0", textAlign: "center" }}>
                <CheckCircle2 size={44} color="#10B981" style={{ margin: "0 auto 12px" }} />
                <h4 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--deep)" }}>
                  RFQ Successfully Received!
                </h4>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 6 }}>
                  Our municipal engineering estimators will review your takeoff and issue a stamped proposal within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCreateRfq} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                    Project Name / Bid Solicitation #
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dallas Trinity River Water Main Relocation"
                    value={rfqProjectName}
                    onChange={(e) => setRfqProjectName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      background: "var(--paper)",
                      border: "1px solid var(--line)",
                      fontSize: 13,
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                    Primary Equipment Category
                  </label>
                  <select
                    value={rfqCategory}
                    onChange={(e) => setRfqCategory(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      background: "var(--paper)",
                      border: "1px solid var(--line)",
                      fontSize: 13,
                      outline: "none"
                    }}
                  >
                    <option value="Mechanical Joint Restraints">Mechanical Joint Restraints (AWWA C111)</option>
                    <option value="AWWA Ductile Iron Pipe Fittings">AWWA DI Pipe Fittings (C110 / C153)</option>
                    <option value="Resilient Wedge Gate Valves">Resilient Wedge Gate Valves (C509 / C515)</option>
                    <option value="Municipal Valve Boxes & Risers">Municipal Valve Boxes &amp; Risers</option>
                    <option value="Manhole Frames & Grates">Manhole Frames &amp; Highway Grates</option>
                    <option value="Column Stormwater Infiltration">Column Stormwater Infiltration Assemblies</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                    Scope Notes / Specification Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify pipe ODs, working pressure, delivery timeline, or attach required municipal DOT spec tags..."
                    value={rfqNotes}
                    onChange={(e) => setRfqNotes(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      background: "var(--paper)",
                      border: "1px solid var(--line)",
                      fontSize: 13,
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 8 }}>
                  <button type="button" onClick={() => setRfqModalOpen(false)} className="btn-outline" style={{ padding: "10px 20px", fontSize: 11 }}>
                    CANCEL
                  </button>
                  <button type="submit" className="btn-primary" style={{ padding: "10px 24px", fontSize: 11 }}>
                    SUBMIT TO ESTIMATING DESK
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .portal-container { padding: 0 20px !important; }
          .portal-two-col { grid-template-columns: 1fr !important; }
          .profile-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
