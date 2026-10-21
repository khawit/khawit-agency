"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FoldText } from "@/components/fold-text";
import { FiUsers, FiCpu, FiFileText, FiShield, FiArrowUpRight, FiCheck } from "react-icons/fi";

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

const differentiators = [
  {
    number: "01",
    title: "Capable team with relevant expertise",
    description:
      "Engineers, product designers, and systems architects who understand both software fundamentals and modern applied AI. You work directly with builders who take ownership.",
    icon: FiUsers,
    highlight: "Direct collaboration with senior engineers"
  },
  {
    number: "02",
    title: "An AI-native approach to problem-solving",
    description:
      "We do not treat AI as a decorative add-on. We evaluate where intelligence creates real efficiency, grounding models in your data and connecting them to practical business actions.",
    icon: FiCpu,
    highlight: "Grounded in business workflows & data"
  },
  {
    number: "03",
    title: "Clear project scope & transparent communication",
    description:
      "Honest discussions around scope, technical feasibility, and investment. We define clear milestones and deliverables so you always know where your project stands.",
    icon: FiFileText,
    highlight: "Milestone-driven clarity & realistic roadmaps"
  },
  {
    number: "04",
    title: "Appropriate support after launch",
    description:
      "Deploying to production is the beginning. We provide structured handover, monitoring, and ongoing technical evolution to ensure your software remains stable and effective.",
    icon: FiShield,
    highlight: "Structured handover, monitoring & evolution"
  }
];

export function WhyKhawit() {
  return (
    <section className="why-section relative section-shell py-20 md:py-28 overflow-hidden" id="why-khawit" aria-labelledby="why-title">
      {/* Subtle darkened Mid-Century backdrop behind Why KHAWIT cards */}
      <div className="absolute inset-0 -z-10 opacity-35 pointer-events-none overflow-hidden" aria-hidden="true">
        <Image
          src="/mid-century-hero.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover object-center filter brightness-[0.4] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121418] via-[#161922]/85 to-[#121418]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              <span className="status-dot" />
              Why KHAWIT
            </p>
            <FoldText as="h2" {...headingFold} id="why-title" text="Built for clarity, capability, and long-term momentum.">
              <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
                Built for clarity, capability,<br />
                and <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">long-term momentum.</span>
              </span>
            </FoldText>
          </div>
          <p className="section-aside">
            We combine engineering rigor with modern AI capabilities to deliver systems that make a measurable difference to how your business runs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 reveal">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <article
                key={diff.number}
                className="why-card group relative p-8 md:p-9 rounded-[20px] bg-[#33373d]/80 backdrop-blur-md border border-[#575b60]/40 hover:border-[#bc9f70]/70 transition-all duration-300 flex flex-col justify-between shadow-[0_16px_36px_-8px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_45px_-8px_rgba(188,159,112,0.22)] hover:-translate-y-1"
              >
                {/* Top specular highlight edge glow */}
                <div 
                  className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors duration-300" 
                />

                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[#bc9f70] font-mono text-xs tracking-widest font-semibold bg-[#bc9f70]/15 px-3 py-1 rounded-full border border-[#bc9f70]/30 backdrop-blur-sm">
                      {diff.number}
                    </span>
                    <div className="w-10 h-10 rounded-[12px] bg-white/10 border border-white/15 flex items-center justify-center text-[#bc9f70] group-hover:scale-105 group-hover:bg-[#bc9f70] group-hover:text-[#33373d] transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <div>
                  <FoldText as="h3" {...headingFold} className="text-xl md:text-2xl font-semibold text-[#f9f6f0] mb-3" text={diff.title}>
                    {diff.title}
                  </FoldText>
                  <p className="text-[#ece8df] text-sm md:text-base leading-relaxed mb-6 font-normal">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-[#d8c29d]">
                  <FiCheck className="text-[#5f8580] w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{diff.highlight}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-[20px] bg-[#33373d]/70 backdrop-blur-md border border-[#575b60]/40 shadow-lg reveal">
          <div>
            <h3 className="text-[#f9f6f0] font-medium text-lg">Looking for a partner that respects your vision and time?</h3>
            <p className="text-sm text-[#ece8df] mt-1">Let&apos;s evaluate your technical requirements with full transparency.</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/about"
              className="text-link text-white hover:text-[#bc9f70] transition-colors text-xs font-semibold uppercase tracking-wider"
            >
              Learn More About KHAWIT <FiArrowUpRight className="inline ml-1" aria-hidden="true" />
            </Link>
            <Link
              href="/start-project"
              className="button button-dark rounded-full text-xs font-semibold px-6 py-3 bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c20] transition-all duration-300 shadow-sm"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
