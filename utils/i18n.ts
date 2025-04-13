import translations from "../locales/es.json" with { type: "json" };

type Translations = typeof translations;

export async function t(
  lang: string = "es",
) {
  try {
    const fileLang = await Deno.readTextFile(`./locales/${lang}.json`);
    return JSON.parse(fileLang) as Translations;
  } catch {
    const esFileLang = await Deno.readTextFile(`./locales/es.json`);
    const jsonResponse = JSON.parse(esFileLang);
    // add error message
    jsonResponse.error = {
      message:
        `No se encontró el idioma ${lang}. Se ha cargado el idioma por defecto (español).`,
      title: "Error de idioma",
      lang: lang,
    };
    return jsonResponse as Translations;
  }
}
