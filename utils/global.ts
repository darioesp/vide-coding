export const getLanguages = async () => {
  const locales = [];
  const files = Deno.readDir("./locales");
  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".json")) {
      const lang = file.name.split(".")[0];
      locales.push(lang);
    }
  }
  return locales;
};
