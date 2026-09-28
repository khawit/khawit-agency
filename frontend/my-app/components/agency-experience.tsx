"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const services = [
  { number: "01", title: "Web development", tag: "DIGITAL EXPERIENCES", items: ["Business websites", "Custom web applications", "Landing pages", "Interactive websites", "3D & animated websites", "E-commerce websites"] },
  { number: "02", title: "AI solutions", tag: "INTELLIGENCE, APPLIED", items: ["AI integration", "AI chatbots", "AI assistants & copilots", "RAG / knowledge-based AI", "AI-powered web applications", "Voice AI"] },
  { number: "03", title: "AI agents & automation", tag: "WORK THAT WORKS FOR YOU", items: ["AI agents", "Autonomous agents", "Voice agents", "Multi-agent systems", "AI workflow automation", "Business process automation", "API & tool-integrated agents"] },
  { number: "04", title: "SaaS & product development", tag: "IDEA TO PRODUCT", items: ["SaaS applications", "AI-powered SaaS", "MVP development", "Custom software products", "Full-stack applications", "Internal business platforms", "AI-powered products"] },
  { number: "05", title: "AI-powered business systems", tag: "BETTER BUSINESS FLOWS", items: ["Customer support systems", "Lead qualification systems", "AI sales assistants", "Knowledge management systems", "Internal AI tools", "Custom AI workflows"] },
  { number: "06", title: "Deployment & integration", tag: "READY FOR THE REAL WORLD", items: ["API integrations", "Third-party integrations", "Database integration", "Cloud deployment", "Production setup", "AI model integration"] },
];

export function AgencyExperience() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });
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
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-is-open" : ""}`}>
      <a className="brand-lockup" href="#home" onClick={closeMenu} aria-label="KHAWIT Solutions home">
        <Image className="brand-logo" src="/khawit-logo.jpeg" alt="" width={36} height={36} priority />
        <span className="brand-name">KHAWIT<small>SOLUTIONS</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#home">Home</a><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">Start a project <FiArrowUpRight aria-hidden="true" /></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mobile-nav-links"><a href="#home" onClick={closeMenu}>Home <span>01</span></a><a href="#services" onClick={closeMenu}>Services <span>02</span></a><a href="#work" onClick={closeMenu}>Work <span>03</span></a><a href="#about" onClick={closeMenu}>About <span>04</span></a><a href="#contact" onClick={closeMenu}>Contact <span>05</span></a></div>
        <a className="mobile-contact" href="mailto:khawitsocialmedia@gmail.com" onClick={closeMenu}>Let&apos;s make something matter <FiArrowUpRight /></a>
      </nav>
    </header>
  );
}

export function ServicesAccordion() {
  const [activeService, setActiveService] = useState<string | null>("01");

  return (
    <div className="service-list reveal">
      {services.map((service) => {
        const isOpen = activeService === service.number;
        const panelId = `service-panel-${service.number}`;
        return (
          <article className={`service-item${isOpen ? " is-open" : ""}`} key={service.number}>
            <button className="service-trigger" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setActiveService(isOpen ? null : service.number)}>
              <span className="service-number">{service.number}</span><span className="service-title">{service.title}</span><span className="service-tag">{service.tag}</span><FiChevronDown className="service-chevron" aria-hidden="true" />
            </button>
            <div className="service-panel" id={panelId} aria-hidden={!isOpen}>
              <div className="service-panel-inner"><p>Thoughtful technology, tailored to the way your business works.</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </article>
        );
      })}
    </div>
  );
}