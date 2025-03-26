import WrapperPage from "../components/wrapper-page.tsx";
import SectionWrapperContent from "../components/section-wrapper-content.tsx";
import Footer from "../components/footer.tsx";
export default function Home() {
  return (
    <div class="relative mx-4 mt-5 md:mx-10 md:mt-12 font-roboto-mono">
      <WrapperPage attrClass="">
        <div class="border-b pb-3 flex justify-end items-center gap-x-2 text-sm">
          <strong>Peter Wong • Constellar.ai • Traducido por Midudev</strong>
          <span class="p-1 bg-slate-300/80  inline-flex justify-center text-xs font-bold rounded-full items-center aspect-square min-w-5 min-h-5">en</span>
        </div>
        <SectionWrapperContent title="La Guía Definitiva del Vibe Coding">
          <section class="w-full gap-4 text-sm leading-sm">
            <h3 class="font-bold text-base mt-5">
              ¿Qué es el Vibe Coding?
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                Un nuevo paradigma donde te "entregas completamente a las vibras" (Andrej Karpathy)
              </li>
              <li>
                <strong>Adopta la IA para escribir más del 95% de tu código</strong>
              </li>
              <li>
                Transición de programador a "ingeniero de producto"
              </li>
              <li>
                Aumenta la productividad de 10 a 100 veces aprovechando herramientas de codificación con IA
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
              Herramientas esenciales
            </h3>
            <ul class="ml-[37px] list-decimal col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                <strong>Cursor - </strong>IDE más popular para vibe coding con una comprensión completa del código
              </li>
              <li>
                <strong>Windsurf - </strong>Alternativa de rápido crecimiento que indexa todo tu código
              </li>
              <li>
                <strong>Claude 3.5 Sonnet/3 Opus - </strong>Modelos líderes para tareas de codificación diarias
              </li>
              <li>
                <strong>Claude 01/03 - </strong>Modelos de razonamiento para depuración de problemas complejos
              </li>
              <li>
                <strong>ChatGPT - </strong>Utilizado específicamente para el razonamiento en la depuración de problemas
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
              El nuevo flujo de trabajo
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                Reescribir en lugar de arreglar - Reescribir es más barato que depurar (simplemente vuelve a intentarlo desde cero)
              </li>
              <li>
                Hacer prompts en paralelo (ejecuta múltiples sesiones de IA en diferentes funciones simultáneamente)
              </li>
              <li>
                Enfocarse en la iteración rápida en lugar del código perfecto
              </li>
              <li>
                <strong>El gusto humano es ahora más importante que la habilidad para programar</strong>
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
              Cuándo destaca el Vibe Coding
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                Desarrollo de productos desde cero (la velocidad lo es todo)
              </li>
              <li>
                Prototipado de funciones e iteración rápida
              </li>
              <li>
                Proyectos donde la escalabilidad no es una preocupación inmediata
              </li>
              <li>
                <strong>Aplicaciones de complejidad simple a moderada</strong>
              </li>
              <li>
                Cuando se trabaja con frameworks modernos y bien documentados
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
              El elemento humano
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                Desarrollar habilidades de pensamiento sistémico y arquitectura (la IA aún tiene dificultades aquí)
              </li>
              <li>
                Cultivar el gusto por los productos y la empatía con los usuarios
              </li>
              <li>
                Aprender a evaluar la calidad del código generado por IA
              </li>
              <li>
                La depuración sigue siendo una habilidad humana crítica
              </li>
              <li>
                Enfocarse en el "por qué" y el "qué", en lugar del "cómo"
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
              Construyendo para la escalabilidad
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                El vibe coding te permite llegar rápidamente a un MVP, pero la escalabilidad requiere experiencia
              </li>
              <li>
                Contratar expertos en pensamiento sistémico para desafíos de infraestructura complejos
              </li>
              <li>
                <strong>La deuda técnica se acumula más rápido - </strong>planifica la refactorización estratégicamente
              </li>
              <li>
                Los sistemas críticos pueden requerir enfoques más tradicionales
              </li>
              <li>
                Equilibrar el desarrollo rápido con consideraciones arquitectónicas
              </li>
            </ul>

          </section>
        </SectionWrapperContent>
      </WrapperPage>
      <Footer />
    </div>
  );
}
