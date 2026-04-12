import { FreshContext } from "$fresh/server.ts";
import translations from "../locales/es.json" with { type: "json" };
import { t } from "../utils/i18n.ts";

interface State {
  lang: string;
  translations: typeof translations;
}
export default function App(
  req: Request,
  ctx: FreshContext<State>,
) {
  const url = new URL(req.url);
  const lang = url.pathname.split("/")[1] || "es";
  const translations = t(lang);
  ctx.state.lang = lang;
  ctx.state.translations = translations;
  return (
    <html lang={lang}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {translations?.site?.title || "Vibe Coding - Idioma no encontrado"}
        </title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#f9f9f9] text-[#444444] dark:bg-[#0C0C0C] dark:text-[#f9f9f9]">
        <ctx.Component />
      </body>
    </html>
  );
}
