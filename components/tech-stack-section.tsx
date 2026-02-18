"use client";

import { useI18n } from "@/lib/i18n-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { techStack } from "@/lib/data";

export function TechStackSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="px-6 py-24"
    >
      <div
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t.techStack.heading}
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category) => {
            const categoryName =
              t.techStack.categories[
                category.key as keyof typeof t.techStack.categories
              ] ?? category.key;

            return (
              <div key={category.key} className="space-y-4">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                  {categoryName}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
