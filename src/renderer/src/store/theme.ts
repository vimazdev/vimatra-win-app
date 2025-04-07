import { create } from "zustand";

// Definimos el estado del tema
interface ThemeState {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

// Función para detectar el tema del sistema
const getPreferredTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "dark"; // Evita errores en SSR

    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");

    return storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : systemPrefersDark
            ? "dark"
            : "light";
};

// Creamos el store de Zustand
export const useThemeStore = create<ThemeState>((set) => ({
    theme: getPreferredTheme(),
    toggleTheme: () =>
        set((state) => {
            const newTheme = state.theme === "light" ? "dark" : "light";


            localStorage.setItem("theme", newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);

            return { theme: newTheme };
        }),
}));
