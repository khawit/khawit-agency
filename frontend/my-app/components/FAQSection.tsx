"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FoldText } from "@/components/fold-text";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";

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

const faqs = [
  {
    question: "What types of solutions does KHAWIT build?",
    answer:
      "KHAWIT specializes across seven core areas: Web Development, Conversational AI & Knowledge Systems (RAG), Autonomous AI Agents & Automation, SaaS & Product Development, Enterprise AI & Business Operations, Cloud & API Deployment, and Digital Marketing. From bespoke web apps and RAG knowledge systems to autonomous workflow agents and enterprise AI pipelines, we build practical, scalable software tailored to your goals."
  },
  {
    question: "How do you evaluate whether AI is suitable for our business problem?",
    answer:
      "We begin with a thorough discovery phase to analyze where friction and repetitive tasks exist. We only implement AI models when they provide a measurable improvement in accuracy, customer experience, or operational speed—never as an unnecessary gimmick. If a deterministic software solution is better, that is what we recommend."
  },
  {
    question: "How does KHAWIT approach project scoping and communication?",
    answer:
      "We believe in milestone-driven clarity. Before any code is written, we align on concrete deliverables, technical architecture, and realistic timeframes. Throughout development, you have direct access to the engineers building your product with regular progress reviews."
  },
  {
    question: "Can you connect with our existing tools, databases, and infrastructure?",
    answer:
      "Yes. Our deployment and integration capabilities ensure that newly developed products or AI workflows interface securely with your existing CRM, ERP, proprietary databases, and cloud infrastructure (AWS, Google Cloud, Azure)."
  },
  {
    question: "What level of support is provided after launch?",
    answer:
      "Software evolves after deployment. We provide dedicated transition periods, production monitoring, documentation, and tailored ongoing maintenance packages to ensure your systems remain reliable, performant, and up to date."
  },
  {
    question: "How is data security handled when integrating AI models?",
    answer:
      "Data privacy is foundational. When implementing AI solutions or RAG systems, we ensure data pipelines respect strict isolation standards. We use enterprise-grade APIs with zero-data-retention agreements or private model hosting where appropriate, ensuring your proprietary information remains protected."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-shell py-12 md:py-16" id="faq" aria-labelledby="faq-title">
      <div className="max-w-7xl mx-auto w-full">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">
              <span className="status-dot" />
              Frequently Asked Questions
            </p>
            <FoldText as="h2" {...headingFold} id="faq-title" text="Answers to common questions.">
              <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
                Answers to <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">common questions.</span>
              </span>
            </FoldText>
          </div>
          <p className="section-aside">
            Everything you need to know about our approach, collaboration model, and engineering standards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 divide-y divide-white/10 reveal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="py-6 transition-colors group"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bc9f70] rounded-lg py-2"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-lg md:text-xl font-medium text-[#f9f6f0] group-hover:text-[#bc9f70] transition-colors">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#bc9f70] shrink-0 group-hover:border-[#bc9f70] transition-colors">
                    {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="mt-4 pr-12 text-[#ece8df]/85 text-sm md:text-base leading-relaxed animate-fade"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-sm text-[#ece8df]/80">
            Have a unique requirement not covered here?{" "}
            <Link
              href="/start-project"
              className="text-[#bc9f70] hover:text-[#f9f6f0] transition-colors font-medium inline-flex items-center gap-1 ml-1"
            >
              Speak directly with our team <FiArrowUpRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
