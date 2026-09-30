"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const services = [
  { number: "01", title: "Web development", tag: "DIGITAL EXPERIENCES", story: "Every journey starts with a clear front door. We shape the web experience around the people arriving and the action they need to take.", items: ["Business websites", "Custom web applications", "Landing pages", "Interactive websites", "3D & animated websites", "E-commerce websites"] },
  { number: "02", title: "AI solutions", tag: "INTELLIGENCE, APPLIED", story: "When a digital experience needs to understand, answer, or assist, we connect AI to the knowledge and conversations that make it useful.", items: ["AI integration", "AI chatbots", "AI assistants & copilots", "RAG / knowledge-based AI", "AI-powered web applications", "Voice AI"] },
  { number: "03", title: "AI agents & automation", tag: "FROM ANSWERS TO ACTION", story: "Next, intelligence can become action. Agents and automated workflows connect the right tools to repeatable work, with people in control.", items: ["AI agents", "Autonomous agents", "Voice agents", "Multi-agent systems", "AI workflow automation", "Business process automation", "API & tool-integrated agents"] },
  { number: "04", title: "SaaS & product development", tag: "IDEA TO PRODUCT", story: "When an idea deserves a product of its own, we turn it into a focused MVP, a scalable SaaS, or a platform built around how teams actually work.", items: ["SaaS applications", "AI-powered SaaS", "MVP development", "Custom software products", "Full-stack applications", "Internal business platforms", "AI-powered products"] },
  { number: "05", title: "AI-powered business systems", tag: "BETTER BUSINESS FLOWS", story: "Then the product connects to everyday operations: helping teams support customers, qualify leads, share knowledge, and move work forward.", items: ["Customer support systems", "Lead qualification systems", "AI sales assistants", "Knowledge management systems", "Internal AI tools", "Custom AI workflows"] },
  { number: "06", title: "Deployment & integration", tag: "READY FOR THE REAL WORLD", story: "Finally, the pieces come together in production. We connect services, data, models, and cloud infrastructure so the system is ready for real use.", items: ["API integrations", "Third-party integrations", "Database integration", "Cloud deployment", "Production setup", "AI model integration"] },
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

export function ServicesJourney() {
  const [activeService, setActiveService] = useState("01");

  return (
    <div className="service-journey">
      <div className="service-journey-route" aria-hidden="true"><span>FIRST IDEA</span><i /><span>INTO THE REAL WORLD</span></div>
      <div className="service-journey-grid">
        {services.map((service) => {
          const isActive = activeService === service.number;
          return (
            <article className={`service-chapter reveal${isActive ? " is-active" : ""}`} key={service.number}>
              <h3>
                <button className="service-chapter-trigger" type="button" aria-pressed={isActive} onClick={() => setActiveService(service.number)}>
                  <span className="service-chapter-number">{service.number}</span>
                  <span className="service-chapter-heading">{service.title}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              </h3>
              <p className="service-chapter-tag">{service.tag}</p>
              <p className="service-chapter-story">{service.story}</p>
              <ul className="service-chapter-items">{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}