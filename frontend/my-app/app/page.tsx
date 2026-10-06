import Image from "next/image";
import { AgencyExperience, ServicesJourney } from "@/components/agency-experience";
import { ServicesStory } from "@/components/services/ServicesStory";
import { FoldText } from "@/components/fold-text";
import TextLoop from "@/components/text-loop";
import { GlobeSection } from "@/components/GlobeSection";
import { ContactManager } from "@/components/ContactManager";
import { 
  FiArrowDownRight, 
  FiArrowUpRight, 
  FiMail, 
  FiMove, 
  FiCheckCircle, 
  FiAward, 
  FiGlobe, 
  FiCpu, 
  FiZap, 
  FiTrendingUp, 
  FiLayers, 
  FiLayout, 
  FiGitBranch, 
  FiTarget, 
  FiUserCheck, 
  FiUsers 
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaThreads } from "react-icons/fa6";

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
  ["01", "Built around the problem", "We start by understanding the work, the people, and the friction worth removing.", FiTarget],
  ["02", "Designed for real users", "Useful software should feel clear to the people who rely on it every day.", FiUserCheck],
  ["03", "AI where it actually helps", "We bring intelligence into a workflow when it makes the outcome meaningfully better.", FiCpu],
  ["04", "Foundations that can grow", "Thoughtful architecture gives a product room to evolve beyond its first release.", FiTrendingUp],
  ["05", "Human + AI, together", "Automation can take on repetitive work while people stay in control of important decisions.", FiUsers],
  ["06", "From idea to production", "One team can help shape the concept, build the system, and bring it into the real world.", FiCheckCircle],
];

const headingFold = { splitBy: "char" as const, hinge: "top" as const, trigger: "scroll" as const, duration: 0.65, stagger: 0.045, ease: "power3.out", perspective: 700, creaseShading: 0.55 };

export default function Home() {
  return (
    <>
      <AgencyExperience />
      <main>
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Independent technology studio <span className="eyebrow-year">EST. 2026</span></p>
            <FoldText as="h1" {...headingFold} id="hero-title" text="We build what comes next.">We build<br />what comes <span className="hero-emphasis">next<span className="hero-period">.</span></span></FoldText>
            <div className="hero-bottom">
              <p className="hero-description">Digital products, intelligent systems, and AI-powered experiences for a world that doesn&apos;t stand still.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#start-project">Start a project <FiArrowUpRight aria-hidden="true" /></a>
                <a className="text-link" href="#work">Explore our work <FiArrowDownRight aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="hero-art" role="img" aria-label="System map connecting human insight, intelligent software, and useful outcomes">
            <div className="art-heading"><span>KH / SYSTEMS MAP</span><span className="art-live"><i /> IN MOTION</span></div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="hero-cross cross-one" />
            <div className="hero-cross cross-two" />
            <div className="hero-core"><Image className="hero-brand-mark" src="/khawit-logo-nbg.png" alt="" width={180} height={180} style={{ height: "auto" }} /><i /><small>KH / 01</small></div>
            <div className="hero-node node-intent"><span className="node-number">01</span><span><small>START WITH</small><strong>Human insight</strong></span><FiMove aria-hidden="true" /></div>
            <div className="hero-node node-intelligence"><span className="node-number">02</span><span><small>BUILD WITH</small><strong>Intelligence</strong></span><i /></div>
            <div className="hero-node node-outcome"><span className="node-number">03</span><span><small>MAKE IT</small><strong>Useful</strong></span><FiAward aria-hidden="true" /></div>
            <div className="art-footer"><span>IDEA</span><i /><span>SYSTEM</span><i /><span>IMPACT</span><span className="art-footer-mark">KHAWIT / STUDIO</span></div>
          </div>
          <a href="#about" className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></a>
          <div className="hero-index">01 <span>/</span> 06</div>
        </section>

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

        <section className="intro-band section-shell reveal" id="about">
          <p className="eyebrow">A studio for what&apos;s next</p>
          <div className="intro-layout">
            <FoldText as="h2" {...headingFold} text="Not just a digital presence. A better way to work."><span className="intro-heading-fit">Not just a digital presence.</span><br /><span>A better way to work.</span></FoldText>
            <p>KHAWIT brings product thinking, engineering, and applied AI together to solve real business problems. From the first sketch to a system in production, we build technology that earns its place.</p>
          </div>
          <div className="intro-foot"><span>STRATEGY <i /> DESIGN <i /> ENGINEERING</span><span>BUILT WITH PEOPLE, FOR PEOPLE</span></div>
        </section>

        <section className="services-section section-shell" id="services" style={{ paddingBottom: '54px' }}>
          <div className="section-heading reveal" style={{ marginBottom: 0 }}>
            <div>
              <p className="eyebrow">What we do</p>
              <FoldText as="h2" {...headingFold} text="Complex ideas. Clear outcomes.">Complex ideas.<br /><span>Clear outcomes.</span></FoldText>
            </div>
            <p className="section-aside">From the first digital touchpoint to a connected system running in production, we build the parts that move your idea forward.</p>
          </div>
        </section>
        <ServicesStory />

        <section className="build-section section-shell" id="approach">
          <div className="build-intro reveal"><p className="eyebrow">From possibility to product</p><FoldText as="h2" {...headingFold} text="One connected digital world.">One connected<br />digital <span>world.</span></FoldText><p>We work across the full product landscape, connecting thoughtful experiences to the systems that make them useful.</p></div>
          <div className="build-map reveal" aria-label="Our work connects websites, AI systems, agents, automation, products, and business systems">
            <div className="map-rail"><span className="map-rail-line" /></div>
            <div className="map-nodes">
                 {[["01", "Digital experiences", "Websites · Applications", FiGlobe], ["02", "Intelligent systems", "AI · Knowledge", FiCpu], ["03", "Agents & automation", "Tools · Workflows", FiZap], ["04", "Products that scale", "SaaS · Platforms", FiTrendingUp], ["05", "Business systems", "Integrations · Operations", FiLayers]].map(([number, title, detail, Icon]: any) => <div className="map-node" key={number}><span className="map-number">{number}</span><div><FoldText as="h3" {...headingFold} text={title}>{title}</FoldText><p>{detail}</p></div><Icon aria-hidden="true" style={{ width: '14px', height: '14px', color: '#937a4e' }} /></div>)}
            </div>
            <span className="map-note">ONE TEAM. END TO END.</span>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading reveal"><div><p className="eyebrow">What we build</p><FoldText as="h2" {...headingFold} text="Made to move business forward.">Made to move<br /><span>business forward.</span></FoldText></div><p className="section-aside">Digital foundations and intelligent workflows, shaped around the people who use them.</p></div>
          <div className="work-grid reveal">
            <article className="work-feature work-interface"><div className="work-meta"><span>01 / DIGITAL PRODUCTS</span><FiLayout aria-hidden="true" /></div><div className="product-window"><div className="window-bar"><span /><span /><span /><i>KH / STUDIO</i><b>MENU +</b></div><div className="window-layout"><div className="window-sidebar"><span /><span /><span /><span /></div><div className="window-content"><div className="window-label">A NEW KIND OF WORKSPACE</div><strong>Make room<br />for <em>good work.</em></strong><div className="window-button">Explore the platform <FiArrowUpRight /></div><div className="window-shape shape-a" /><div className="window-shape shape-b" /></div></div></div><div className="work-caption"><FoldText as="h3" {...headingFold}>Experiences people want to use.</FoldText><p>Websites, applications, and product interfaces built with intention.</p></div></article>
            <article className="work-feature work-automation"><div className="work-meta"><span>02 / INTELLIGENT WORKFLOWS</span><FiGitBranch aria-hidden="true" /></div><div className="flow-visual"><div className="flow-glow" /><div className="flow-node flow-trigger"><span>01</span><strong>New enquiry</strong><small>Website form</small></div><div className="flow-connector connector-one" /><div className="flow-node flow-agent"><span className="agent-mark">K</span><strong>AI agent</strong><small>Understands context</small></div><div className="flow-connector connector-two" /><div className="flow-node flow-action"><span>03</span><strong>Right next step</strong><small>CRM · Team · Client</small></div><span className="flow-label">A WORKFLOW THAT THINKS AHEAD</span></div><div className="work-caption"><FoldText as="h3" {...headingFold}>Less busywork. Better momentum.</FoldText><p>Practical automation that connects the tools your business already uses.</p></div></article>
          </div>
          <p className="work-disclaimer">Illustrative examples of the systems we create. Project details are shared on request.</p>
        </section>

        <section className="clients-section section-shell reveal" aria-labelledby="clients-title">
          <div className="clients-heading"><p className="eyebrow">In good company</p><FoldText as="h2" {...headingFold} id="clients-title">Worked with teams at</FoldText></div>
          <div className="client-marquee" role="region" aria-label="Companies KHAWIT has worked with">
            <div className="client-track">
              {[0, 1].map((copyIndex) => (
                <div className="client-group" key={copyIndex} aria-hidden={copyIndex === 1}>
                  {clients.map((client) => <div className="client-logo" key={client.name}><Image src={client.src} alt={copyIndex === 0 ? client.name : ""} width={client.width} height={client.height} sizes="112px" /></div>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="agent-section section-shell" id="ai-systems">
          <div className="agent-copy reveal"><p className="eyebrow">More than a conversation</p><FoldText as="h2" {...headingFold}>AI that gets<br />things <span>done.</span></FoldText><p>An AI agent can understand a request, use the right tools, and take a useful next step. We connect intelligence to the systems your business depends on, with people still in control.</p><a className="text-link" href="#start-project">Build a smarter workflow <FiArrowUpRight aria-hidden="true" /></a></div>
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
          <div className="team-visual reveal"><div className="team-orbit team-orbit-a" /><div className="team-orbit team-orbit-b" /><div className="team-signal signal-a" /><div className="team-signal signal-b" /><div className="team-center"><Image className="team-brand-mark" src="/khawit-logo-nbg.png" alt="" width={120} height={120} style={{ height: "auto" }} /><small>MADE<br />TOGETHER</small></div><span className="team-stamp">HUMAN BY DESIGN <i>✳</i></span><span className="team-caption">Ideas become real<br />when we build them together.</span></div>
          <div className="team-copy reveal"><p className="eyebrow">A team that builds with you</p><FoldText as="h2" {...headingFold}>Your idea doesn&apos;t<br />disappear into<br />a <span>ticket queue.</span></FoldText><p>Our team stays close to the work: learning what matters, asking better questions, and working through the details with you from concept to launch.</p><a className="text-link" href="#start-project">Meet us at the start <FiArrowUpRight aria-hidden="true" /></a></div>
        </section>

        <section className="process-section section-shell" id="process">
          <div className="section-heading reveal"><div><p className="eyebrow">A thoughtful process</p><FoldText as="h2" {...headingFold}>Good work, built<br /><span>step by step.</span></FoldText></div><p className="section-aside">Clear collaboration at every stage, from a first conversation to what comes after launch.</p></div>
          <div className="process-track reveal">{[["01", "Discover", "Understand the problem and the people behind it."], ["02", "Define", "Turn the opportunity into a clear direction."], ["03", "Design", "Shape the experience and technical foundations."], ["04", "Build", "Develop, test, and refine the real thing."], ["05", "Launch", "Deploy and connect it to your business."], ["06", "Evolve", "Learn from real use and improve over time."]].map(([number, title, copy]) => <article className="process-step reveal" key={number} style={{ transitionDelay: `${(Number(number) - 1) * 110}ms` }}><span className="process-number">{number}</span><FoldText as="h3" {...headingFold}>{title}</FoldText><p>{copy}</p></article>)}</div>
        </section>

        <section className="principles-section section-shell" id="why-khawit">
          <div className="principles-intro reveal"><p className="eyebrow">The KHAWIT point of view</p><FoldText as="h2" {...headingFold}><span className="principles-heading-fit">Technology should</span><br />solve a <span>problem.</span></FoldText><p>Useful by design. Considered in every detail. Built to make a real difference to the work.</p></div>
          <div className="principles-list reveal">{principles.map(([number, title, copy, Icon]: any) => <article className="principle" key={number}><span>{number}</span><div><FoldText as="h3" {...headingFold}>{title}</FoldText><p>{copy}</p></div><Icon aria-hidden="true" style={{ width: '15px', height: '15px' }} /></article>)}</div>
        </section>

        <GlobeSection />
      </main>
      <footer className="bg-[#1a1c1e] text-[#ece8df] py-16 md:py-24 section-shell">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <a href="#home" className="flex items-center gap-4 inline-block">
                <Image src="/khawit-logo-nbg.png" alt="KHAWIT Solutions" width={48} height={48} className="w-auto h-auto object-contain" />
                <span className="flex flex-col font-bold tracking-widest text-sm text-white">KHAWIT<small className="text-[#82837d] font-medium tracking-[0.18em] text-[10px] mt-1">SOLUTIONS</small></span>
              </a>
              <p className="text-[#82837d] text-sm leading-relaxed max-w-sm mt-2">
                Digital products, intelligent systems, and AI-powered experiences built for what&apos;s next.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">Services</h4>
                <a href="#services" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">Web Development</a>
                <a href="#services" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">AI Solutions</a>
                <a href="#services" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">AI Agents & Automation</a>
                <a href="#services" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">SaaS & Product Development</a>
                <a href="#services" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">Digital Experiences</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">Company</h4>
                <a href="#about" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">About</a>
                <a href="#services" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">Services</a>
                <a href="#work" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">Work / Projects</a>
                <a href="#contact" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">Connect</h4>
                <a href="https://www.linkedin.com/company/khawit-solutions-pvt-ltd/" target="_blank" rel="noreferrer" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"><FaLinkedinIn /> LinkedIn</a>
                <a href="https://www.instagram.com/khawit_solutions/" target="_blank" rel="noreferrer" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"><FaInstagram /> Instagram</a>
                <a href="https://www.threads.com/@khawit_solutions" target="_blank" rel="noreferrer" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"><FaThreads /> Threads</a>
                <a href="mailto:khawitsocialmedia@gmail.com" className="text-sm text-[#82837d] hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"><FiMail /> Email Us</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-[#33373d] pt-12 mt-4 gap-6">
            <p className="text-2xl md:text-3xl font-medium text-white">Have a project in mind? <br className="md:hidden" /><a href="#start-project" className="text-[#bc9f70] hover:text-white transition-colors inline-flex items-center mt-2 md:mt-0 gap-2">Let&apos;s build it. <FiArrowUpRight className="w-6 h-6" /></a></p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5f635f] pt-8 border-t border-[#33373d]/50">
            <span>© {new Date().getFullYear()} KHAWIT Solutions. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#bc9f70] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#bc9f70] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      <ContactManager />
    </>
  );
}
