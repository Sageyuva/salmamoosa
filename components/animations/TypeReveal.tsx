"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type TypeRevealProps = {
  text: string;
  className?: string;
  /** Seconds per character — keep crisp and minimal. */
  charDuration?: number;
  delay?: number;
};

/**
 * Low-profile character typing reveal (no blinking cursor).
 * Layout stays stable via an invisible full-text spacer.
 */
export default function TypeReveal({
  text,
  className,
  charDuration = 0.035,
  delay = 0.15,
}: TypeRevealProps) {
  const liveRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = liveRef.current;
    if (!el || !mounted) return;

    if (prefersReducedMotion()) {
      el.textContent = text;
      return;
    }

    const state = { len: 0 };
    el.textContent = "";

    const tween = gsap.to(state, {
      len: text.length,
      duration: Math.max(0.55, text.length * charDuration),
      delay,
      ease: "none",
      onUpdate: () => {
        el.textContent = text.slice(0, Math.round(state.len));
      },
      onComplete: () => {
        el.textContent = text;
      },
    });

    return () => {
      tween.kill();
      el.textContent = text;
    };
  }, [text, charDuration, delay, mounted]);

  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <span aria-hidden="true" className="invisible whitespace-pre-wrap">
        {text}
      </span>
      <span
        ref={liveRef}
        aria-hidden="true"
        className="absolute inset-0 whitespace-pre-wrap"
      >
        {mounted ? "" : text}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
