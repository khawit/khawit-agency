import Image from "next/image";
import Link from "next/link";
import { WhyKhawit } from "@/components/WhyKhawit";
import { FAQSection } from "@/components/FAQSection";
import { FoldText } from "@/components/fold-text";
import { GlobeSection } from "@/components/GlobeSection";
import { CapabilitiesMap } from "@/components/CapabilitiesMap";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TeamCollaboration } from "@/components/TeamCollaboration";
import { HowWeWork } from "@/components/HowWeWork";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiMail,
  FiCheckCircle,
  FiTarget,
  FiUserCheck,
  FiCpu,
  FiTrendingUp,
  FiUsers
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaThreads } from "react-icons/fa6";
import type { IconType } from "react-icons";

const clients = [
  { name: "Brandive Media", src: "/brandive-media.png", width: 500, height: 500 },
  { name: "Dankash", src: "/dankash.png", width: 499, height: 500 },
  { name: "Eaglines", src: "/eaglines.png", width: 200, height: 200 },
  { name: "Maahir", src: "/Maahir.png", width: 487, height: 512 },
  { name: "Matz", src: "/matz-logo.png", width: 200, height: 200 },
  { name: "S4S", src: "/s4s-logo.png", width: 1546, height: 325 },
  { name: "Safock", src: "/safock-logo.png", width: 500, height: 500 },
];

interface PrincipleItem {
  number: string;
  title: string;
  copy: string;
  icon: IconType;
}

const principles: PrincipleItem[] = [
  { number: "01", title: "Built around the problem", copy: "We start by understanding the work, the people, and the friction worth removing.", icon: FiTarget },
  { number: "02", title: "Designed for real users", copy: "Useful software should feel clear to the people who rely on it every day.", icon: FiUserCheck },
  { number: "03", title: "AI where it actually helps", copy: "We bring intelligence into a workflow when it makes the outcome meaningfully better.", icon: FiCpu },
  { number: "04", title: "Foundations that can grow", copy: "Thoughtful architecture gives a product room to evolve beyond its first release.", icon: FiTrendingUp },
  { number: "05", title: "Human + AI, together", copy: "Automation can take on repetitive work while people stay in control of important decisions.", icon: FiUsers },
  { number: "06", title: "From idea to production", copy: "One team can help shape the concept, build the system, and bring it into the real world.", icon: FiCheckCircle },
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

export default function Home() {
  return (
    <main>
        {/* SECTION A — HERO */}
        <section
          className="relative min-h-[100svh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-12 pt-24 pb-8 md:pt-28 md:pb-10 bg-[#f9f6f0]"
          id="home"
          aria-labelledby="hero-title"
        >
          {/* Subtle ambient lighting on papery white canvas */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#bc9f70]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-[#5f8580]/8 rounded-full blur-[110px] pointer-events-none -z-10" />

          {/* 2-Column Hero Layout */}
          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Column: Text & Buttons */}
              <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f0ece3] border border-[#e5dfd4] text-[#33373d] text-xs font-mono tracking-widest uppercase mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#5f8580] animate-pulse" />
                  <span>Next-Generation Technology Studio</span>
                </div>

                {/* Main Headline: Charcoal Ink + Bronze Cursive Italic */}
                <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-medium tracking-tight text-[#33373d] leading-[1.12] mb-6">
                  <span>We Build Digital Experiences, AI Systems &amp; Products That </span>
                  <span className="font-cursive italic text-[#937a4e] font-normal tracking-normal text-5xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px] pr-2 inline-block">
                    Move Business Forward
                  </span>
                </h1>

                {/* Focused Description */}
                <p className="max-w-xl text-[#565b61] text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 font-normal">
                  From high-conversion digital experiences and custom web applications to applied artificial intelligence, autonomous agent workflows, and cloud systems, we turn complex technology into enduring commercial momentum.
                </p>

                {/* Action Buttons: Start Project & Explore Our Services */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Link
                    href="/start-project"
                    className="px-8 py-4 rounded-full bg-[#33373d] hover:bg-[#bc9f70] text-white hover:text-[#1a1c20] font-semibold text-sm transition-all duration-300 shadow-[0_10px_24px_-4px_rgba(51,55,61,0.25)] hover:shadow-[0_14px_28px_-4px_rgba(188,159,112,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                  >
                    <span className="text-white group-hover:text-[#1a1c20] transition-colors">Start a project</span>
                    <FiArrowUpRight className="w-4 h-4 text-white group-hover:text-[#1a1c20] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 rounded-full bg-white hover:bg-[#f0ece3] text-[#33373d] hover:text-[#1a1c20] border border-[#d9d5cc] hover:border-[#bc9f70] font-medium text-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2 hover:-translate-y-0.5"
                  >
                    <span>Explore our services</span>
                    <FiArrowRight className="w-4 h-4 text-[#937a4e]" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Friendly AI Assistant Robot (Visible on desktop, hidden on mobile/stacked view) */}
              <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center">
                <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-[2/3] flex items-center justify-center">
                  <Image
                    src="/friendly-ai-assistant.png"
                    alt="3D AI assistant robot in KHAWIT's charcoal and bronze brand colors representing intelligent systems"
                    fill
                    priority
                    className="object-contain object-center drop-shadow-[0_24px_48px_rgba(51,55,61,0.16)] transition-transform duration-700 hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION B — WHY KHAWIT? */}
        <WhyKhawit />

        {/* SHOWCASE ZONE: CAPABILITIES, WORK, AI, TEAM, PROCESS */}
        <div className="relative bg-[#565B61] overflow-hidden">
          {/* Subtle top & bottom edge blend into the dark layout */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#121418] to-transparent pointer-events-none z-10 opacity-70" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#121418] to-transparent pointer-events-none z-10 opacity-70" />

          <div className="relative z-10">
            {/* SECTION D — CAPABILITIES MAP */}
            <CapabilitiesMap />

            {/* PRODUCT SHOWCASE — WHAT WE BUILD & AUTOMATE */}
            <ProductShowcase />

            {/* TEAM COLLABORATION — A TEAM THAT BUILDS WITH YOU */}
            <TeamCollaboration />

            {/* SECTION E — HOW WE WORK */}
            <HowWeWork />
          </div>
        </div>

        {/* SECTION F — EXISTING CLIENTS & PARTNERS */}
        <section className="clients-section section-shell reveal" aria-labelledby="clients-title" id="clients">
          <div className="max-w-7xl mx-auto w-full">
            <div className="section-heading mb-12">
              <div>
                <p className="eyebrow">
                  <span className="status-dot" />
                  In good company
                </p>
                <FoldText as="h2" {...headingFold} id="clients-title" text="Trusted by teams across industries.">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
                    Trusted by teams <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">across industries.</span>
                  </span>
                </FoldText>
              </div>
              <p className="section-aside text-[#a8aeb5]">
                Collaborating with innovative startups, established brands, and ambitious engineering teams worldwide.
              </p>
            </div>
            <div className="client-marquee" role="region" aria-label="Companies KHAWIT has worked with">
              <div className="client-track">
                {[0, 1].map((copyIndex) => (
                  <div className="client-group" key={copyIndex} aria-hidden={copyIndex === 1}>
                    {clients.map((client) => (
                      <div className="client-logo" key={client.name}>
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

        {/* SECTION G — OUR PRINCIPLES */}
        <section className="principles-section section-shell" id="principles">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 principles-intro reveal">
              <p className="eyebrow">
                <span className="status-dot" /> The KHAWIT point of view
              </p>
              <FoldText as="h2" {...headingFold} text="Technology should solve a real problem.">
                <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
                  Technology should <br />
                  solve a <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">real problem.</span>
                </span>
              </FoldText>
              <p>
                Useful by design. Considered in every technical detail. Built to provide enduring value to the businesses and people who depend on it.
              </p>
            </div>
            <div className="lg:col-span-7 principles-list reveal">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article className="principle" key={principle.number}>
                    <span>{principle.number}</span>
                    <div>
                      <FoldText as="h3" {...headingFold} text={principle.title}>{principle.title}</FoldText>
                      <p>{principle.copy}</p>
                    </div>
                    <Icon aria-hidden="true" style={{ width: "15px", height: "15px" }} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION H — FAQ ACCORDION */}
        <FAQSection />

        {/* GLOBAL REACH */}
        <GlobeSection />
      </main>
  );
}
