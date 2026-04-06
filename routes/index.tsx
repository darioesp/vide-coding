import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import SectionWrapperContent from "../components/SectionWrapperContent.tsx";
import WrapperPage from "../components/WrapperPage.tsx";
import AnchorLang from "../islands/AnchorLang.tsx";
import translations from "../locales/es.json" with { type: "json" };
import { getLanguages } from "../utils/global.ts";

interface MiddlewareState {
  lang: string;
  translations: typeof translations;
}

interface Data {
  languages: string[];
}

export const handler: Handlers<Data, MiddlewareState> = {
  async GET(_, ctx) {
    const languages = await getLanguages(); // Obtén los lenguajes en el servidor
    return ctx.render({ languages });
  },
};

export default function Home(
  { state, data }: PageProps<Data, MiddlewareState>,
) {
  const { lang, translations } = state;
  const { languages } = data;
  return (
    <>
      <Header />
      <div class="relative mx-4 md:mx-10 font-roboto-mono">
        <WrapperPage attrClass="">
          <div class="border-b pb-3 flex justify-end items-center gap-x-2 text-sm">
            <strong>
              {translations.index.header}
            </strong>
          </div>
          <SectionWrapperContent title="La Guía Definitiva del Vibe Coding">
            <section class="w-full gap-4 text-sm leading-sm">
              {translations.index.sections.map((section) => (
                <>
                  <h3 class="font-bold text-base mt-5">
                    {section.title}
                  </h3>
                  <ul class="ml-6 list-disc col-span-full text-slate-800/90 dark:text-slate-200/80 text-pretty text-sm">
                    {section.items.map((item, index) => (
                      <li key={index}>
                        <div
                          // deno-lint-ignore react-no-danger
                          dangerouslySetInnerHTML={{
                            __html: item,
                          }}
                        >
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </section>
          </SectionWrapperContent>
        </WrapperPage>
      </div>
      <Footer state={state} />
      <AnchorLang lang={lang} languages={languages} />
    </>
  );
}
