"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";

type MaskRevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before reveal starts (seconds). */
  delay?: number;
  /** When true, waits for scroll into view. */
  scroll?: boolean;
};

/**
 * Horizontal clip-path mask reveal with a soft inner scale settle.
 * Avoids opacity:0 so content never gets stuck invisible on cleanup.
 */
export default function MaskReveal({
  children,
  className,
  delay = 0.1,
  scroll = false,
}: MaskRevealProps) {
  const maskRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mask = maskRef.current;
    const media = mediaRef.current;
    if (!mask || !media) return;

    if (prefersReducedMotion()) {
      gsap.set(mask, { clipPath: "inset(0 0% 0 0)" });
      gsap.set(media, { scale: 1 });
      return;
    }

    ensureGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.set(mask, { clipPath: "inset(0 100% 0 0)" });
      gsap.set(media, { scale: 1.08 });

      const tl = gsap.timeline({
        delay,
        ...(scroll
          ? {
              scrollTrigger: {
                trigger: mask,
                start: "top 80%",
                once: true,
              },
            }
          : {}),
      });

      tl.to(mask, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.15,
        ease: "power2.out",
      }).to(
        media,
        {
          scale: 1,
          duration: 1.25,
          ease: "power2.out",
        },
        0,
      );
    }, mask);

    return () => {
      ctx.revert();
      gsap.set(mask, { clearProps: "clipPath" });
      gsap.set(media, { clearProps: "transform" });
    };
  }, [delay, scroll]);

  return (
    <div ref={maskRef} className={className} style={{ clipPath: "inset(0 0% 0 0)" }}>
      <div ref={mediaRef} className="relative h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
