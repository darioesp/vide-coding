// Compatible con Cloudflare Workers - sin filesystem
// Los idiomas disponibles están hardcodeados basados en los archivos en /locales
export const getLanguages = (): string[] => {
  return ["es", "en"];
};
