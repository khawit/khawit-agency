"use client";

import { gsap } from "gsap";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import styles from "./text-loop.module.css";

const viewWidth = 1200;
const viewHeight = 520;
const centerX = viewWidth / 2;
const centerY = viewHeight / 2;
const edgePadding = 6;

type TextLoopShape = "wave" | "circle" | "infinity" | "arch" | "line";
type TextLoopDirection = "forward" | "reverse";

type TextLoopProps = {
  text?: string;
  shape?: TextLoopShape;
  path?: string;
  speed?: number;
  direction?: TextLoopDirection;
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  pauseOnHover?: boolean;
  className?: string;
  style?: CSSProperties;
};

function buildPath(shape: TextLoopShape, curviness: number, ribbonWidth: number): string {
  const curve = Math.max(0, curviness);
  const room = Math.max(20, centerY - Math.max(0, ribbonWidth) / 2 - edgePadding);

  switch (shape) {
    case "circle": {
      const radius = Math.min(90 + curve * 0.95, room);
      return `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX + radius} ${centerY} A ${radius} ${radius} 0 1 1 ${centerX - radius} ${centerY} Z`;
    }
    case "infinity": {
      const radius = 150 + curve * 1.4;
      const height = Math.min(60 + curve * 0.95, room);
      return [
        `M ${centerX} ${centerY}`,
        `C ${centerX + radius * 0.55} ${centerY - height} ${centerX + radius} ${centerY - height} ${centerX + radius} ${centerY}`,
        `C ${centerX + radius} ${centerY + height} ${centerX + radius * 0.55} ${centerY + height} ${centerX} ${centerY}`,
        `C ${centerX - radius * 0.55} ${centerY - height} ${centerX - radius} ${centerY - height} ${centerX - radius} ${centerY}`,
        `C ${centerX - radius} ${centerY + height} ${centerX - radius * 0.55} ${centerY + height} ${centerX} ${centerY}`,
        "Z",
      ].join(" ");
    }
    case "arch": {
      const rise = Math.min(120 + curve * 1.1, room * 2);
      return `M 120 ${centerY + rise / 2} Q ${centerX} ${centerY - rise * 1.5} ${viewWidth - 120} ${centerY + rise / 2}`;
    }
    case "line":
      return `M -320 ${centerY} L ${viewWidth + 320} ${centerY}`;
    case "wave":
    default: {
      const amplitude = Math.min(curve * 2.2, room * 2);
      return `M -320 ${centerY} Q -160 ${centerY - amplitude} 0 ${centerY} T 320 ${centerY} T 640 ${centerY} T 960 ${centerY} T 1280 ${centerY} T ${viewWidth + 320} ${centerY}`;
    }
  }
}

export default function TextLoop({
  text = "React ✦ Bits",
  shape = "wave",
  path,
  speed = 90,
  direction = "forward",
  separator = "✦",
  curviness = 90,
  fontSize = 46,
  fontWeight = 800,
  letterSpacing = 2,
  uppercase = true,
  color = "#ffffff",
  ribbon = true,
  ribbonColor = "#5227ff",
  ribbonWidth = 86,
  pauseOnHover = true,
  className = "",
  style = {},
}: TextLoopProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const headRef = useRef<SVGTextPathElement>(null);
  const tailRef = useRef<SVGTextPathElement>(null);
  const [metrics, setMetrics] = useState({ length: 0, repetitions: 1 });

  const rawId = useId();
  const pathId = `text-loop-${rawId.replace(/:/g, "")}`;
  const pathData = useMemo(
    () => path || buildPath(shape, curviness, ribbonWidth),
    [path, shape, curviness, ribbonWidth],
  );
  const unit = useMemo(() => {
    const base = uppercase ? String(text).toUpperCase() : String(text);
    const gap = separator ? `\u00a0${separator}\u00a0` : "\u00a0\u00a0\u00a0";
    return `${base}${gap}`;
  }, [text, separator, uppercase]);
  const textStyle: CSSProperties = {
    fontSize: `${fontSize}px`,
    fontWeight,
    letterSpacing: `${letterSpacing}px`,
  };

  useLayoutEffect(() => {
    const pathElement = pathRef.current;
    const measureElement = measureRef.current;
    if (!pathElement || !measureElement) return;

    let cancelled = false;
    let frame = 0;
    const measure = () => {
      if (cancelled) return;
      frame = requestAnimationFrame(() => {
        if (cancelled) return;
        try {
          const length = pathElement.getTotalLength();
          const unitWidth = measureElement.getComputedTextLength();
          if (!length) return;
          const repetitions = unitWidth > 0 ? Math.max(1, Math.round(length / unitWidth)) : 1;
          setMetrics((previous) =>
            previous.length === length && previous.repetitions === repetitions
              ? previous
              : { length, repetitions },
          );
        } catch {
          return;
        }
      });
    };

    measure();
    if (document.fonts?.ready) void document.fonts.ready.then(measure).catch(() => undefined);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathData, unit, fontSize, fontWeight, letterSpacing]);

  useEffect(() => {
    const { length } = metrics;
    const head = headRef.current;
    const tail = tailRef.current;
    if (!head || !tail || !length) return;

    const applyOffset = (offset: number) => {
      const partnerOffset = offset >= 0 ? offset - length : offset + length;
      head.setAttribute("startOffset", String(offset));
      tail.setAttribute("startOffset", String(partnerOffset));
    };

    applyOffset(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || speed <= 0) return;

    const state = { offset: 0 };
    const tween = gsap.to(state, {
      offset: direction === "reverse" ? -length : length,
      duration: length / speed,
      ease: "none",
      repeat: -1,
      onUpdate: () => applyOffset(state.offset),
    });

    const root = rootRef.current;
    const pause = () => tween.pause();
    const resume = () => tween.resume();
    if (pauseOnHover && root) {
      root.addEventListener("pointerenter", pause);
      root.addEventListener("pointerleave", resume);
    }

    return () => {
      tween.kill();
      if (pauseOnHover && root) {
        root.removeEventListener("pointerenter", pause);
        root.removeEventListener("pointerleave", resume);
      }
    };
  }, [metrics, speed, direction, pauseOnHover]);

  const loopText = unit.repeat(metrics.repetitions);
  const fittedLength = metrics.length || undefined;
  const combinedClassName = `${styles.textLoop} ${className}`.trim();

  return (
    <div ref={rootRef} className={combinedClassName} style={style}>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={text}
      >
        <path
          ref={pathRef}
          id={pathId}
          d={pathData}
          fill="none"
          stroke={ribbon ? ribbonColor : "none"}
          strokeWidth={ribbon ? ribbonWidth : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text ref={measureRef} className={styles.measure} style={textStyle} aria-hidden="true">
          {unit}
        </text>
        <text
          className={styles.text}
          style={textStyle}
          fill={color}
          dominantBaseline="central"
          aria-hidden="true"
          textLength={fittedLength}
          lengthAdjust="spacing"
        >
          <textPath ref={headRef} href={`#${pathId}`} startOffset={0}>
            {loopText}
          </textPath>
        </text>
        <text
          className={styles.text}
          style={textStyle}
          fill={color}
          dominantBaseline="central"
          aria-hidden="true"
          textLength={fittedLength}
          lengthAdjust="spacing"
        >
          <textPath ref={tailRef} href={`#${pathId}`} startOffset={0}>
            {loopText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
