import WrapperPage from "../../components/wrapper-page.tsx";
import SectionWrapperContent from "../../components/section-wrapper-content.tsx";
import Footer from "../../components/footer.tsx";
export default function Home() {
  return (
    <div class="relative mx-4 mt-5 md:mx-10 md:mt-12 font-roboto-mono">
      <WrapperPage attrClass="">
        <div class="border-b pb-3 flex justify-end items-center gap-x-2 text-sm">
          <strong>Peter Wong • Constellar.ai </strong>
          <a href="/"><span class="p-1 bg-slate-300/80 uppercase text-xs font-bold rounded-full self-center aspect-square min-w-5 min-h-5">Es</span></a>
        </div>
        <SectionWrapperContent title="La Guía Definitiva del Vibe Coding">
          <section class="w-full gap-4 text-sm leading-sm">
            <h3 class="font-bold text-base mt-5">
                What Is Vibe Coding?
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                A new paradigm where you "fully give in to the vibes" (Andrej Karpathy)
              </li>
              <li>
                <strong>Embrace AI to write 95%+ of your codebase</strong>
              </li>
              <li>
                Shift from being a programmer to being a "product engineer"
              </li>
              <li>
                Make 10-100x productivity gains by leaning into AI coding tools
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
                Essential Tools
            </h3>
            <ul class="ml-[37px] list-decimal col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                <strong>Cursor - </strong>Most popular IDE for vibe coding with comprehensive code understanding
              </li>
              <li>
                <strong>Windsurf - </strong>Fast-growing alternative that indexes your entire codebase
              </li>
              <li>
                <strong>Claude 3.5 Sonnet/3 Opus - </strong>Top models for everyday coding tasks
              </li>
              <li>
                <strong>Claude 01/03 - </strong>Reasoning models for debugging complex issues
              </li>
              <li>
                <strong>ChatGPT - </strong>Used specifically for reasoning through debugging problems
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
                The New Workflow
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                Roll not fix - Rewriting is cheaper than debugging (just retry from scratch)
              </li>
              <li>
                Prompt in parallel (run multiple AI sessions on different features simultaneously)
              </li>
              <li>
                Focus on rapid iteration rather than perfect code
              </li>
              <li>
                <strong>Human taste is now more important than coding skill</strong>
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
              When Vibe Coding Excels
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                Zero-to-one product development (speed is everything)
              </li>
              <li>
                Feature prototyping and rapid iteration
              </li>
              <li>
                Projects where scale isn't an immediate concern
              </li>
              <li>
                <strong>Simple to moderately complex applications</strong>
              </li>
              <li>
                When working with modern, well-documented frameworks
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
                The Human Element
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                Develop system thinking and architecture skills (AI still struggles here)
              </li>
              <li>
                Cultivate product taste and user empathy
              </li>
              <li>
                Learn to judge the quality of AI-generated code
              </li>
              <li>
                Debugging remains a critical human skill
              </li>
              <li>
                Focus on the "why" and "what" rather than the "how"
              </li>
            </ul>

            <h3 class="font-bold text-base mt-5">
                Building for Scale
            </h3>
            <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
              <li>
                Vibe coding gets you to MVP quickly, but scaling requires expertise
              </li>
              <li>
                Hire systems thinkers for complex infrastructure challenges
              </li>
              <li>
                <strong>Technical debt accumulates faster -</strong> plan refactoring strategically
              </li>
              <li>
                Critical systems may require more traditional approaches
              </li>
              <li>
                Balance quick development with architectural considerations
              </li>
            </ul>

          </section>
        </SectionWrapperContent>
      </WrapperPage>
      <Footer />
    </div>
  );
}