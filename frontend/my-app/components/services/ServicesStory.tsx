"use client";

import ScrollExpand from "../ScrollExpand";
import { ServiceItems } from "./ServiceItems";

export const servicesData = [
  {
    number: "01",
    title: "Web Development",
    eyebrow: "DIGITAL EXPERIENCES",
    description: "Every journey starts with a clear front door. We shape the web experience around the people arriving and the action they need to take.",
    items: [
      "Business Websites",
      "Custom Web Applications",
      "Landing Pages",
      "Interactive Websites",
      "3D & Animated Websites",
      "E-commerce Websites",
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "AI Solutions",
    eyebrow: "INTELLIGENCE, APPLIED",
    description: "When a digital experience needs to understand, answer, or assist, we connect AI to the knowledge and conversations that make it useful.",
    items: [
      "AI Integration",
      "AI Chatbots",
      "AI Assistants & Copilots",
      "RAG / Knowledge-based AI",
      "AI-powered Web Applications",
      "Voice AI",
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2165&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "AI Agents & Automation",
    eyebrow: "FROM ANSWERS TO ACTION",
    description: "Next, intelligence can become action. Agents and automated workflows connect the right tools to repeatable work, with people in control.",
    items: [
      "AI Agents",
      "Autonomous Agents",
      "Voice Agents",
      "Multi-Agent Systems",
      "AI Workflow Automation",
      "Business Process Automation",
      "API & Tool-integrated Agents",
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "SaaS & Product",
    eyebrow: "IDEA TO PRODUCT",
    description: "When an idea deserves a product of its own, we turn it into a focused MVP, a scalable SaaS, or a platform built around how teams actually work.",
    items: [
      "SaaS Applications",
      "AI-powered SaaS",
      "MVP Development",
      "Custom Software Products",
      "Full-Stack Applications",
      "Internal Business Platforms",
      "AI-powered Products",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "05",
    title: "AI-powered Systems",
    eyebrow: "BETTER BUSINESS FLOWS",
    description: "Then the product connects to everyday operations: helping teams support customers, qualify leads, share knowledge, and move work forward.",
    items: [
      "Customer Support Systems",
      "Lead Qualification Systems",
      "AI Sales Assistants",
      "Knowledge Management Systems",
      "Internal AI Tools",
      "Custom AI Workflows",
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "06",
    title: "Deployment",
    eyebrow: "READY FOR THE REAL WORLD",
    description: "Finally, the pieces come together in production. We connect services, data, models, and cloud infrastructure so the system is ready for real use.",
    items: [
      "API Integrations",
      "Third-party Integrations",
      "Database Integration",
      "Cloud Deployment",
      "Production Setup",
      "AI Model Integration",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
];

export function ServicesStory() {
  return (
    <div className="relative w-full bg-[#33373d]">
      {servicesData.map((service, index) => (
        <ScrollExpand
          key={service.number}
          src={service.image}
          alt={service.title}
          title={`${service.number} — ${service.title}`}
          scrollHint={index === 0 ? "Scroll to explore" : ""}
          useWindowScroll={true}
          overlayScrim={0.9}
        >
          <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-left px-6 mt-24 md:mt-16">
            <div className="md:w-1/2">
              <p className="text-[#d8c29d] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5f8580]"></span>
                {service.eyebrow}
              </p>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                {service.title}
              </h2>
              <p className="text-[#ece8df] text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <ServiceItems items={service.items} />
            </div>
          </div>
        </ScrollExpand>
      ))}
    </div>
  );
}
