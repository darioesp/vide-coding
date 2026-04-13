interface AnchorLangProps {
  lang: string;
  languages: string[];
}
const AnchorLang = ({ lang: currentLang, languages }: AnchorLangProps) => {
  return (
    <ul className="fixed bottom-10 right-10 z-50 bg-slate-300/40 dark:bg-slate-700/40 backdrop-blur-sm rounded-lg px-1 py-1.5 group">
      {languages.map((lang: string, index: number) => {
        const isActive = lang === (currentLang ?? "es");
        return (
          <li key={index} className="mb-2">
            <a
              href={`/${lang}`}
              className="flex flex-col justify-center items-center"
            >
              <span
                className={`${
                  isActive
                    ? "bg-white/70 dark:bg-black/70"
                    : "group-hover:bg-white/30 dark:group-hover:bg-black/30"
                } text-black/60 dark:text-white/60 flex text-md px-2 py-2.5 font-bold rounded-md justify-center items-center aspect-16/14 max-w-min`}
              >
                {lang}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default AnchorLang;
