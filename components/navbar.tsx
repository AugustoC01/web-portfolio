"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { useTheme } from "@/lib/theme-context";
import { Moon, Sun, Globe, Menu, X, Terminal } from "lucide-react";

const navKeys = ["about", "techStack", "projects", "blog", "contact"] as const;
const sectionIds = ["about", "tech-stack", "projects", "blog", "contact"];

export function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          aria-label="Scroll to top"
        >
          <Terminal className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm font-semibold tracking-tight">
            {"augustoc.dev"}
          </span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navKeys.map((key, i) => (
            <li key={key}>
              <button
                onClick={() => scrollTo(sectionIds[i])}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop controls */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label={`Switch language to ${locale === "en" ? "Spanish" : "English"}`}
          >
            <Globe className="h-4 w-4" />
            <span className="font-mono text-xs uppercase">
              {locale === "en" ? "ES" : "EN"}
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navKeys.map((key, i) => (
              <li key={key}>
                <button
                  onClick={() => scrollTo(sectionIds[i])}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav[key]}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label={`Switch language to ${locale === "en" ? "Spanish" : "English"}`}
            >
              <Globe className="h-4 w-4" />
              <span className="font-mono text-xs uppercase">
                {locale === "en" ? "ES" : "EN"}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
