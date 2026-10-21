import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import { AgencyExperience } from "@/components/agency-experience";
import { FoldText } from "@/components/fold-text";
import { IndustriesSection } from "@/components/IndustriesSection";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiCheck,
  FiShield,
  FiPlus,
  FiMinus,
  FiMail
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaThreads } from "react-icons/fa6";

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

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | KHAWIT Solutions",
    };
  }

  const pageTitle = `${service.title} — ${service.eyebrow} | KHAWIT Solutions`;
  const pageDesc = `${service.intro.overview} Explore ${service.items.length} specialized key offerings in ${service.title}.`;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: `/services/${service.id}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: `/services/${service.id}`,
      siteName: "KHAWIT Solutions",
      locale: "en_US",
      type: "website",
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const titleParts = (() => {
    if (slug === "deployment") {
      return { first: "Production", last: "Deployment." };
    }
    const words = service.title.split(" ");
    if (words.length > 1) {
      return {
        first: words.slice(0, -1).join(" "),
        last: `${words[words.length - 1]}.`,
      };
    }
    return {
      first: "",
      last: `${service.title}.`,
    };
  })();

  return (
    <>
      <AgencyExperience />
      <main className="min-h-screen bg-[#f9f6f0] text-[#33373d]">
        {/* SECTION 1: SERVICE HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-shell bg-[#33373d] text-[#f9f6f0] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#22252a] via-[#33373d] to-[#2c3036] opacity-90" />
          <div className="hero-grid opacity-10 absolute inset-0" aria-hidden="true" />
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                href="/#services"
                className="text-xs font-mono uppercase tracking-widest text-[#bc9f70] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Services</span>
                <span>/</span>
              </Link>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d8c29d] bg-[#bc9f70]/15 px-3 py-1 rounded-full border border-[#bc9f70]/30">
                {service.number} · {service.eyebrow}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <FoldText
                  as="h1"
                  {...headingFold}
                  text={service.title}
                  className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.05]"
                >
                  <span className="text-white block">
                    {titleParts.first ? `${titleParts.first} ` : ""}
                    <span className="font-cursive italic text-[#bc9f70] font-normal tracking-normal text-5xl sm:text-7xl md:text-8xl inline-block drop-shadow-[0_2px_24px_rgba(188,159,112,0.45)]">
                      {titleParts.last}
                    </span>
                  </span>
                </FoldText>

                <blockquote className="text-lg sm:text-xl md:text-2xl text-[#d8c29d] font-light italic border-l-2 border-[#bc9f70] pl-5 my-6 leading-relaxed">
                  &ldquo;{service.quote}&rdquo;
                </blockquote>

                <p className="text-sm md:text-base text-[#a8aeb5] max-w-xl leading-relaxed mb-8">
                  {service.intro.overview}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={`/start-project?service=${encodeURIComponent(service.title)}`}
                    className="button button-dark rounded-full text-xs font-semibold px-8 py-3.5 bg-[#bc9f70] text-[#1a1c1e] hover:bg-white transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                  >
                    {service.ctaText} <FiArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <a
                    href="#key-offerings"
                    className="text-xs font-semibold text-white hover:text-[#bc9f70] transition-colors uppercase tracking-wider px-4 py-3 inline-flex items-center gap-2"
                  >
                    View {service.items.length} Key Offerings <FiArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden border border-white/15 shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22252a]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white">
                    <span className="font-mono text-[#bc9f70] mr-2">DISCIPLINE:</span>
                    <span>{service.eyebrow}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTRODUCTION & TARGET AUDIENCE */}
        <section className="py-20 md:py-28 section-shell border-b border-[#d9d5cc]/60">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-3">
                  <span className="status-dot" />
                  Operational Focus
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text="Who this service helps & what it solves."
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#33373d] leading-tight block mb-6">
                    Who this service helps &amp; <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">what it solves.</span>
                  </span>
                </FoldText>
                <p className="text-sm md:text-base text-[#565b61] leading-relaxed mb-6">
                  {service.intro.targetAudience}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#937a4e] mb-4">
                  Key Challenges Addressed
                </h3>
                {service.intro.challengesSolved.map((challenge, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#f0ece3] border border-[#d9d5cc] flex items-start gap-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#33373d] text-[#d8c29d] flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm md:text-base text-[#33373d] leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR KEY OFFERINGS (ALL SUBSERVICES) */}
        <section className="relative py-20 md:py-28 section-shell text-white overflow-hidden" id="key-offerings">
          {/* Deep atmospheric backdrop */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[#1e2227]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#181a20]/95 via-[#1b1e25]/90 to-[#14161b]/98" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(188,159,112,0.04)_0%,_transparent_70%)]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow text-[#bc9f70]">
                  <span className="status-dot" />
                  Complete Catalogue
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text={`Our ${service.title} Key Offerings.`}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
                    Our {service.title} <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">Key Offerings.</span>
                  </span>
                </FoldText>
              </div>
              <p className="section-aside text-[#a8aeb5]">
                Every capability is tailored to real operational workflows. Explore all {service.items.length} specialized offerings in this discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 reveal">
              {service.items.map((sub, idx) => (
                <article
                  key={sub.slug}
                  className="group relative p-8 rounded-[20px] bg-white/[0.08] backdrop-blur-xl md:backdrop-blur-2xl border border-white/20 hover:border-[#bc9f70]/70 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.35)] hover:shadow-[0_24px_60px_-12px_rgba(188,159,112,0.3)] hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top specular highlight edge glow */}
                  <div 
                    className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors duration-300" 
                  />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#bc9f70] bg-[#bc9f70]/15 px-2.5 py-1 rounded-full border border-[#bc9f70]/25 backdrop-blur-sm">
                        {service.number}.{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#5f8580]" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#d8c29d] transition-colors">
                      {sub.name}
                    </h3>

                    <p className="text-sm text-[#e2e6ed]/90 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#a8aeb5] uppercase">
                      INCLUDED OFFERING
                    </span>
                    <Link
                      href={`/start-project?service=${encodeURIComponent(`${service.title} - ${sub.name}`)}`}
                      className="text-xs text-[#bc9f70] group-hover:text-white transition-colors flex items-center gap-1 font-medium"
                    >
                      Enquire <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY IT MATTERS */}
        <section className="relative py-20 md:py-28 section-shell bg-[#14171d] text-white overflow-hidden border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-3 text-[#bc9f70]">
                <span className="status-dot" />
                Strategic Value
              </p>
              <FoldText
                as="h2"
                {...headingFold}
                text="Why this investment matters to your bottom line."
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block mb-4">
                  Why this investment matters to your <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">bottom line.</span>
                </span>
              </FoldText>
              <p className="text-[#a8aeb5] text-base leading-relaxed">
                {service.whyItMatters.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.whyItMatters.points.map((pt, i) => (
                <div
                  key={i}
                  className="group relative p-8 md:p-10 rounded-[20px] bg-white/[0.08] backdrop-blur-xl md:backdrop-blur-2xl border border-white/20 hover:border-[#bc9f70]/70 transition-all duration-300 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.35)] hover:shadow-[0_24px_60px_-12px_rgba(188,159,112,0.3)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top specular highlight edge glow */}
                  <div 
                    className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none group-hover:via-[#bc9f70] transition-colors duration-300" 
                  />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-mono font-semibold text-[#bc9f70] bg-[#bc9f70]/15 px-3 py-1 rounded-full border border-[#bc9f70]/30 backdrop-blur-sm">
                        0{i + 1}
                      </span>
                      <span className="text-[11px] font-mono text-[#a8aeb5] uppercase tracking-wider">
                        IMPACT / 0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[#d8c29d] transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-[#e2e6ed]/90 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/15 flex items-center gap-2 text-xs font-medium text-[#d8c29d]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5f8580]" />
                    <span className="text-[11px] font-mono text-[#a8aeb5] uppercase tracking-wider">Commercial Impact</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: REALISTIC USE CASES */}
        <section className="py-20 md:py-28 section-shell bg-[#f0ece3]">
          <div className="max-w-6xl mx-auto">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">
                  <span className="status-dot" />
                  Practical Scenarios
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text="Realistic Implementation Scenarios."
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#33373d] leading-tight block">
                    Realistic Implementation <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">Scenarios.</span>
                  </span>
                </FoldText>
              </div>
              <p className="section-aside text-[#565b61]">
                Every project is distinct. Here are concrete ways organizations deploy {service.title} to gain operational momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {service.useCases.map((uc, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[20px] bg-white border border-[#d9d5cc] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#33373d] text-[#d8c29d] flex items-center justify-center font-mono text-sm mb-6">
                      UC/{i + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-[#33373d] mb-3">
                      {uc.title}
                    </h3>
                    <p className="text-sm text-[#565b61] leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#f0ece3] text-xs font-mono text-[#937a4e] flex items-center gap-2">
                    <FiCheck className="text-[#5f8580]" />
                    <span>Production Architecture</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW WE APPROACH IT */}
        <section className="py-20 md:py-28 section-shell bg-[#33373d] text-white" id="approach">
          <div className="max-w-6xl mx-auto">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow text-[#bc9f70]">
                  <span className="status-dot" />
                  Methodology
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text="How We Approach Implementation."
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
                    How We Approach <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">Implementation.</span>
                  </span>
                </FoldText>
              </div>
              <p className="section-aside text-[#a8aeb5]">
                A disciplined, five-stage delivery cadence that ensures technical precision, transparent milestones, and zero unpleasant surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
              {service.approach.map((step) => (
                <div
                  key={step.number}
                  className="group relative p-6 rounded-2xl bg-white/[0.08] backdrop-blur-xl md:backdrop-blur-2xl border border-white/20 hover:border-[#bc9f70]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <span className="font-mono text-xs text-[#bc9f70] bg-[#bc9f70]/15 px-2 py-0.5 rounded border border-[#bc9f70]/25 mb-4 inline-block">
                      STEP {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#a8aeb5] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY KHAWIT */}
        <section className="py-20 md:py-28 section-shell border-b border-[#d9d5cc]/60">
          <div className="max-w-6xl mx-auto">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">
                  <span className="status-dot" />
                  The KHAWIT Edge
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text={`Why Partner with KHAWIT for ${service.title}?`}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#33373d] leading-tight block">
                    Why Partner with KHAWIT for <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">{service.title}?</span>
                  </span>
                </FoldText>
              </div>
              <p className="section-aside text-[#565b61]">
                Senior engineering ownership, pragmatic problem solving, and long-term technical accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {service.whyKhawitPoints.map((pt, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-[20px] bg-[#1e2227] hover:bg-[#181a1f] border border-white/10 hover:border-[#bc9f70]/60 transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 text-[#d8c29d] flex items-center justify-center mb-6">
                    <FiShield className="w-5 h-5 text-[#bc9f70]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-[#c4c9d0] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7.5: INDUSTRIES WE TARGET */}
        <IndustriesSection variant="dark" />

        {/* SECTION 8: RELATED SERVICES */}
        <section className="py-20 md:py-24 section-shell bg-[#f0ece3]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <p className="eyebrow mb-2">
                  <span className="status-dot" />
                  Complementary Key Offerings
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text="Related KHAWIT Services."
                >
                  <span className="text-3xl sm:text-4xl font-medium tracking-tight text-[#33373d] leading-tight block">
                    Related KHAWIT <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl font-normal drop-shadow-sm">Services.</span>
                  </span>
                </FoldText>
              </div>
              <Link
                href="/#services"
                className="text-xs font-semibold uppercase tracking-wider text-[#937a4e] hover:text-[#33373d] transition-colors mt-4 sm:mt-0 inline-flex items-center gap-1"
              >
                View All Seven Disciplines <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {service.relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="p-8 rounded-[24px] bg-white border border-[#d9d5cc] hover:border-[#bc9f70] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#937a4e] block mb-2">
                    {rel.eyebrow}
                  </span>
                  <h3 className="text-xl font-semibold text-[#33373d] group-hover:text-[#bc9f70] transition-colors flex items-center justify-between">
                    {rel.title}
                    <FiArrowRight className="w-4 h-4 text-[#878983] group-hover:translate-x-1 group-hover:text-[#bc9f70] transition-transform" />
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: SERVICE SPECIFIC FAQS */}
        <section className="py-20 md:py-28 section-shell bg-[#1e2125] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow text-[#bc9f70]">
                  <span className="status-dot" />
                  Service Questions
                </p>
                <FoldText
                  as="h2"
                  {...headingFold}
                  text={`Common questions about ${service.title}.`}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block">
                    Common questions about <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">{service.title}.</span>
                  </span>
                </FoldText>
              </div>
              <p className="section-aside text-[#a8aeb5]">
                Straightforward technical and commercial answers regarding timelines, technologies, and integration standards.
              </p>
            </div>

            <div className="mt-12 divide-y divide-white/10">
              {service.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group py-6 cursor-pointer focus:outline-none"
                >
                  <summary className="flex items-center justify-between text-left gap-4 list-none text-lg md:text-xl font-medium text-white group-hover:text-[#bc9f70] transition-colors">
                    <span>{faq.question}</span>
                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#bc9f70] shrink-0 group-open:rotate-180 transition-transform">
                      <FiPlus className="group-open:hidden w-4 h-4" />
                      <FiMinus className="hidden group-open:block w-4 h-4" />
                    </span>
                  </summary>
                  <p className="mt-4 text-[#a8aeb5] text-sm md:text-base leading-relaxed pr-10">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL SERVICE CTA */}
        <section className="py-24 section-shell bg-[#33373d] text-white text-center relative overflow-hidden">
          <div className="hero-grid opacity-10 absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-mono tracking-widest text-[#bc9f70] uppercase bg-[#bc9f70]/10 px-3 py-1 rounded-full border border-[#bc9f70]/20 inline-block mb-4">
              NEXT STEPS
            </span>
            <FoldText
              as="h2"
              {...headingFold}
              text={`Ready to build your ${service.title.toLowerCase()} solution?`}
            >
              <span className="text-3xl sm:text-5xl font-medium tracking-tight text-[#f9f6f0] leading-tight block mb-6">
                Ready to build your <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-6xl font-normal drop-shadow-sm">{service.title.toLowerCase()}</span> solution?
              </span>
            </FoldText>
            <p className="text-sm md:text-base text-[#a8aeb5] mb-8 leading-relaxed max-w-xl mx-auto">
              Share your technical requirements or operational objectives with our team. We will evaluate your scope and outline a pragmatic roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/start-project?service=${encodeURIComponent(service.title)}`}
                className="button button-dark rounded-full text-xs font-semibold px-8 py-4 bg-[#bc9f70] text-[#1a1c1e] hover:bg-white transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                {service.ctaText} <FiArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="text-xs font-semibold text-white hover:text-[#bc9f70] transition-colors uppercase tracking-wider px-6 py-4"
              >
                About Our Team <FiArrowRight className="inline ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1a1c1e] text-[#ece8df] py-16 md:py-24 section-shell">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-4 inline-block">
                <Image
                  src="/khawit-logo-nbg.png"
                  alt="KHAWIT Solutions logo"
                  width={48}
                  height={48}
                  className="w-auto h-auto object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="flex flex-col font-bold tracking-widest text-sm text-white">
                  KHAWIT
                  <small className="text-[#9ca3af] font-medium tracking-[0.18em] text-[10px] mt-1">
                    SOLUTIONS
                  </small>
                </span>
              </Link>
              <p className="text-[#9ca3af] text-sm leading-relaxed max-w-sm mt-2">
                Digital products, intelligent systems, and AI-powered experiences built for what&apos;s next.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">
                  Our Seven Services
                </h2>
                {servicesData.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className={`text-sm transition-colors ${
                      s.id === service.id
                        ? "text-[#bc9f70] font-medium"
                        : "text-[#9ca3af] hover:text-[#bc9f70]"
                    }`}
                  >
                    {s.number}. {s.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">
                  Company
                </h2>
                <Link href="/" className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors">
                  Home
                </Link>
                <Link href="/#why-khawit" className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors">
                  Why KHAWIT
                </Link>
                <Link href="/#services" className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors">
                  Services Overview
                </Link>
                <Link href="/#work" className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors">
                  Work &amp; Systems
                </Link>
                <Link href="/about" className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors">
                  About Us
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-[#bc9f70] font-semibold text-xs tracking-widest uppercase mb-2">
                  Connect
                </h2>
                <a
                  href="https://www.linkedin.com/company/khawit-solutions-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"
                >
                  <FaLinkedinIn /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/khawit_solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"
                >
                  <FaInstagram /> Instagram
                </a>
                <a
                  href="https://www.threads.com/@khawit_solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"
                >
                  <FaThreads /> Threads
                </a>
                <a
                  href="mailto:khawitsocialmedia@gmail.com"
                  className="text-sm text-[#9ca3af] hover:text-[#bc9f70] transition-colors inline-flex items-center gap-2"
                >
                  <FiMail /> khawitsocialmedia@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-[#33373d] pt-12 mt-4 gap-6">
            <p className="text-2xl md:text-3xl font-medium text-white">
              Ready to build something meaningful? <br className="md:hidden" />
              <Link
                href={`/start-project?service=${encodeURIComponent(service.title)}`}
                className="text-[#bc9f70] hover:text-white transition-colors inline-flex items-center mt-2 md:mt-0 gap-2"
              >
                Let&apos;s build it. <FiArrowUpRight className="w-6 h-6" />
              </Link>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9ca3af] pt-8 border-t border-[#33373d]/50">
            <span>© {new Date().getFullYear()} KHAWIT Solutions. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href={`/start-project?service=${encodeURIComponent(service.title)}`} className="hover:text-[#bc9f70] transition-colors">
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
