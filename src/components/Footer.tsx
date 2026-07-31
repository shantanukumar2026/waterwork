"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const productsMenu = [
  { label: "Wedge Joint Restraints", href: "/waterworks-castings?category=Joint%20Restraints" },
  { label: "AWWA DI Pipe Fittings", href: "/waterworks-castings?category=AWWA%20DI%20Fittings" },
  { label: "Resilient Gate Valves", href: "/waterworks-castings?category=Gate%20Valves" },
  { label: "Pipe Accessories & Bolt Sets", href: "/waterworks-castings?category=Pipe%20Accessories" },
  { label: "Valve Boxes & Risers", href: "/waterworks-castings?category=Valve%20Boxes" },
  { label: "Manhole Rings & Covers", href: "/waterworks-castings?category=Manhole%20Rings%20%26%20Covers" },
  { label: "Municipal Sewer Cleanouts", href: "/waterworks-castings?category=Cleanouts" },
  { label: "Meter Box Assemblies", href: "/waterworks-castings?category=Meter%20Boxes" },
  { label: "Frames & Grates", href: "/waterworks-castings?category=Frames%20%26%20Grates" },
  { label: "Restrained Adapters", href: "/waterworks-castings?category=Restrained%20Adapters" },
  { label: "Extended Range Castings", href: "/waterworks-castings?category=Extended%20Range" },
  { label: "Closeout Overstock Deals", href: "/waterworks-castings?category=Closeout%20Deals" },
];

const generalSubmittalsMenu = [
  { label: "ASTM A536 Ductile Iron Specs", href: "/quality#standards" },
  { label: "AWWA C111 / C153 Standards", href: "/quality#standards" },
  { label: "AWWA C509 / C515 Valve Specs", href: "/quality#standards" },
  { label: "H-20 Traffic Rating Certification", href: "/quality#standards" },
  { label: "ISO 9001:2015 Quality System", href: "/quality" },
  { label: "Third-Party Test Reports", href: "/quality" },
];

const regionalSubmittalsMenu = [
  { label: "Waco Distribution Center (HQ)", href: "/waterworks-castings#distribution" },
  { label: "Houston Distribution Center", href: "/waterworks-castings#distribution" },
  { label: "Stuart South Distribution Hub", href: "/waterworks-castings#distribution" },
  { label: "Texas Regional Approvals", href: "/waterworks-castings#catalog" },
  { label: "Waco City Approved Castings", href: "/waterworks-castings#catalog" },
  { label: "Houston City Approved Castings", href: "/waterworks-castings#catalog" },
];


const companyMenu = [
  { label: "About H2 Industries", href: "/company" },
  { label: "Careers & Job Openings", href: "/company#careers" },
  { label: "Global Capabilities", href: "/capabilities" },
  { label: "Quality & Compliance", href: "/quality" },
  { label: "All Products Catalog", href: "/products" },
];

const socials = [
  { label: "FB", href: "#", title: "Facebook" },
  { label: "IG", href: "#", title: "Instagram" },
  { label: "X", href: "#", title: "X / Twitter" },
  { label: "IN", href: "#", title: "LinkedIn" },
  { label: "YT", href: "#", title: "YouTube" },
];

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer id="contact" style={{ background: "var(--brand-deep)", color: "var(--white)", fontFamily: "inherit", borderTop: "1px solid var(--hairline)" }}>

      {/* Band 1: Careers / Engineering Banner */}
      <div
        style={{
          background: "var(--brand-deep)",
          borderBottom: "1px solid var(--hairline)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="footer-cta-pad"
          style={{
            maxWidth: 1720,
            margin: "0 auto",
            padding: "40px 60px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "4px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid var(--brand-bright)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShieldCheck size={24} color="var(--brand-bright)" />
            </div>
            <div>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Need Custom AWWA Submittals? <span style={{ color: "var(--brand-bright)" }}>Talk Directly to Our Engineering Team.</span>
              </h3>
            </div>
          </div>

          <a
            href="tel:+15127828880"
            className="btn-primary"
            style={{
              cursor: "pointer"
            }}
          >
            CONTACT ENGINEERING SALES
          </a>
        </div>
      </div>

      {/* Band 2: Exact Addresses & Phone Numbers */}
      <div style={{ borderBottom: "1px solid var(--line-strong)", padding: "36px 0", background: "var(--deep)" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>

          {/* Brand Header & Socials */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, marginBottom: 28 }}>
            <div style={{ background: "#FFFFFF", padding: "6px 12px", border: "1px solid var(--line)" }}>
              <Image src="/images/logo.png" alt="Waterworks Industries" width={280} height={56} style={{ objectFit: "contain" }} unoptimized />
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  title={s.title}
                  className="font-mono-spec"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "0px",
                    border: "1px solid var(--line-strong)",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--paper)",
                    fontSize: 11,
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--signal)";
                    e.currentTarget.style.color = "var(--deep)";
                    e.currentTarget.style.borderColor = "var(--signal)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--paper)";
                    e.currentTarget.style.borderColor = "var(--line-strong)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Address Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 20,
            }}
          >
            {/* USA Address & Phone */}
            <div
              className="industrial-card"
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderLeft: "3px solid var(--water)",
                padding: "18px 20px",
                borderRadius: "0px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <MapPin size={16} color="var(--water)" style={{ flexShrink: 0 }} />
                <span className="font-mono-spec" style={{ fontSize: 11, fontWeight: 600, color: "var(--ink)" }}>
                  105 MAXES ROAD, MELVILLE, NY 11737, USA
                </span>
              </div>
              <div className="font-mono-spec" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "var(--water)" }}>
                <Phone size={14} color="var(--water)" />
                <span>+1 (512) 782-8880</span>
              </div>
            </div>

            {/* South (Florida) Address & Phone */}
            <div
              className="industrial-card"
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderLeft: "3px solid var(--water)",
                padding: "18px 20px",
                borderRadius: "0px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <MapPin size={16} color="var(--water)" style={{ flexShrink: 0 }} />
                <span className="font-mono-spec" style={{ fontSize: 11, fontWeight: 600, color: "var(--ink)" }}>
                  SOUTH: 850 NW FEDERAL HWY, STUART, FL 34994
                </span>
              </div>
              <div className="font-mono-spec" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "var(--water)" }}>
                <Phone size={14} color="var(--water)" />
                <span>(772) 297-0700</span>
              </div>
            </div>

            {/* Canada Address & Phone */}
            <div
              className="industrial-card"
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderLeft: "3px solid var(--water)",
                padding: "18px 20px",
                borderRadius: "0px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <MapPin size={16} color="var(--water)" style={{ flexShrink: 0 }} />
                <span className="font-mono-spec" style={{ fontSize: 11, fontWeight: 600, color: "var(--ink)" }}>
                  ONE YOUNGE STREET, TORONTO, ONTARIO M5E 1R4 CANADA
                </span>
              </div>
              <div className="font-mono-spec" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "var(--water)" }}>
                <Phone size={14} color="var(--water)" />
                <span>+1 (438) 805-9990</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Band 3: Rich Organised Menu Columns */}
      <div style={{ padding: "64px 0", borderBottom: "1px solid var(--line-strong)", background: "var(--deep)" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1.1fr 1.1fr 1fr 1.2fr",
              gap: 36,
            }}
            className="footer-nav-grid"
          >
            {/* Column 1: Products */}
            <div>
              <div style={{ borderBottom: "1px solid var(--water)", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Products
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {productsMenu.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      style={{ color: "var(--paper)", textDecoration: "none", fontSize: 13, fontWeight: 400, transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper)")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Standards & Compliance */}
            <div>
              <div style={{ borderBottom: "1px solid var(--water)", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Standards & Compliance
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {generalSubmittalsMenu.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      style={{ color: "var(--paper)", textDecoration: "none", fontSize: 13, fontWeight: 400, transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper)")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Distribution & Hubs */}
            <div>
              <div style={{ borderBottom: "1px solid var(--water)", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Distribution & Hubs
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {regionalSubmittalsMenu.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      style={{ color: "var(--paper)", textDecoration: "none", fontSize: 13, fontWeight: 400, transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper)")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company & Links */}
            <div>
              <div style={{ borderBottom: "1px solid var(--water)", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Company & Links
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {companyMenu.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      style={{ color: "var(--paper)", textDecoration: "none", fontSize: 13, fontWeight: 400, transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper)")}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Newsletter & Certified Badge */}
            <div>
              <div style={{ borderBottom: "1px solid var(--water)", paddingBottom: 8, marginBottom: 20, width: "fit-content" }}>
                <h4 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
                  Stay Updated
                </h4>
              </div>
              <p style={{ fontSize: 13, color: "var(--paper)", lineHeight: 1.5, marginBottom: 16 }}>
                Subscribe to receiving technical spec updates and regional engineering bulletins.
              </p>

              {subscribed ? (
                <div style={{ padding: "12px 16px", background: "rgba(30, 143, 194, 0.15)", border: "1px solid var(--water)", borderRadius: "0px", color: "#FFFFFF", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                  <CheckCircle2 size={16} color="var(--water)" /> Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "var(--paper)",
                      border: "1px solid var(--line)",
                      borderRadius: "0px",
                      color: "var(--ink)",
                      fontSize: 12,
                      fontWeight: 600,
                      fontFamily: "var(--font-sans), sans-serif",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--water)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
                  />
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      padding: "10px 16px",
                      fontSize: 11,
                    }}
                  >
                    Subscribe <Send size={14} />
                  </button>
                </form>
              )}

              {/* Certified Quality Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  padding: "12px 16px",
                  borderRadius: "0px",
                }}
              >
                <ShieldCheck size={24} color="var(--water)" />
                <div>
                  <div className="font-mono-spec" style={{ fontSize: 10, fontWeight: 700, color: "var(--deep)" }}>
                    ISO 9001:2015 & AWWA
                  </div>
                  <div style={{ fontSize: 10, color: "var(--ink-soft)", marginTop: 2 }}>
                    Certified Quality Manufacturing
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Band 4: Legal & Copyright Footer */}
      <div style={{ padding: "24px 0", background: "var(--deep)", borderTop: "1px solid var(--line-strong)" }}>
        <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <p className="font-mono-spec" style={{ fontSize: 11, color: "var(--paper)", fontWeight: 500, margin: 0 }}>
            © {new Date().getFullYear()} H2 Industries. All rights reserved. Precision Municipal & Industrial Solutions.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a href="#" className="font-mono-spec" style={{ color: "var(--paper)", fontSize: 11, textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper)")}>Privacy Policy</a>
            <a href="#" className="font-mono-spec" style={{ color: "var(--paper)", fontSize: 11, textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper)")}>Terms of Service</a>
            <a href="#" className="font-mono-spec" style={{ color: "var(--paper)", fontSize: 11, textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--signal)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper)")}>Cookie Preferences</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1280px) {
          .footer-nav-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .footer-nav-grid { grid-template-columns: 1fr !important; }
          .footer-cta-pad { flex-direction: column; text-align: center; justify-content: center; }
        }
      `}</style>
    </footer>
  );
}
