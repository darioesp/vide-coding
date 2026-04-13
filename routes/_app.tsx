import { define } from "@/utils.ts";
import { asset } from "fresh/runtime";

export default define.page(function App({ Component, state }) {
  // El state ya viene inyectado por el middleware en main.ts
  const { lang, translations } = state;

  return (
    <html lang={lang}>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>
          {translations?.site?.title || "Vibe Coding - Idioma no encontrado"}
        </title>
        <link rel="stylesheet" href="/styles.css" />

        {/* <!-- Open Graph --> */}
        <meta
          property="og:title"
          content={`${translations.site.title}`}
        />
        <meta
          property="og:description"
          content={translations.site.description}
        />
        <meta property="og:image" content={asset("/meta-og-preview.jpg")} />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${translations.site.title}`}
        />
        <meta
          name="twitter:description"
          content={translations.site.description}
        />
      </head>
      <body class="bg-[#f9f9f9] text-[#444444] dark:bg-[#0C0C0C] dark:text-[#f9f9f9]">
        {/* @ts-ignore - Fresh 2 Component type compatibility */}
        <Component />
      </body>
    </html>
  );
});
