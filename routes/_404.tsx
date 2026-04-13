import { define } from "@/utils.ts";

export default define.page(function Error404({ state }) {
  const { lang } = state;

  return (
    <>
      <section class="grid place-content-center h-screen w-screen bg-white dark:bg-slate-800 py-4 px-5 md:py-10 md:px-12">
        <div class="flex flex-col items-center gap-5">
          <h1 class="text-center flex flex-col items-center gap-2">
            <span class="text-4xl md:text-6xl font-bold">Wow 🧉</span>{" "}
            {lang === "en"
              ? "I think you're lost!"
              : "¡Creo que andas perdido!"}
          </h1>
          <a
            href={lang === "en" ? "/en" : "/"}
            class="flex justify-center items-center px-3 py-1.5 bg-black/5 dark:bg-black/95 border border-[#ddd] dark:border-black rounded-md backdrop-blur-sm"
          >
            {lang === "en" ? "Back to Vibe Coding" : "Regresar a Vibe Coding"}
          </a>
          <a
            href="https://github.com/daesdev/vibe-coding"
            class="flex justify-center items-center px-3 py-1.5 bg-black/5 dark:bg-black/95 border border-[#ddd] dark:border-black rounded-md backdrop-blur-sm"
          >
            {lang === "en" ? "Go to repository" : "ir al repositorio"}
          </a>
        </div>
      </section>
    </>
  );
});
