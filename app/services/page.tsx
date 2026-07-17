import Link from "next/link";
import {
  eyebrowClass,
  fluidGlass,
  glassCardSimple,
  liquidButton,
  pillarTag,
  specularGloss,
} from "@/lib/ui";

const workshops = [
  {
    title: "Strategic Interventions",
    items: ["Business Clarity Audits", "Growth Bottleneck Diagnosis"],
  },
  {
    title: "Vision to Reality",
    items: [
      "Setting Goals Aligned with Vision",
      "Creating GSAs to Bring About Outcomes",
    ],
  },
  {
    title: "Mindset & Culture",
    items: [
      "Aligning Purpose & Boosting Productivity",
      "Building a Thriving Culture",
    ],
  },
] as const;

const pillars = [
  { label: "Twelve 77 Ventures", href: null },
  {
    label: "Signature Presence — Leader & Founder Profile Building",
    href: "/signature-presence",
  },
  {
    label: "Growth Mentors — Business Mentoring for Accelerated Growth",
    href: null,
  },
  {
    label:
      "Fractional CMO & Deep Tech Expert — Driving Revenues & IP Commercialisation",
    href: null,
  },
] as const;

const glassCard = `${glassCardSimple} group hover:-translate-y-1 hover:scale-[1.02]`;

function SpecularGloss() {
  return <span aria-hidden="true" className={specularGloss} />;
}

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Philosophy */}
      <section className="relative px-6 pb-16 pt-20 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className={eyebrowClass}>Services</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl dark:text-white">
            Built on Decades of Experience, Deep Empathy for the Founder Journey
            &amp; a Mission to Simplify Success, Rooted in Action, Clarity &amp;
            Real Outcomes.
          </h1>
        </div>
      </section>

      {/* Interactive Workshops */}
      <section className="relative px-6 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-xl tracking-tighter text-neutral-900 md:text-2xl dark:text-white">
            Interactive Workshops
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {workshops.map((workshop) => (
              <div key={workshop.title} className={glassCard}>
                <SpecularGloss />
                <h3 className="relative text-lg font-semibold tracking-tight text-neutral-900 md:text-xl dark:text-white">
                  {workshop.title}
                </h3>
                <ul className="relative mt-6 space-y-3">
                  {workshop.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-snug text-neutral-500 md:text-base dark:text-neutral-400"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-white/40"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="relative px-6 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-xl tracking-tighter text-neutral-900 md:text-2xl dark:text-white">
            Core Pillars
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((pillar) =>
              pillar.href ? (
                <Link key={pillar.label} href={pillar.href} className={pillarTag}>
                  {pillar.label}
                </Link>
              ) : (
                <span key={pillar.label} className={pillarTag}>
                  {pillar.label}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="relative px-6 pb-24 md:px-12 lg:px-20">
        <div className={`mx-auto w-full max-w-5xl ${fluidGlass}`}>
          <SpecularGloss />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-xl text-2xl leading-tight tracking-tighter text-neutral-900 md:text-3xl dark:text-white">
              Let&apos;s talk about what fits your growth, as a leader or an
              organisation.
            </h2>
            <a
              href="mailto:salma@twelve77ventures.com"
              className={`${liquidButton} px-8 text-sm`}
            >
              Write to salma@twelve77ventures
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
