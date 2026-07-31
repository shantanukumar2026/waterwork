"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Info, Mail, MapPin, User, FileText, ChevronDown, Search, ArrowRight, Globe } from "lucide-react";

const topLinks = [
  { label: "Locations", href: "#locations", icon: MapPin },
  { label: "Contact", href: "#contact", icon: Mail },
];

const mainLinks = [
  {
    label: "Products",
    href: "/products",
    mega: {
      image: "/images/2.webp",
      title: "INDUSTRIAL MANUFACTURING",
      desc: "Precision-engineered solutions for high-performance water management.",
      link: "View All Products",
      columns: [
        {
          title: "CORE SYSTEMS",
          items: ["Stormwater Stations", "Modular Enclosures", "Drainage Infrastructure", "Filtration Systems"],
        },
        {
          title: "ACCESSORIES & PARTS",
          items: ["Monitoring Probes", "Valve Connectors", "Heavy-Duty Grates", "Access Covers"],
        },
      ],
    },
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    mega: {
      image: "/images/5.webp",
      title: "MANUFACTURING EXCELLENCE",
      desc: "From advanced polymer injection moulding to custom heavy industrial fabrication.",
      link: "Our Capabilities",
      columns: [
        {
          title: "PRODUCTION",
          items: ["Injection Moulding", "Industrial Fabrication", "Precision Machining", "Custom Engineering"],
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "/industries",
    mega: {
      image: "/images/7.webp",
      title: "GLOBAL DEPLOYMENT",
      desc: "Protecting marine ecosystems across every major industrial sector.",
      link: "Explore Industries",
      columns: [
        {
          title: "PUBLIC & CIVIL",
          items: ["Municipal Water", "Civil Infrastructure", "Urban Development"],
        },
        {
          title: "SPECIALIZED SECTORS",
          items: ["Marine & Coastal", "Environmental Facilities", "Heavy Industry", "Agricultural"],
        },
      ],
    },
  },
  {
    label: "Quality",
    href: "/quality",
    mega: {
      image: "/images/3.webp",
      title: "ZERO COMPROMISE",
      desc: "Stringent quality control protocols exceeding international engineering standards.",
      link: "View Standards",
      columns: [
        {
          title: "ASSURANCE",
          items: ["ISO 9001:2015", "Material Testing", "Sustainability", "Compliance"],
        },
      ],
    },
  },
  {
    label: "Company",
    href: "/company",
    mega: {
      image: "/images/4.webp",
      title: "THE H2 GROUP",
      desc: "Decades of engineering heritage driving the future of water infrastructure.",
      link: "About Us",
      columns: [
        {
          title: "ABOUT",
          items: ["Our History", "R&D Lab", "Facilities", "Careers"],
        },
      ],
    },
  },
  {
    label: "Calculator",
    href: "/calculator"
  },
  {
    label: "Blog",
    href: "/blog"
  }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (href: string) => {
    setMobileOpen(false);
    setActiveSubmenu(null);
    if (href.startsWith("/")) {
      router.push(href);
    } else {
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(6,35,71,0.15)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseLeave={() => setActiveSubmenu(null)}
      >
        {/* Top Bar (Industrial Header) */}
        <motion.div
          initial={{ height: 64, opacity: 1 }}
          animate={{ height: scrolled ? 0 : 64, opacity: scrolled ? 0 : 1 }}
          style={{ background: "#FFFFFF", borderBottom: "1px solid var(--line)", overflow: "hidden" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              padding: "0 60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 64,
            }}
          >
            {/* Logo */}
            <button
              onClick={() => {
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  router.push("/");
                }
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 300,
                  height: 64,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Waterworks Industries"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center", padding: "0px" }}
                  priority
                  sizes="300px"
                  unoptimized
                />
              </div>
            </button>

            {/* Top Right Group (Desktop) */}
            <div className="top-links" style={{ display: "none", alignItems: "center", gap: 32 }}>
              {/* Language Selector */}
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <Globe size={14} color="var(--deep)" style={{ position: "absolute", left: 10, pointerEvents: "none" }} />
                <select
                  style={{
                    appearance: "none",
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    padding: "6px 28px 6px 30px",
                    borderRadius: "0px",
                    color: "var(--deep)",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    outline: "none",
                    fontFamily: "var(--font-sans), sans-serif",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--paper)")}
                >
                  <option value="en" style={{ color: "var(--deep)" }}>EN</option>
                  <option value="es" style={{ color: "var(--deep)" }}>ES</option>
                  <option value="fr" style={{ color: "var(--deep)" }}>FR</option>
                  <option value="de" style={{ color: "var(--deep)" }}>DE</option>
                  <option value="zh" style={{ color: "var(--deep)" }}>ZH</option>
                  <option value="ar" style={{ color: "var(--deep)" }}>AR</option>
                </select>
                <ChevronDown size={12} color="var(--deep)" style={{ position: "absolute", right: 10, pointerEvents: "none" }} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                {topLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={() => nav(link.href)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "var(--deep)",
                        fontSize: 12,
                        fontWeight: 700,
                        fontFamily: "var(--font-sans), sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--water)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--deep)")}
                    >
                      <Icon size={14} color="var(--water)" />
                      {link.label}
                    </button>
                  );
                })}

                <button
                  onClick={() => nav("#contact")}
                  style={{
                    background: "#0085F4",
                    color: "#FFFFFF",
                    padding: "8px 20px",
                    borderRadius: "100px",
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "background 0.2s",
                    boxShadow: "0 4px 12px rgba(0, 133, 244, 0.3)"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#004AAD")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0085F4")}
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                color: "var(--deep)",
                display: "none",
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar (Industrial Hairline Border) */}
        <div className="bottom-bar" style={{ display: "none", borderBottom: "1px solid var(--line)", position: "relative", background: "var(--surface)" }}>
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              padding: "0 60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 56,
            }}
          >
            {/* Main Links */}
            <nav style={{ display: "flex", alignItems: "center", gap: 36, height: "100%" }}>
              {mainLinks.map((link) => (
                <div
                  key={link.label}
                  style={{ height: "100%", display: "flex", alignItems: "center" }}
                  onMouseEnter={() => link.mega ? setActiveSubmenu(link.label) : setActiveSubmenu(null)}
                >
                  <button
                    onClick={() => nav(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: activeSubmenu === link.label ? "var(--water)" : "var(--deep)",
                      fontSize: 13,
                      fontWeight: 800,
                      fontFamily: "var(--font-sans), sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                      transition: "color 0.2s",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    {link.label}
                    {link.mega && (
                      <ChevronDown
                        size={14}
                        color={activeSubmenu === link.label ? "var(--water)" : "var(--ink-soft)"}
                        style={{
                          transform: activeSubmenu === link.label ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }}
                      />
                    )}
                    <div
                      className="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: 2,
                        background: "var(--water)",
                        width: activeSubmenu === link.label ? "100%" : "0%",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </button>
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div
              style={{
                position: "relative",
                width: 300,
              }}
            >
              <Search
                size={16}
                color="var(--ink-soft)"
                style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}
              />
              <input
                type="text"
                placeholder="Search specs & catalog..."
                style={{
                  width: "100%",
                  padding: "8px 14px 8px 38px",
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: "0px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--ink)",
                  fontFamily: "var(--font-sans), sans-serif",
                  outline: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--water)";
                  e.target.style.background = "#FFFFFF";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--line)";
                  e.target.style.background = "var(--paper)";
                }}
              />
            </div>
          </div>

          {/* MEGAMENU DROPDOWN */}
          <AnimatePresence>
            {activeSubmenu && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#FFFFFF",
                  boxShadow: "none",
                  borderBottom: "1px solid var(--line)",
                  borderTop: "1px solid var(--line)",
                  zIndex: 40,
                  overflow: "hidden",
                }}
              >
                {mainLinks.map(
                  (link) =>
                    activeSubmenu === link.label && link.mega && (
                      <div key={link.label} style={{ width: "100%", padding: "0 60px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                        
                        {/* Megamenu Left: Featured Image Block */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          style={{ position: "relative", padding: "40px 48px", background: "var(--deep)", color: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "center" }}
                        >
                          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                            <Image src={link.mega.image} alt={link.mega.title} fill style={{ objectFit: "cover", opacity: 0.2 }} />
                          </div>
                          <div style={{ position: "relative", zIndex: 1 }}>
                            <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", marginBottom: 10, color: "#FFFFFF" }}>
                              {link.mega.title}
                            </h3>
                            <p style={{ fontSize: 13, color: "var(--paper)", lineHeight: 1.5, marginBottom: 20, fontWeight: 400, maxWidth: 300 }}>
                              {link.mega.desc}
                            </p>
                            <button
                              onClick={() => nav(link.href)}
                              className="btn-primary"
                              style={{ padding: "10px 18px", fontSize: 11 }}
                            >
                              {link.mega.link} <ArrowRight size={14} />
                            </button>
                          </div>
                        </motion.div>

                        {/* Megamenu Right: Link Columns */}
                        <div style={{ padding: "40px 48px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, background: "var(--paper)" }}>
                          {link.mega.columns.map((col, idx) => (
                            <motion.div
                              key={col.title}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.15 + (idx * 0.1) }}
                            >
                              <h4 className="font-mono-spec" style={{ fontSize: 12, fontWeight: 700, color: "var(--water)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid var(--line)" }}>
                                {col.title}
                              </h4>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                                {col.items.map((item) => (
                                  <li key={item}>
                                    <button
                                      onClick={() => nav(link.href)}
                                      style={{
                                        background: "none",
                                        border: "none",
                                        padding: 0,
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: "var(--ink)",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        transition: "color 0.2s",
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--water)")}
                                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
                                    >
                                      {item}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>

                      </div>
                    )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 64, // below top bar
              left: 0,
              right: 0,
              background: "#fff",
              zIndex: 49,
              boxShadow: "0 10px 30px rgba(6,35,71,0.1)",
              borderBottom: "1px solid #90CAF9",
              maxHeight: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Mobile Search */}
              <div style={{ position: "relative", marginBottom: 16 }}>
                <Search
                  size={18}
                  color="#8898AA"
                  style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: "100%",
                    padding: "12px 12px 12px 40px",
                    background: "#E0F0FF",
                    border: "1px solid #64B5F6",
                    borderRadius: 4,
                    fontSize: 15,
                    fontFamily: "inherit",
                    outline: "none",
                  }}
                />
              </div>

              {/* Mobile Main Links */}
              <div style={{ borderBottom: "1px solid #90CAF9", paddingBottom: 16, marginBottom: 16 }}>
                {mainLinks.map((link) => (
                  <div key={link.label} style={{ marginBottom: 12 }}>
                    <button
                      onClick={() => {
                        if (link.mega) {
                          setActiveSubmenu(activeSubmenu === link.label ? null : link.label);
                        } else {
                          nav(link.href);
                        }
                      }}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "none",
                        border: "none",
                        padding: "8px 0",
                        fontSize: 16,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "#004aad",
                        fontFamily: "inherit",
                      }}
                    >
                      {link.label}
                      {link.mega && (
                        <ChevronDown
                          size={18}
                          style={{
                            transform: activeSubmenu === link.label ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s",
                          }}
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === link.label && link.mega && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: 16, marginTop: 12 }}
                        >
                          {link.mega.columns.map((col) => (
                            <div key={col.title}>
                              <h5 style={{ fontSize: 12, fontWeight: 800, color: "#42A5F5", marginBottom: 8, letterSpacing: "0.05em" }}>
                                {col.title}
                              </h5>
                              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                {col.items.map((item) => (
                                  <button
                                    key={item}
                                    onClick={() => nav(link.href)}
                                    style={{
                                      textAlign: "left",
                                      background: "none",
                                      border: "none",
                                      padding: "8px 16px",
                                      fontSize: 14,
                                      fontWeight: 600,
                                      color: "#0085f4",
                                      fontFamily: "inherit",
                                    }}
                                  >
                                    {item}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Top Links */}
              <div>
                {topLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={() => nav(link.href)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        padding: "10px 0",
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#0085f4",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontFamily: "inherit",
                      }}
                    >
                      <Icon size={18} />
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .top-links { display: flex !important; }
          .bottom-bar { display: block !important; }
        }
        @media (max-width: 1023px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
