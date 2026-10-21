import React from "react";
import { FoldText } from "@/components/fold-text";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  emphasis?: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
}

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

export function SectionHeader({
  eyebrow,
  title,
  emphasis,
  description,
  id,
  align = "left"
}: SectionHeaderProps) {
  if (align === "center") {
    return (
      <div className="section-heading-centered reveal text-center max-w-3xl mx-auto mb-16" id={id}>
        <p className="eyebrow justify-center mb-3">
          <span className="status-dot" />
          {eyebrow}
        </p>
        <FoldText as="h2" {...headingFold} text={title + (emphasis ? ` ${emphasis}` : "")}>
          <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight block">
            {title} {emphasis && <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">{emphasis}</span>}
          </span>
        </FoldText>
        {description && (
          <p className="mt-4 text-[#ece8df]/85 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="section-heading reveal" id={id}>
      <div>
        <p className="eyebrow">
          <span className="status-dot" />
          {eyebrow}
        </p>
        <FoldText as="h2" {...headingFold} text={title + (emphasis ? ` ${emphasis}` : "")}>
          <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight block">
            {title} <br className="hidden sm:inline" />
            {emphasis && <span className="font-cursive italic text-[#bc9f70] text-4xl sm:text-5xl md:text-6xl font-normal drop-shadow-sm">{emphasis}</span>}
          </span>
        </FoldText>
      </div>
      {description && <p className="section-aside">{description}</p>}
    </div>
  );
}
