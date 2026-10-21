"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FoldText } from "@/components/fold-text";
import { FiArrowUpRight } from "react-icons/fi";

const headingFold = {
  splitBy: "char" as const,
  hinge: "top" as const,
  trigger: "scroll" as const,
  duration: 0.65,
  stagger: 0.045,
  ease: "power3.out",
  perspective: 700,
  creaseShading: 0.55
};

export function TeamCollaboration() {
  return (
    <section className="relative py-24 md:py-32 section-shell overflow-hidden">
      {/* Subtle ambient lighting behind glass card */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#bc9f70]/10 via-[#5f8580]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-14 rounded-[24px] bg-[#41454b]/75 backdrop-blur-xl border border-[#575b60]/50 hover:border-[#bc9f70]/40 shadow-xl transition-all duration-300 relative overflow-hidden reveal">
          {/* Top specular highlight edge glow */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#bc9f70]/40 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Layered Ticket Cards Visual */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-[420px] aspect-[2/3] flex items-center justify-center">
                <Image
                  src="/layered-ticket-cards.png"
                  alt="Layered ticket cards illustration showing technical discovery through project launch workflow"
                  fill
                  className="object-contain object-center drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Copy & Link */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22252a]/60 backdrop-blur-md border border-[#575b60]/50 text-xs font-mono uppercase tracking-widest text-[#f9f6f0] mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#bc9f70]" />
                <span>A team that builds with you</span>
              </div>

              <FoldText as="h2" {...headingFold}>
                <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block mb-6">
                  Your idea doesn&apos;t disappear into a <br />
                  <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">ticket queue.</span>
                </span>
              </FoldText>

              <p className="text-[#ece8df]/90 text-base md:text-lg leading-relaxed font-normal mb-8">
                Our team stays close to the work: learning what matters, asking better questions, and working through the details with you from concept to launch.
              </p>

              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c20] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                <span>Meet us at the start</span>
                <FiArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
