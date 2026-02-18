"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import en from "@/lib/translations/en.json";
import es from "@/lib/translations/es.json";

type Translations = typeof en;
type Locale = "en" | "es";

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const translations: Record<Locale, Translations> = { en, es };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("locale") as Locale | null;
  if (stored === "en" || stored === "es") return stored;
  return navigator.language.startsWith("es") ? "es" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocale(getInitialLocale());
    setMounted(true);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  if (!mounted) {
    return (
      <I18nContext.Provider
        value={{ locale: "en", t: translations.en, toggleLocale }}
      >
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider
      value={{ locale, t: translations[locale], toggleLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
