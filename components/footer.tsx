"use client";

import { useI18n } from "@/lib/i18n-context";
import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          {"© "}
          {new Date().getFullYear()}
          {" Augusto Cannata. "}
          {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
