"use client";

import { useI18n } from "@/lib/i18n-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className="px-6 py-24">
      <div
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t.about.heading}
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
        <div className="mt-8 space-y-4">
          {t.about.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
