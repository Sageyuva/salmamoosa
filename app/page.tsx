import Image from "next/image";
import Link from "next/link";
import {
  bodyClass,
  chip,
  eyebrowClass,
  fluidGlassHero,
  glassCard,
  liquidButton,
  specularGloss,
} from "@/lib/ui";

const impactCards = [
  {
    stat: "1,00,000+",
    label: "Entrepreneurs Supported though Communities",
  },
  {
    stat: "40,000+",
    label: "Hours of Mentoring & Founder Profile Positioning",
  },
  {
    stat: "1,000+",
    label: "Startups & Businesses Mentored",
  },
  {
    stat: "300+",
    label: "Crores of Funding Enabled",
  },
  {
    stat: "40+",
    label: "Traditional Businesses Accelerated",
  },
  {
    stat: "8+",
    label: "Startups Personally Invested In",
  },
] as const;

const industries = [
  {
    title: "Real Estate",
    description:
      "Building the largest sector enabling the nation's economy, specializing in Tier 2 & 3 city world-class developments.",
  },
  {
    title: "Health Technology",
    description:
      "Helping build patient-centric, compliant, and sustainable health tech models.",
  },
  {
    title: "Mobility",
    description:
      "Optimizing B2B logistics, EV, and transport tech ventures for global scalability.",
  },
  {
    title: "Marine Robotics",
    description:
      "Serving as CMO of EyeROV, leading expansion strategy for APAC and Middle East subsea market entry.",
  },
  {
    title: "Clean Technology",
    description:
      "Driving growth for cleantech startups in energy, climate, and circular economy sectors.",
  },
  {
    title: "Cross-Sector Scale",
    description:
      "Advisory footprints across Startups, Traditional Businesses, Legal-Tech, and Government Innovation Programs.",
  },
] as const;

function SpecularGloss() {
  return <span aria-hidden="true" className={specularGloss} />;
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative px-6 pb-24 pt-20 md:px-12 lg:px-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-14">
          <div className="order-1 shrink-0 md:order-2">
            <div className="relative mx-auto size-44 overflow-hidden rounded-full bg-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/10 sm:size-52 md:size-56 lg:size-60 dark:bg-white/5 dark:shadow-[0_12px_40px_rgba(0,0,0,0.45)] dark:ring-white/15">
              <Image
                src="/images/hero.png"
                alt="Salma Moosa"
                fill
                sizes="240px"
                priority
                className="object-cover object-[50%_18%]"
              />
            </div>
          </div>

          <div className="order-2 w-full min-w-0 flex-1 text-center md:order-1 md:text-left">
            <h1 className="text-[1.85rem] font-semibold leading-[1.12] tracking-tighter text-neutral-900 sm:text-4xl md:text-[2.75rem] lg:text-5xl dark:text-white">
              Building Businesses.
              <br className="hidden sm:block" />{" "}
              Mentoring Founders.
              <br className="hidden sm:block" />{" "}
              Empowering Possibilities.
            </h1>
            <p
              className={`mx-auto mt-6 max-w-lg text-base leading-relaxed md:mx-0 md:mt-7 md:text-lg ${bodyClass}`}
            >
              Welcome to the world of Salma Moosa, where entrepreneurship meets
              empathy, structure meets scale, and clarity meets execution. Three
              decades of transforming businesses and mentoring thousands of
              leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="relative px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-10 md:mb-12">
            <p className={eyebrowClass}>Track Record</p>
            <h2 className="mt-3 text-3xl tracking-tighter text-neutral-900 md:text-4xl dark:text-white">
              Impact Highlights
            </h2>
            <p className={`mt-3 max-w-xl text-base md:text-lg ${bodyClass}`}>
              Three decades of measurable outcomes across communities, founders,
              and capital.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactCards.map((card) => (
              <div key={card.stat} className={glassCard}>
                <SpecularGloss />
                <span className="relative text-3xl font-semibold tracking-tighter text-neutral-900 md:text-4xl dark:text-white">
                  {card.stat}
                </span>
                <p
                  className={`relative mt-4 text-sm leading-snug md:text-base ${bodyClass}`}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="relative px-6 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={eyebrowClass}>Expertise</p>
            <h2 className="mt-3 text-3xl tracking-tighter text-neutral-900 md:text-4xl dark:text-white">
              Services
            </h2>
            <p className={`mt-3 max-w-xl text-base md:text-lg ${bodyClass}`}>
              Strategic interventions, founder mentoring, and growth systems
              built for real outcomes.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 transition-opacity hover:opacity-70 dark:text-white"
          >
            Explore Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Industries */}
      <section className="relative px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-3xl tracking-tighter text-neutral-900 md:text-4xl dark:text-white">
            Industries
          </h2>
          <p
            className={`mt-3 max-w-2xl text-base tracking-tight md:text-lg ${bodyClass}`}
          >
            Shaping the future with an active footprint across Indian and global
            ecosystems.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className={glassCard}>
                <SpecularGloss />
                <h3 className="relative text-lg font-semibold tracking-tight text-neutral-900 md:text-xl dark:text-white">
                  {industry.title}
                </h3>
                <p
                  className={`relative mt-4 text-sm leading-relaxed md:text-base ${bodyClass}`}
                >
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fat2Fit — Product Announcement */}
      <section className="relative px-6 pb-28 md:px-12 lg:px-20">
        <div className={`mx-auto w-full max-w-5xl ${fluidGlassHero}`}>
          <SpecularGloss />
          <div className="relative grid grid-cols-1 items-center gap-12 p-8 md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className={`inline-flex items-center ${chip}`}>
                Now Live
              </span>

              <h2 className="mt-6 text-3xl leading-tight tracking-tighter text-neutral-900 md:text-4xl dark:text-white">
                Fat2Fit — An Invitation to a Real Journey of Transformation
              </h2>

              <p
                className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${bodyClass}`}
              >
                Born from five years of lived experience, setbacks, resilience,
                and quiet consistency, Fat2Fit shares an honest, no-formula
                approach to health that goes far beyond weight loss. If you’ve
                ever struggled with food, motivation, self-belief, ageing
                challenges, or starting again, this book will meet you exactly
                where you are.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-2xl border border-teal-600/20 bg-teal-500/10 p-5 backdrop-blur-md md:p-6 dark:border-teal-400/20 dark:bg-teal-500/[0.08]">
                <SpecularGloss />
                <p className="relative text-sm leading-relaxed text-teal-900/90 md:text-base dark:text-teal-100/90">
                  We have partnered with Mind Empowered (Kochi). A portion of the
                  Author’s Royalty from every book purchase will be contributed
                  to support women and children&apos;s mental health and
                  well-being.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#order" className={liquidButton}>
                  Order Your Copy
                </a>
                <a href="#call" className={liquidButton}>
                  Request a Call
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="group relative mx-auto w-full max-w-sm">
                <div className="relative transform overflow-hidden rounded-2xl border border-black/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02] dark:border-white/10">
                  <Image
                    src="/images/book.png"
                    alt="Fat2Fit by Salma Moosa — Available Now on Notion Press and Amazon"
                    width={800}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
