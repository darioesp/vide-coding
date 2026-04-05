import { PageProps } from "$fresh/server.ts";
import translations from "../locales/es.json" with { type: "json" };
interface State {
  state: { lang: string; translations: typeof translations };
}
export default function Footer({ state }: PageProps<State>) {
  const { lang: _lang, translations } = state;
  return (
    <footer class="text-center text-xs w-full py-1 mt-10 mb-20">
      {/* deno-lint-ignore react-no-danger */}
      <div
        class="py-1"
        dangerouslySetInnerHTML={{
          __html: translations.index.footer.development,
        }}
      >
      </div>
      {/* deno-lint-ignore react-no-danger */}
      <div
        class="py-1"
        dangerouslySetInnerHTML={{
          __html: translations.index.footer.created,
        }}
      >
      </div>
    </footer>
  );
}
