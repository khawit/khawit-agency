import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#33373d] text-[#ece8df] pt-16 sm:pt-20 md:pt-24 pb-0 overflow-hidden relative">
      {/* Warm Golden ambient backlight for the bottom brand graphic */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-56 bg-[#bc9f70]/20 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-between relative z-10">
        {/* TOP ROW: Brand Info + 4 Link Columns */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 relative z-10">
          {/* Brand Info with BIGGER Logo (Left) */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <Image
                src="/khawit-logo-nbg.png"
                alt="KHAWIT Solutions logo"
                width={80}
                height={80}
                priority
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-[#bc9f70] transition-colors leading-none">
                  KHAWIT
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#bc9f70] font-semibold mt-1">
                  SOLUTIONS
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#ece8df]/85 leading-relaxed mt-2">
              A multidisciplinary technology studio specializing in intelligent digital experiences, autonomous AI agents, and custom software.
            </p>
          </div>

          {/* 4 Link Columns (Right) in High Contrast */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full lg:max-w-3xl">
            {/* Column 1: Quick link */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-xs sm:text-sm font-semibold text-[#bc9f70] tracking-wider uppercase">
                Quick link
              </h4>
              <nav className="flex flex-col gap-2.5 text-sm text-[#ece8df]/85" aria-label="Quick links">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/start-project" className="hover:text-white transition-colors">
                  Start a project
                </Link>
              </nav>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-xs sm:text-sm font-semibold text-[#bc9f70] tracking-wider uppercase">
                Company
              </h4>
              <nav className="flex flex-col gap-2.5 text-sm text-[#ece8df]/85" aria-label="Company links">
                <Link href="/#why-khawit" className="hover:text-white transition-colors">
                  Why KHAWIT
                </Link>
                <Link href="/#work" className="hover:text-white transition-colors">
                  Work &amp; Systems
                </Link>
                <Link href="/#process" className="hover:text-white transition-colors">
                  Process
                </Link>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact us
                </Link>
              </nav>
            </div>

            {/* Column 3: Disciplines */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-xs sm:text-sm font-semibold text-[#bc9f70] tracking-wider uppercase">
                Disciplines
              </h4>
              <nav className="flex flex-col gap-2.5 text-sm text-[#ece8df]/85" aria-label="Disciplines">
                <Link href="/services/web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
                <Link href="/services/ai-solutions" className="hover:text-white transition-colors">
                  Conversational AI
                </Link>
                <Link href="/services/ai-agents-automation" className="hover:text-white transition-colors">
                  AI Agents
                </Link>
                <Link href="/services/saas-product" className="hover:text-white transition-colors">
                  SaaS &amp; Product
                </Link>
              </nav>
            </div>

            {/* Column 4: Social */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-xs sm:text-sm font-semibold text-[#bc9f70] tracking-wider uppercase">
                Social
              </h4>
              <nav className="flex flex-col gap-2.5 text-sm text-[#ece8df]/85" aria-label="Social media">
                <a
                  href="https://www.linkedin.com/company/khawit-solutions-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/khawit_solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.threads.com/@khawit_solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Threads
                </a>
                <a
                  href="mailto:khawitsocialmedia@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: Copyright & Credits */}
        <div className="border-t border-white/15 mt-16 sm:mt-20 pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-[#ece8df]/70 relative z-10">
          <p>©{currentYear} KHAWIT All rights reserved.</p>
          <p>
            Designed &amp; Engineered by <span className="text-[#bc9f70] font-medium">KHAWIT</span> · Next-Gen Studio
          </p>
        </div>

        {/* BOTTOM ROW: Giant Golden "KHAWIT" Typographic Display */}
        <div className="w-full overflow-hidden flex justify-center items-end select-none pointer-events-none -mb-3 sm:-mb-6 md:-mb-10 pt-4 sm:pt-6 relative z-10">
          <span
            className="font-black tracking-tighter uppercase text-center leading-[0.78] sm:leading-[0.75] text-[18vw] xl:text-[230px] bg-gradient-to-r from-[#8a6e3d]/40 via-[#f0dcbe] to-[#8a6e3d]/40 bg-clip-text text-transparent"
            style={{
              maskImage: "linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0.25) 100%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0.25) 100%)",
            }}
          >
            KHAWIT
          </span>
        </div>
      </div>
    </footer>
  );
}
