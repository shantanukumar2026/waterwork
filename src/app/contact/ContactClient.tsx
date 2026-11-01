"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  ChevronRight,
  Building2,
  Factory,
  Truck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    inquiryType: "Municipal Spec Review",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        location: "",
        inquiryType: "Municipal Spec Review",
        message: ""
      });
    }, 700);
  };

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 165, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 40px" }} className="contact-page-container">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 8, listStyle: "none", padding: 0, margin: 0, fontSize: 12 }} className="font-mono-spec">
              <li>
                <Link href="/" style={{ color: "var(--ink-soft)", textDecoration: "none" }}>HOME</Link>
              </li>
              <li><ChevronRight size={12} color="var(--ink-soft)" /></li>
              <li>
                <span style={{ color: "var(--deep)", fontWeight: 700 }}>CONTACT &amp; ENGINEERING SALES</span>
              </li>
            </ol>
          </nav>

          {/* Header Title */}
          <div style={{ marginBottom: 40 }}>
            <div className="eyebrow-label" style={{ marginBottom: 12 }}>
              <ShieldCheck size={14} style={{ marginRight: 6 }} /> TECHNICAL CONSULTATION &amp; INQUIRIES
            </div>
            <h1 className="font-display" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", lineHeight: 1.1, marginBottom: 16 }}>
              Connect with H2 Industries Engineering
            </h1>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", maxWidth: 740, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Whether you are preparing municipal waterworks bid submittals, seeking custom AWWA castings, or scheduling freight staging from our regional hubs, our engineering sales desk is here to assist.
            </p>
          </div>

          {/* Grid Layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.3fr", gap: 48, alignItems: "start" }} className="contact-grid">
            
            {/* Left: Regional Hubs & Dispatch Hotlines */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              
              {/* Melville NY HQ */}
              <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "28px", borderLeft: "4px solid var(--water)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Factory size={18} color="var(--water)" />
                  <span className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "var(--water)", textTransform: "uppercase" }}>
                    HEADQUARTERS &amp; PRIMARY FOUNDRY
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--deep)", marginBottom: 10 }}>
                  Melville, New York (USA)
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--ink)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <MapPin size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <span>105 Maxes Road, Melville, NY 11737, USA</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Phone size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <a href="tel:+15127828880" style={{ color: "var(--deep)", fontWeight: 700, textDecoration: "none" }}>+1 (512) 782-8880</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Mail size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <span>ny-sales@h2industries.com</span>
                  </div>
                </div>
              </div>

              {/* Stuart FL Hub */}
              <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "28px", borderLeft: "4px solid var(--water)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Truck size={18} color="var(--water)" />
                  <span className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "var(--water)", textTransform: "uppercase" }}>
                    SOUTHERN OPERATIONS &amp; TESTING HUB
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--deep)", marginBottom: 10 }}>
                  Stuart, Florida (USA)
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--ink)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <MapPin size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <span>850 NW Federal Hwy, Stuart, FL 34994</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Phone size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <a href="tel:7722970700" style={{ color: "var(--deep)", fontWeight: 700, textDecoration: "none" }}>(772) 297-0700</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Mail size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <span>fl-sales@h2industries.com</span>
                  </div>
                </div>
              </div>

              {/* Toronto ON Hub */}
              <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "28px", borderLeft: "4px solid var(--water)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Building2 size={18} color="var(--water)" />
                  <span className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "var(--water)", textTransform: "uppercase" }}>
                    CANADIAN OPERATIONS &amp; CSA DEPOT
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--deep)", marginBottom: 10 }}>
                  Toronto, Ontario (Canada)
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--ink)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <MapPin size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <span>One Yonge Street, Toronto, Ontario M5E 1R4 Canada</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Phone size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <a href="tel:+14388059990" style={{ color: "var(--deep)", fontWeight: 700, textDecoration: "none" }}>+1 (438) 805-9990</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Mail size={15} color="var(--water)" style={{ flexShrink: 0 }} />
                    <span>canada-sales@h2industries.com</span>
                  </div>
                </div>
              </div>

              {/* Emergency Technical Line */}
              <div style={{ background: "var(--deep)", color: "#FFFFFF", padding: "24px 28px", border: "1px solid var(--line-strong)" }}>
                <div className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "var(--water)", textTransform: "uppercase", marginBottom: 6 }}>
                  24/7 EMERGENCY DISPATCH HOTLINE
                </div>
                <p style={{ fontSize: 13, color: "var(--paper)", opacity: 0.9, lineHeight: 1.5, margin: "0 0 12px 0" }}>
                  For urgent water main breaks, DOT highway repair castings, or emergency curb box replacements:
                </p>
                <div className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>
                  +1 (512) 782-8880 <span style={{ fontSize: 12, fontWeight: 500, color: "var(--water)" }}>(PRESS OPTION 1)</span>
                </div>
              </div>

            </div>

            {/* Right: Engineering Inquiry & RFQ Form */}
            <div className="industrial-card" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "40px" }}>
              <div style={{ marginBottom: 24 }}>
                <h2 className="font-display" style={{ fontSize: 24, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", margin: "0 0 6px 0" }}>
                  Request an Engineering Specification or Quote
                </h2>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0 }}>
                  Fill out the project details below and a P.E. applications engineer will respond within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div style={{ padding: "48px 24px", textAlign: "center", background: "var(--paper)", border: "1px solid var(--line)" }}>
                  <CheckCircle2 size={48} color="#10B981" style={{ margin: "0 auto 16px" }} />
                  <h3 className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", marginBottom: 8 }}>
                    Inquiry Received Successfully
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.6 }}>
                    Thank you for contacting H2 Industries. Our engineering desk has logged your request and an assigned technical representative will be in touch shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ padding: "10px 24px", fontSize: 11 }}>
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-cols">
                    <div>
                      <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robert Caldwell"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: "100%", padding: "10px 12px", background: "var(--paper)", border: "1px solid var(--line)", fontSize: 13, outline: "none" }}
                      />
                    </div>

                    <div>
                      <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                        Business / Agency Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. r.caldwell@cityutility.gov"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: "100%", padding: "10px 12px", background: "var(--paper)", border: "1px solid var(--line)", fontSize: 13, outline: "none" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-cols">
                    <div>
                      <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 (512) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: "100%", padding: "10px 12px", background: "var(--paper)", border: "1px solid var(--line)", fontSize: 13, outline: "none" }}
                      />
                    </div>

                    <div>
                      <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                        Organization / Municipality *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Metro Water District"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{ width: "100%", padding: "10px 12px", background: "var(--paper)", border: "1px solid var(--line)", fontSize: 13, outline: "none" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-cols">
                    <div>
                      <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                        Project State / Province *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Texas, New York, Ontario"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        style={{ width: "100%", padding: "10px 12px", background: "var(--paper)", border: "1px solid var(--line)", fontSize: 13, outline: "none" }}
                      />
                    </div>

                    <div>
                      <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                        Inquiry Purpose
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        style={{ width: "100%", padding: "10px 12px", background: "var(--paper)", border: "1px solid var(--line)", fontSize: 13, outline: "none" }}
                      >
                        <option value="Municipal Spec Review">Municipal Submittal &amp; Spec Review</option>
                        <option value="Volume Contractor Pricing">Contractor Takeoff &amp; Volume Pricing</option>
                        <option value="Custom Pattern Tooling">Custom Foundry Pattern / Tooling Request</option>
                        <option value="Distributor Representation">Regional Distributor Representation</option>
                        <option value="General Technical Support">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 6 }}>
                      Project Description / Spec Notes *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please include project details, required AWWA standards, estimated quantities, or jobsite staging delivery dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: "100%", padding: "12px", background: "var(--paper)", border: "1px solid var(--line)", fontSize: 13, outline: "none" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      padding: "14px",
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? "TRANSMITTING SPECIFICATION..." : "TRANSMIT TO ENGINEERING DESK"} <Send size={14} />
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .contact-page-container { padding: 0 20px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
