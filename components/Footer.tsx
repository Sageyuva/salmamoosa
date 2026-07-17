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
  "text-sm text-[#6e6e73] transition-all duration-300 hover:text-[#1d1d1f] dark:text-neutral-400 dark:hover:text-white dark:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]";

export default function Footer() {
  return (
    <footer className="relative mt-24 w-full overflow-hidden border-t border-black/[0.08] bg-white/60 px-6 py-16 backdrop-blur-2xl md:px-12 dark:border-white/[0.08] dark:bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20" />

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div>
          <Link
            href="/"
            className={`${signature.className} text-3xl tracking-wide text-[#1d1d1f] select-none transition-opacity hover:opacity-70 dark:text-white/95 dark:hover:opacity-80`}
          >
            Salma Moosa
          </Link>
          <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-[#86868b] dark:text-neutral-400">
            Building Businesses. Mentoring Founders. Empowering Possibilities.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
            Twelve 77 Ventures
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#86868b] dark:text-neutral-400">
            AT WORK - Co-Working Space, 1794/5, 1st Floor, 40th A Cross,
            Jayanagar, 9th Block, Near Post Office, Bangalore 560069, Karnataka,
            India.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
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

      <div className="mx-auto mt-12 flex w-full max-w-5xl flex-col items-start justify-between gap-4 border-t border-black/[0.06] pt-6 text-xs text-[#86868b] md:flex-row md:items-center dark:border-white/[0.05] dark:text-neutral-500">
        <p>© Salma Moosa, 2026. All Rights Reserved.</p>
        <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[11px] tracking-wide text-[#6e6e73] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-400">
          Salma Moosa - Business Growth Mentor
        </span>
      </div>
    </footer>
  );
}
