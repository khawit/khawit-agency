"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Web development",
    tag: "DIGITAL EXPERIENCES",
    story: "Every journey starts with a clear front door. We shape the web experience around the people arriving and the action they need to take.",
    items: [
      "Business websites",
      "Custom web applications",
      "Landing pages",
      "Interactive websites",
      "3D & animated websites",
      "E-commerce websites"
    ]
  },
  {
    number: "02",
    title: "Conversational AI & knowledge systems (RAG)",
    tag: "KNOWLEDGE & CONVERSATIONAL AI",
    story: "When a digital experience needs to understand, answer, or assist, we ground LLMs in your proprietary knowledge and customer conversations.",
    items: [
      "AI integration",
      "AI chatbots",
      "AI assistants & copilots",
      "RAG / knowledge-based AI",
      "AI-powered web applications",
      "Voice AI"
    ]
  },
  {
    number: "03",
    title: "Autonomous AI agents & automation",
    tag: "AGENTIC WORKFLOWS",
    story: "Next, intelligence can become action. Agents and automated workflows connect the right tools to repeatable work, with people in control.",
    items: [
      "AI agents",
      "Autonomous agents",
      "Voice agents",
      "Multi-agent systems",
      "AI workflow automation",
      "Business process automation",
      "API & tool-integrated agents"
    ]
  },
  {
    number: "04",
    title: "SaaS & product development",
    tag: "IDEA TO PRODUCT",
    story: "When an idea deserves a product of its own, we turn it into a focused MVP, a scalable SaaS, or a platform built around how teams actually work.",
    items: [
      "SaaS applications",
      "AI-powered SaaS",
      "MVP development",
      "Custom software products",
      "Full-stack applications",
      "Internal business platforms",
      "AI-powered products"
    ]
  },
  {
    number: "05",
    title: "Enterprise AI & business operations",
    tag: "ENTERPRISE OPERATIONS",
    story: "Then the product connects to everyday operations: helping teams support customers, qualify leads, share knowledge, and move work forward.",
    items: [
      "Customer support systems",
      "Lead qualification systems",
      "AI sales assistants",
      "Knowledge management systems",
      "Internal AI tools",
      "Custom AI workflows"
    ]
  },
  {
    number: "06",
    title: "Deployment & integration",
    tag: "READY FOR THE REAL WORLD",
    story: "Finally, the pieces come together in production. We connect services, data, models, and cloud infrastructure so the system is ready for real use.",
    items: [
      "API integrations",
      "Third-party integrations",
      "Database integration",
      "Cloud deployment",
      "Production setup",
      "AI model integration"
    ]
  },
  {
    number: "07",
    title: "Digital marketing",
    tag: "GROWTH, ENGINEERED",
    story: "Digital strategies that turn attention into meaningful engagement, helping brands build visibility, connect with the right audience, and grow.",
    items: [
      "Social media marketing",
      "Social media management",
      "Paid media",
      "Meta ads",
      "Google ads",
      "AI content creation"
    ]
  }
];

export function AgencyExperience() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", updateScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", menuOpen);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* 1. Mobile & Tablet Top Bar (Fixed, Non-Floating, Left Logo, Right Hamburger) */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 bg-[#f9f6f0]/95 backdrop-blur-md border-b border-[#e5dfd4]/80 lg:hidden shadow-xs transition-colors">
        {/* KHAWIT Logo on the LEFT (Slim & Minimal) */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="KHAWIT Home"
          className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/khawit-logo-nbg.png"
            alt="KHAWIT technology studio logo"
            width={28}
            height={28}
            priority
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Hamburger Menu on the RIGHT */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="w-10 h-10 -mr-2 rounded-full flex items-center justify-center text-[#1a1c1e] hover:bg-black/5 active:scale-95 transition-all focus:outline-hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-sidebar"
        >
          <FiMenu className="w-5 h-5 text-[#1a1c1e]" aria-hidden="true" />
        </button>
      </header>

      {/* 2. Desktop Floating Pill Navbar (Centered, lg+ only) */}
      <header className="fixed top-6 left-0 right-0 z-50 justify-center px-4 pointer-events-none hidden lg:flex">
        <div
          className={`pointer-events-auto flex items-center justify-between gap-7 px-6 py-2.5 rounded-full border border-[#e5dfd4]/90 bg-[#f9f6f0]/92 backdrop-blur-xl shadow-[0_12px_32px_-6px_rgba(51,55,61,0.12),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all duration-300 ${
            scrolled ? "bg-[#f0ece3]/95 border-[#d9d5cc] shadow-md scale-[0.98]" : ""
          }`}
        >
          {/* Logo on the left */}
          <Link
            href="/"
            aria-label="KHAWIT Home"
            className="flex items-center shrink-0 pr-4 border-r border-[#33373d]/15 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/khawit-logo-nbg.png"
              alt="KHAWIT technology studio logo"
              width={26}
              height={26}
              priority
              className="w-7 h-7 object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-6 text-xs text-[#33373d] font-medium" aria-label="Main navigation">
            <Link href="/" className="hover:text-[#937a4e] transition-colors">Home</Link>
            <Link href="/#why-khawit" className="hover:text-[#937a4e] transition-colors">Why KHAWIT</Link>
            <Link href="/services" className="hover:text-[#937a4e] transition-colors">Services</Link>
            <Link href="/#work" className="hover:text-[#937a4e] transition-colors">Work</Link>
            <Link href="/#process" className="hover:text-[#937a4e] transition-colors">Process</Link>
            <Link href="/about" className="hover:text-[#937a4e] transition-colors">About</Link>
            <Link href="/#contact" className="hover:text-[#937a4e] transition-colors">Contact</Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="/start-project"
            aria-label="Start a project"
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#33373d] text-white hover:bg-[#bc9f70] hover:text-[#1a1c1e] transition-all duration-200 shadow-sm shrink-0 group"
          >
            <span className="text-xs font-semibold text-white mr-1.5 group-hover:text-[#1a1c1e] transition-colors">Start a project</span>
            <FiArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-[#1a1c1e] transition-colors" aria-hidden="true" />
          </Link>
        </div>
      </header>

      {/* 3. Mobile & Tablet Contrasting Sidebar (Slides from the RIGHT) */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/65 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Sidebar Panel in High-Contrast Luxury Obsidian Palette */}
      <aside
        id="mobile-sidebar"
        className={`fixed top-0 bottom-0 right-0 z-50 w-[84vw] max-w-sm sm:max-w-md bg-[#121417] text-[#f9f6f0] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-l border-white/10 transition-transform duration-300 ease-out flex flex-col justify-between p-6 sm:p-8 overflow-y-auto lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        {/* Top Header of Sidebar: Brand indicator & Close Button */}
        <div>
          <div className="flex justify-between items-center pb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#bc9f70] animate-pulse" />
              <span className="text-xs font-mono text-[#bc9f70] uppercase tracking-widest font-semibold">
                KHAWIT · STUDIO
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#f9f6f0] flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Numbers */}
          <nav className="flex flex-col gap-1 py-6" aria-label="Sidebar navigation links">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-xl sm:text-2xl font-light text-[#f9f6f0] hover:text-[#bc9f70] transition-colors flex justify-between items-center py-2.5 border-b border-white/5 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Home</span>
              <span className="text-xs font-mono text-[#bc9f70]/80 group-hover:text-[#bc9f70]">01</span>
            </Link>
            <Link
              href="/#why-khawit"
              onClick={closeMenu}
              className="text-xl sm:text-2xl font-light text-[#f9f6f0] hover:text-[#bc9f70] transition-colors flex justify-between items-center py-2.5 border-b border-white/5 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Why KHAWIT</span>
              <span className="text-xs font-mono text-[#bc9f70]/80 group-hover:text-[#bc9f70]">02</span>
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="text-xl sm:text-2xl font-light text-[#f9f6f0] hover:text-[#bc9f70] transition-colors flex justify-between items-center py-2.5 border-b border-white/5 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Services</span>
              <span className="text-xs font-mono text-[#bc9f70]/80 group-hover:text-[#bc9f70]">03</span>
            </Link>
            <Link
              href="/#work"
              onClick={closeMenu}
              className="text-xl sm:text-2xl font-light text-[#f9f6f0] hover:text-[#bc9f70] transition-colors flex justify-between items-center py-2.5 border-b border-white/5 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Work</span>
              <span className="text-xs font-mono text-[#bc9f70]/80 group-hover:text-[#bc9f70]">04</span>
            </Link>
            <Link
              href="/#process"
              onClick={closeMenu}
              className="text-xl sm:text-2xl font-light text-[#f9f6f0] hover:text-[#bc9f70] transition-colors flex justify-between items-center py-2.5 border-b border-white/5 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Process</span>
              <span className="text-xs font-mono text-[#bc9f70]/80 group-hover:text-[#bc9f70]">05</span>
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-xl sm:text-2xl font-light text-[#f9f6f0] hover:text-[#bc9f70] transition-colors flex justify-between items-center py-2.5 border-b border-white/5 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">About</span>
              <span className="text-xs font-mono text-[#bc9f70]/80 group-hover:text-[#bc9f70]">06</span>
            </Link>
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="text-xl sm:text-2xl font-light text-[#f9f6f0] hover:text-[#bc9f70] transition-colors flex justify-between items-center py-2.5 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Contact</span>
              <span className="text-xs font-mono text-[#bc9f70]/80 group-hover:text-[#bc9f70]">07</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Section: High-Contrast CTA Button & Studio Info */}
        <div className="pt-5 border-t border-white/10 flex flex-col gap-3">
          <Link
            className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#bc9f70] text-[#121417] hover:bg-[#cbb387] font-semibold text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(188,159,112,0.3)] transition-all duration-200 active:scale-[0.98]"
            href="/start-project"
            onClick={closeMenu}
          >
            <span>Start a project</span>
            <FiArrowUpRight className="w-4 h-4 text-[#121417]" />
          </Link>
          <p className="text-[11px] font-mono text-white/40 tracking-wider uppercase text-center pt-1">
            Technology · AI · Digital Products
          </p>
        </div>
      </aside>
    </>
  );
}

export function ServicesJourney() {
  const [activeService, setActiveService] = useState("01");

  return (
    <div className="service-journey">
      <div className="service-journey-route" aria-hidden="true">
        <span>FIRST IDEA</span>
        <i />
        <span>INTO THE REAL WORLD</span>
      </div>
      <div className="service-journey-grid">
        {services.map((service) => {
          const isActive = activeService === service.number;
          return (
            <article
              className={`service-chapter reveal${isActive ? " is-active" : ""}`}
              key={service.number}
            >
              <h3>
                <button
                  className="service-chapter-trigger"
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveService(service.number)}
                >
                  <span className="service-chapter-number">{service.number}</span>
                  <span className="service-chapter-heading">{service.title}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              </h3>
              <p className="service-chapter-tag">{service.tag}</p>
              <p className="service-chapter-story">{service.story}</p>
              <ul className="service-chapter-items">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
