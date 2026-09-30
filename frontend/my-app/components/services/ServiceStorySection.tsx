"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ServiceItems } from "./ServiceItems";

interface ServiceStorySectionProps {
  service: {
    number: string;
    title: string;
    eyebrow: string;
    description: string;
    items: string[];
  };
  index: number;
  total: number;
}

export function ServiceStorySection({ service, index, total }: ServiceStorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !containerRef.current) return;

    // We use context to scope selector text to this component
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        gsap.set([numberRef.current, titleRef.current, eyebrowRef.current, descriptionRef.current, ".service-item"], { opacity: 1, y: 0, scale: 1 });
        return;
      }

      // Setup initial states
      gsap.set(numberRef.current, { y: 100, opacity: 0 });
      gsap.set(titleRef.current, { y: 120, opacity: 0, scale: 0.95 });
      gsap.set(eyebrowRef.current, { y: 30, opacity: 0 });
      gsap.set(descriptionRef.current, { y: 40, opacity: 0 });
      gsap.set(".service-item", { y: 30, opacity: 0 });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrubbing
        },
      });

      // Phase 1: Enter (0% -> 20%)
      tl.to(numberRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, 0)
        .to(titleRef.current, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 0.2)
        .to(eyebrowRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.4)
        .to(descriptionRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 0.5);

      // Phase 2: Shift composition and reveal items (20% -> 70%)
      // Move title and number slightly out of focus, move description up, reveal list
      tl.to(titleRef.current, { y: -50, scale: 0.9, opacity: 0.3, duration: 2 }, 1.5)
        .to(numberRef.current, { y: -30, opacity: 0.2, duration: 2 }, 1.5)
        .to(descriptionRef.current, { y: -20, opacity: 0.6, duration: 2 }, 1.5);

      // Stagger in the items
      tl.to(".service-item", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out"
      }, 1.8);

      // Phase 3: Exit stage up (85% -> 100%)
      if (index < total - 1) {
        tl.to(stageRef.current, {
          y: -150,
          opacity: 0,
          duration: 2,
          ease: "power2.inOut"
        }, 4);
      } else {
        // Last item fades out slightly but doesn't fly away aggressively
        tl.to(stageRef.current, {
          opacity: 0.5,
          duration: 2,
        }, 4);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [index, total]);

  return (
    <section ref={sectionRef} className="service-story-section relative w-full h-[250vh]">
      <div ref={containerRef} className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center px-6 lg:px-16 pt-16">
        
        {/* The visual stage */}
        <div ref={stageRef} className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start h-full max-h-[800px] py-12 lg:py-24">
          
          {/* Left / Number */}
          <div className="lg:col-span-2 hidden lg:flex items-start h-full">
            <div ref={numberRef} className="text-white/[0.03] text-[12vw] lg:text-[10rem] font-bold leading-none tracking-tighter select-none">
              {service.number}
            </div>
          </div>

          {/* Center / Title */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <div className="lg:hidden mb-4" ref={(el) => { if(el && !numberRef.current) gsap.set(el, {opacity: 0, y: 50}); }}>
               <span className="text-5xl font-bold text-white/[0.05] select-none">{service.number}</span>
            </div>
            <p ref={eyebrowRef} className="text-[#bc9f70] text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase mb-6 lg:mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#5f8580] shadow-[0_0_0_4px_rgba(95,133,128,0.15)]"></span>
              {service.eyebrow}
            </p>
            <h2 ref={titleRef} className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-[#f9f6f0] leading-[1.05] will-change-transform">
              {service.title}
            </h2>
          </div>

          {/* Right / Content & List */}
          <div className="lg:col-span-4 flex flex-col justify-center h-full mt-8 lg:mt-0 relative">
            <p ref={descriptionRef} className="text-[#878983] text-sm lg:text-base leading-relaxed mb-12 max-w-md">
              {service.description}
            </p>
            
            <div ref={listContainerRef} className="w-full max-w-md">
              <ServiceItems items={service.items} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
