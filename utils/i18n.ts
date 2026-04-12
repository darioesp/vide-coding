import translationsEs from "../locales/es.json" with { type: "json" };
import translationsEn from "../locales/en.json" with { type: "json" };

type Translations = typeof translationsEs;

const TRANSLATIONS_MAP: Record<string, Translations> = {
  es: translationsEs,
  en: translationsEn,
};

export function t(lang: string = "es"): Translations {
  const translations = TRANSLATIONS_MAP[lang];

  if (!translations) {
    // Fallback a español con mensaje de error
    return {
      ...translationsEs,
      error: {
        message:
          `No se encontró el idioma ${lang}. Se ha cargado el idioma por defecto (español).`,
        title: "Error de idioma",
        lang: lang,
      },
    } as Translations;
  }

  return translations;
}
