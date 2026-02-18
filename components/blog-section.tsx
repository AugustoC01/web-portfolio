"use client";

import { useI18n } from "@/lib/i18n-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PenLine } from "lucide-react";

export function BlogSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="blog"
      ref={ref}
      className="px-6 py-24"
    >
      <div
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t.blog.heading}
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-10 flex flex-col items-center rounded-lg border border-dashed border-border bg-card p-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <PenLine className="h-5 w-5 text-primary" />
          </div>
          <p className="mt-4 font-mono text-lg font-semibold text-foreground">
            {t.blog.comingSoon}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            {t.blog.description}
          </p>
        </div>
      </div>
    </section>
  );
}
