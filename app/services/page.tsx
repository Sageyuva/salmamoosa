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
  "Twelve 77 Ventures",
  "Signature Presence — Leader & Founder Profile Building",
  "Growth Mentors — Business Mentoring for Accelerated Growth",
  "Fractional CMO & Deep Tech Expert — Driving Revenues & IP Commercialisation",
] as const;

const glassCard =
  "group relative overflow-hidden backdrop-blur-lg bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.14] hover:scale-[1.02] hover:-translate-y-1";

const fluidGlass =
  "relative overflow-hidden backdrop-blur-2xl bg-white/[0.05] border border-white/[0.12] rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.35)]";

const liquidButton =
  "inline-flex items-center justify-center rounded-full border border-white/[0.2] bg-white/[0.08] px-8 py-3 text-sm font-medium tracking-tight text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.15] active:scale-[0.98] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]";

const pillarTag =
  "backdrop-blur-md bg-white/[0.04] border border-white/[0.08] px-6 py-3 rounded-full text-sm text-neutral-300 font-medium transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.07] hover:text-white";

function SpecularGloss() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent"
    />
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Philosophy */}
      <section className="relative px-6 pb-16 pt-20 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            Services
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-medium tracking-tight text-white md:text-5xl">
            Built on Decades of Experience, Deep Empathy for the Founder Journey
            &amp; a Mission to Simplify Success, Rooted in Action, Clarity &amp;
            Real Outcomes.
          </h1>
        </div>
      </section>

      {/* Interactive Workshops */}
      <section className="relative px-6 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-xl tracking-tighter text-white md:text-2xl">
            Interactive Workshops
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {workshops.map((workshop) => (
              <div key={workshop.title} className={glassCard}>
                <SpecularGloss />
                <h3 className="relative text-lg font-semibold tracking-tight text-white md:text-xl">
                  {workshop.title}
                </h3>
                <ul className="relative mt-6 space-y-3">
                  {workshop.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-snug text-neutral-400 md:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-white/40"
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
          <h2 className="text-xl tracking-tighter text-white md:text-2xl">
            Core Pillars
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((pillar) => (
              <span key={pillar} className={pillarTag}>
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="relative px-6 pb-24 md:px-12 lg:px-20">
        <div className={`mx-auto w-full max-w-5xl ${fluidGlass}`}>
          <SpecularGloss />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-xl text-2xl leading-tight tracking-tighter text-white md:text-3xl">
              Let&apos;s talk about what fits your growth, as a leader or an
              organisation.
            </h2>
            <a
              href="mailto:salma@twelve77ventures.com"
              className={liquidButton}
            >
              Write to salma@twelve77ventures
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
