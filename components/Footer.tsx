import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const signature = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive"],
});

const channels = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
] as const;

const linkClass =
  "text-sm text-neutral-400 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]";

export default function Footer() {
  return (
    <footer className="relative mt-24 w-full overflow-hidden border-t border-white/[0.08] bg-white/[0.02] px-6 py-16 backdrop-blur-2xl md:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Brand Legacy */}
        <div>
          <Link
            href="/"
            className={`${signature.className} text-3xl tracking-wide text-white/95 select-none transition-opacity hover:opacity-80`}
          >
            Salma Moosa
          </Link>
          <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-neutral-400">
            Building Businesses. Mentoring Founders. Empowering Possibilities.
          </p>
        </div>

        {/* The Firm */}
        <div>
          <h3 className="text-sm font-semibold tracking-tight text-white">
            Twelve 77 Ventures
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            AT WORK - Co-Working Space, 1794/5, 1st Floor, 40th A Cross,
            Jayanagar, 9th Block, Near Post Office, Bangalore 560069, Karnataka,
            India.
          </p>
        </div>

        {/* Direct Connect */}
        <div>
          <h3 className="text-sm font-semibold tracking-tight text-white">
            Get In Touch
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href="tel:+919980015351" className={linkClass}>
                +91 99800 15351
              </a>
            </li>
            <li>
              <a href="mailto:salma@twelve77ventures.com" className={linkClass}>
                salma@twelve77ventures.com
              </a>
            </li>
            <li>
              <a
                href="https://www.twelve77ventures.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                www.twelve77ventures.com
              </a>
            </li>
          </ul>
        </div>

        {/* Digital Footprint */}
        <div>
          <h3 className="text-sm font-semibold tracking-tight text-white">
            Channels
          </h3>
          <ul className="mt-4 space-y-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-6 text-xs text-neutral-500 md:flex-row md:items-center">
        <p>© Salma Moosa, 2026. All Rights Reserved.</p>
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] tracking-wide text-neutral-400 backdrop-blur-md">
          Designed with Empathy &amp; Structure
        </span>
      </div>
    </footer>
  );
}
