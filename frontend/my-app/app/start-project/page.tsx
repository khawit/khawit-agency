import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StartProjectForm } from "@/components/StartProjectForm";
import { FiShield, FiClock } from "react-icons/fi";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.khawitsolutions.com";

export const metadata: Metadata = {
  title: "Start a Project | KHAWIT Solutions",
  description:
    "Tell us about your project. KHAWIT Solutions designs and builds modern web applications, intelligent AI systems, autonomous agents, and digital products tailored to your operations.",
  alternates: {
    canonical: "/start-project",
  },
  openGraph: {
    title: "Start a Project | KHAWIT Solutions",
    description:
      "Tell us about your project. KHAWIT Solutions designs and builds modern web applications, intelligent AI systems, autonomous agents, and digital products.",
    url: "/start-project",
    siteName: "KHAWIT Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: "/khawit-logo-nbg.png", width: 1200, height: 1200, alt: "KHAWIT Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Project | KHAWIT Solutions",
    description:
      "Tell us about your project. KHAWIT Solutions designs and builds modern web applications, intelligent AI systems, autonomous agents, and digital products.",
    images: ["/khawit-logo-nbg.png"],
  },
};

export default function StartProjectPage() {
  return (
    <main className="min-h-screen bg-[#f9f6f0] text-[#33373d] pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        {/* Subtle background ambient warmth */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#bc9f70]/8 via-[#f0ece3]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT COLUMN: Visual & Brand Hook */}
            <div className="flex flex-col gap-6 sm:gap-7">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33373d]/5 border border-[#33373d]/10 text-xs font-mono uppercase tracking-widest text-[#937a4e] mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
                  <span>Project Consultation</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#33373d] leading-[1.15] mb-4">
                  Let&apos;s build{" "}
                  <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-xs">
                    what comes next.
                  </span>
                </h1>

                <p className="text-sm md:text-base text-[#565b61] leading-relaxed">
                  Have an ambitious idea, need to automate mission-critical workflows, or ready to modernize your digital infrastructure? Share your objectives and our engineering team will provide a concrete evaluation and roadmap.
                </p>
              </div>

              {/* Visual Showcase Card without dark border */}
              <div className="relative aspect-[4/3] w-full rounded-[28px] overflow-hidden bg-white shadow-[0_15px_35px_-10px_rgba(51,55,61,0.07)] p-3 sm:p-5 group">
                <div className="relative w-full h-full">
                  <Image
                    src="/start-project-illustration.png"
                    alt="Interactive technical discovery and project scope planning interface illustration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#e5dfd4] shadow-xs">
                  <FiShield className="w-5 h-5 text-[#bc9f70] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#33373d] uppercase tracking-wide">
                      Confidential &amp; Secure
                    </h4>
                    <p className="text-xs text-[#565b61] mt-0.5">
                      Your IP and project concepts remain strictly protected.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#e5dfd4] shadow-xs">
                  <FiClock className="w-5 h-5 text-[#bc9f70] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#33373d] uppercase tracking-wide">
                      Rapid Response
                    </h4>
                    <p className="text-xs text-[#565b61] mt-0.5">
                      Direct engineering reply within 24 to 48 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Dedicated Project Form */}
            <div>
              <div className="relative bg-[#1c1f24] rounded-[28px] border border-[#3d424b] p-6 sm:p-8 md:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden">
                {/* Specular highlight top line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#bc9f70]/70 to-transparent pointer-events-none" />

                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 shrink-0 bg-[#262a31] rounded-xl p-1.5 border border-white/10 flex items-center justify-center">
                      <Image
                        src="/khawit-logo-nbg.png"
                        alt="KHAWIT Solutions logo"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold tracking-wider uppercase text-[#f9f6f0]">
                        Project Scope &amp; Discovery
                      </h2>
                      <p className="text-xs text-[#ece8df]/70">
                        Tell us what you&apos;re building &bull; Direct engineering reply
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#262a31] border border-white/10 text-[11px] font-mono text-[#bc9f70]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5f8580] animate-pulse" />
                    <span>Active Intake</span>
                  </div>
                </div>

                <Suspense
                  fallback={
                    <div className="flex items-center justify-center py-20 text-sm text-[#ece8df]/70">
                      Loading project discovery form...
                    </div>
                  }
                >
                  <StartProjectForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
