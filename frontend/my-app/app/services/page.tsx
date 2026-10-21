import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgencyExperience } from "@/components/agency-experience";
import { ServicesStory } from "@/components/services/ServicesStory";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Our Services | KHAWIT Solutions",
  description: "Explore KHAWIT Solutions' seven specialized engineering and AI disciplines: Web Development, Conversational AI & Knowledge Systems (RAG), Autonomous AI Agents & Automation, SaaS Product Development, Enterprise AI & Business Operations, Cloud & API Deployment, and Digital Marketing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <AgencyExperience />
      <main className="min-h-screen bg-[#121418] text-[#ece8df]">
        {/* HERO SECTION */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden section-shell">
          {/* Deep atmospheric backdrop */}
          <div className="absolute inset-0 z-0 bg-[#121418]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c10]/95 via-[#101319]/90 to-[#121418]/98 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(188,159,112,0.05)_0%,_transparent_70%)] pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[#d8c29d] text-xs font-mono uppercase tracking-widest mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
              <span>Seven Technical Disciplines</span>
            </div>

            {/* Main Headline with two colors */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              Engineering, intelligence, and <br className="hidden sm:inline" />
              <span className="font-cursive italic text-[#bc9f70] font-normal tracking-normal text-5xl sm:text-7xl md:text-8xl inline-block drop-shadow-[0_2px_24px_rgba(188,159,112,0.45)]">
                commercial momentum.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-[#ece8df]/90 text-base md:text-lg leading-relaxed mb-10 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              From high-conversion digital experiences and custom web applications to applied artificial intelligence, autonomous agent workflows, and cloud infrastructure.
            </p>

            {/* Action button */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="#services-grid"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c20] font-semibold text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                <span>Browse all disciplines</span>
                <FiArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES GRID SECTION */}
        <section className="section-shell pb-28 pt-8" id="services-grid">
          <ServicesStory />
        </section>

        {/* CTA SECTION */}
        <section className="section-shell pb-24">
          <div className="relative rounded-[24px] p-10 md:p-14 bg-[#41454b]/75 backdrop-blur-xl border border-[#575b60]/50 shadow-xl overflow-hidden text-center max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#bc9f70]/10 via-transparent to-[#5f8580]/10 pointer-events-none" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#f9f6f0] mb-4">
              Ready to build something <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">exceptional?</span>
            </h2>
            <p className="max-w-xl mx-auto text-[#ece8df]/85 text-sm sm:text-base leading-relaxed mb-8">
              Discuss your project directly with our technical team. We evaluate your operational requirements and provide a clear, actionable roadmap.
            </p>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c20] font-semibold text-sm transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              <span>Start a project</span>
              <FiArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0f1115] text-[#ece8df] py-16 section-shell border-t border-white/10">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-[#ece8df]/70">
          <div className="flex items-center gap-3">
            <Image
              src="/khawit-logo-nbg.png"
              alt="KHAWIT Solutions logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <span className="font-semibold text-[#f9f6f0] tracking-widest">KHAWIT SOLUTIONS</span>
          </div>
          <p>© {new Date().getFullYear()} KHAWIT Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#bc9f70] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#bc9f70] transition-colors">About</Link>
            <Link href="/#contact" className="hover:text-[#bc9f70] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
