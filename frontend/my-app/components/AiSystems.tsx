"use client";

import React from "react";
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

export function AiSystems() {
  return (
    <section className="relative py-12 md:py-16 section-shell overflow-hidden" id="ai-systems">
      {/* Subtle ambient lighting behind glass cards */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-gradient-to-bl from-[#5f8580]/15 via-[#bc9f70]/10 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal">
        {/* Left Card: Copy & Context */}
        <div className="lg:col-span-5 p-8 sm:p-12 rounded-[24px] bg-[#41454b]/75 backdrop-blur-md border border-[#575b60]/50 hover:border-[#bc9f70]/70 transition-all duration-300 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.35)] flex flex-col justify-between relative overflow-hidden">
          {/* Top subtle sheen */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors" />

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22252a]/60 backdrop-blur-md border border-[#e5dfd4]/20 text-xs font-mono uppercase tracking-widest text-[#f0ece3] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
              <span>More than a conversation</span>
            </div>

            <FoldText as="h2" {...headingFold}>
              <span className="text-4xl sm:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block mb-6">
                AI that gets <br />
                <span className="font-cursive italic text-[#bc9f70] text-5xl sm:text-6xl font-normal drop-shadow-sm">things done.</span>
              </span>
            </FoldText>

            <p className="text-[#ece8df] text-base leading-relaxed font-normal mb-8">
              An AI agent can understand a request, use the right tools, and take a useful next step. We connect intelligence to the systems your business depends on, with people firmly in control.
            </p>
          </div>

          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c20] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 w-fit"
          >
            <span>Build a smarter workflow</span>
            <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Card: Agent Architecture Flow */}
        <div className="lg:col-span-7 p-8 sm:p-12 rounded-[24px] bg-[#41454b]/75 backdrop-blur-md border border-[#575b60]/50 hover:border-[#bc9f70]/70 transition-all duration-300 shadow-[0_20px_45px_-8px_rgba(0,0,0,0.35)] flex flex-col justify-between relative overflow-hidden">
          {/* Top subtle sheen */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors" />

          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <span className="text-xs font-mono font-bold tracking-widest text-[#f9f6f0] uppercase">
                KH / AGENT SYSTEM
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#5f8580] bg-[#5f8580]/15 px-3.5 py-1.5 rounded-full uppercase border border-[#5f8580]/30 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
                ACTIVE FLOW
              </span>
            </div>

            {/* Step 1: Input People */}
            <div className="p-4 rounded-[14px] bg-[#22252a]/70 border border-white/10 flex items-center justify-between shadow-sm mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#181a22] text-[#bc9f70] flex items-center justify-center font-mono text-xs font-bold border border-white/20">
                  01
                </span>
                <div>
                  <small className="text-[10px] font-mono text-[#a8aeb5] uppercase block">INPUT</small>
                  <strong className="text-sm font-bold text-[#f9f6f0]">People</strong>
                </div>
              </div>
              <span className="text-xs font-mono text-[#ece8df] bg-white/10 px-3 py-1 rounded-full uppercase border border-white/20 font-medium">REQUEST</span>
            </div>

            {/* Step 2: AI Agent Decision */}
            <div className="p-5 rounded-[14px] bg-[#bc9f70]/15 border border-[#bc9f70]/30 flex items-center justify-between shadow-sm mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#bc9f70] text-[#1a1c20] flex items-center justify-center font-mono text-base font-bold">
                  K
                </span>
                <div>
                  <small className="text-[10px] font-mono text-[#ece8df] uppercase block">REASONING</small>
                  <strong className="text-base font-bold text-[#f9f6f0]">AI agent</strong>
                </div>
              </div>
              <span className="text-xs font-mono text-[#bc9f70] bg-[#bc9f70]/20 px-3 py-1 rounded-full font-bold uppercase border border-[#bc9f70]/35">DECIDES</span>
            </div>

            {/* Step 3: Tool Branches */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-[14px] bg-[#22252a]/70 border border-white/10 shadow-sm text-center">
                <span className="font-mono text-xs text-[#bc9f70] font-bold block mb-1">02</span>
                <small className="text-[10px] font-mono text-[#a8aeb5] uppercase block">CONNECT</small>
                <strong className="text-xs font-bold text-[#f9f6f0]">Tools &amp; APIs</strong>
              </div>
              <div className="p-3.5 rounded-[14px] bg-[#22252a]/70 border border-white/10 shadow-sm text-center">
                <span className="font-mono text-xs text-[#bc9f70] font-bold block mb-1">03</span>
                <small className="text-[10px] font-mono text-[#a8aeb5] uppercase block">RETRIEVE</small>
                <strong className="text-xs font-bold text-[#f9f6f0]">Knowledge</strong>
              </div>
              <div className="p-3.5 rounded-[14px] bg-[#22252a]/70 border border-white/10 shadow-sm text-center">
                <span className="font-mono text-xs text-[#bc9f70] font-bold block mb-1">04</span>
                <small className="text-[10px] font-mono text-[#a8aeb5] uppercase block">COMPLETE</small>
                <strong className="text-xs font-bold text-[#f9f6f0]">Action</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 border-t border-white/10 text-xs font-mono text-[#a8aeb5] mt-8 uppercase tracking-wider">
            <span>CONNECTED TO YOUR BUSINESS</span>
            <span>HUMAN OVERSIGHT, BUILT IN</span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
