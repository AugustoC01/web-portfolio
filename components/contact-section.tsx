"use client";

import { useI18n } from "@/lib/i18n-context";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { socialLinks } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const links = [
    {
      label: t.contact.email,
      href: `mailto:${socialLinks.email}`,
      value: socialLinks.email,
      icon: Mail,
    },
    {
      label: t.contact.linkedin,
      href: socialLinks.linkedin,
      value: "LinkedIn",
      icon: Linkedin,
    },
    {
      label: t.contact.github,
      href: socialLinks.github,
      value: "GitHub",
      icon: Github,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 py-24"
    >
      <div
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t.contact.heading}
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
        <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
          {t.contact.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">
                  {link.label}
                </span>
                <span className="text-sm font-medium text-card-foreground group-hover:text-foreground">
                  {link.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
