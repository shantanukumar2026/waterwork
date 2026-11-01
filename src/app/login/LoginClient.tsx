"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle2,
  Building2,
  FileCheck,
  UserCheck,
  Layers,
  HelpCircle,
  Eye,
  EyeOff,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

export default function LoginClient() {
  const router = useRouter();
  const { user, login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // If already logged in, redirect to portal
    if (user) {
      router.push("/portal");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        router.push("/portal");
      } else {
        setError(res.error || "Authentication failed. Please verify your credentials.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 165, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px" }} className="login-container">
          
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
                <span style={{ color: "var(--deep)", fontWeight: 700 }}>ENGINEERING PORTAL SIGN IN</span>
              </li>
            </ol>
          </nav>

          {/* Grid Layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "stretch" }} className="login-grid">
            
            {/* Left Column: Industrial Portal Highlights */}
            <div
              className="industrial-card"
              style={{
                background: "var(--deep)",
                color: "#FFFFFF",
                padding: "48px 40px",
                border: "1px solid var(--line-strong)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div className="eyebrow-label" style={{ color: "var(--water)", marginBottom: 16 }}>
                  <ShieldCheck size={14} style={{ marginRight: 6 }} /> SECURE INDUSTRIAL GATEWAY
                </div>
                
                <h1 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.1, marginBottom: 18, color: "#FFFFFF" }}>
                  Engineering Submittals &amp; Contractor Portal
                </h1>
                
                <p style={{ fontSize: 15, color: "var(--paper)", lineHeight: 1.6, marginBottom: 36, fontWeight: 400 }}>
                  Authorized access for municipal water directors, civil utility contractors, and master stocking distributors across the United States and Canada.
                </p>

                {/* Benefits List */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    {
                      title: "Stamped Submittal Packages",
                      desc: "Instant access to signed AWWA C515, ASTM A536, and NSF 61 engineering spec sheets.",
                      icon: FileCheck
                    },
                    {
                      title: "Native CAD & 3D BIM Library",
                      desc: "Download precision AutoCAD DWG details, Revit families, and 3D STEP solids for utility vault modeling.",
                      icon: Layers
                    },
                    {
                      title: "Contractor Wholesale Pricing & RFQ Tracking",
                      desc: "Live jobsite staging status, order history, and dedicated regional engineering sales support.",
                      icon: Building2
                    }
                  ].map((benefit, idx) => {
                    const BIcon = benefit.icon;
                    return (
                      <div key={idx} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                        <div style={{ width: 36, height: 36, background: "rgba(255, 255, 255, 0.08)", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <BIcon size={18} color="var(--water)" />
                        </div>
                        <div>
                          <div className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF", marginBottom: 3 }}>
                            {benefit.title}
                          </div>
                          <div style={{ fontSize: 13, color: "var(--paper)", opacity: 0.85, lineHeight: 1.45 }}>
                            {benefit.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Support Badge */}
              <div style={{ borderTop: "1px solid var(--line-strong)", paddingTop: 24, marginTop: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--paper)", opacity: 0.8 }}>
                  MUNICIPAL TECHNICAL DESK: <strong>+1 (512) 782-8880</strong>
                </div>
                <div className="font-mono-spec" style={{ fontSize: 11, color: "var(--water)", fontWeight: 700 }}>
                  256-BIT ENCRYPTION
                </div>
              </div>
            </div>

            {/* Right Column: Sign In Form + 1-Click Demo Profiles */}
            <div
              className="industrial-card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h2 className="font-display" style={{ fontSize: 24, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", margin: 0 }}>
                    Sign In To Your Account
                  </h2>
                </div>

                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.5, marginBottom: 24 }}>
                  Enter your verified engineering email and credentials below.
                </p>

                {/* Error Banner */}
                {error && (
                  <div style={{ background: "#FEF2F2", border: "1px solid #F87171", color: "#991B1B", padding: "12px 16px", marginBottom: 20, fontSize: 13, display: "flex", alignItems: "center", gap: 10 }}>
                    <HelpCircle size={16} color="#DC2626" style={{ flexShrink: 0 }} />
                    <span>{error}</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <label className="font-mono-spec" style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase", marginBottom: 8 }}>
                      Business / Municipal Email Address
                    </label>
                    <div style={{ position: "relative" }}>
                      <Mail size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. j.smith@citywaterworks.com"
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

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <label className="font-mono-spec" style={{ fontSize: 11, fontWeight: 700, color: "var(--deep)", textTransform: "uppercase" }}>
                        Password
                      </label>
                      <a href="#" className="font-mono-spec" style={{ fontSize: 11, color: "var(--water)", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your registered business email."); }}>
                        Forgot password?
                      </a>
                    </div>
                    <div style={{ position: "relative" }}>
                      <Lock size={16} color="var(--ink-soft)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        style={{
                          width: "100%",
                          padding: "12px 42px 12px 42px",
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
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        {showPassword ? <EyeOff size={16} color="var(--ink-soft)" /> : <Eye size={16} color="var(--ink-soft)" />}
                      </button>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{ cursor: "pointer", accentColor: "var(--water)" }}
                    />
                    <label htmlFor="remember" style={{ fontSize: 13, color: "var(--ink)", cursor: "pointer" }}>
                      Remember this workstation for 30 days
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      padding: "14px",
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer"
                    }}
                  >
                    {isSubmitting ? "AUTHENTICATING..." : "SIGN IN TO PORTAL"} <ArrowRight size={16} />
                  </button>
                </form>
              </div>

              {/* Bottom Register CTA */}
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24, marginTop: 32, textAlign: "center" }}>
                <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: "0 0 10px 0" }}>
                  New municipal entity, engineering firm, or utility contractor?
                </p>
                <Link
                  href="/register"
                  className="btn-outline"
                  style={{
                    display: "inline-flex",
                    padding: "10px 24px",
                    fontSize: 11,
                  }}
                >
                  REQUEST CONTRACTOR / SPECIFIER ACCOUNT
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .login-container { padding: 0 20px !important; }
          .login-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .demo-pills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

