"use client";

import { useI18n } from "@/lib/i18n-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowDown, FileText, Mail } from "lucide-react";

export function HeroSection() {
  const { t, locale } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>(0.1);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85vh] items-center justify-center px-6"
    >
      <div
        className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-xs text-muted-foreground">
            {"Available for work"}
          </span>
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t.hero.name}
        </h1>

        <p className="mt-4 font-mono text-lg text-primary sm:text-xl">
          {t.hero.title}
        </p>

        <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowDown className="h-4 w-4" />
            {t.hero.viewProjects}
          </button>
          <a
            href={locale === "es" ? "/cv.pdf" : "/resume.pdf"}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
          >
            <FileText className="h-4 w-4" />
            {t.hero.downloadCv}
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
            {t.hero.contact}
          </button>
        </div>
      </div>
    </section>
  );
}
