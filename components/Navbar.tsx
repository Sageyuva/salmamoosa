"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";
import TypeReveal from "@/components/animations/TypeReveal";

const signature = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive"],
});

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/signature-presence", label: "Signature Presence" },
  { href: "/passion", label: "Passion" },
  { href: "/insights", label: "Insights" },
] as const;

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com", Icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com", Icon: FaFacebook },
  { label: "YouTube", href: "https://www.youtube.com", Icon: FaYoutube },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.08] bg-[#f5f5f7]/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0c]/85">
        <nav
          className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-6 px-6"
          aria-label="Primary"
        >
          <Link
            href="/"
            className={`${signature.className} inline-flex h-full min-w-max shrink-0 items-center whitespace-nowrap text-xl font-medium tracking-wide text-[#1d1d1f] select-none transition-opacity hover:opacity-70 dark:text-white/95 dark:hover:opacity-80`}
          >
            <TypeReveal text="Salma Moosa" charDuration={0.045} delay={0.05} />
          </Link>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <div className="hidden items-center gap-3 sm:gap-5 md:flex">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center whitespace-nowrap text-sm font-medium tracking-tight text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f] dark:text-white/70 dark:hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="flex cursor-pointer items-center text-[#1d1d1f] transition-opacity hover:opacity-70 md:hidden dark:text-white/90"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Portal-style overlay — kept outside blurred header so fixed positioning works */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden dark:bg-black/60 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] transform flex-col justify-between border-l border-black/[0.08] bg-[#f5f5f7] p-6 shadow-[-12px_0_40px_rgba(0,0,0,0.08)] transition-transform duration-300 md:hidden dark:border-white/[0.08] dark:bg-[#0a0a0c] dark:shadow-[-12px_0_40px_rgba(0,0,0,0.45)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`${signature.className} text-2xl tracking-wide text-[#1d1d1f] select-none dark:text-white/95`}
            >
              Salma Moosa
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-[#1d1d1f] transition-colors hover:bg-black/[0.08] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/90 dark:hover:bg-white/[0.1]"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-6 py-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium tracking-tight text-[#1d1d1f]/90 transition-colors hover:text-[#1d1d1f] dark:text-white/90 dark:hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
            Channels
          </p>
          <div className="mt-4 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-[#1d1d1f]/70 transition-all duration-300 hover:bg-black/[0.08] hover:text-[#1d1d1f] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70 dark:hover:bg-white/[0.12] dark:hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
