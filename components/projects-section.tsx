"use client";

import { useI18n } from "@/lib/i18n-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const { t, locale } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="px-6 py-24">
      <div
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t.projects.heading}
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => {
            const title = locale === "es" ? project.titleEs : project.titleEn;
            const description =
              locale === "es" ? project.descriptionEs : project.descriptionEn;

            return (
              <article
                key={index}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-semibold text-card-foreground">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.live) && (
                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`${t.projects.viewCode} - ${title}`}
                      >
                        <Github className="h-4 w-4" />
                        {t.projects.viewCode}
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
                        aria-label={`${t.projects.liveDemo} - ${title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t.projects.liveDemo}
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
