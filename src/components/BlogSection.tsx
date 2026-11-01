"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import blogsData from "../data/blogs.json";

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-85px" });
  const router = useRouter();

  // Get the latest 3 blogs
  const latestBlogs = blogsData.slice(0, 3);

  return (
    <section
      id="latest-insights"
      style={{
        background: "#F8FAFC",
        padding: "80px 0",
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        borderTop: "1px solid #E2E8F0"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px", width: "100%", zIndex: 1 }} className="blog-container">
        
        {/* Header */}
        <div ref={ref} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, flexWrap: "wrap", gap: 24 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="pill-tag" style={{ marginBottom: 16 }}>
              <span className="dot" /> Latest Insights & News
            </div>
            
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                color: "#004AAD",
                lineHeight: 1.1,
                textTransform: "uppercase",
                margin: 0
              }}
            >
              H2 Knowledge <span style={{ color: "#0085f4" }}>Hub</span>
            </h2>
            <p style={{ color: "#334155", fontSize: 16, maxWidth: 600, marginTop: 12, lineHeight: 1.6, fontWeight: 400 }}>
              Stay updated with the latest in smart water management, green infrastructure standards, and US EPA compliance guides.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button
              onClick={() => router.push("/blog")}
              style={{
                background: "#0085f4",
                color: "#fff",
                border: "none",
                padding: "14px 28px",
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(0, 133, 244, 0.25)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#004aad";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0085f4";
              }}
            >
              View All Articles <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }} className="blog-grid">
          {latestBlogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              onClick={() => router.push(`/blog/${blog.id}`)}
              style={{ height: "100%", cursor: "pointer" }}
            >
              <div
                className="card-glow"
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 133, 244, 0.4)";
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(0, 133, 244, 0.08)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(15, 23, 42, 0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Image / Category Aspect Header */}
                <div style={{ position: "relative", height: 210, width: "100%", background: "#002D6B" }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      background: "#0085f4",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      padding: "4px 12px",
                      borderRadius: 4,
                      boxShadow: "0 2px 8px rgba(0, 74, 173, 0.25)"
                    }}
                  >
                    {blog.category}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    {/* Date / Time */}
                    <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "#64748B", fontWeight: 600, marginBottom: 12 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Calendar size={14} color="#0085f4" /> {blog.date}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Clock size={14} color="#0085f4" /> {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: 19,
                        fontWeight: 800,
                        color: "#004AAD",
                        lineHeight: 1.35,
                        marginBottom: 10,
                        textTransform: "uppercase",
                        transition: "color 0.2s"
                      }}
                      className="blog-card-title"
                    >
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6, fontWeight: 400, marginBottom: 20 }}>
                      {blog.excerpt}
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#0085f4", fontSize: 13, fontWeight: 700, textTransform: "uppercase" }}>
                    Read Full Article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .blog-container { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
