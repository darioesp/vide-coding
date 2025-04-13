import { PageProps } from "$fresh/server.ts";
import Footer from "../../components/Footer.tsx";
import SectionWrapperContent from "../../components/SectionWrapperContent.tsx";
import WrapperPage from "../../components/WrapperPage.tsx";
import translations from "../../locales/es.json" with { type: "json" };

interface State {
  state: { lang: string; translations: typeof translations };
}

export default function Home({ state }: PageProps<State>) {
  const { lang: _lang, translations } = state;
  return (
    <>
      {/* <Header /> */}
      <div class="relative mx-4 md:mx-10 font-roboto-mono">
        <WrapperPage attrClass="">
          <div class="border-b pb-3 flex justify-end items-center gap-x-2 text-sm">
            <strong>
              {translations.index.header}
            </strong>
          </div>
          <SectionWrapperContent title="La Guía Definitiva del Vibe Coding">
            <section class="w-full gap-4 text-sm leading-sm">
              {
                translations.index.sections.map((section) => (
                <>
                  <h3 class="font-bold text-base mt-5">
                    {section.title}
                  </h3>
                  <ul class="ml-6 list-disc col-span-full text-slate-800/90 text-pretty text-sm">
                    {
                      section.items.map((item, index) => (
                        <li key={index}>
                        <div
                            dangerouslySetInnerHTML={{
                              __html: item,
                            }}
                          ></div>
                        </li>
                      ))
                    }
                  </ul>
                </>
                ))
              }
            </section>
          </SectionWrapperContent>
        </WrapperPage>
        <Footer/>
      </div>
    </>
  );
}
