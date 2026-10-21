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
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-7 px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-[#e5dfd4]/90 bg-[#f9f6f0]/92 backdrop-blur-xl shadow-[0_12px_32px_-6px_rgba(51,55,61,0.12),inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all duration-300 ${
          scrolled ? "bg-[#f0ece3]/95 border-[#d9d5cc] shadow-md scale-[0.98]" : ""
        }`}
      >
        {/* KHAWIT Logo on the LEFT (Icon only, no text) */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="KHAWIT Home"
          className="flex items-center shrink-0 pr-3 md:pr-4 border-r border-[#33373d]/15 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/khawit-logo-nbg.png"
            alt="KHAWIT technology studio logo"
            width={32}
            height={32}
            priority
            className="w-7 h-7 md:w-8 md:h-8 object-contain"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs text-[#33373d] font-medium" aria-label="Main navigation">
          <Link href="/" className="hover:text-[#937a4e] transition-colors">Home</Link>
          <Link href="/#why-khawit" className="hover:text-[#937a4e] transition-colors">Why KHAWIT</Link>
          <Link href="/#services" className="hover:text-[#937a4e] transition-colors">Services</Link>
          <Link href="/#work" className="hover:text-[#937a4e] transition-colors">Work</Link>
          <Link href="/#process" className="hover:text-[#937a4e] transition-colors">Process</Link>
          <Link href="/about" className="hover:text-[#937a4e] transition-colors">About</Link>
          <Link href="/#contact" className="hover:text-[#937a4e] transition-colors">Contact</Link>
        </nav>

        {/* Start a project CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full bg-[#33373d] !text-white hover:bg-[#bc9f70] hover:!text-[#1a1c1e] transition-all duration-200 shadow-sm"
            style={{ color: "#ffffff" }}
          >
            <span className="font-semibold text-white">Start a project</span>
            <FiArrowUpRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black/5 text-[#33373d] hover:bg-black/10 transition-colors ml-1"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX className="w-4 h-4" aria-hidden="true" /> : <FiMenu className="w-4 h-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav
        id="mobile-navigation"
        className={`pointer-events-auto fixed inset-0 z-40 flex flex-col justify-between p-8 bg-[#f9f6f0]/98 text-[#33373d] backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="flex justify-between items-center pb-6 border-b border-[#e5dfd4]">
          <div className="flex items-center gap-3">
            <Image
              src="/khawit-logo-nbg.png"
              alt="KHAWIT technology studio logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <span className="text-xs font-mono text-[#937a4e] uppercase tracking-wider font-semibold">Navigation</span>
          </div>
          <button
            onClick={closeMenu}
            className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#33373d]"
            aria-label="Close menu"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col gap-4 py-8">
          <Link href="/" onClick={closeMenu} className="text-2xl font-normal text-[#33373d] hover:text-[#937a4e] transition-colors flex justify-between">
            Home <span className="text-xs font-mono text-[#937a4e]">01</span>
          </Link>
          <Link href="/#why-khawit" onClick={closeMenu} className="text-2xl font-normal text-[#33373d] hover:text-[#937a4e] transition-colors flex justify-between">
            Why KHAWIT <span className="text-xs font-mono text-[#937a4e]">02</span>
          </Link>
          <Link href="/#services" onClick={closeMenu} className="text-2xl font-normal text-[#33373d] hover:text-[#937a4e] transition-colors flex justify-between">
            Services <span className="text-xs font-mono text-[#937a4e]">03</span>
          </Link>
          <Link href="/#work" onClick={closeMenu} className="text-2xl font-normal text-[#33373d] hover:text-[#937a4e] transition-colors flex justify-between">
            Work <span className="text-xs font-mono text-[#937a4e]">04</span>
          </Link>
          <Link href="/#process" onClick={closeMenu} className="text-2xl font-normal text-[#33373d] hover:text-[#937a4e] transition-colors flex justify-between">
            Process <span className="text-xs font-mono text-[#937a4e]">05</span>
          </Link>
          <Link href="/about" onClick={closeMenu} className="text-2xl font-normal text-[#33373d] hover:text-[#937a4e] transition-colors flex justify-between">
            About <span className="text-xs font-mono text-[#937a4e]">06</span>
          </Link>
          <Link href="/#contact" onClick={closeMenu} className="text-2xl font-normal text-[#33373d] hover:text-[#937a4e] transition-colors flex justify-between">
            Contact <span className="text-xs font-mono text-[#937a4e]">07</span>
          </Link>
        </div>
        <Link
          className="w-full py-4 rounded-full bg-[#33373d] !text-white hover:bg-[#bc9f70] hover:!text-[#1a1c1e] font-semibold text-center text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
          href="/start-project"
          onClick={closeMenu}
          style={{ color: "#ffffff" }}
        >
          <span className="font-semibold text-white">Start a project</span>
          <FiArrowUpRight className="w-4 h-4 text-white" />
        </Link>
      </nav>
    </header>
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
