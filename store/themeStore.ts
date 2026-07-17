import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: true, // Defaulting to our premium dark theme layout
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
