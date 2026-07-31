"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck, Settings, Waves, Target, Award, ShieldAlert,
  Layers, Zap, FileText, Leaf, Droplet, Play, Pause,
  Volume2, VolumeX, Maximize
} from "lucide-react";

// Mapping icons for custom feature blocks
const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Settings,
  Waves,
  Target,
  Award,
  ShieldAlert,
  Layers,
  Zap,
  FileText,
  Leaf
};

// Rich portfolio items matching the design with custom features and support for both mp4/image
const portfolioItems = [
  {
    mainTitle: "EVERY UNIT WE SHIP KEEPS WASTE OUT OF THE",
    highlightText: "WATER SUPPLY",
    subtitle: "OCEAN & WATERWAY PROTECTION",
    desc: "H2O Waterworks engineers municipal infrastructure components that actively filter, control, and prevent industrial waste and runoff from entering natural ocean basins.",
    media: "/portfolio/1.mp4",
    bgColor: "var(--tint-1)",
    features: [
      { title: "PURPOSE DRIVEN", desc: "Built to eliminate waterway contaminants", icon: "ShieldCheck" },
      { title: "FIELD TESTED", desc: "Engineered for harsh municipal storm events", icon: "Settings" },
      { title: "OCEAN SAFE", desc: "Protecting aquatic ecosystems since 1998", icon: "Waves" }
    ]
  },
  {
    mainTitle: "SUB-SURFACE METALLURGY ENGINEERED FOR 50+ YEAR",
    highlightText: "SERVICE LIFESPANS",
    subtitle: "HIGH-LOAD CASTINGS",
    desc: "Machined to sub-millimeter tolerances, our ASTM A48 grey iron and A536 ductile iron castings withstand AASHTO H-20 wheel loads in heavy traffic corridors.",
    media: "/portfolio/2.mp4",
    bgColor: "var(--white)",
    features: [
      { title: "EXACT TOLERANCE", desc: "Sub-millimeter CNC precision machining", icon: "Target" },
      { title: "AASHTO H-20", desc: "Class D heavy highway load certification", icon: "Award" },
      { title: "100% IN-HOUSE", desc: "Extensively pressure-tested at foundry", icon: "ShieldAlert" }
    ]
  },
  {
    mainTitle: "MODULAR HYDRO ENCLOSURES BUILT FOR EXTREME",
    highlightText: "UTILITY VAULTS",
    subtitle: "COMPATIBLE MUNICIPAL ACCESS",
    desc: "We design modular valve boxes and sampling enclosures compatible with emerging hydrogen utility vaults and city water distribution networks.",
    media: "/portfolio/3.mp4",
    bgColor: "var(--tint-1)",
    features: [
      { title: "MODULAR BARRELS", desc: "Adaptable depth for varying frost lines", icon: "Layers" },
      { title: "UTILITY READY", desc: "Pre-drilled for smart metering & probes", icon: "Zap" },
      { title: "SALT RESISTANT", desc: "High-grade polymer coating resists sewage", icon: "ShieldCheck" }
    ]
  },
  {
    mainTitle: "ZERO-BYPASS FILTRATION EXCEEDING EPA",
    highlightText: "NPDES MANDATES",
    subtitle: "STORMWATER COMPLIANCE",
    desc: "Our catch basin inserts and inlet castings redirect sediment and heavy metals away from municipal outfalls, delivering clean effluent data.",
    media: "/portfolio/4.mp4",
    bgColor: "var(--white)",
    features: [
      { title: "ZERO BYPASS", desc: "High-flow stormwater filtration inserts", icon: "Droplet" },
      { title: "EPA COMPLIANT", desc: "Exceeds NPDES water quality guidelines", icon: "FileText" },
      { title: "ECO CERTIFIED", desc: "Captures 98% of gross solids and oils", icon: "Leaf" }
    ]
  }
];

export default function About() {
  return (
    <div id="about" style={{ width: "100%", background: "var(--tint-1)", position: "relative", margin: 0, padding: 0 }}>
      {/* Topographical background lines */}
      <ContourLinesBackground />

      {portfolioItems.map((item, index) => (
        <PortfolioSection key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function PortfolioSection({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transitions matching the presentation layout
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      style={{
        padding: "44px 0",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--hairline)",
        background: index % 2 === 0 ? "var(--tint-1)" : "var(--white)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          width: "100%",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: index % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
          gap: 48,
          alignItems: "center",
          zIndex: 1
        }}
        className="portfolio-grid"
      >
        {/* Left: Content Side */}
        <motion.div
          style={{
            order: index % 2 === 0 ? 1 : 2,
            y: yText,
            opacity,
            display: "flex",
            flexDirection: "column",
            gap: 14
          }}
          className="portfolio-content"
        >
          {/* Eyebrow Label */}
          <div className="eyebrow-label">
            ENGINEERING PURPOSE
          </div>

          {/* Heading with highlighted text */}
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
              fontWeight: 700,
              color: "var(--brand-deep)",
              lineHeight: 1.15,
              margin: "6px 0 0 0",
            }}
          >
            {item.mainTitle} <br />
            <span
              style={{
                color: "var(--brand-blue)",
                display: "inline-block",
              }}
            >
              {item.highlightText}
            </span>
          </h2>

          {/* Subtitle / Engineering Line */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "4px 0 12px 0" }}>
            <span className="font-mono-spec" style={{ color: "var(--brand-blue)", fontSize: 11, fontWeight: 700 }}>
              /// {item.subtitle}
            </span>
            <div style={{ flex: 1, height: 1, background: "var(--hairline)", maxWidth: 110 }} />
          </div>

          {/* Description */}
          <p style={{ color: "var(--brand-deep)", fontSize: 15, lineHeight: 1.65, fontWeight: 400, marginBottom: 20, maxWidth: 540 }}>
            {item.desc}
          </p>

          {/* Features Grid Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 8 }} className="features-row">
            {item.features.map((feat, fIdx) => {
              const FeatIcon = iconMap[feat.icon] || ShieldCheck;
              return (
                <div key={fIdx} style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  borderRight: fIdx < 2 ? "1px solid var(--line)" : "none",
                  paddingRight: fIdx < 2 ? 14 : 0
                }} className="feature-col">
                  <div style={{ width: 36, height: 36, borderRadius: "0px", background: "var(--surface)", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--water)" }}>
                    <FeatIcon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-mono-spec" style={{ color: "var(--deep)", fontSize: 11, fontWeight: 700, marginBottom: 3 }}>{feat.title}</h4>
                    <p style={{ color: "var(--ink-soft)", fontSize: 11, lineHeight: 1.45, margin: 0, fontWeight: 400 }}>{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Media Side (Custom Player Box) */}
        <div style={{ order: index % 2 === 0 ? 2 : 1, position: "relative", height: "380px", width: "100%" }} className="portfolio-media">
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              y: yVideo
            }}
          >
            <CustomMediaPlayer src={item.media} title={item.mainTitle} bgColor="var(--surface)" />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            padding: 60px 24px !important;
            gap: 32px !important;
          }
          .portfolio-content { order: 1 !important; }
          .portfolio-media { order: 2 !important; height: 300px !important; }
          .features-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .feature-col { border-right: none !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}

// Custom player component supporting both mp4 video and static images
function CustomMediaPlayer({ src, title, bgColor = "#0085f4" }: { src: string; title: string; bgColor?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:15");

  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
  const isWhite = bgColor === "#ffffff" || bgColor.toLowerCase() === "#fff";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    const onTimeUpdate = () => {
      const current = video.currentTime;
      const total = video.duration || 0;
      setProgress(total > 0 ? (current / total) * 100 : 0);
      setCurrentTime(formatTime(current));
    };

    const onLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    // Auto-play when loaded
    video.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [src, isVideo]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current || !isVideo) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log(err));
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current || !isVideo) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !isVideo) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    videoRef.current.currentTime = percent * videoRef.current.duration;
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current || !isVideo) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 48px",
        borderRadius: 20,
        overflow: "hidden",
        border: isWhite ? "1px solid rgba(226, 232, 240, 0.8)" : "1px solid rgba(33, 150, 243, 0.3)",
        boxShadow: isWhite ? "0 20px 40px rgba(0, 74, 173, 0.35)" : "0 20px 45px rgba(0, 74, 173, 0.6), 0 0 20px rgba(33, 150, 243, 0.15)",
        background: bgColor
      }}
    >
      {/* Media Playback View */}
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          background: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onClick={handlePlayToggle}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: "pointer",
              background: bgColor
            }}
          />
        ) : (
          <img
            src={src}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "contain", background: bgColor }}
          />
        )}

        {/* Media Controls Bar Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            right: 14,
            height: 42,
            background: "var(--deep)",
            borderRadius: 0,
            border: "1px solid var(--line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 14px",
            zIndex: 10
          }}
        >
          {/* Play/Pause Button & Time */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={handlePlayToggle}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                opacity: isVideo ? 1 : 0.5
              }}
              disabled={!isVideo}
            >
              {isPlaying && isVideo ? <Pause size={16} fill="#ffffff" /> : <Play size={16} fill="#ffffff" />}
            </button>
            <span style={{ fontSize: 11, color: "var(--paper)", fontWeight: 600, fontFamily: "var(--font-mono), monospace" }}>
              {isVideo ? `${currentTime} / ${duration}` : "0:00 / 0:00"}
            </span>
          </div>

          {/* Timeline slider */}
          <div
            onClick={isVideo ? handleTimelineClick : undefined}
            style={{
              flex: 1,
              margin: "0 16px",
              height: 4,
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: 0,
              position: "relative",
              cursor: isVideo ? "pointer" : "default"
            }}
          >
            <div
              style={{
                height: "100%",
                width: isVideo ? `${progress}%` : "0%",
                background: "var(--signal)",
                borderRadius: 0,
                position: "absolute",
                top: 0,
                left: 0
              }}
            />
          </div>

          {/* Control Triggers */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={handleMuteToggle}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "var(--paper)",
                display: "flex",
                alignItems: "center",
                opacity: isVideo ? 1 : 0.5
              }}
              disabled={!isVideo}
            >
              {isMuted || !isVideo ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button
              onClick={handleFullscreen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "var(--paper)",
                display: "flex",
                alignItems: "center",
                opacity: isVideo ? 1 : 0.5
              }}
              disabled={!isVideo}
            >
              <Maximize size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Side Column (Right Side of Frame) */}
      <div
        style={{
          background: "var(--surface)",
          borderLeft: "1px solid var(--line)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0"
        }}
      >
        {/* Top Dot Grid Pattern */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, opacity: 0.35 }}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} style={{ width: 3, height: 3, borderRadius: "0px", background: "var(--water)" }} />
          ))}
        </div>

        {/* Droplet Indicator Badge */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "0px",
            background: "var(--paper)",
            border: "1px solid var(--line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--water)"
          }}
        >
          <Droplet size={13} fill="var(--water)" />
        </div>

        {/* Bottom Dot Grid Pattern */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, opacity: 0.35 }}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} style={{ width: 3, height: 3, borderRadius: "0px", background: "var(--water)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Background Topography Curve Generator
function ContourLinesBackground() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.15,
        pointerEvents: "none",
        zIndex: 0
      }}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <path d="M-100,200 C150,150 200,450 450,200 C700,-50 850,300 1100,100" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
      <path d="M-100,250 C150,200 200,500 450,250 C700,0 850,350 1100,150" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
      <path d="M-100,300 C150,250 200,550 450,300 C700,50 850,400 1100,200" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
      <path d="M-100,350 C150,300 200,600 450,350 C700,100 850,450 1100,250" fill="none" stroke="var(--line-strong)" strokeWidth="1" />

      <path d="M-100,750 C100,600 350,900 650,750 C950,600 850,950 1100,850" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
      <path d="M-100,800 C100,650 350,950 650,800 C950,650 850,1000 1100,900" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
      <path d="M-100,850 C100,700 350,1000 650,850 C950,700 850,1050 1100,950" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
    </svg>
  );
}
