"use client";

import React from "react";
import Link from "next/link";
import { FoldText } from "@/components/fold-text";
import { FiArrowRight } from "react-icons/fi";
import {
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiHome,
  FiHeart,
  FiTruck,
  FiBookOpen,
  FiPackage,
  FiNavigation,
  FiMap,
  FiZap,
  FiTrendingUp
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface Industry {
  name: string;
  icon: IconType;
}

const industries: Industry[] = [
  { name: "Finance & Accounting", icon: FiDollarSign },
  { name: "HR & Recruitment", icon: FiUsers },
  { name: "Sales & E-commerce", icon: FiShoppingCart },
  { name: "Real Estate", icon: FiHome },
  { name: "Healthcare & Clinics", icon: FiHeart },
  { name: "Manufacturing & Supply Chain", icon: FiTruck },
  { name: "Education & Training", icon: FiBookOpen },
  { name: "Retail & Distribution", icon: FiPackage },
  { name: "Logistics & Delivery", icon: FiNavigation },
  { name: "Travel & Hospitality", icon: FiMap },
  { name: "Startups & Tech Companies", icon: FiZap },
  { name: "Marketing Agencies", icon: FiTrendingUp },
];

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

export function IndustriesSection({ variant = "dark" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-12 md:py-16 section-shell ${
        isDark
          ? "bg-[#1e2125] text-white"
          : "bg-[#f0ece3] text-[#33373d]"
      }`}
      aria-labelledby="industries-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="section-heading reveal mb-14">
          <div>
            <p className={`eyebrow ${isDark ? "text-[#bc9f70]" : ""}`}>
              <span className="status-dot" />
              Who We Serve
            </p>
            <FoldText
              as="h2"
              {...headingFold}
              id="industries-title"
              text="Industries Powered by Automation."
            >
              <span
                className={`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight block ${
                  isDark ? "text-[#f9f6f0]" : "text-[#33373d]"
                }`}
              >
                Industries Powered by{" "}
                <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">
                  Automation.
                </span>
              </span>
            </FoldText>
          </div>
          <p className={`section-aside ${isDark ? "text-[#a8aeb5]" : "text-[#565b61]"}`}>
            We deliver automation, AI, and digital solutions to businesses across a wide range of industries — helping teams reduce manual work, increase efficiency, and scale intelligently.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 reveal">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className={`group relative p-6 md:p-7 rounded-[18px] border transition-all duration-300 hover:-translate-y-1 flex flex-col items-start gap-4 overflow-hidden ${
                  isDark
                    ? "bg-white/[0.06] backdrop-blur-md border-white/15 hover:border-[#bc9f70]/60 shadow-[0_10px_24px_-6px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_32px_-6px_rgba(188,159,112,0.2)]"
                    : "bg-white border-[#d9d5cc] hover:border-[#bc9f70] shadow-sm hover:shadow-md"
                }`}
              >
                {/* Top sheen */}
                <div
                  className={`absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent to-transparent pointer-events-none transition-colors duration-300 ${
                    isDark
                      ? "via-white/25 group-hover:via-[#bc9f70]"
                      : "via-[#d9d5cc] group-hover:via-[#bc9f70]"
                  }`}
                />

                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? "bg-[#33373d] border border-white/15 text-[#bc9f70] group-hover:bg-[#bc9f70] group-hover:text-[#1a1c20]"
                      : "bg-[#33373d] text-[#bc9f70] group-hover:bg-[#bc9f70] group-hover:text-[#1a1c20]"
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <h3
                  className={`text-sm md:text-base font-semibold leading-snug transition-colors ${
                    isDark
                      ? "text-[#f9f6f0] group-hover:text-[#bc9f70]"
                      : "text-[#33373d] group-hover:text-[#bc9f70]"
                  }`}
                >
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <div className="mt-10 md:mt-14 text-center reveal">
          <Link
            href="/start-project"
            className={`inline-flex items-center gap-2 text-sm md:text-base font-semibold transition-colors duration-300 group ${
              isDark
                ? "text-[#bc9f70] hover:text-white"
                : "text-[#937a4e] hover:text-[#33373d]"
            }`}
          >
            <span>Don&apos;t see your industry? We build custom.</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
