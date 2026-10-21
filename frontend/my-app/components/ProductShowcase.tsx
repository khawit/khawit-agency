"use client";

import React from "react";
import Link from "next/link";
import { FoldText } from "@/components/fold-text";
import { FiLayout, FiGitBranch, FiArrowUpRight } from "react-icons/fi";

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

export function ProductShowcase() {
  return (
    <section className="relative py-24 md:py-32 section-shell overflow-hidden" id="work">
      {/* Subtle ambient lighting behind glass cards */}
      <div className="absolute top-1/3 left-1/4 w-[650px] h-[450px] bg-gradient-to-br from-[#bc9f70]/10 via-[#5f8580]/10 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22252a]/60 backdrop-blur-md border border-[#e5dfd4]/20 text-[#f0ece3] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
            <span>What we build &amp; automate</span>
          </div>
          <FoldText as="h2" {...headingFold} text="Made to move business forward.">
            <span className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
              Made to move <span className="font-cursive italic text-[#bc9f70] text-5xl sm:text-6xl md:text-7xl font-normal drop-shadow-sm">business forward.</span>
            </span>
          </FoldText>
          <p className="mt-4 text-[#ece8df] text-base md:text-lg leading-relaxed font-normal">
            Digital foundations and intelligent workflows, shaped around the people who use them every day.
          </p>
        </div>

        {/* 2 Large Refined Charcoal Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 reveal">
          {/* Card 1: 01 / DIGITAL PRODUCTS */}
          <article className="group relative p-5 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[24px] bg-[#41454b]/75 backdrop-blur-md border border-[#575b60]/50 hover:border-[#bc9f70]/70 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_55px_-8px_rgba(188,159,112,0.22)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top subtle sheen */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#33373d] border border-white/15 font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-[#bc9f70] shadow-sm">
                  01 / DIGITAL PRODUCTS
                </span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#33373d] border border-white/15 flex items-center justify-center text-[#bc9f70] group-hover:scale-105 group-hover:bg-[#bc9f70] group-hover:text-[#1a1c20] transition-all shadow-sm shrink-0">
                  <FiLayout className="w-4 h-4" />
                </div>
              </div>

              {/* Window Preview Inside Card */}
              <div className="rounded-[14px] sm:rounded-[16px] p-4 sm:p-6 md:p-8 bg-[#33373d]/90 border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.25)] my-3 sm:my-4 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 text-xs font-mono text-white/80 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d8c29d]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5f8580]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#bc9f70]" />
                  </div>
                  <span className="tracking-widest font-semibold text-[#f9f6f0]">KH / STUDIO</span>
                  <span className="text-white/60">MENU +</span>
                </div>

                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#bc9f70] mb-2 font-semibold">
                  A NEW KIND OF WORKSPACE
                </div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-[#f9f6f0] tracking-tight leading-tight mb-5 sm:mb-6">
                  Make room for <span className="italic text-[#bc9f70]">good work.</span>
                </h4>

                <Link
                  href="/start-project"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c20] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <span>Explore the platform</span>
                  <FiArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-auto">
              <h3 className="text-lg sm:text-xl font-bold text-[#f9f6f0] mb-1">
                Experiences people want to use.
              </h3>
              <p className="text-xs sm:text-sm text-[#ece8df] leading-relaxed font-normal">
                Websites, applications, and product interfaces built with intention and high craft.
              </p>
            </div>
          </article>

          {/* Card 2: 02 / INTELLIGENT WORKFLOWS */}
          <article className="group relative p-5 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[24px] bg-[#41454b]/75 backdrop-blur-md border border-[#575b60]/50 hover:border-[#bc9f70]/70 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_55px_-8px_rgba(188,159,112,0.22)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top subtle sheen */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#33373d] border border-white/15 font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-[#bc9f70] shadow-sm">
                  02 / INTELLIGENT WORKFLOWS
                </span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#33373d] border border-white/15 flex items-center justify-center text-[#bc9f70] group-hover:scale-105 group-hover:bg-[#bc9f70] group-hover:text-[#1a1c20] transition-all shadow-sm shrink-0">
                  <FiGitBranch className="w-4 h-4" />
                </div>
              </div>

              {/* Workflow Visual Inside Card */}
              <div className="rounded-[14px] sm:rounded-[16px] p-3.5 sm:p-6 md:p-8 bg-[#33373d]/90 border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.25)] my-3 sm:my-4 flex flex-col gap-2.5 sm:gap-3 relative overflow-hidden">
                {/* Node 1 */}
                <div className="p-2.5 sm:p-3.5 rounded-[12px] bg-[#22252a]/70 border border-white/10 flex items-center justify-between gap-2 sm:gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[#181a22] text-[#bc9f70] flex items-center justify-center font-mono text-xs font-bold border border-white/20">
                      01
                    </span>
                    <div className="min-w-0 flex-1">
                      <strong className="text-xs font-bold text-[#f9f6f0] block truncate sm:whitespace-normal">New enquiry</strong>
                      <small className="text-[11px] text-[#ece8df] block truncate sm:whitespace-normal">Website form</small>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono text-[#5f8580] bg-[#5f8580]/15 px-2 sm:px-2.5 py-0.5 rounded-full uppercase border border-[#5f8580]/30 font-semibold whitespace-nowrap">
                    Trigger
                  </span>
                </div>

                {/* Node 2 */}
                <div className="p-2.5 sm:p-3.5 rounded-[12px] bg-[#bc9f70]/15 border border-[#bc9f70]/30 flex items-center justify-between gap-2 sm:gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[#bc9f70] text-[#1a1c20] flex items-center justify-center font-mono text-xs font-bold">
                      K
                    </span>
                    <div className="min-w-0 flex-1">
                      <strong className="text-xs font-bold text-[#f9f6f0] block truncate sm:whitespace-normal">AI agent</strong>
                      <small className="text-[11px] text-[#ece8df] block truncate sm:whitespace-normal">Understands context</small>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono text-[#bc9f70] bg-[#bc9f70]/20 px-2 sm:px-2.5 py-0.5 rounded-full uppercase border border-[#bc9f70]/35 font-semibold whitespace-nowrap">
                    Reasoning
                  </span>
                </div>

                {/* Node 3 */}
                <div className="p-2.5 sm:p-3.5 rounded-[12px] bg-[#22252a]/70 border border-white/10 flex items-center justify-between gap-2 sm:gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-[#181a22] text-[#bc9f70] flex items-center justify-center font-mono text-xs font-bold border border-white/20">
                      03
                    </span>
                    <div className="min-w-0 flex-1">
                      <strong className="text-xs font-bold text-[#f9f6f0] block truncate sm:whitespace-normal">Right next step</strong>
                      <small className="text-[11px] text-[#ece8df] block truncate sm:whitespace-normal">CRM · Team · Client</small>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono text-[#5f8580] bg-[#5f8580]/15 px-2 sm:px-2.5 py-0.5 rounded-full uppercase border border-[#5f8580]/30 font-semibold whitespace-nowrap">
                    Action
                  </span>
                </div>

                <div className="text-right text-[10px] font-mono tracking-wider sm:tracking-widest text-[#a8aeb5] uppercase pt-1 sm:pt-2">
                  A WORKFLOW THAT THINKS AHEAD
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-auto">
              <h3 className="text-lg sm:text-xl font-bold text-[#f9f6f0] mb-1">
                Less busywork. Better momentum.
              </h3>
              <p className="text-xs sm:text-sm text-[#ece8df] leading-relaxed font-normal">
                Practical automation that connects the tools your business already uses.
              </p>
            </div>
          </article>
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-xs text-[#ece8df] font-mono bg-[#41454b]/70 backdrop-blur-md px-6 py-2.5 rounded-full inline-block border border-[#575b60]/50 shadow-sm">
            Illustrative examples of the systems we create. Specific architectural deep dives and case studies are shared on request.
          </p>
        </div>
      </div>
    </section>
  );
}
