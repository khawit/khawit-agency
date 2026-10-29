"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { servicesData } from "@/data/servicesData";

export { servicesData };

export function ServicesStory() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({
    [servicesData[0].id]: true,
    [servicesData[1].id]: true,
  });

  // Dragging state for mouse users
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const isDragging = useRef(false);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 12;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 12;
    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);

    // Calculate active card index based on scroll position
    const firstCard = el.querySelector<HTMLElement>("[data-service-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth : 420;
    const gap = 24;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveCardIndex(Math.min(Math.max(0, index), servicesData.length - 1));
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-service-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth : 420;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-service-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth : 420;
    const gap = 24;
    el.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  // IntersectionObserver for the card appearance animation on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-service-card]");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleCards((prev) => {
          const updated = { ...prev };
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("data-service-card");
            if (id) {
              updated[id] = entry.isIntersecting;
            }
          });
          return updated;
        });
      },
      {
        root: container,
        threshold: 0.25, // triggers slight animation as card rolls into view
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDown.current = true;
    isDragging.current = false;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftStart.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
    setTimeout(() => {
      isDragging.current = false;
    }, 60);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 8) {
      isDragging.current = true;
    }
    scrollContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  return (
    <div className="relative w-full py-12 md:py-16 px-4 sm:px-6 md:px-10 mt-8 rounded-[24px] shadow-xl overflow-hidden border border-[#575b60]/30 select-none">
      {/* Deep atmospheric backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#1e2227]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c22] via-[#22252a] to-[#1a1c22] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(188,159,112,0.04)_0%,_transparent_70%)]" />
      </div>

      {/* Heading inside the section container with Navigation Arrows */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 max-w-[1500px] mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[#d8c29d] text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
            <span>Practice Areas</span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#f9f6f0] tracking-tight leading-tight mb-4">
            Explore our seven <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal">core disciplines.</span>
          </h3>
          <p className="text-sm md:text-base text-[#ece8df] leading-relaxed">
            Select any discipline below to view our complete catalogue of capabilities, commercial impact, and engineering architecture.
          </p>
        </div>

        {/* Top-Right Navigation Controls with Counter & Arrows */}
        <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
          <div className="flex items-center gap-2 font-mono text-xs text-[#bc9f70] bg-white/[0.08] backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-full shadow-inner">
            <span className="font-semibold text-[#f9f6f0]">0{activeCardIndex + 1}</span>
            <span className="text-white/30">/</span>
            <span className="text-white/60">0{servicesData.length}</span>
          </div>

          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous discipline"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/[0.08] hover:bg-[#bc9f70] hover:border-[#bc9f70] hover:text-[#1a1c20] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md disabled:opacity-25 disabled:cursor-not-allowed shadow-md cursor-pointer group active:scale-95"
          >
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next discipline"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/[0.08] hover:bg-[#bc9f70] hover:border-[#bc9f70] hover:text-[#1a1c20] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md disabled:opacity-25 disabled:cursor-not-allowed shadow-md cursor-pointer group active:scale-95"
          >
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="relative z-10 max-w-[1500px] mx-auto">
        {/* Floating Side Left Arrow Cue */}
        {canScrollLeft && (
          <div className="hidden md:flex absolute left-0 top-0 bottom-6 w-20 z-20 items-center justify-start pointer-events-none bg-gradient-to-r from-[#1a1c22]/90 to-transparent">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="pointer-events-auto ml-2 w-11 h-11 rounded-full bg-[#1a1c22]/85 border border-white/25 text-[#f9f6f0] hover:bg-[#bc9f70] hover:border-[#bc9f70] hover:text-[#1a1c20] backdrop-blur-md flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Floating Side Right Arrow Cue */}
        {canScrollRight && (
          <div className="hidden md:flex absolute right-0 top-0 bottom-6 w-24 z-20 items-center justify-end pointer-events-none bg-gradient-to-l from-[#1a1c22]/95 via-[#1a1c22]/70 to-transparent">
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="pointer-events-auto mr-2 w-11 h-11 rounded-full bg-[#1a1c22]/85 border border-white/25 text-[#f9f6f0] hover:bg-[#bc9f70] hover:border-[#bc9f70] hover:text-[#1a1c20] backdrop-blur-md flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Scrollable Track */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory overscroll-x-contain scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing px-1"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {servicesData.map((category, index) => {
            const isVisible = visibleCards[category.id] ?? index <= 1;
            return (
              <Link
                key={category.id}
                data-service-card={category.id}
                href={`/services/${category.id}`}
                onClick={handleCardClick}
                className={`group relative w-[85vw] sm:w-[380px] md:w-[420px] lg:w-[450px] shrink-0 h-[480px] rounded-[20px] overflow-hidden cursor-pointer text-left bg-[#33373d]/75 backdrop-blur-md border border-[#575b60]/50 hover:border-[#bc9f70]/70 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_45px_-8px_rgba(188,159,112,0.25)] snap-start flex flex-col justify-end p-8 transition-all duration-700 ease-out transform ${
                  isVisible
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-60 scale-[0.96] translate-y-3"
                }`}
                aria-label={`Explore ${category.title}`}
              >
                {/* Top subtle edge sheen */}
                <div 
                  className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors duration-300" 
                />

                {/* Background image preview with dark gradient overlay */}
                <div className="absolute inset-0 w-full h-full -z-10 bg-[#22252a]/70">
                  <Image
                    src={category.image}
                    alt={category.imageAlt || category.title}
                    fill
                    className="object-cover transition-all duration-700 opacity-55 group-hover:opacity-85 group-hover:scale-105 pointer-events-none"
                    sizes="(max-width: 768px) 85vw, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c22] via-[#22252a]/85 to-transparent pointer-events-none" />
                </div>

                {/* Card Content with subtle lift on hover */}
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#bc9f70] font-semibold text-[10px] tracking-[0.15em] uppercase flex items-center gap-2 bg-[#bc9f70]/15 px-3 py-1 rounded-full border border-[#bc9f70]/25 backdrop-blur-sm">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#5f8580]" />
                      {category.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-[#f9f6f0] text-2xl lg:text-3xl font-medium mb-3 group-hover:text-[#d8c29d] transition-colors leading-tight">
                    <span className="text-[#bc9f70] font-mono text-xl mr-2">{category.number} —</span>
                    {category.title}
                  </h3>

                  <p className="text-[#ece8df] text-sm leading-relaxed line-clamp-3 mb-6 transition-colors duration-300 group-hover:text-white font-normal">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/15">
                    <span className="text-xs text-[#bc9f70] font-medium tracking-wide uppercase group-hover:text-white transition-colors">
                      Explore {category.title}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:border-[#bc9f70] group-hover:bg-[#bc9f70] group-hover:text-[#1a1c20] group-hover:translate-x-1 shadow-sm">
                      <FiArrowRight aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Interactive Indicators */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/10">
          <div className="flex items-center gap-2" role="tablist" aria-label="Discipline cards progress">
            {servicesData.map((category, idx) => (
              <button
                key={category.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to discipline 0${idx + 1}: ${category.title}`}
                className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
                  idx === activeCardIndex
                    ? "w-8 bg-[#bc9f70]"
                    : "w-2 bg-white/20 hover:bg-white/45"
                }`}
              />
            ))}
          </div>

          <div className="text-[11px] font-mono tracking-widest text-[#a8aeb5] uppercase">
            <span>07 Core Disciplines</span>
          </div>
        </div>
      </div>
    </div>
  );
}
