import { App, staticFiles, trailingSlashes } from "fresh";
import { getLanguages } from "@/utils/global.ts";
import { t } from "@/utils/i18n.ts";
import type { FreshContext } from "fresh";
import type { State } from "@/utils.ts";

// Middleware para inyectar lang, translations y languages en ctx.state
function i18nMiddleware(ctx: FreshContext<State>) {
  const url = new URL(ctx.url);
  const lang = url.pathname.split("/")[1] || "es";
  const translations = t(lang);
  const languages = getLanguages();

  // Mutar el state directamente (ctx.state es un objeto mutable)
  Object.assign(ctx.state, {
    data: { languages },
    lang,
    translations,
  });

  return ctx.next();
}

export const app = new App<State>()
  // i18n middleware DEBE ir primero
  .use(i18nMiddleware)
  // Add static file serving middleware
  .use(staticFiles())
  .use(trailingSlashes("never"))
  // Enable file-system based routing
  .fsRoutes();
