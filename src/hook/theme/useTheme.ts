import { useContext } from "react"
import ThemeContext from "../../context/Theme/ThemeContext"

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) throw new Error("useTheme No se encontro el contexto de la app.");

    return context;
}