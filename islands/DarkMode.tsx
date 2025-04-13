"use client";
import { useEffect, useState } from "preact/hooks";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState( false );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkModeClient = savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDarkModeClient) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="print:hidden"
    >
      {isDarkMode
        ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M18.719 18.719l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M18.719 5.281l1.061-1.061M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
            />
          </svg>
        )
        : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-6 h-6"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        )}
    </button>
  );
};

export default DarkMode;
