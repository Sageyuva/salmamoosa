"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";

type CountUpProps = {
  value: string;
  className?: string;
};

/** Parse display stats like `1,00,000+` into a numeric target + suffix. */
function parseStat(value: string) {
  const suffix = value.endsWith("+") ? "+" : "";
  const numeric = value.replace(/\+/g, "").replace(/,/g, "");
  const target = Number(numeric);
  return {
    target: Number.isFinite(target) ? target : 0,
    suffix,
  };
}

function formatIndian(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n),
  );
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { target, suffix } = parseStat(value);

    if (prefersReducedMotion()) {
      el.textContent = value;
      return;
    }

    ensureGsapPlugins();

    const state = { n: 0 };
    el.textContent = `0${suffix}`;

    const ctx = gsap.context(() => {
      gsap.to(state, {
        n: target,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${formatIndian(state.n)}${suffix}`;
        },
        onComplete: () => {
          el.textContent = value;
        },
      });
    }, el);

    return () => {
      ctx.revert();
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
