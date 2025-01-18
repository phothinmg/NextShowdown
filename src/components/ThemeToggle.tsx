"use client";
import React from "react";
import { useTheme, type Themes } from "@/components/ThemeProvider";
const storageKey = "theme-preference";
//
const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<Themes>("corporate");
  //
  const getColorPreference = (): Themes => {
    if (typeof window !== "undefined") {
      const storedPreference = localStorage.getItem(storageKey);
      if (storedPreference) {
        return storedPreference as Themes;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "corporate";
    }
    return "corporate";
  };
  //
  const reflectPreference = React.useCallback(
    (theme: Themes) => {
      document.querySelector("html")?.setAttribute("data-theme", theme);
      setCurrentTheme(theme);
      setTheme(theme);
    },
    [setTheme]
  );
  //
  React.useEffect(() => {
    setMounted(true);
    const initTheme = getColorPreference();
    reflectPreference(initTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme: Themes = mediaQuery.matches ? "dark" : "corporate";
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme, reflectPreference]);
  const toggleTheme = () => {
    const newTheme: Themes =
      currentTheme === "corporate" ? "dark" : "corporate";
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };
  return (
    <label className="toggle text-base-content">
      <input
        type="checkbox"
        value={currentTheme}
        onClick={toggleTheme}
        className="theme-controller"
      />

      <svg
        aria-label="sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </g>
      </svg>

      <svg
        aria-label="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </g>
      </svg>
    </label>
  );
};

export default ThemeToggle;
