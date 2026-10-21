"use client";

import React from "react";
import { FoldText } from "@/components/fold-text";
import {
  FiGlobe,
  FiCpu,
  FiZap,
  FiTrendingUp,
  FiLayers,
  FiServer,
  FiBarChart2
} from "react-icons/fi";
import { IconType } from "react-icons";

interface MapNodeItem {
  number: string;
  title: string;
  detail: string;
  icon: IconType;
}

const mapNodes: MapNodeItem[] = [
  { number: "01", title: "Digital experiences", detail: "Websites · Web Applications", icon: FiGlobe },
  { number: "02", title: "Conversational AI & RAG", detail: "Knowledge Bases · Custom Chatbots · Voice AI", icon: FiCpu },
  { number: "03", title: "Autonomous AI agents", detail: "Agentic Workflows · Tool Use · Multi-Agent", icon: FiZap },
  { number: "04", title: "Products that scale", detail: "SaaS · MVP Development", icon: FiTrendingUp },
  { number: "05", title: "Enterprise AI operations", detail: "Support Triage · Lead Scoring · Internal Ops", icon: FiLayers },
  { number: "06", title: "Deployment & cloud", detail: "APIs · Production Infrastructure", icon: FiServer },
  { number: "07", title: "Digital marketing", detail: "Growth · Paid Media & AI Content", icon: FiBarChart2 },
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

export function CapabilitiesMap() {
  return (
    <section className="relative py-24 md:py-32 section-shell overflow-hidden" id="approach">
      {/* Subtle ambient lighting behind glass cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#bc9f70]/10 via-[#5f8580]/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22252a]/60 backdrop-blur-md border border-[#e5dfd4]/20 text-[#f0ece3] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
            <span>From possibility to product</span>
          </div>
          <FoldText as="h2" {...headingFold} text="One connected digital world.">
            <span className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
              One connected <span className="font-cursive italic text-[#bc9f70] text-5xl sm:text-6xl md:text-7xl font-normal drop-shadow-sm">digital world.</span>
            </span>
          </FoldText>
          <p className="mt-4 text-[#ece8df] text-base md:text-lg leading-relaxed font-normal">
            We work across the full technology landscape, connecting thoughtful digital experiences to the intelligent systems and operational infrastructure that make them valuable.
          </p>
        </div>

        {/* 7 Refined Charcoal Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 reveal">
          {mapNodes.map((node) => {
            const Icon = node.icon;
            return (
              <div
                key={node.number}
                className="group relative p-7 rounded-[20px] bg-[#41454b]/70 backdrop-blur-md border border-[#575b60]/50 hover:border-[#bc9f70]/70 transition-all duration-300 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_45px_-8px_rgba(188,159,112,0.22)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Top subtle sheen */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-9 h-9 rounded-full bg-[#33373d] border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-[#bc9f70] shadow-sm">
                      {node.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#33373d] border border-white/15 flex items-center justify-center text-[#bc9f70] group-hover:scale-105 group-hover:bg-[#bc9f70] group-hover:text-[#1a1c20] transition-all shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#f9f6f0] mb-2 leading-snug group-hover:text-[#bc9f70] transition-colors">
                    {node.title}
                  </h3>
                  <p className="text-[#ece8df] text-sm leading-relaxed font-normal">
                    {node.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#41454b]/70 backdrop-blur-md border border-[#575b60]/50 text-[#f0ece3] font-mono text-xs font-semibold tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
            <span>ONE TEAM. END TO END.</span>
          </span>
        </div>
      </div>
    </section>
  );
}
