const testimonials = [
  { name: "Cherian Kuruvila", role: "Ecosystem Partner" },
  { name: "Vivek Srinivasan", role: "Ecosystem Partner" },
  { name: "Johns T Mathai", role: "Ecosystem Partner" },
] as const;

const fluidGlass =
  "relative overflow-hidden backdrop-blur-2xl bg-white/[0.05] border border-white/[0.12] rounded-[2rem] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-all duration-300 md:p-12";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-300 text-sm";

const submitClass =
  "w-full md:w-auto px-8 py-3 bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.2] text-white rounded-full font-medium tracking-tight text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 backdrop-blur-md cursor-pointer";

export default function InsightsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative px-6 pb-20 pt-16 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="text-4xl tracking-tighter text-white sm:text-5xl md:text-6xl">
            Insights
          </h1>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            Voices from the ecosystem.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((person) => (
              <div key={person.name} className="space-y-2">
                <p className="text-lg font-semibold tracking-tighter text-white">
                  {person.name}
                </p>
                <p className="text-sm text-neutral-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24 md:px-12 lg:px-20">
        <div className={`mx-auto w-full max-w-5xl ${fluidGlass}`}>
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Contact context */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl tracking-tighter text-white md:text-4xl">
                Connect
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
                Reach out for mentoring, partnerships, or a conversation about
                what comes next.
              </p>

              <address className="mt-8 not-italic">
                <p className="max-w-sm text-sm leading-relaxed text-neutral-400 md:text-base">
                  Twelve 77 Ventures
                  <br />
                  AT WORK Co-Working Space
                  <br />
                  Jayanagar 9th Block, Bangalore
                </p>

                <div className="mt-6 flex flex-col gap-3 text-sm">
                  <a
                    href="tel:+919980015351"
                    className="tracking-tight text-white transition-opacity hover:opacity-70"
                  >
                    +91 99800 15351
                  </a>
                  <a
                    href="mailto:salma@twelve77ventures.com"
                    className="tracking-tight text-white transition-opacity hover:opacity-70"
                  >
                    salma@twelve77ventures.com
                  </a>
                </div>
              </address>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-8">
              <form className="grid grid-cols-1 gap-4 md:grid-cols-2" action="#" method="post">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone Number"
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Message"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="md:col-span-2 flex justify-end pt-2">
                  <button type="submit" className={submitClass}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
