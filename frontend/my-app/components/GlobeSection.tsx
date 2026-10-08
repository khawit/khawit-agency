"use client";

import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { FiArrowUpRight, FiGlobe } from "react-icons/fi";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#1a1f26",
    showAtmosphere: true,
    atmosphereColor: "#bc9f70",
    atmosphereAltitude: 0.15,
    emissive: "#0d131a",
    emissiveIntensity: 0.2,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#bc9f70",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1200,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.8,
  };

  const colors = ["#bc9f70", "#d8c29d", "#536e7c", "#38bdf8"];
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[2] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[1] },
    { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[3] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[2] },
    { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.1, color: colors[1] },
    { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: colors[0] },
    { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[3] },
  ];

  const [showWorld, setShowWorld] = React.useState(false);

  return (
    <section className="contact-section section-shell relative overflow-hidden" id="contact">
      <div className="contact-top reveal relative z-20">
        <p className="eyebrow">
          <span className="status-dot" /> Your next chapter starts here
        </p>
        <span className="contact-index">KH / 2026</span>
      </div>

      <div className="relative w-full max-w-7xl mx-auto py-12 md:py-16 flex flex-col items-center justify-center min-h-[520px] z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setShowWorld(true)}
          className="text-center max-w-3xl mx-auto px-4 relative z-30"
        >
          <p className="eyebrow text-[#bc9f70] mb-3 inline-flex items-center gap-2">
            <FiGlobe /> Worldwide Reach &amp; Partnerships
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
            Let us know where you are from <br />
            <span className="text-[#bc9f70] italic font-normal">&amp; what&apos;s your idea.</span>
          </h2>
          <p className="text-sm md:text-base text-[#a8aeb5] max-w-xl mx-auto mb-8 leading-relaxed">
            From first concepts to scalable systems running in production, we partner with visionaries across the globe to turn ambitious ideas into reality.
          </p>

          <a
            className="button button-light inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            href="#start-project"
          >
            Start a project <FiArrowUpRight aria-hidden="true" />
          </a>
        </motion.div>

        {/* Globe canvas */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center top-10 opacity-70">
          {showWorld && <World data={sampleArcs} globeConfig={globeConfig} />}
        </div>
      </div>

      <div className="contact-bottom relative z-20 border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#a8aeb5]">
        <a className="email-link hover:text-[#bc9f70] transition-colors" href="mailto:khawitsocialmedia@gmail.com">
          khawitsocialmedia@gmail.com
        </a>
        <p>&copy; 2026 KHAWIT Solutions. All rights reserved.</p>
      </div>
    </section>
  );
}