import { useState, useEffect } from "preact/hooks";

const AnchorLang = () => { 
    const [lang, setLang] = useState("");
    const [switchLang, setSwitchLang] = useState({
        lang: "es",
        href: "/",
    });
    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        setLang(userLang.split("-").at(0) || "es");
        const currentPath = window.location.pathname;
        const isEnglish = currentPath.startsWith("/en");
        setSwitchLang({
            lang: isEnglish ? "es" : "en",
            href: isEnglish ? "/" : "/en",
        });
        
    }, []);
    return (
        <a href={switchLang?.href} class="fixed bottom-10 right-10 z-50">
            <span class="bg-slate-300/50 text-pink-600 backdrop-blur-sm inline-flex text-xl p-3 font-bold rounded-full justify-center items-center aspect-square min-w-5 min-h-5 size-[48px]">
            { switchLang?.lang }
            </span>
        </a>
    )
};
export default AnchorLang;