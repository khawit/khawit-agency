"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

type HeadingTag = "h1" | "h2" | "h3";
type SplitBy = "char" | "word";
type Hinge = "top" | "bottom";
type Trigger = "scroll" | "load";

type FoldTextProps = {
  as: HeadingTag;
  children?: ReactNode;
  text?: string;
  label?: string;
  id?: string;
  className?: string;
  splitBy?: SplitBy;
  hinge?: Hinge;
  trigger?: Trigger;
  duration?: number;
  stagger?: number;
  ease?: string;
  perspective?: number;
  creaseShading?: number;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
};

type FoldStyle = CSSProperties & {
  "--fold-duration": string;
  "--fold-ease": string;
  "--fold-origin": string;
  "--fold-angle": string;
  "--fold-crease": number;
};

function foldNodes(
  node: ReactNode,
  splitBy: SplitBy,
  stagger: number,
  characterIndex: { current: number },
): ReactNode {
  if (typeof node === "string") {
    const wordsAndSpaces = node.split(/(\s+)/);
    return wordsAndSpaces.map((wordOrSpace, wIndex) => {
      if (/^\s+$/.test(wordOrSpace)) {
        return wordOrSpace;
      }
      
      const segments = splitBy === "char" ? Array.from(wordOrSpace) : [wordOrSpace];
      
      const parts = segments.map((segment, index) => {
        const delay = characterIndex.current * stagger;
        characterIndex.current += splitBy === "char" ? 1 : segment.length;
        return (
          <span
            className="fold-character"
            key={`${index}-${delay}`}
            aria-hidden="true"
            style={{ "--fold-delay": `${delay}s` } as CSSProperties}
          >
            {segment}
          </span>
        );
      });
      
      return (
        <span className="fold-word" key={`word-${wIndex}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {parts}
        </span>
      );
    });
  }

  if (Array.isArray(node)) {
    return Children.map(node, (child) => foldNodes(child, splitBy, stagger, characterIndex));
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return cloneElement(node as ReactElement<{ children?: ReactNode }>, {
      children: foldNodes(node.props.children, splitBy, stagger, characterIndex),
    });
  }

  return node;
}

export function FoldText({
  as,
  children,
  text,
  label,
  id,
  className,
  splitBy = "char",
  hinge = "top",
  trigger = "scroll",
  duration = 0.65,
  stagger = 0.045,
  ease = "power3.out",
  perspective = 700,
  creaseShading = 0.55,
  fontSize,
  fontWeight,
  color,
}: FoldTextProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const Heading = as;
  const content = children ?? text ?? "";
  const easing = ease === "power3.out" ? "cubic-bezier(.22,1,.36,1)" : ease;
  const style: FoldStyle = {
    "--fold-duration": `${duration}s`,
    "--fold-ease": easing,
    "--fold-origin": hinge === "top" ? "center top" : "center bottom",
    "--fold-angle": hinge === "top" ? "-82deg" : "82deg",
    "--fold-crease": creaseShading,
    perspective: `${perspective}px`,
    ...(fontSize ? { fontSize } : {}),
    ...(fontWeight ? { fontWeight } : {}),
    ...(color ? { color } : {}),
  };

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    if (!heading.hasAttribute("aria-label")) {
      heading.setAttribute("aria-label", heading.innerText.replace(/\s+/g, " ").trim());
    }
    heading.dataset.ready = "true";

    if (trigger === "load" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      heading.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        heading.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(heading);
    return () => observer.disconnect();
  }, [trigger]);

  return (
    <Heading
      ref={headingRef}
      id={id}
      className={`fold-text${className ? ` ${className}` : ""}`}
      aria-label={label ?? text}
      style={style}
    >
      {foldNodes(content, splitBy, stagger, { current: 0 })}
    </Heading>
  );
}
