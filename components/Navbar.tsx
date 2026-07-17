import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const signature = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive"],
});

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/ventures", label: "Ventures" },
  { href: "/insights", label: "Insights" },
] as const;

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <nav
        className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-8 px-6"
        aria-label="Primary"
      >
        <Link
          href="/"
          className={`${signature.className} inline-flex h-full min-w-max shrink-0 items-center whitespace-nowrap text-xl font-medium tracking-wide text-white/95 select-none transition-opacity hover:opacity-80`}
        >
          Salma Moosa
        </Link>

        <div className="flex shrink-0 items-center gap-6 sm:gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center whitespace-nowrap text-sm font-medium tracking-tight text-white/70 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
