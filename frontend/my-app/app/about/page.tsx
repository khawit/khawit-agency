import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AgencyExperience } from "@/components/agency-experience";
import { FoldText } from "@/components/fold-text";
import { IndustriesSection } from "@/components/IndustriesSection";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiUserCheck,
  FiCpu,
  FiTrendingUp,
  FiUsers,
  FiMail,
  FiCompass,
  FiEye,
  FiSend
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaThreads } from "react-icons/fa6";
import { servicesData } from "@/data/servicesData";

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

export const metadata: Metadata = {
  title: "About Us | KHAWIT Solutions — AI, Automation & Digital Product Agency",
  description:
    "Learn about KHAWIT Solutions: our story, purpose, mission, vision, and principles. We bring digital craftsmanship, applied AI, automation, and cloud infrastructure together under one coordinated team.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | KHAWIT Solutions",
    description:
      "We bring digital craftsmanship, applied AI, automation, and cloud infrastructure together under one coordinated team.",
    url: "/about",
    siteName: "KHAWIT Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: "/khawit-logo-nbg.png", width: 1200, height: 1200, alt: "KHAWIT Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | KHAWIT Solutions",
    description:
      "We bring digital craftsmanship, applied AI, automation, and cloud infrastructure together under one coordinated team.",
    images: ["/khawit-logo-nbg.png"],
  },
};

const clients = [
  { name: "Brandive Media", src: "/brandive-media.png", width: 500, height: 500 },
  { name: "Dankash", src: "/dankash.png", width: 499, height: 500 },
  { name: "Eaglines", src: "/eaglines.png", width: 200, height: 200 },
  { name: "Maahir", src: "/Maahir.png", width: 487, height: 512 },
  { name: "Matz", src: "/matz-logo.png", width: 200, height: 200 },
  { name: "S4S", src: "/s4s-logo.png", width: 1546, height: 325 },
  { name: "Safock", src: "/safock-logo.png", width: 500, height: 500 },
];

const principles = [
  {
    number: "01",
    title: "Built around the problem",
    desc: "We start by understanding the work, the people, and the friction worth removing. Technology is only worthwhile when it serves a genuine operational necessity.",
    icon: FiTarget,
  },
  {
    number: "02",
    title: "Designed for real users",
    desc: "Useful software should feel intuitive and clear to the people who rely on it every day. We prioritize accessible, high-contrast, distraction-free interfaces.",
    icon: FiUserCheck,
  },
  {
    number: "03",
    title: "AI where it actually helps",
    desc: "We bring intelligence into a workflow only when it makes the outcome meaningfully better. We never force AI gimmicks where deterministic software is superior.",
    icon: FiCpu,
  },
  {
    number: "04",
    title: "Foundations that can grow",
    desc: "Thoughtful architecture gives a product room to evolve beyond its first release. Clean code, type safety, and modular systems protect long-term agility.",
    icon: FiTrendingUp,
  },
  {
    number: "05",
    title: "Human + AI, together",
    desc: "Automation can take on repetitive coordination while people stay in control of important business decisions, ethical boundaries, and brand voice.",
    icon: FiUsers,
  },
  {
    number: "06",
    title: "From idea to production",
    desc: "One coordinated team shapes the concept, builds the application, hardens the cloud deployment, and scales the market reach—without handoff confusion.",
    icon: FiCheckCircle,
  },
];

export default function AboutPage() {
  return (
    <>
      <AgencyExperience />
      <main className="min-h-screen bg-[#f9f6f0] text-[#33373d]">
        {/* A. ABOUT HERO */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 section-shell bg-[#33373d] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#22252a] via-[#33373d] to-[#2c3036] opacity-95" />
          <div className="hero-grid opacity-10 absolute inset-0" aria-hidden="true" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="eyebrow text-[#bc9f70] mb-4">
              <span className="status-dot" />
              Independent Technology Studio
            </p>

            <FoldText
              as="h1"
              {...headingFold}
              text="Engineered for clarity, purpose, and lasting impact."
            >
              <span className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.08] block">
                Engineered for clarity, purpose, and <span className="font-cursive italic text-[#bc9f70] font-normal tracking-normal text-5xl sm:text-7xl md:text-8xl inline-block drop-shadow-[0_2px_24px_rgba(188,159,112,0.45)]">lasting impact.</span>
              </span>
            </FoldText>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4">
              <div className="md:col-span-8">
                <p className="text-base sm:text-lg text-[#ece8df] leading-relaxed">
                  KHAWIT Solutions is a multidisciplinary technology agency uniting digital product design, modern software engineering, applied AI, automation systems, and growth strategies under one roof. We help businesses build what comes next.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-wrap gap-4 md:justify-end">
                <Link
                  href="/start-project"
                  className="button button-dark rounded-full text-xs font-semibold px-8 py-3.5 bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c20] transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-md"
                >
                  Start a Project <FiArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* B. OUR STORY */}
        <section className="py-20 md:py-28 section-shell border-b border-[#d9d5cc]/60">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-3">
                  <span className="status-dot" />
                  Origin &amp; Philosophy
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text="Why KHAWIT was founded."
                >
                  <span className="text-3xl md:text-5xl font-medium tracking-tight mb-6 block text-[#33373d]">
                    Why KHAWIT was <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">founded.</span>
                  </span>
                </FoldText>
                <div className="p-6 rounded-2xl bg-[#f0ece3] border border-[#d9d5cc]">
                  <span className="text-xs font-mono text-[#937a4e] uppercase tracking-wider block mb-2">
                    ONE COORDINATED TEAM
                  </span>
                  <p className="text-xs text-[#565b61] leading-relaxed">
                    Instead of coordinating between a design agency, a separate dev shop, an AI contractor, and an ad firm, KHAWIT provides a cohesive team from start to finish.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-[#565b61] text-base leading-relaxed">
                <p>
                  Modern technology is accelerating faster than most organizations can absorb. When a business wants to build an intelligent digital product, they often find themselves managing disconnected providers: a design firm that doesn&apos;t understand backend architecture, an AI contractor who builds disconnected prototypes, and a marketing agency unfamiliar with the codebase.
                </p>
                <p>
                  KHAWIT was created to solve that fragmentation. We established a studio where frontend craftsmanship, systems architecture, applied artificial intelligence, cloud deployment, and performance marketing work in complete synchronization.
                </p>
                <p>
                  When you work with us, you don&apos;t talk to account managers or ticket queues. You collaborate directly with senior engineers, designers, and systems architects who take pride in the quality and longevity of what they build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* C, D, E. PURPOSE, MISSION & VISION */}
        <section className="py-20 md:py-28 section-shell bg-[#f0ece3]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow justify-center mb-3">
                <span className="status-dot" />
                Foundational Direction
              </p>
              <FoldText
                as="h2"
                {...headingFold}
                text="Purpose, Mission, and Vision."
              >
                <span className="text-3xl md:text-5xl font-medium tracking-tight block text-[#33373d]">
                  Purpose, Mission, and <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">Vision.</span>
                </span>
              </FoldText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Purpose */}
              <div className="p-8 rounded-[20px] bg-white border border-[#d9d5cc] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#33373d] text-[#bc9f70] flex items-center justify-center mb-6">
                    <FiCompass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#937a4e] uppercase block mb-2">
                    OUR PURPOSE
                  </span>
                  <h3 className="text-2xl font-semibold text-[#33373d] mb-4">
                    Solve Real Problems
                  </h3>
                  <p className="text-sm text-[#565b61] leading-relaxed">
                    To make practical digital and AI solutions genuinely useful to everyday business needs, replacing complexity with clarity and measurable leverage.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="p-8 rounded-[20px] bg-white border border-[#d9d5cc] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#33373d] text-[#bc9f70] flex items-center justify-center mb-6">
                    <FiSend className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#937a4e] uppercase block mb-2">
                    OUR MISSION
                  </span>
                  <h3 className="text-2xl font-semibold text-[#33373d] mb-4">
                    Disciplined Delivery
                  </h3>
                  <p className="text-sm text-[#565b61] leading-relaxed">
                    Our active commitment to thoughtful development, useful AI, effective automation, reliable cloud implementation, and marketing aligned with commercial goals.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-[20px] bg-white border border-[#d9d5cc] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#33373d] text-[#bc9f70] flex items-center justify-center mb-6">
                    <FiEye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#937a4e] uppercase block mb-2">
                    OUR VISION
                  </span>
                  <h3 className="text-2xl font-semibold text-[#33373d] mb-4">
                    Empowered Growth
                  </h3>
                  <p className="text-sm text-[#565b61] leading-relaxed">
                    To help forward-thinking organizations scale through intelligent digital systems—while keeping human insight and leadership firmly at the center of critical decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* F. OUR PRINCIPLES */}
        <section className="py-20 md:py-28 section-shell bg-[#33373d] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow text-[#bc9f70]">
                  <span className="status-dot" />
                  The KHAWIT Code
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text="Our Six Core Principles."
                >
                  <span className="text-3xl md:text-5xl font-medium tracking-tight block text-white">
                    Our Six Core <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">Principles.</span>
                  </span>
                </FoldText>
              </div>
              <p className="section-aside text-[#a8aeb5]">
                These principles guide every technical decision, architecture review, and client relationship we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {principles.map((pr) => {
                const Icon = pr.icon;
                return (
                  <article
                    key={pr.number}
                    className="p-8 rounded-[24px] bg-[#22252a] border border-white/10 hover:border-[#bc9f70]/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#bc9f70] bg-[#bc9f70]/10 px-3 py-1 rounded-full border border-[#bc9f70]/20">
                        {pr.number}
                      </span>
                      <Icon className="w-5 h-5 text-[#bc9f70]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {pr.title}
                    </h3>
                    <p className="text-sm text-[#a8aeb5] leading-relaxed">
                      {pr.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* G. EXISTING CLIENTS & PARTNERSHIPS */}
        <section className="py-20 md:py-28 section-shell border-b border-[#d9d5cc]/60">
          <div className="max-w-5xl mx-auto text-center">
            <p className="eyebrow justify-center mb-3">
              <span className="status-dot" />
              Trusted Partnerships
            </p>
            <FoldText
              as="h2"
              {...headingFold}
              text="Teams We Have Worked With."
            >
              <span className="text-3xl md:text-5xl font-medium tracking-tight mb-4 block text-[#33373d]">
                Teams We Have <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">Worked With.</span>
              </span>
            </FoldText>
            <p className="text-sm md:text-base text-[#565b61] max-w-xl mx-auto mb-12">
              We build enduring relationships based on technical reliability, transparent delivery, and measurable commercial value.
            </p>

            <div className="client-marquee" role="region" aria-label="Companies KHAWIT has worked with">
              <div className="client-track">
                {[0, 1].map((copyIndex) => (
                  <div className="client-group" key={copyIndex} aria-hidden={copyIndex === 1}>
                    {clients.map((client) => (
                      <div
                        className="client-logo bg-white border border-[#d9d5cc]/80 rounded-2xl shadow-xs hover:border-[#bc9f70]/60 hover:shadow-md transition-all duration-300"
                        key={client.name}
                      >
                        <Image
                          src={client.src}
                          alt={copyIndex === 0 ? `${client.name} logo` : ""}
                          width={client.width}
                          height={client.height}
                          sizes="112px"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE TARGET */}
        <IndustriesSection variant="light" />

        {/* H. FINAL ABOUT CTA */}
        <section className="py-24 section-shell bg-[#1a1c1e] text-white text-center relative overflow-hidden">
          <div className="hero-grid opacity-10 absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-mono tracking-widest text-[#bc9f70] uppercase bg-[#bc9f70]/10 px-3 py-1 rounded-full border border-[#bc9f70]/20 inline-block mb-4">
              COLLABORATION
            </span>
            <FoldText
              as="h2"
              {...headingFold}
              text="Let's build what comes next together."
            >
              <span className="text-3xl sm:text-5xl font-medium text-white mb-6 block">
                Let&apos;s build <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-6xl font-normal drop-shadow-sm">what comes next</span> together.
              </span>
            </FoldText>
            <p className="text-sm md:text-base text-[#a8aeb5] mb-8 leading-relaxed max-w-xl mx-auto">
              Whether you are exploring a new digital product, integrating applied AI, or modernizing your web presence, we are ready to discuss your goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/start-project"
                className="button button-dark rounded-full text-xs font-semibold px-8 py-4 bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c20] transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 shadow-md"
              >
                Start a Project <FiArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#services"
                className="text-xs font-semibold text-white hover:text-[#bc9f70] transition-colors uppercase tracking-wider px-6 py-4 inline-flex items-center gap-2"
              >
                Explore All Seven Services <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1a1c1e] text-[#ece8df] py-16 md:py-24 section-shell">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-4 inline-block">
                <Image
                  src="/khawit-logo-nbg.png"
                  alt="KHAWIT Solutions logo"
                  width={48}
                  height={48}
                  className="w-auto h-auto object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="flex flex-col font-bold tracking-widest text-sm text-[#f9f6f0]">
                  KHAWIT
                  <small className="text-[#ece8df]/60 font-medium tracking-[0.18em] text-[10px] mt-1">
                    SOLUTIONS
                  </small>
                </span>
              </Link>
              <p className="text-[#ece8df]/75 text-sm leading-relaxed max-w-sm mt-2">
                Digital products, intelligent systems, and AI-powered experiences built for what&apos;s next.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">
                  Our Seven Services
                </h3>
                {servicesData.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors"
                  >
                    {s.number}. {s.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">
                  Company
                </h3>
                <Link href="/" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  Home
                </Link>
                <Link href="/#why-khawit" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  Why KHAWIT
                </Link>
                <Link href="/#services" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  Services
                </Link>
                <Link href="/#work" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  Work &amp; Systems
                </Link>
                <Link href="/#process" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  Process
                </Link>
                <Link href="/about" className="text-sm text-[#bc9f70] font-medium transition-colors">
                  About Us
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">
                  Connect
                </h3>
                <a
                  href="https://www.linkedin.com/company/khawit-solutions-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"
                >
                  <FaLinkedinIn /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/khawit_solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"
                >
                  <FaInstagram /> Instagram
                </a>
                <a
                  href="https://www.threads.com/@khawit_solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"
                >
                  <FaThreads /> Threads
                </a>
                <a
                  href="mailto:khawitsocialmedia@gmail.com"
                  className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"
                >
                  <FiMail /> khawitsocialmedia@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-[#33373d] pt-12 mt-4 gap-6">
            <p className="text-2xl md:text-3xl font-medium text-[#f9f6f0]">
              Ready to build something meaningful? <br className="md:hidden" />
              <Link
                href="/start-project"
                className="text-[#bc9f70] hover:text-white transition-colors inline-flex items-center mt-2 md:mt-0 gap-2"
              >
                Let&apos;s build it. <FiArrowUpRight className="w-6 h-6" />
              </Link>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#ece8df]/65 pt-8 border-t border-[#33373d]/50">
            <span>© {new Date().getFullYear()} KHAWIT Solutions. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/start-project" className="hover:text-[#bc9f70] transition-colors">
                Start a Project
              </Link>
              <a href="#privacy" className="hover:text-[#bc9f70] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-[#bc9f70] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
