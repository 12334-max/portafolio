import { createContext } from "react";


type Theme = 'light' | 'dark';

export interface ThemeContextProps {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | null>(null)

export default ThemeContext;