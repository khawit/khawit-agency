"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { FiX, FiArrowRight } from "react-icons/fi";

export const servicesData = [
  {
    number: "01",
    title: "Web Development",
    eyebrow: "DIGITAL EXPERIENCES",
    description: "Every journey starts with a clear front door. We shape the web experience around the people arriving and the action they need to take.",
    items: [
      { name: "Business Websites", desc: "Professional corporate websites designed to build trust and drive conversions." },
      { name: "Custom Web Applications", desc: "Tailored web-based software built to solve specific operational challenges." },
      { name: "Landing Pages", desc: "High-conversion single-page experiences focused on specific campaigns or products." },
      { name: "Interactive Websites", desc: "Immersive web experiences featuring rich animations and engaging user interactions." },
      { name: "3D & Animated Websites", desc: "Cutting-edge sites using WebGL and advanced motion to tell compelling stories." },
      { name: "E-commerce Websites", desc: "Scalable online stores optimized for user experience and sales performance." },
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "AI Solutions",
    eyebrow: "INTELLIGENCE, APPLIED",
    description: "When a digital experience needs to understand, answer, or assist, we connect AI to the knowledge and conversations that make it useful.",
    items: [
      { name: "AI Integration", desc: "Connect existing products and workflows with AI capabilities that solve specific business needs." },
      { name: "AI Chatbots", desc: "Build conversational experiences that can answer questions, guide users, and support customers." },
      { name: "AI Assistants & Copilots", desc: "Intelligent sidekicks designed to help users perform tasks faster and more accurately." },
      { name: "RAG / Knowledge-based AI", desc: "Systems that ground AI responses in your proprietary data for accurate, context-aware answers." },
      { name: "AI-powered Web Applications", desc: "Next-generation web apps with intelligent features embedded at their core." },
      { name: "Voice AI", desc: "Speech-to-text and text-to-speech solutions for natural voice interactions." },
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2165&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "AI Agents & Automation",
    eyebrow: "FROM ANSWERS TO ACTION",
    description: "Next, intelligence can become action. Agents and automated workflows connect the right tools to repeatable work, with people in control.",
    items: [
      { name: "AI Agents", desc: "Intelligent software entities capable of perceiving their environment and taking goal-directed actions." },
      { name: "Autonomous Agents", desc: "Systems that can execute complex, multi-step tasks with minimal human intervention." },
      { name: "Voice Agents", desc: "Conversational agents designed to interact naturally over voice channels." },
      { name: "Multi-Agent Systems", desc: "Networks of specialized AI agents working together to solve complex problems." },
      { name: "AI Workflow Automation", desc: "Enhancing traditional business processes with intelligent decision-making steps." },
      { name: "Business Process Automation", desc: "Streamlining operations by automating repetitive tasks and data flows." },
      { name: "API & Tool-integrated Agents", desc: "Agents equipped with custom tools to interact securely with your existing software stack." },
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "SaaS & Product",
    eyebrow: "IDEA TO PRODUCT",
    description: "When an idea deserves a product of its own, we turn it into a focused MVP, a scalable SaaS, or a platform built around how teams actually work.",
    items: [
      { name: "SaaS Applications", desc: "End-to-end development of subscription-based software platforms." },
      { name: "AI-powered SaaS", desc: "Software-as-a-Service products with generative AI features as core differentiators." },
      { name: "MVP Development", desc: "Rapid prototyping and building of minimum viable products to validate market fit." },
      { name: "Custom Software Products", desc: "Bespoke software solutions tailored exactly to your unique business model." },
      { name: "Full-Stack Applications", desc: "Comprehensive frontend and backend development for robust digital products." },
      { name: "Internal Business Platforms", desc: "Custom portals and tools built to empower your team and streamline internal operations." },
      { name: "AI-powered Products", desc: "Standalone digital products built entirely around novel AI capabilities." },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "05",
    title: "AI-powered Systems",
    eyebrow: "BETTER BUSINESS FLOWS",
    description: "Then the product connects to everyday operations: helping teams support customers, qualify leads, share knowledge, and move work forward.",
    items: [
      { name: "Customer Support Systems", desc: "Intelligent ticketing and automated response setups that improve resolution times." },
      { name: "Lead Qualification Systems", desc: "Automated funnels that use AI to score and categorize inbound prospects." },
      { name: "AI Sales Assistants", desc: "Tools that help sales teams prepare, personalize outreach, and follow up effectively." },
      { name: "Knowledge Management Systems", desc: "Centralized platforms that make company information instantly searchable and understandable." },
      { name: "Internal AI Tools", desc: "Custom-built applications designed to accelerate specific workflows for your team." },
      { name: "Custom AI Workflows", desc: "Bespoke pipelines that connect various AI models and services to perform complex operational tasks." },
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "06",
    title: "Deployment",
    eyebrow: "READY FOR THE REAL WORLD",
    description: "Finally, the pieces come together in production. We connect services, data, models, and cloud infrastructure so the system is ready for real use.",
    items: [
      { name: "API Integrations", desc: "Connecting your applications with essential third-party services and data sources." },
      { name: "Third-party Integrations", desc: "Seamless implementation of external software solutions into your ecosystem." },
      { name: "Database Integration", desc: "Secure and scalable database architecture, migration, and management." },
      { name: "Cloud Deployment", desc: "Setting up resilient infrastructure on AWS, Google Cloud, or Azure." },
      { name: "Production Setup", desc: "Configuring CI/CD pipelines, monitoring, and security for live environments." },
      { name: "AI Model Integration", desc: "Deploying and managing language models and ML services in production." },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
  {
    number: "07",
    title: "Digital Marketing",
    eyebrow: "GROWTH, ENGINEERED",
    description: "Digital strategies that turn attention into meaningful engagement, helping brands build visibility, connect with the right audience, and grow.",
    items: [
      { name: "Social Media Marketing", desc: "Build a strategic social presence through content planning, audience targeting, positioning, engagement, and measurable growth." },
      { name: "Social Media Management", desc: "Manage day-to-day social presence through content calendars, publishing, community engagement, profile optimization, and performance tracking." },
      { name: "Paid Media", desc: "Use targeted paid campaigns to reach the right audiences, drive traffic, generate leads, and support measurable business outcomes." },
      { name: "Meta Ads", desc: "Create and optimize Facebook and Instagram campaigns through audience targeting, creative testing, retargeting, and conversion-focused strategies." },
      { name: "Google Ads", desc: "Reach high-intent audiences through search and Google advertising with targeted keywords, compelling ads, conversion tracking, and continuous optimization." },
      { name: "AI Content Creation", desc: "Use AI-assisted workflows to produce scalable marketing content while maintaining brand voice, quality, consistency, and human oversight." },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

﻿export function ServicesStory() {
  const [activeCategory, setActiveCategory] = useState<typeof servicesData[0] | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setActiveCategory(null);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCategory]);

  return (
    <section className="relative w-full bg-[#33373d] py-24 px-6 md:px-12">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes modal-enter {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal {
          animation: modal-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}} />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((category, index) => (
          <button 
            key={index}
            className="group relative w-full h-[480px] rounded-[32px] overflow-hidden cursor-pointer text-left border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bc9f70] transition-colors duration-300"
            onClick={() => setActiveCategory(category)}
            aria-label={`View details for ${category.title}`}
          >
            <div className="absolute inset-0 w-full h-full bg-[#2a2d33]">
              <Image 
                src={category.image} 
                alt={category.title}
                fill
                className="object-cover transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#22252a] via-[#22252a]/80 to-[#22252a]/20" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[#bc9f70] font-semibold text-[10px] tracking-[0.13em] uppercase mb-4 flex items-center gap-2">
                <span className="w-[7px] h-[7px] rounded-full bg-[#5f8580]" />
                {category.eyebrow}
              </span>
              <h3 className="text-white text-3xl font-medium mb-3">{category.number} — {category.title}</h3>
              <p className="text-[#ece8df] text-sm leading-relaxed line-clamp-3 mb-6 transition-colors duration-300 group-hover:text-white">
                {category.description}
              </p>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors duration-300 group-hover:border-[#bc9f70] group-hover:bg-[#bc9f70] group-hover:text-[#33373d]">
                <FiArrowRight aria-hidden="true" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade" onClick={() => setActiveCategory(null)} />
          
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] bg-[#22252a] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-modal">
            <button 
              onClick={() => setActiveCategory(null)}
              className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-6 h-6" aria-hidden="true" />
            </button>

            <div className="w-full md:w-[45%] h-64 md:h-auto relative shrink-0">
               <Image
                 src={activeCategory.image}
                 alt={activeCategory.title}
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 45vw"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#22252a] to-transparent opacity-95" />
               <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end md:justify-center">
                 <span className="text-[#bc9f70] text-7xl md:text-8xl font-light opacity-50 mb-2 md:mb-6 leading-none">{activeCategory.number}</span>
                 <h2 id="modal-title" className="text-white text-4xl md:text-5xl font-medium leading-tight">{activeCategory.title}</h2>
               </div>
            </div>

            <div className="w-full md:w-[55%] p-8 md:p-12 overflow-y-auto">
              <div className="mb-10 md:mb-12">
                <span className="text-[#bc9f70] font-semibold text-[10px] tracking-[0.13em] uppercase mb-4 flex items-center gap-2">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#5f8580] shadow-[0_0_0_4px_rgba(95,133,128,0.12)]" />
                  {activeCategory.eyebrow}
                </span>
                <p className="text-[#ece8df] text-lg md:text-xl leading-relaxed mt-4">
                  {activeCategory.description}
                </p>
              </div>

              <div className="space-y-8">
                {activeCategory.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-white font-medium text-lg mb-2 flex items-baseline gap-3">
                      <span className="text-[#bc9f70]/60 text-sm font-mono tracking-widest">{String(idx + 1).padStart(2, '0')}</span>
                      {item.name}
                    </h4>
                    <p className="text-[#ece8df]/80 text-sm md:text-base leading-relaxed pl-8">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                 <a href="#contact" onClick={() => setActiveCategory(null)} className="inline-flex items-center gap-3 text-white font-medium hover:text-[#bc9f70] transition-colors">
                   Let's Work Together <FiArrowRight aria-hidden="true" />
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
