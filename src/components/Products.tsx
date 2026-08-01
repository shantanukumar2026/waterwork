"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Search, Eye, X, ArrowRight } from "lucide-react";
import homeData from "../data/home.json";

import { slugify, matchSlug } from "@/utils/slug";

export const allProducts = homeData.products.items;

const cats = homeData.products.categories;

const catColors: Record<string, string> = {
  "Sampling Stations": "#0085f4",
  "Drainage Infrastructure": "#004aad",
  "Probe Systems": "#0085f4",
  "Waterworks Castings": "#004aad",
  "Waterworks Tools": "#0085f4",
};

export default function Products({ isFullPage = false }: { isFullPage?: boolean }) {
  const router = useRouter();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [count, setCount] = useState(isFullPage ? 12 : 4);
  const [qv, setQv] = useState<(typeof allProducts)[0] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const categoryParam = searchParams.get("category") || searchParams.get("cat");
      if (categoryParam) {
        const found = cats.find((c) => matchSlug(c, categoryParam));
        if (found) {
          setCat(found);
        }
      }
    }
  }, []);

  const handleSelectCat = (c: string) => {
    setCat(c);
    setCount(isFullPage ? 12 : 4);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (c === "All") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", slugify(c));
      }
      window.history.pushState({}, "", url.toString());
    }
  };

  const filtered = allProducts.filter((p) => {
    const q = search.toLowerCase();
    const ok = p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
    return ok && (cat === "All" || p.category === cat);
  });
  const visible = isFullPage ? filtered.slice(0, count) : filtered.slice(0, 4);
  const hasMore = isFullPage ? count < filtered.length : true;
  const { header, searchPlaceholder, emptyMessage, button } = homeData.products;

  return (
    <section id="products" className="section-pad products-section" style={{ background: "var(--white)", position: "relative", borderTop: "1px solid var(--hairline)" }}>
      <div className="products-container" style={{ maxWidth: 1720, margin: "0 auto" }}>
        
        {/* Header */}
        <div ref={ref} style={{ textAlign: "left", marginBottom: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="eyebrow-label" style={{ marginBottom: 16 }}>
              CATALOGUE & EQUIPMENT
            </div>
            
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                fontWeight: 700,
                color: "var(--brand-deep)",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              What We Build.<br />
              <span style={{ color: "var(--brand-blue)" }}>
                Precision Waterworks Castings, Tools & Sub-Surface Assemblies.
              </span>
            </h2>
            <div style={{ width: 60, height: 2, background: "var(--brand-blue)", marginBottom: 20 }} />

            <p style={{ color: "var(--brand-deep)", fontSize: 16, maxWidth: 640, lineHeight: 1.65, fontWeight: 400, opacity: 0.9 }}>
              Explore our line of AWWA-compliant waterworks tools, mechanical joint restraints, ductile iron fittings, municipal manhole covers, and sampling enclosures.
            </p>
          </motion.div>
        </div>

        {/* Search + Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}
        >
          {/* Search (only on full page) */}
          {isFullPage && (
            <div style={{ position: "relative", flex: "1 1 320px", minWidth: 200 }}>
              <Search size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--water)" }} />
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCount(4); }}
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 44px",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  boxShadow: "none",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--ink)",
                  fontFamily: "var(--font-sans), sans-serif",
                  outline: "none",
                  borderRadius: "0px",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => { e.target.style.borderColor = "var(--water)"; }}
                onBlur={(e) => { e.target.style.borderColor = "var(--line)"; }}
              />
            </div>
          )}

          {/* Category tabs */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => handleSelectCat(c)}
                className="font-mono-spec"
                style={{
                  padding: "10px 18px",
                  border: "1px solid var(--line)",
                  borderRadius: "0px",
                  background: cat === c ? "var(--deep)" : "var(--surface)",
                  color: cat === c ? "#FFFFFF" : "var(--deep)",
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Count / Tag */}
        {isFullPage && (
          <p className="font-mono-spec" style={{ color: "var(--ink-soft)", fontSize: 11, fontWeight: 600, marginBottom: 24 }}>
            SHOWING <strong style={{ color: "var(--deep)" }}>{Math.min(count, filtered.length)}</strong> OF <strong style={{ color: "var(--deep)" }}>{filtered.length}</strong> PRODUCTS
          </p>
        )}

        {/* Grid */}
        <div 
          className={!isFullPage ? "four-card-grid" : ""}
          style={{
            display: "grid",
            gridTemplateColumns: isFullPage ? "repeat(auto-fill, minmax(280px, 1fr))" : "repeat(4, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i < 8 ? i * 0.04 : 0 }}
                style={{ height: "100%" }}
              >
                <ProductCard product={p} onQuickView={() => setQv(p)} catColor={catColors[p.category] ?? "#1E8FC2"} isCompact={!isFullPage} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "0px", marginTop: 24 }}>
            <p className="font-mono-spec" style={{ color: "var(--deep)", fontSize: 13, fontWeight: 700 }}>{emptyMessage}</p>
          </div>
        )}

        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button
              onClick={() => {
                if (isFullPage) {
                  setCount((prev) => prev + 12);
                } else {
                  if (cat !== "All") {
                    router.push(`/products?category=${slugify(cat)}`);
                  } else {
                    router.push("/products");
                  }
                }
              }}
              className="btn-primary"
              style={{
                padding: "14px 32px",
              }}
            >
              {isFullPage ? "LOAD MORE PRODUCTS" : "VIEW ALL PRODUCTS"} <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {qv && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(0, 40, 110, 0.75)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
            onClick={() => setQv(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: "16px",
                maxWidth: 800,
                width: "100%",
                maxHeight: "90vh",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0, 74, 173,0.4)",
              }}
            >
              {/* Header */}
              <div style={{ padding: "24px 32px", borderBottom: "1px solid #E0E0E0", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, background: "#F8FAFC" }}>
                <div>
                  <span style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    background: catColors[qv.category] ?? "#0085f4",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                    marginBottom: 12,
                  }}>
                    {qv.category}
                  </span>
                  <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", color: "#004aad", textTransform: "uppercase", margin: 0 }}>{qv.name}</h3>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#0085f4", marginTop: 8, letterSpacing: "0.05em", fontFamily: "monospace" }}>SKU: {qv.sku}</p>
                </div>
                <button onClick={() => setQv(null)} style={{ background: "transparent", border: "2px solid #E0E0E0", borderRadius: "50%", padding: 8, cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "#F5F5F5"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <X size={20} color="#004aad" />
                </button>
              </div>

              {/* Body */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr", overflowY: "auto", maxHeight: "calc(90vh - 120px)" }} className="modal-grid">
                
                {/* Image Col (Clean Original Image Container) */}
                <div style={{ background: "#FAFAFA", position: "relative", aspectRatio: "1", borderRight: "1px solid #E0E0E0" }} className="modal-img-col">
                  <Image src={qv.image} alt={qv.name} fill style={{ objectFit: "contain", padding: 32 }} />
                </div>
                
                {/* Spec Col */}
                <div style={{ padding: 32 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 900, color: "#004aad", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>PRODUCT OVERVIEW</h4>
                  <p style={{ fontSize: 15, color: "#0085f4", lineHeight: 1.7, marginBottom: 32, fontWeight: 500 }}>{qv.description}</p>
                  
                  <h4 style={{ fontSize: 14, fontWeight: 900, color: "#004aad", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>TECHNICAL SPECIFICATIONS</h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                    {qv.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#004aad", fontWeight: 600 }}>
                        <div style={{ width: 20, height: 20, background: "rgba(0, 133, 244, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, borderRadius: "4px", border: "1px solid rgba(0, 133, 244, 0.3)" }}>
                          <div style={{ width: 6, height: 6, background: "#0085f4", borderRadius: "50%" }} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => { setQv(null); router.push(`/products/${slugify(qv.name)}`); }}
                    style={{
                      width: "100%",
                      padding: "16px",
                      background: "#0085f4",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: 15,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#004aad"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#0085f4"; }}
                  >
                    VIEW FULL SPECS <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .products-section { padding: 64px 0; }
        .products-container { padding: 0 60px; }
        @media (min-width: 768px) {
          .modal-grid { grid-template-columns: 1fr 1.2fr !important; }
        }
        @media (max-width: 767px) {
          .modal-img-col { border-right: none !important; border-bottom: 1px solid #E0E0E0 !important; }
          .products-section { padding: 32px 0; }
          .products-container { padding: 0 24px; }
        }
      `}</style>
    </section>
  );
}

function ProductCard({ product, onQuickView, catColor, isCompact = false }: {
  product: typeof allProducts[0];
  onQuickView: () => void;
  catColor: string;
  isCompact?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="industrial-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "0px",
        overflow: "hidden",
        position: "relative",
        transition: "border-color 0.2s ease",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Category badge */}
      <div
        className="font-mono-spec"
        style={{
          position: "absolute",
          top: isCompact ? 10 : 14,
          left: isCompact ? 10 : 14,
          background: "var(--deep)",
          color: "#FFFFFF",
          padding: isCompact ? "3px 7px" : "4px 10px",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          borderRadius: "0px",
          zIndex: 10,
          border: "1px solid var(--line)",
        }}
      >
        {product.category}
      </div>

      {/* Image Block */}
      <div style={{ position: "relative", aspectRatio: isCompact ? "1.2" : "1", background: "var(--paper)", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{
            objectFit: "contain",
            padding: isCompact ? 16 : 28,
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Quick view overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(11, 46, 78, 0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          zIndex: 3
        }}>
          <button
            onClick={onQuickView}
            className="btn-primary"
            style={{
              padding: isCompact ? "8px 12px" : "10px 16px",
              fontSize: 11,
            }}
          >
            <Eye size={14} /> QUICK VIEW
          </button>
        </div>
      </div>

      {/* Info Block */}
      <div style={{ padding: isCompact ? "14px" : "18px", flex: 1, display: "flex", flexDirection: "column", background: "var(--surface)" }}>
        <p className="font-mono-spec" style={{ fontSize: 10, color: "var(--water)", fontWeight: 700, marginBottom: 4 }}>
          SKU — {product.sku}
        </p>
        <h3 className="font-display" style={{ fontSize: isCompact ? 15 : 17, fontWeight: 800, color: "var(--deep)", textTransform: "uppercase", lineHeight: 1.25, marginBottom: 8, flex: 1 }}>
          {product.name}
        </h3>
        
        {/* Monospace Spec Sheet Row */}
        <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "6px 0", margin: "8px 0 14px" }}>
          <p className="font-mono-spec" style={{ fontSize: 10, color: "var(--ink-soft)", margin: 0 }}>
            STANDARD — AWWA C110 / ASTM A48
          </p>
        </div>

        <button
          onClick={() => router.push(`/products/${slugify(product.name)}`)}
          className="btn-outline"
          style={{
            width: "100%",
            padding: isCompact ? "8px" : "10px",
            fontSize: 11,
          }}
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}

<style>{`
  @media (max-width: 1280px) {
    .four-card-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }
  @media (max-width: 640px) {
    .four-card-grid {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>
