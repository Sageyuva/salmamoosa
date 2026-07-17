const glassSurface =
  "backdrop-blur-lg bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 transition-all duration-300 md:p-8";

const fluidGlass =
  "backdrop-blur-2xl bg-white/[0.05] border border-white/[0.12] rounded-[2rem] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-all duration-300 md:p-12";

const communityActions = [
  "Weekly talks",
  "Expert sessions",
  "Wellness experiences",
  "Regenerative agriculture awareness",
] as const;

export default function VenturesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative px-6 pb-20 pt-16 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="text-4xl tracking-tighter text-white sm:text-5xl md:text-6xl">
            The Next Curve
          </h1>
          <p className="mt-4 max-w-xl text-lg text-neutral-400 md:text-xl">
            Growing Older. Living Better. Becoming More.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`${glassSurface} flex flex-col justify-between`}>
              <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                The Mission
              </p>
              <p className="mt-6 text-lg leading-relaxed tracking-tight text-white md:text-xl">
                Reinventing ageing for people, regenerating agriculture for the
                planet. A movement dedicated to increasing health-span,
                longevity, and overall well-being.
              </p>
            </div>

            <div className={`${glassSurface} flex flex-col justify-between`}>
              <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                The Action
              </p>
              <ul className="mt-6 space-y-4">
                {communityActions.map((item) => (
                  <li
                    key={item}
                    className="border-b border-white/[0.06] pb-4 text-base text-neutral-300 last:border-b-0 last:pb-0 md:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24 md:px-12 lg:px-20">
        <div className={`mx-auto w-full max-w-5xl ${fluidGlass}`}>
          <h2 className="text-3xl tracking-tighter text-white md:text-5xl">
            Fat2Fit — Now Live
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Born from five years of lived experience, setbacks, resilience, and
            quiet consistency. An honest, no-formula approach to health that goes
            far beyond weight loss.
          </p>

          <div className="mt-10 rounded-2xl border border-teal-400/20 bg-teal-500/[0.08] p-5 backdrop-blur-md md:p-6">
            <p className="text-sm leading-relaxed text-teal-100/90 md:text-base">
              Partnered with Mind Empowered (Kochi). A portion of the Author’s
              Royalty from every book purchase directly supports women and
              children&apos;s mental health initiatives.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#order"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-70"
            >
              Order Copy
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
