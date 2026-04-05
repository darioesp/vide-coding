import translations from "../locales/es.json" with { type: "json" };

interface FooterProps {
  state: { lang: string; translations: typeof translations };
}

export default function Footer({ state }: FooterProps) {
  const { lang: _lang, translations } = state;
  return (
    <footer class="text-center text-xs w-full py-1 mt-10 mb-20">
      <div
        class="py-1"
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{
          __html: translations.index.footer.development,
        }}
      >
      </div>
      <div
        class="py-1"
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{
          __html: translations.index.footer.created,
        }}
      >
      </div>
    </footer>
  );
}
