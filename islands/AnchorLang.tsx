interface AnchorLangProps {
  lang: string;
  languages: string[];
}
const AnchorLang = ({ lang: currentLang, languages }: AnchorLangProps) => {
  return (
    <ul class="fixed bottom-10 right-10 z-50 bg-slate-300/40 dark:bg-slate-700/40 backdrop-blur-sm rounded-lg px-2 py-1.5">
      {languages.map((lang: string, index: number) => {
        const isActive = lang === (currentLang ?? "es");
        <li key={index}>
          <a
            href={`/${lang}`}
            class="flex flex-col justify-center items-center"
          >
            <span
              class={`${
                isActive ? "bg-white/70 dark:bg-black/70" : ""
              } text-black/60 dark:text-white/60 inline-flex text-xl px-2 py-1.5 font-bold rounded-md justify-center items-center aspect-video max-w-min`}
            >
              {lang}
            </span>
          </a>
        </li>;
      })}
    </ul>
  );
};
export default AnchorLang;
