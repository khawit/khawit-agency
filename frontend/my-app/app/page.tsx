import Image from "next/image";
import { AgencyExperience, ServicesAccordion } from "@/components/agency-experience";
import { FiArrowDownRight, FiArrowUpRight, FiMail, FiMove } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaThreads } from "react-icons/fa6";

const clients = [
  { name: "Brandive Media", src: "/brandive-media.png" },
  { name: "Dankash", src: "/dankash.png" },
  { name: "Eaglines", src: "/eaglines.png" },
  { name: "Maahir", src: "/Maahir.png" },
  { name: "Matz", src: "/matz-logo.png" },
  { name: "S4S", src: "/s4s-logo.png" },
  { name: "Safock", src: "/safock-logo.png" },
];

const principles = [
  ["01", "Built around the problem", "We start by understanding the work, the people, and the friction worth removing."],
  ["02", "Designed for real users", "Useful software should feel clear to the people who rely on it every day."],
  ["03", "AI where it actually helps", "We bring intelligence into a workflow when it makes the outcome meaningfully better."],
  ["04", "Foundations that can grow", "Thoughtful architecture gives a product room to evolve beyond its first release."],
  ["05", "Human + AI, together", "Automation can take on repetitive work while people stay in control of important decisions."],
  ["06", "From idea to production", "One team can help shape the concept, build the system, and bring it into the real world."],
];

export default function Home() {
  return (
    <>
      <AgencyExperience />
      <main>
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Independent technology studio <span className="eyebrow-year">EST. 2023</span></p>
            <h1 id="hero-title">We build<br />what comes <span className="hero-emphasis">next<span className="hero-period">.</span></span></h1>
            <div className="hero-bottom">
              <p className="hero-description">Digital products, intelligent systems, and AI-powered experiences for a world that doesn&apos;t stand still.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#contact">Start a project <FiArrowUpRight aria-hidden="true" /></a>
                <a className="text-link" href="#work">Explore our work <FiArrowDownRight aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract visualization of connected software systems">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="hero-cross cross-one" />
            <div className="hero-cross cross-two" />
            <div className="hero-core"><span>K</span><i /></div>
            <div className="hero-tag tag-top"><span className="tag-index">01</span><span>Intelligence<br />with intent</span><FiMove aria-hidden="true" /></div>
            <div className="hero-tag tag-bottom"><span className="tag-live" /><span>Systems in motion</span><span className="tag-coordinates">24° 51&apos; N<br />67° 00&apos; E</span></div>
            <span className="art-caption">A better way forward, engineered.</span>
          </div>
          <a href="#about" className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></a>
          <div className="hero-index">01 <span>/</span> 06</div>
        </section>

        <section className="intro-band section-shell reveal" id="about">
          <p className="eyebrow">A studio for what&apos;s next</p>
          <div className="intro-layout">
            <h2>Not just a digital presence.<br /><span>A better way to work.</span></h2>
            <p>KHAWIT brings product thinking, engineering, and applied AI together to solve real business problems. From the first sketch to a system in production, we build technology that earns its place.</p>
          </div>
          <div className="intro-foot"><span>STRATEGY <i /> DESIGN <i /> ENGINEERING</span><span>BUILT WITH PEOPLE, FOR PEOPLE</span></div>
        </section>

        <section className="services-section section-shell" id="services">
          <div className="section-heading reveal"><div><p className="eyebrow">What we do</p><h2>Complex ideas.<br /><span>Clear outcomes.</span></h2></div><p className="section-aside">A flexible team for the moments when off-the-shelf isn&apos;t enough.</p></div>
          <ServicesAccordion />
        </section>

        <section className="build-section section-shell" id="approach">
          <div className="build-intro reveal"><p className="eyebrow">From possibility to product</p><h2>One connected<br />digital <span>world.</span></h2><p>We work across the full product landscape, connecting thoughtful experiences to the systems that make them useful.</p></div>
          <div className="build-map reveal" aria-label="Our work connects websites, AI systems, agents, automation, products, and business systems">
            <div className="map-rail"><span className="map-rail-line" /></div>
            <div className="map-nodes">
              {[["01", "Digital experiences", "Websites · Applications"], ["02", "Intelligent systems", "AI · Knowledge"], ["03", "Agents & automation", "Tools · Workflows"], ["04", "Products that scale", "SaaS · Platforms"], ["05", "Business systems", "Integrations · Operations"]].map(([number, title, detail]) => <div className="map-node" key={number}><span className="map-number">{number}</span><div><h3>{title}</h3><p>{detail}</p></div><FiArrowUpRight aria-hidden="true" /></div>)}
            </div>
            <span className="map-note">ONE TEAM. END TO END.</span>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading reveal"><div><p className="eyebrow">What we build</p><h2>Made to move<br /><span>business forward.</span></h2></div><p className="section-aside">Digital foundations and intelligent workflows, shaped around the people who use them.</p></div>
          <div className="work-grid reveal">
            <article className="work-feature work-interface"><div className="work-meta"><span>01 / DIGITAL PRODUCTS</span><FiArrowUpRight aria-hidden="true" /></div><div className="product-window"><div className="window-bar"><span /><span /><span /><i>KH / STUDIO</i><b>MENU +</b></div><div className="window-layout"><div className="window-sidebar"><span /><span /><span /><span /></div><div className="window-content"><div className="window-label">A NEW KIND OF WORKSPACE</div><strong>Make room<br />for <em>good work.</em></strong><div className="window-button">Explore the platform <FiArrowUpRight /></div><div className="window-shape shape-a" /><div className="window-shape shape-b" /></div></div></div><div className="work-caption"><h3>Experiences people want to use.</h3><p>Websites, applications, and product interfaces built with intention.</p></div></article>
            <article className="work-feature work-automation"><div className="work-meta"><span>02 / INTELLIGENT WORKFLOWS</span><FiArrowUpRight aria-hidden="true" /></div><div className="flow-visual"><div className="flow-glow" /><div className="flow-node flow-trigger"><span>01</span><strong>New enquiry</strong><small>Website form</small></div><div className="flow-connector connector-one" /><div className="flow-node flow-agent"><span className="agent-mark">K</span><strong>AI agent</strong><small>Understands context</small></div><div className="flow-connector connector-two" /><div className="flow-node flow-action"><span>03</span><strong>Right next step</strong><small>CRM · Team · Client</small></div><span className="flow-label">A WORKFLOW THAT THINKS AHEAD</span></div><div className="work-caption"><h3>Less busywork. Better momentum.</h3><p>Practical automation that connects the tools your business already uses.</p></div></article>
          </div>
          <p className="work-disclaimer">Illustrative examples of the systems we create. Project details are shared on request.</p>
        </section>

        <section className="clients-section section-shell reveal" aria-labelledby="clients-title">
          <div className="clients-heading"><p className="eyebrow">In good company</p><h2 id="clients-title">Worked with teams at</h2></div>
          <div className="client-logos">{clients.map((client) => <div className="client-logo" key={client.name}><Image src={client.src} alt={client.name} width={170} height={76} sizes="(max-width: 600px) 38vw, 150px" /></div>)}</div>
        </section>

        <section className="agent-section section-shell" id="ai-systems">
          <div className="agent-copy reveal"><p className="eyebrow">More than a conversation</p><h2>AI that gets<br />things <span>done.</span></h2><p>An AI agent can understand a request, use the right tools, and take a useful next step. We connect intelligence to the systems your business depends on, with people still in control.</p><a className="text-link" href="#contact">Build a smarter workflow <FiArrowUpRight aria-hidden="true" /></a></div>
          <div className="architecture reveal" aria-label="AI agent connects a user to tools, APIs, databases, and business actions">
            <div className="architecture-top"><span>KH / AGENT SYSTEM</span><span><i /> ACTIVE FLOW</span></div>
            <div className="architecture-user arch-node"><span className="arch-symbol">01</span><div><small>INPUT</small><strong>People</strong></div><span className="arch-status">REQUEST</span></div>
            <div className="arch-link"><i /></div>
            <div className="architecture-agent arch-node"><span className="arch-symbol">K</span><div><small>REASONING</small><strong>AI agent</strong></div><span className="arch-status">DECIDES</span></div>
            <div className="arch-branches"><span /><span /><span /></div>
            <div className="arch-tools"><div className="arch-node"><span className="arch-symbol">02</span><div><small>CONNECT</small><strong>Tools & APIs</strong></div></div><div className="arch-node"><span className="arch-symbol">03</span><div><small>RETRIEVE</small><strong>Knowledge</strong></div></div><div className="arch-node"><span className="arch-symbol">04</span><div><small>COMPLETE</small><strong>Action</strong></div></div></div>
            <div className="architecture-foot"><span>CONNECTED TO YOUR BUSINESS</span><span>HUMAN OVERSIGHT, BUILT IN</span></div>
          </div>
        </section>

        <section className="team-section section-shell">
          <div className="team-visual reveal"><div className="team-orbit team-orbit-a" /><div className="team-orbit team-orbit-b" /><div className="team-signal signal-a" /><div className="team-signal signal-b" /><div className="team-center"><span>K</span><small>MADE<br />TOGETHER</small></div><span className="team-stamp">HUMAN BY DESIGN <i>✳</i></span><span className="team-caption">Ideas become real<br />when we build them together.</span></div>
          <div className="team-copy reveal"><p className="eyebrow">A team that builds with you</p><h2>Your idea doesn&apos;t<br />disappear into<br />a <span>ticket queue.</span></h2><p>Our team stays close to the work: learning what matters, asking better questions, and working through the details with you from concept to launch.</p><a className="text-link" href="#contact">Meet us at the start <FiArrowUpRight aria-hidden="true" /></a></div>
        </section>

        <section className="process-section section-shell" id="process">
          <div className="section-heading reveal"><div><p className="eyebrow">A thoughtful process</p><h2>Good work, built<br /><span>step by step.</span></h2></div><p className="section-aside">Clear collaboration at every stage, from a first conversation to what comes after launch.</p></div>
          <div className="process-track reveal">{[["01", "Discover", "Understand the problem and the people behind it."], ["02", "Define", "Turn the opportunity into a clear direction."], ["03", "Design", "Shape the experience and technical foundations."], ["04", "Build", "Develop, test, and refine the real thing."], ["05", "Launch", "Deploy and connect it to your business."], ["06", "Evolve", "Learn from real use and improve over time."]].map(([number, title, copy]) => <article className="process-step" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>

        <section className="principles-section section-shell" id="why-khawit">
          <div className="principles-intro reveal"><p className="eyebrow">The KHAWIT point of view</p><h2>Technology should<br />solve a <span>problem.</span></h2><p>Useful by design. Considered in every detail. Built to make a real difference to the work.</p></div>
          <div className="principles-list reveal">{principles.map(([number, title, copy]) => <article className="principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><FiArrowUpRight aria-hidden="true" /></article>)}</div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-top reveal"><p className="eyebrow"><span className="status-dot" /> Your next chapter starts here</p><span className="contact-index">KH / 2026</span></div>
          <div className="contact-content reveal"><h2>Have an idea<br />worth <span>building?</span></h2><div className="contact-cta"><p>Let&apos;s turn it into something real.</p><a className="button button-light" href="mailto:khawitsocialmedia@gmail.com">Start a project <FiArrowUpRight aria-hidden="true" /></a></div></div>
          <div className="contact-bottom"><a href="mailto:khawitsocialmedia@gmail.com"><FiMail aria-hidden="true" /> khawitsocialmedia@gmail.com</a><p>Good things start with a conversation.</p></div>
          <span className="contact-decoration" aria-hidden="true">K</span>
        </section>
      </main>
      <footer className="footer section-shell">
        <div className="footer-main"><a className="footer-brand" href="#home"><Image src="/khawit-logo.jpeg" alt="KHAWIT Solutions" width={52} height={52} /><span>KHAWIT<small>SOLUTIONS</small></span></a><p>Digital products, intelligent systems, and AI-powered experiences built for what&apos;s next.</p><div className="footer-social"><a href="https://www.instagram.com/khawit_solutions/" target="_blank" rel="noreferrer" aria-label="KHAWIT on Instagram"><FaInstagram aria-hidden="true" /></a><a href="https://www.threads.com/@khawit_solutions" target="_blank" rel="noreferrer" aria-label="KHAWIT on Threads"><FaThreads aria-hidden="true" /></a><a href="https://www.linkedin.com/company/khawit-solutions-pvt-ltd/" target="_blank" rel="noreferrer" aria-label="KHAWIT on LinkedIn"><FaLinkedinIn aria-hidden="true" /></a><a href="mailto:khawitsocialmedia@gmail.com" aria-label="Email KHAWIT"><FiMail aria-hidden="true" /></a></div></div>
        <div className="footer-lower"><span>© {new Date().getFullYear()} KHAWIT Solutions</span><div><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div><span className="footer-mark">THOUGHTFULLY BUILT <i>✳</i></span></div>
      </footer>
    </>
  );
}