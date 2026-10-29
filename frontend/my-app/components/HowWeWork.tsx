"use client";

import React from "react";
import { FoldText } from "@/components/fold-text";

const stages = [
  {
    number: "01",
    title: "Discover",
    copy: "Understand the problem, examine existing workflows, and pinpoint where friction is worth removing."
  },
  {
    number: "02",
    title: "Define",
    copy: "Establish clear project scopes, technical architectures, and actionable milestone roadmaps."
  },
  {
    number: "03",
    title: "Design",
    copy: "Shape the user experience, design systems, and resilient engineering foundations."
  },
  {
    number: "04",
    title: "Build",
    copy: "Develop full-stack applications, ground AI models, test edge cases, and integrate APIs."
  },
  {
    number: "05",
    title: "Launch",
    copy: "Deploy safely to cloud infrastructure, execute production tests, and connect into everyday operations."
  },
  {
    number: "06",
    title: "Evolve",
    copy: "Gather feedback from real user engagement, monitor performance, and iteratively expand capabilities."
  }
];

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

export function HowWeWork() {
  return (
    <section className="relative pt-6 md:pt-8 pb-12 md:pb-16 section-shell overflow-hidden" id="process">
      {/* Subtle ambient lighting behind glass cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#bc9f70]/10 via-[#5f8580]/10 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22252a]/60 backdrop-blur-md border border-[#575b60]/50 text-[#f9f6f0] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#bc9f70]" />
            <span>How We Work</span>
          </div>
          <FoldText as="h2" {...headingFold}>
            <span className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
              Good work, built <span className="font-cursive italic text-[#bc9f70] text-5xl sm:text-6xl md:text-7xl font-normal drop-shadow-sm">step by step.</span>
            </span>
          </FoldText>
          <p className="mt-4 text-[#ece8df]/85 text-base md:text-lg leading-relaxed font-normal">
            A disciplined, six-stage approach to bringing complex software, intelligent systems, and growth initiatives into production.
          </p>
        </div>

        {/* 6 Disciplined Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {stages.map(({ number, title, copy }) => (
            <article
              key={number}
              className="group relative p-7 sm:p-8 rounded-[20px] bg-[#41454b]/70 backdrop-blur-xl border border-[#575b60]/50 hover:border-[#bc9f70]/50 hover:bg-[#41454b]/85 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Top specular highlight edge glow */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#bc9f70]/30 to-transparent pointer-events-none group-hover:via-[#bc9f70]/60 transition-colors" />

              <div>
                <span className="w-10 h-10 rounded-full bg-[#22252a]/70 border border-[#575b60]/50 flex items-center justify-center font-mono font-semibold text-xs text-[#bc9f70] mb-5 shadow-sm group-hover:bg-[#bc9f70] group-hover:text-[#1f2328] group-hover:border-[#bc9f70] transition-all">
                  {number}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#f9f6f0] mb-2.5 group-hover:text-[#bc9f70] transition-colors">
                  {title}
                </h3>
                <p className="text-[#ece8df]/85 text-sm md:text-base leading-relaxed font-normal">
                  {copy}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#575b60]/30 flex items-center justify-between text-xs font-mono text-[#ece8df]/65 uppercase tracking-wider">
                <span>Phase {number} / 06</span>
                <span className="w-2 h-2 rounded-full bg-[#bc9f70]/70 group-hover:bg-[#bc9f70]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
