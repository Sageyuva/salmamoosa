"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  testimonials,
  testimonialsIntro,
  testimonialTabs,
  type TestimonialCategory,
} from "@/lib/testimonials";
import {
  bodyClass,
  eyebrowClass,
  fluidGlass,
  inputClass,
  softPanel,
  submitClass,
} from "@/lib/ui";

type SectionId = "testimonials" | "contact";
type CategoryId = "all" | TestimonialCategory;

const mainSections = [
  { id: "testimonials" as const, label: "Testimonials" },
  { id: "contact" as const, label: "Contact" },
];

export default function InsightsTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sectionParam = searchParams.get("section");
  const tabParam = searchParams.get("tab");

  const [section, setSection] = useState<SectionId>(
    sectionParam === "contact" ? "contact" : "testimonials",
  );
  const [category, setCategory] = useState<CategoryId>("all");

  useEffect(() => {
    if (sectionParam === "contact" || sectionParam === "testimonials") {
      setSection(sectionParam);
    }
    if (tabParam && testimonialTabs.some((tab) => tab.id === tabParam)) {
      setCategory(tabParam as CategoryId);
      setSection("testimonials");
    }
  }, [sectionParam, tabParam]);

  const filtered = useMemo(() => {
    if (category === "all") return testimonials;
    return testimonials.filter((item) => item.category === category);
  }, [category]);

  function goToSection(next: SectionId) {
    setSection(next);
    if (next === "contact") {
      router.replace("/insights?section=contact", { scroll: false });
    } else {
      const tabQuery =
        category !== "all"
          ? `?section=testimonials&tab=${category}`
          : "?section=testimonials";
      router.replace(`/insights${tabQuery}`, { scroll: false });
    }
  }

  function goToCategory(next: CategoryId) {
    setCategory(next);
    setSection("testimonials");
    const query =
      next === "all"
        ? "?section=testimonials"
        : `?section=testimonials&tab=${next}`;
    router.replace(`/insights${query}`, { scroll: false });
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* Page header + 2 main sections */}
      <div className="relative px-6 pt-16 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className={eyebrowClass}>Insights</p>
          <h1 className="mt-4 text-4xl tracking-tighter text-neutral-900 sm:text-5xl md:text-6xl dark:text-white">
            Insights
          </h1>

          <div
            className="mt-8 flex w-full max-w-md gap-2 rounded-full border border-black/[0.06] bg-white/75 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-none"
            role="tablist"
            aria-label="Insights sections"
          >
            {mainSections.map((item) => {
              const isActive = section === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goToSection(item.id)}
                  className={`flex-1 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300 ${
                    isActive
                      ? "bg-black/[0.06] text-neutral-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] dark:bg-white/[0.12] dark:text-white dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 1: Testimonials only */}
      {section === "testimonials" && (
        <section
          id="testimonials"
          className="relative px-6 pb-24 pt-10 md:px-12 lg:px-20"
          role="tabpanel"
        >
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="text-2xl tracking-tighter text-neutral-900 md:text-3xl dark:text-white">
              Testimonials
            </h2>
            <div className="mt-6 max-w-3xl space-y-5">
              {testimonialsIntro.map((paragraph) => (
                <p
                  key={paragraph}
                  className={`text-base leading-relaxed md:text-lg ${bodyClass}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className="mt-10 flex flex-wrap gap-2 border-b border-black/[0.06] pb-4 dark:border-white/[0.06]"
              role="tablist"
              aria-label="Testimonial categories"
            >
              {testimonialTabs.map((tab) => {
                const isActive = category === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => goToCategory(tab.id as CategoryId)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium tracking-tight transition-all duration-300 ${
                      isActive
                        ? "border-black/15 bg-black/[0.06] text-neutral-900 dark:border-white/25 dark:bg-white/[0.12] dark:text-white"
                        : "border-black/[0.06] bg-white/70 text-neutral-500 hover:border-black/15 hover:text-neutral-900 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-neutral-400 dark:hover:border-white/15 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 space-y-3">
              {filtered.map((person) =>
                person.quote ? (
                  <details
                    key={person.name}
                    className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-white/75 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl open:border-black/[0.1] open:bg-white/90 dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-none dark:backdrop-blur-lg dark:open:border-white/[0.14] dark:open:bg-white/[0.05]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 md:px-6">
                      <div>
                        <p className="text-base font-semibold tracking-tight text-neutral-900 md:text-lg dark:text-white">
                          {person.name}
                        </p>
                        <p className={`mt-1 text-sm ${bodyClass}`}>
                          {person.role}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-lg text-neutral-600 transition-transform duration-300 group-open:rotate-45 dark:border-white/10 dark:text-white/70"
                      >
                        +
                      </span>
                    </summary>
                    <div className="border-t border-black/[0.06] px-5 pb-6 pt-4 md:px-6 dark:border-white/[0.06]">
                      <p
                        className={`whitespace-pre-line text-sm leading-relaxed md:text-base ${bodyClass}`}
                      >
                        {person.quote}
                      </p>
                    </div>
                  </details>
                ) : (
                  <div key={person.name} className={`${softPanel} px-5 py-5 md:px-6`}>
                    <p className="text-base font-semibold tracking-tight text-neutral-900 md:text-lg dark:text-white">
                      {person.name}
                    </p>
                    <p className={`mt-1 text-sm ${bodyClass}`}>{person.role}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: Contact only */}
      {section === "contact" && (
        <section
          id="contact"
          className="relative px-6 pb-24 pt-10 md:px-12 lg:px-20"
          role="tabpanel"
        >
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="text-2xl tracking-tighter text-neutral-900 md:text-3xl dark:text-white">
              Contact
            </h2>
            <p className={`mt-4 max-w-xl text-base ${bodyClass}`}>
              Reach out for mentoring, partnerships, or a conversation about
              what comes next.
            </p>

            <div className={`mt-10 ${fluidGlass}`}>
              <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-4">
                  <address className="not-italic">
                    <p
                      className={`max-w-sm text-sm leading-relaxed md:text-base ${bodyClass}`}
                    >
                      Twelve 77 Ventures
                      <br />
                      AT WORK Co-Working Space
                      <br />
                      Jayanagar 9th Block, Bangalore
                    </p>

                    <div className="mt-6 flex flex-col gap-3 text-sm">
                      <a
                        href="tel:+919980015351"
                        className="tracking-tight text-neutral-900 transition-opacity hover:opacity-70 dark:text-white"
                      >
                        +91 99800 15351
                      </a>
                      <a
                        href="mailto:salma@twelve77ventures.com"
                        className="tracking-tight text-neutral-900 transition-opacity hover:opacity-70 dark:text-white"
                      >
                        salma@twelve77ventures.com
                      </a>
                    </div>
                  </address>
                </div>

                <div className="lg:col-span-8">
                  <form
                    className="grid grid-cols-1 gap-4 md:grid-cols-2"
                    action="#"
                    method="post"
                  >
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
          </div>
        </section>
      )}
    </div>
  );
}
