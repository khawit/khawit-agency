import Image from "next/image";
import Link from "next/link";
import { AgencyExperience } from "@/components/agency-experience";
import { ServicesScrollSection } from "@/components/services/ServicesScrollSection";
import { WhyKhawit } from "@/components/WhyKhawit";
import { FAQSection } from "@/components/FAQSection";
import { FoldText } from "@/components/fold-text";
import TextLoop from "@/components/text-loop";
import { GlobeSection } from "@/components/GlobeSection";
import { CapabilitiesMap } from "@/components/CapabilitiesMap";
import { ProductShowcase } from "@/components/ProductShowcase";
import { AiSystems } from "@/components/AiSystems";
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
    <>
      <AgencyExperience />
      <main>
        {/* SECTION A — HERO */}
        <section
          className="relative min-h-[100svh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-12 pt-28 pb-16 md:pt-32 md:pb-20 bg-[#f9f6f0]"
          id="home"
          aria-labelledby="hero-title"
        >
          {/* Subtle ambient lighting on papery white canvas */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#bc9f70]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-[#5f8580]/8 rounded-full blur-[110px] pointer-events-none -z-10" />

          {/* 2-Column Hero Layout */}
          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Column: Friendly AI Assistant Service Hub Image */}
              <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
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

              {/* Right Column: Text & Buttons */}
              <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
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
                  <a
                    href="#services"
                    className="px-8 py-4 rounded-full bg-white hover:bg-[#f0ece3] text-[#33373d] hover:text-[#1a1c20] border border-[#d9d5cc] hover:border-[#bc9f70] font-medium text-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2 hover:-translate-y-0.5"
                  >
                    <span>Explore our services</span>
                    <FiArrowRight className="w-4 h-4 text-[#937a4e]" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TextLoop Brand Ribbon */}
        <TextLoop
          text="KHAWIT Solutions "
          shape="wave"
          speed={120}
          direction="forward"
          separator="✦"
          curviness={58}
          fontSize={56}
          fontWeight={700}
          letterSpacing={6}
          uppercase
          color="#bc9f70"
          ribbon
          ribbonColor="#33373d"
          ribbonWidth={88}
          pauseOnHover={false}
        />

        {/* SECTION B — WHY KHAWIT? */}
        <WhyKhawit />


        {/* SECTION C — OUR SEVEN SERVICES (VERTICAL-TO-HORIZONTAL SCROLL) */}
        <ServicesScrollSection />

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

            {/* AI SYSTEMS — MORE THAN A CONVERSATION */}
            <AiSystems />

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

      {/* FOOTER */}
      <footer className="bg-[#1a1c1e] text-[#ece8df] py-16 md:py-24 section-shell">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <a href="#home" className="flex items-center gap-4 inline-block">
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
              </a>
              <p className="text-[#ece8df]/75 text-sm leading-relaxed max-w-sm mt-2">
                Digital products, intelligent systems, and AI-powered experiences built for what&apos;s next.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">
                  Our Seven Services
                </h3>
                <Link href="/services/web-development" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  01. Web Development
                </Link>
                <Link href="/services/ai-solutions" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  02. Conversational AI &amp; Knowledge Systems (RAG)
                </Link>
                <Link href="/services/ai-agents-automation" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  03. Autonomous AI Agents &amp; Automation
                </Link>
                <Link href="/services/saas-product" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  04. SaaS &amp; Product
                </Link>
                <Link href="/services/ai-powered-systems" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  05. Enterprise AI &amp; Business Operations
                </Link>
                <Link href="/services/deployment" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  06. Deployment
                </Link>
                <Link href="/services/digital-marketing" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  07. Digital Marketing
                </Link>
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
                  Services Overview
                </Link>
                <Link href="/#work" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  Work &amp; Systems
                </Link>
                <Link href="/#process" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  Process
                </Link>
                <Link href="/#faq" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
                  FAQ
                </Link>
                <Link href="/about" className="text-sm text-[#ece8df]/75 hover:text-[#bc9f70] transition-colors">
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
