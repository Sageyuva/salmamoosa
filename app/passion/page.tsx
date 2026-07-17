import Image from "next/image";
import MaskReveal from "@/components/animations/MaskReveal";
import TypeReveal from "@/components/animations/TypeReveal";
import {
  bodyClass,
  eyebrowClass,
  fluidGlass,
  glassCardSimple,
  liquidButton,
  specularGloss,
} from "@/lib/ui";

function SpecularGloss() {
  return <span aria-hidden="true" className={specularGloss} />;
}

export default function PassionPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-20 md:px-12 lg:px-20">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <p className={eyebrowClass}>Community Movement</p>
            <h1 className="mt-4 text-4xl tracking-tighter text-neutral-900 sm:text-5xl md:text-6xl dark:text-white">
              <TypeReveal text="The Next Curve" />
            </h1>
            <p className="mt-4 text-lg tracking-tight text-neutral-500 md:text-xl dark:text-neutral-400">
              <TypeReveal
                text="Growing Older. Living Better. Becoming More."
                delay={0.75}
                charDuration={0.028}
              />
            </p>
            <p
              className={`mt-8 max-w-xl text-base leading-relaxed md:text-lg ${bodyClass}`}
            >
              A movement dedicated to reinventing ageing for people and
              regenerative living for the planet. Born from a personal journey of
              transformation, it brings together science, lived experiences, and
              community.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md md:mx-0 md:justify-self-end">
            <div className="animate-pulse-slow">
              <MaskReveal
                scroll
                className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:shadow-2xl"
              >
                <Image
                  src="/images/nextcurve.png"
                  alt="The Next Curve — Growing Older. Living Better. Becoming More."
                  width={800}
                  height={800}
                  priority
                  className="h-auto w-full object-contain p-6 md:p-8"
                />
              </MaskReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Pillars */}
      <section className="relative px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className={glassCardSimple}>
            <SpecularGloss />
            <p className={`relative ${eyebrowClass}`}>For People</p>
            <h2 className="relative mt-4 text-2xl tracking-tighter text-neutral-900 md:text-3xl dark:text-white">
              Reinventing Ageing
            </h2>
            <p
              className={`relative mt-5 text-sm leading-relaxed md:text-base ${bodyClass}`}
            >
              Helping individuals make informed choices around physical health,
              emotional well-being, longevity, purpose, relationships, and
              lifelong growth. Adding life to years.
            </p>
          </div>

          <div className={glassCardSimple}>
            <SpecularGloss />
            <p className={`relative ${eyebrowClass}`}>For the Planet</p>
            <h2 className="relative mt-4 text-2xl tracking-tighter text-neutral-900 md:text-3xl dark:text-white">
              Regenerating Agriculture
            </h2>
            <p
              className={`relative mt-5 text-sm leading-relaxed md:text-base ${bodyClass}`}
            >
              Creating awareness about soil health, sustainable living, and the
              role each of us plays in leaving behind a better world for future
              generations. Healthy people need a healthy planet.
            </p>
          </div>
        </div>
      </section>

      {/* Community Banner */}
      <section className="relative px-6 pb-28 md:px-12 lg:px-20">
        <div className={`mx-auto w-full max-w-5xl ${fluidGlass}`}>
          <SpecularGloss />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <p
              className={`max-w-2xl text-base leading-relaxed md:text-lg ${bodyClass}`}
            >
              The Next Curve is a community for curious minds, conscious
              individuals, professionals, entrepreneurs, and change-makers. We
              inspire a more conscious way of living through weekly talks,
              community gatherings, expert sessions, and wellness experiences.
            </p>
            <a href="#join" className={`${liquidButton} px-8 text-sm`}>
              Join the Movement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
