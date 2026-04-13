import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header.tsx";
import SectionWrapperContent from "@/components/SectionWrapperContent.tsx";
import WrapperPage from "@/components/WrapperPage.tsx";
import AnchorLang from "@/islands/AnchorLang.tsx";
import { define } from "@/utils.ts";

export default define.page(function Home({ state }) {
  const { lang, translations } = state;
  const { languages } = state.data;

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
          <SectionWrapperContent title={translations.index.title}>
            <section class="w-full gap-4 text-sm leading-sm">
              {translations.index.sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
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
                </div>
              ))}
            </section>
          </SectionWrapperContent>
        </WrapperPage>
      </div>
      <Footer state={state} />
      <AnchorLang lang={lang} languages={languages} />
    </>
  );
});
