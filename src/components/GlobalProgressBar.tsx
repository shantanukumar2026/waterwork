"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalProgressBar({ containerRef }: { containerRef?: React.RefObject<any> }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track window page scroll directly
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  if (!isClient) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      width: 4,
      background: "rgba(0, 74, 173, 0.08)",
      zIndex: 9999,
      pointerEvents: "none"
    }}>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, #0085F4 0%, #00BBFF 100%)",
          transformOrigin: "top",
          scaleY,
          boxShadow: "-1px 0 8px rgba(0, 133, 244, 0.4)"
        }}
      />
    </div>
  );
}
