"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { FiArrowRight, FiArrowDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { servicesData } from "@/data/servicesData";

export function ServicesScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const updateDistance = useCallback(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const scrollW = track.scrollWidth;
      const windowW = window.innerWidth;
      const dist = Math.max(0, scrollW - windowW);
      setScrollDistance(dist);
    }
  }, []);

  useEffect(() => {
    updateDistance();
    const timer = setTimeout(updateDistance, 150);
    window.addEventListener("resize", updateDistance);

    const resizeObserver = new ResizeObserver(updateDistance);
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDistance);
      resizeObserver.disconnect();
    };
  }, [updateDistance]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(
        servicesData.length - 1,
        Math.floor(latest * servicesData.length)
      );
      setActiveIdx(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const x = useTransform(scrollYProgress, (progress) => -progress * scrollDistance);

  const scrollToCard = (index: number) => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const totalScrollable = targetRef.current.offsetHeight - window.innerHeight;
    const targetProgress = index / (servicesData.length - 1);
    const targetScroll = sectionTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={targetRef}
      id="services"
      aria-label="Our Seven Technical Disciplines"
      className="relative h-[320vh] bg-[#16181d] text-[#ece8df]"
    >
      {/* Sticky Screen Viewport with Dynamic Viewport Height */}
      <div className="sticky top-0 h-[100dvh] max-h-screen w-full overflow-hidden flex flex-col justify-between pt-4 sm:pt-6 pb-6 sm:pb-8 z-10">
        {/* Ambient Atmospheric Glows */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/4 w-[500px] h-[350px] bg-[#bc9f70]/6 rounded-full blur-[130px]" />
          <div className="absolute -bottom-32 right-1/4 w-[500px] h-[350px] bg-[#5f8580]/6 rounded-full blur-[130px]" />
        </div>

        {/* Top: Section Header & Integrated Discipline Controls */}
        <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-10 shrink-0">
          <div className="flex flex-col gap-3 pb-3 border-b border-white/10">
            {/* Top Bar: Eyebrow + Counter & Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#bc9f70] font-semibold">
                  OUR SEVEN SERVICES
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#a8aeb5] uppercase tracking-wider hidden sm:flex">
                  <span>Scroll to explore</span>
                  <FiArrowDown className="w-3.5 h-3.5 text-[#bc9f70] animate-bounce" />
                </div>


                {/* Prev / Next Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => scrollToCard(Math.max(0, activeIdx - 1))}
                    disabled={activeIdx === 0}
                    aria-label="Previous service"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/5 hover:bg-[#bc9f70] hover:text-[#1a1c20] hover:border-[#bc9f70] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer shadow-xs"
                  >
                    <FiChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToCard(Math.min(servicesData.length - 1, activeIdx + 1))}
                    disabled={activeIdx === servicesData.length - 1}
                    aria-label="Next service"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/5 hover:bg-[#bc9f70] hover:text-[#1a1c20] hover:border-[#bc9f70] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer shadow-xs"
                  >
                    <FiChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sub Bar: Title + Discipline Quick-Jump Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#f9f6f0] leading-tight">
                Complex ideas.{" "}
                <span className="font-cursive italic text-[#bc9f70] text-2xl sm:text-3xl lg:text-4xl font-normal drop-shadow-sm">
                  Clear outcomes.
                </span>
              </h2>

              {/* Quick Jump Tabs - Positioned safely in header */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {servicesData.map((category, idx) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all cursor-pointer shrink-0 ${
                      idx === activeIdx
                        ? "bg-[#bc9f70] text-[#1a1c20] font-semibold shadow-sm"
                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                    aria-label={`Jump to ${category.title}`}
                  >
                    {category.number} {category.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center: Cards Track — Fully Vertically Centered with ZERO Elements Below to Prevent Any Clipping */}
        <div className="w-full flex-1 flex items-center min-h-0 py-4 overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-10 will-change-transform py-4"
          >
            {servicesData.map((category, index) => {
              const isCurrent = index === activeIdx;

              return (
                <Link
                  key={category.id}
                  href={`/services/${category.id}`}
                  className={`group relative w-[80vw] sm:w-[320px] md:w-[350px] lg:w-[370px] h-[clamp(260px,44vh,330px)] shrink-0 rounded-[22px] overflow-hidden text-left bg-gradient-to-b from-[#242730]/90 via-[#1c1f26]/95 to-[#13151a]/98 backdrop-blur-2xl border transition-all duration-500 flex flex-col justify-between p-5 sm:p-6 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)] ${
                    isCurrent
                      ? "border-[#bc9f70] shadow-[0_20px_50px_-8px_rgba(188,159,112,0.35)] ring-1 ring-[#bc9f70]/60 scale-[1.01]"
                      : "border-white/15 hover:border-[#bc9f70]/60 hover:shadow-[0_16px_35px_-8px_rgba(188,159,112,0.2)]"
                  }`}
                  aria-label={`Explore discipline ${category.number}: ${category.title}`}
                >
                  {/* Subtle Background Watermark Number */}
                  <span className="absolute -top-3 -right-2 font-mono text-6xl sm:text-7xl font-black text-white/[0.04] pointer-events-none select-none tracking-tighter">
                    {category.number}
                  </span>

                  {/* Top Specular Edge Sheen */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors duration-300" />

                  {/* Background Image Preview with Gradient Overlay */}
                  <div className="absolute inset-0 w-full h-full -z-10 bg-[#16181d]">
                    <Image
                      src={category.image}
                      alt={category.imageAlt || category.title}
                      fill
                      className="object-cover transition-all duration-700 opacity-35 group-hover:opacity-70 group-hover:scale-105 pointer-events-none"
                      sizes="(max-width: 768px) 80vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13151a] via-[#16181d]/85 to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#bc9f70]/10 rounded-full blur-2xl pointer-events-none" />
                  </div>

                  {/* Top Badge: Category Eyebrow & Number */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[#bc9f70] font-semibold text-[10px] tracking-[0.15em] uppercase flex items-center gap-1.5 bg-[#bc9f70]/15 px-2.5 py-0.5 rounded-full border border-[#bc9f70]/30 backdrop-blur-sm shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5f8580]" />
                      {category.eyebrow}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#bc9f70] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {category.number}
                    </span>
                  </div>

                  {/* Bottom: Title, Description, and Link Action */}
                  <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="text-[#f9f6f0] text-lg sm:text-xl font-medium mb-1.5 group-hover:text-[#d8c29d] transition-colors leading-snug">
                      {category.title}
                    </h3>

                    <p className="text-[#c4c9d0] text-xs leading-relaxed line-clamp-2 mb-3.5 font-normal group-hover:text-white transition-colors">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/15">
                      <span className="text-xs text-[#bc9f70] font-medium tracking-wide uppercase group-hover:text-white transition-colors flex items-center gap-1.5">
                        <span>Explore Discipline</span>
                      </span>
                      <div className="w-7 h-7 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:border-[#bc9f70] group-hover:bg-[#bc9f70] group-hover:text-[#1a1c20] group-hover:translate-x-1 shadow-sm">
                        <FiArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Safety Clearance Area — completely open, no overlapping bars */}
        <div className="h-2 sm:h-4 shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
