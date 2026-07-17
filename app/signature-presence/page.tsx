import TypeReveal from "@/components/animations/TypeReveal";
import {
  bodyClass,
  eyebrowClass,
  fluidGlass,
  glassCardSimple,
  inputClass,
  softPanel,
  specularGloss,
  submitClass,
} from "@/lib/ui";

const glassCard = glassCardSimple;

const painPoints = [
  "Doing the work… but not seen for it",
  "Experience without structured positioning",
  "Vision that struggles to communicate with clarity",
  "Missed opportunities and diluted perception",
  "Slower growth from an incomplete authority profile",
] as const;

const audience = [
  "Founders building or scaling businesses",
  "Leaders stepping into larger roles",
  "Next-in-command teams preparing for leadership visibility",
  "Professionals ready to be recognised as industry authorities",
] as const;

const journey = [
  {
    step: "01",
    title: "Identity & Clarity",
    description:
      "Define who you are, what you stand for, and the value only you bring.",
  },
  {
    step: "02",
    title: "Positioning & Presence",
    description:
      "Craft a strong, differentiated positioning and build your personal presence across platforms.",
  },
  {
    step: "03",
    title: "Visibility & Storytelling",
    description:
      "Articulate your journey, voice, and expertise through structured storytelling and content.",
  },
  {
    step: "04",
    title: "Execution & Growth",
    description:
      "Translate clarity into action with structured plans and consistent execution.",
  },
  {
    step: "05",
    title: "Speaking & Authority",
    description:
      "Communicate with confidence, influence decisions, and establish yourself as a trusted voice.",
  },
] as const;

const outcomes = [
  "Absolute clarity on your identity and leadership narrative",
  "A powerful, differentiated positioning",
  "Structured visibility across platforms",
  "Strong communication and storytelling ability",
  "A credible, consistent, and authoritative presence",
] as const;

function SpecularGloss() {
  return <span aria-hidden="true" className={specularGloss} />;
}

export default function SignaturePresencePage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-20 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className={eyebrowClass}>Flagship Program</p>
          <h1 className="mt-4 text-4xl tracking-tighter text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            <TypeReveal text="Signature Presence" />
          </h1>
          <p
            className={`mt-6 max-w-3xl text-base leading-relaxed md:text-xl ${bodyClass}`}
          >
            From Identity to Authority. A high-impact, 6-month leadership
            evolution designed for founders, leaders, and next-in-command teams
            ready to step into undeniable authority.
          </p>

          <div
            className={`${softPanel} mt-10 max-w-2xl border-black/[0.08] px-6 py-5 dark:border-white/15`}
          >
            <p className="text-lg font-medium tracking-tight text-neutral-900 md:text-xl dark:text-white">
              This is not a branding exercise.
              <br />
              This is a leadership evolution.
            </p>
          </div>

          <div
            className={`mt-10 flex flex-wrap gap-6 text-sm ${bodyClass}`}
          >
            <p>
              <span className="text-neutral-600 dark:text-white/70">
                Internal —
              </span>{" "}
              Clarity, alignment, conviction
            </p>
            <p>
              <span className="text-neutral-600 dark:text-white/70">
                External —
              </span>{" "}
              Positioning, presence, perception
            </p>
          </div>
        </div>
      </section>

      {/* Why vs Who */}
      <section className="relative px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className={glassCard}>
            <SpecularGloss />
            <h2 className="relative text-2xl tracking-tighter text-neutral-900 dark:text-white">
              Why This Program Exists
            </h2>
            <p className={`relative mt-3 text-sm ${bodyClass}`}>
              Most leaders face a quiet gap between effort and recognition.
            </p>
            <ul className="relative mt-8 space-y-4">
              {painPoints.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-black/[0.06] pb-4 text-sm leading-snug text-neutral-500 last:border-b-0 last:pb-0 md:text-base dark:border-white/[0.06] dark:text-neutral-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-white/40"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="relative mt-8 text-sm font-medium tracking-tight text-neutral-900 dark:text-white">
              Signature Presence bridges that gap.
            </p>
          </div>

          <div className={glassCard}>
            <SpecularGloss />
            <h2 className="relative text-2xl tracking-tighter text-neutral-900 dark:text-white">
              Who It Is For
            </h2>
            <p className={`relative mt-3 text-sm ${bodyClass}`}>
              Built for people ready to lead with clarity and lasting influence.
            </p>
            <ul className="relative mt-8 space-y-4">
              {audience.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-black/[0.06] pb-4 text-sm leading-snug text-neutral-500 last:border-b-0 last:pb-0 md:text-base dark:border-white/[0.06] dark:text-neutral-400"
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
        </div>
      </section>

      {/* Leadership Pillars */}
      <section className="relative px-6 pb-20 md:px-12 lg:px-20">
        <div className={`mx-auto w-full max-w-5xl ${fluidGlass}`}>
          <SpecularGloss />
          <div className="relative">
            <p className={eyebrowClass}>What Makes This Different</p>
            <h2 className="mt-3 max-w-2xl text-2xl tracking-tighter text-neutral-900 md:text-3xl dark:text-white">
              Where deep leadership coaching meets strategic positioning.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className={softPanel}>
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Cherian Kuruvila
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-white/50">
                  Business Coach
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed md:text-base ${bodyClass}`}
                >
                  Decades of experience coaching leaders across sectors,
                  bringing clarity, direction, and commitment to their vision.
                </p>
              </div>

              <div className={softPanel}>
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Salma Moosa
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-white/50">
                  Profile Strategist
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed md:text-base ${bodyClass}`}
                >
                  Decades of experience designing, positioning, and building
                  powerful founder and leader profiles.
                </p>
              </div>
            </div>

            <p className="mt-8 text-base font-medium tracking-tight text-neutral-900 md:text-lg dark:text-white">
              Together, this program integrates who you are with how the world
              sees you.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="relative px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-3xl tracking-tighter text-neutral-900 md:text-4xl dark:text-white">
            The Transformation Journey
          </h2>
          <p className={`mt-3 max-w-xl ${bodyClass}`}>
            Five stages from identity to undeniable authority.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((item, index) => (
              <div
                key={item.step}
                className={`${glassCard} ${
                  index === journey.length - 1
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <SpecularGloss />
                <span className={`relative ${eyebrowClass}`}>{item.step}</span>
                <h3 className="relative mt-4 text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p
                  className={`relative mt-3 text-sm leading-relaxed ${bodyClass}`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl tracking-tighter text-neutral-900 md:text-4xl dark:text-white">
                What You Will Walk Away With
              </h2>
              <p className="mt-6 text-lg font-medium tracking-tight text-neutral-900 dark:text-white">
                You don&apos;t just build a brand. You become the authority your
                space recognises.
              </p>
            </div>
            <ul className="space-y-4 lg:col-span-7">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-black/[0.06] pb-4 text-base text-neutral-500 last:border-b-0 dark:border-white/[0.06] dark:text-neutral-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-white/50"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Format + Apply Form */}
      <section className="relative px-6 pb-28 md:px-12 lg:px-20">
        <div className={`mx-auto w-full max-w-5xl ${fluidGlass}`}>
          <SpecularGloss />
          <div className="relative">
            <div
              className={`flex flex-col gap-3 text-sm md:flex-row md:flex-wrap md:gap-x-8 md:gap-y-2 md:text-base ${bodyClass}`}
            >
              <p>
                <span className="text-neutral-900 dark:text-white">
                  Duration:
                </span>{" "}
                6 Months
              </p>
              <p>
                <span className="text-neutral-900 dark:text-white">
                  Format:
                </span>{" "}
                Mentored, High-Touch Engagement
              </p>
              <p>
                <span className="text-neutral-900 dark:text-white">
                  Designed for:
                </span>{" "}
                Individuals &amp; Teams
              </p>
            </div>

            <h2 className="mt-10 max-w-2xl text-3xl tracking-tighter text-neutral-900 md:text-4xl dark:text-white">
              Ready to build a presence that reflects your true authority?
            </h2>
            <p className={`mt-4 max-w-xl ${bodyClass}`}>
              Apply for Signature Presence by connecting with us to explore fit.
            </p>

            <form
              className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
              action="#"
              method="post"
            >
              <div>
                <label htmlFor="sp-name" className="sr-only">
                  Name
                </label>
                <input
                  id="sp-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="sp-email" className="sr-only">
                  Email
                </label>
                <input
                  id="sp-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="sp-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="sp-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Message"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="md:col-span-2 flex justify-end pt-2">
                <button type="submit" className={submitClass}>
                  Apply for Signature Presence
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
