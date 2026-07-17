"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

const STORAGE_KEY = "salmamoosa-theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light") {
      useThemeStore.setState({ isDarkMode: false });
    } else if (saved === "dark") {
      useThemeStore.setState({ isDarkMode: true });
    }
  }, []);

  // Sync class + persistence whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return <>{children}</>;
}
