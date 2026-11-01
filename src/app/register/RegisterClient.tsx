"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Building2,
  Mail,
  User,
  Award,
  Lock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  FileText
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

export default function RegisterClient() {
  const router = useRouter();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [roleType, setRoleType] = useState<"engineer" | "contractor" | "distributor">("contractor");
  const [licenseOrId, setLicenseOrId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please re-enter your password.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters in length.");
      return;
    }
    if (!agreed) {
      setError("Please acknowledge the H2 Industries Engineering & Trade Agreement.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await register({
        name,
        email,
        company,
        roleType,
        licenseOrId,
        password
      });

      if (res.success) {
        router.push("/portal");
      } else {
        setError(res.error || "Unable to complete registration. Please check your details.");
      }
    } catch {
      setError("An unexpected registration error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 165, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }} className="register-container">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 8, listStyle: "none", padding: 0, margin: 0, fontSize: 12 }} className="font-mono-spec">
              <li>
                <Link href="/" style={{ color: "var(--ink-soft)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--water)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-soft)")}>
                  HOME
                </Link>
              </li>
              <li><ChevronRight size={12} color="var(--ink-soft)" /></li>
              <li>
                <Link href="/login" style={{ color: "var(--ink-soft)", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--water)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-soft)")}>
                  PORTAL
                </Link>
              </li>
              <li><ChevronRight size={12} color="var(--ink-soft)" /></li>
              <li>
                <span style={{ color: "var(--deep)", fontWeight: 700 }}>REQUEST ACCESS</span>
              </li>
            </ol>
          </nav>

          {/* Header Card */}
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 40px" }}>
            <div className="eyebrow-label" style={{ marginBottom: 12, justifyContent: "center" }}>
              <ShieldCheck size={14} style={{ marginRight: 6 }} /> TRADE ACCESS APPLICATION
            </div>
            <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", lineHeight: 1.1, marginBottom: 14 }}>
              Register for Contractor &amp; Engineering Portal
            </h1>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Gain instant access to official AWWA submittals, downloadable AutoCAD DWG files, project staging quotes, and direct wholesale pricing tiers.
            </p>
          </div>

          {/* Form Card */}
          <div
            className="industrial-card"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              padding: "48px",
              maxWidth: 880,
              margin: "0 auto",
            }}
          >
            {error && (
              <div style={{ background: "#FEF2F2", border: "1px solid #F87171", color: "#991B1B", padding: "12px 16px", marginBottom: 24, fontSize: 13, display: "flex", alignItems: "center", gap: 10 }}>
                <HelpCircle size={16} color="#DC2626" style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              
              {/* Role Type Selection */}
              <div>
                <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 10 }}>
                  Primary Professional Entity / Account Type
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="role-types-grid">
                  {[
                    {
                      id: "contractor",
                      label: "Utility Contractor",
                      desc: "Civil & underground water contractors seeking volume jobsite delivery & quotes."
                    },
                    {
                      id: "engineer",
                      label: "Municipal Engineer",
                      desc: "City water authority engineers, P.E. specifiers, and consulting hydrologists."
                    },
                    {
                      id: "distributor",
                      label: "Master Distributor",
                      desc: "Regional wholesale stocking warehouses and waterworks distributors."
                    }
                  ].map((r) => {
                    const isSelected = roleType === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRoleType(r.id as any)}
                        style={{
                          textAlign: "left",
                          padding: "16px",
                          background: isSelected ? "var(--deep)" : "var(--paper)",
                          color: isSelected ? "#FFFFFF" : "var(--deep)",
                          border: isSelected ? "1px solid var(--deep)" : "1px solid var(--line)",
                          borderRadius: "0px",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <div className="font-display" style={{ fontSize: 15, fontWeight: 800, textTransform: "uppercase", marginBottom: 4, color: isSelected ? "var(--water)" : "var(--deep)" }}>
                          {r.label}
                        </div>
                        <div style={{ fontSize: 11, color: isSelected ? "var(--paper)" : "var(--ink-soft)", lineHeight: 1.45, opacity: isSelected ? 0.9 : 1 }}>
                          {r.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Two-column layout for inputs */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-cols">
                
                {/* Full Name */}
                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 8 }}>
                    Full Legal or Engineering Name
                  </label>
                  <div style={{ position: "relative" }}>
                    <User size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Marcus Vance, P.E."
                      style={{
                        width: "100%",
                        padding: "12px 14px 12px 42px",
                        background: "var(--paper)",
                        border: "1px solid var(--line)",
                        borderRadius: "0px",
                        fontSize: 14,
                        color: "var(--deep)",
                        fontFamily: "var(--font-sans), sans-serif",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 8 }}>
                    Official Corporate / Municipal Email
                  </label>
                  <div style={{ position: "relative" }}>
                    <Mail size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. mvance@texastrenching.com"
                      style={{
                        width: "100%",
                        padding: "12px 14px 12px 42px",
                        background: "var(--paper)",
                        border: "1px solid var(--line)",
                        borderRadius: "0px",
                        fontSize: 14,
                        color: "var(--deep)",
                        fontFamily: "var(--font-sans), sans-serif",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                    />
                  </div>
                </div>

                {/* Company / Municipality */}
                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 8 }}>
                    Organization / Municipality Name
                  </label>
                  <div style={{ position: "relative" }}>
                    <Building2 size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Texas Trenching & Underground LLC"
                      style={{
                        width: "100%",
                        padding: "12px 14px 12px 42px",
                        background: "var(--paper)",
                        border: "1px solid var(--line)",
                        borderRadius: "0px",
                        fontSize: 14,
                        color: "var(--deep)",
                        fontFamily: "var(--font-sans), sans-serif",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                    />
                  </div>
                </div>

                {/* License or AWWA ID */}
                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 8 }}>
                    License / P.E. Number / Trade ID (Optional)
                  </label>
                  <div style={{ position: "relative" }}>
                    <Award size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="text"
                      value={licenseOrId}
                      onChange={(e) => setLicenseOrId(e.target.value)}
                      placeholder="e.g. TX P.E. #104829 or Master Plumber #44910"
                      style={{
                        width: "100%",
                        padding: "12px 14px 12px 42px",
                        background: "var(--paper)",
                        border: "1px solid var(--line)",
                        borderRadius: "0px",
                        fontSize: 14,
                        color: "var(--deep)",
                        fontFamily: "var(--font-sans), sans-serif",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 8 }}>
                    Create Password (Min 6 Characters)
                  </label>
                  <div style={{ position: "relative" }}>
                    <Lock size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      style={{
                        width: "100%",
                        padding: "12px 14px 12px 42px",
                        background: "var(--paper)",
                        border: "1px solid var(--line)",
                        borderRadius: "0px",
                        fontSize: 14,
                        color: "var(--deep)",
                        fontFamily: "var(--font-sans), sans-serif",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 8 }}>
                    Confirm Password
                  </label>
                  <div style={{ position: "relative" }}>
                    <Lock size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      style={{
                        width: "100%",
                        padding: "12px 14px 12px 42px",
                        background: "var(--paper)",
                        border: "1px solid var(--line)",
                        borderRadius: "0px",
                        fontSize: 14,
                        color: "var(--deep)",
                        fontFamily: "var(--font-sans), sans-serif",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                    />
                  </div>
                </div>

              </div>

              {/* Trade Agreement Checkbox */}
              <div style={{ background: "var(--paper)", padding: "16px", border: "1px solid var(--line)", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <input
                  type="checkbox"
                  id="tradeAgreement"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  style={{ marginTop: 3, cursor: "pointer", accentColor: "var(--water)" }}
                />
                <label htmlFor="tradeAgreement" style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.5, cursor: "pointer" }}>
                  I certify that I represent a municipal water authority, engineering consultancy, civil contractor, or authorized waterworks distributor, and agree to the <strong>H2 Industries Specification &amp; Confidential Submittal Usage Policy</strong>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer"
                }}
              >
                {isSubmitting ? "PROCESSING TRADE APPLICATION..." : "CREATE ACCOUNT & ACCESS PORTAL"} <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: "center", paddingTop: 8 }}>
                <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                  Already have an authorized contractor or engineering account?{" "}
                </span>
                <Link href="/login" style={{ fontSize: 13, color: "var(--water)", fontWeight: 700, textDecoration: "none" }}>
                  Sign in here
                </Link>
              </div>

            </form>
          </div>

        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .register-container { padding: 0 20px !important; }
          .role-types-grid { grid-template-columns: 1fr !important; }
          .form-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
