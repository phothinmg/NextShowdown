"use client";
import { type ReactNode, createContext, useState, useEffect } from "react";

export type Themes = "dark" | "corporate";
const ThemeContext = createContext<Themes>("corporate");

export function useTheme() {
  const [theme, setTheme] = useState<Themes>("corporate");
  useEffect(() => {
    setTheme(theme);
  }, [theme]);
  return { theme, setTheme };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
