"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents rendering the toggle icon on the server

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-[#1d1d1f] backdrop-blur-md transition-all duration-300 hover:bg-black/[0.08] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/90 dark:hover:bg-white/[0.12]"
    >
      {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
