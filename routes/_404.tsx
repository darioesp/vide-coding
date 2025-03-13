import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";
export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - ¡Creo que andas perdido!</title>
      </Head>
      <section class="grid place-content-center h-screen w-screen bg-white py-4 px-5 md:py-10 md:px-12">
        <div class="flex flex-col items-center gap-5">
          <h1 class="text-center flex flex-col items-center gap-2">
            <span class="text-4xl md:text-6xl font-bold">Wow 🧉</span> ¡Creo que andas perdido!
          </h1>
          <a href="/" class="flex justify-center items-center px-3 py-1.5 bg-black/5 border border-[#ddd] rounded-md backdrop-blur-sm">
            Regresar a Vibe Coding
          </a>
          <a href="https://github.com/darioesp/vide-coding" class="flex justify-center items-center px-3 py-1.5 bg-black/5 border border-[#ddd] rounded-md backdrop-blur-sm">
            ir al repositorio
          </a>
        </div>
      </section>
    </>
  );
}
