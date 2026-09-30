"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[0],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[2],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[1],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[1],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[2],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[0],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[1],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 7,
      startLat: 8.9806,
      startLng: 38.7578,
      endLat: 39.9042,
      endLng: 116.4074,
      arcAlt: 0.4,
      color: colors[0],
    },
    {
      order: 7,
      startLat: -33.9249,
      startLng: 18.4241,
      endLat: 21.3099,
      endLng: -157.8581,
      arcAlt: 0.3,
      color: colors[1],
    },
    {
      order: 8,
      startLat: 25.7617,
      startLng: -80.1918,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.5,
      color: colors[2],
    },
    {
      order: 8,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 30.0444,
      endLng: 31.2357,
      arcAlt: 0.2,
      color: colors[0],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 11,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.4,
      color: colors[0],
    },
    {
      order: 11,
      startLat: 13.7563,
      startLng: 100.5018,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 12,
      startLat: 55.7558,
      startLng: 37.6173,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.1,
      color: colors[2],
    },
    {
      order: 13,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: -37.8136,
      endLng: 144.9631,
      arcAlt: 0.1,
      color: colors[0],
    },
    {
      order: 13,
      startLat: 13.7563,
      startLng: 100.5018,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 14,
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[2],
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-full md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            We Provide services WORLDWIDE
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mx-auto mt-2">
            Let us know where you are from and what&apos;s your idea
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
