import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../hook/theme/useTheme";




export function ThemeMode() {

    const { toggleTheme, theme } = useTheme();


    return (<>
        <div className="bg-slate-100 fixed top-3 right-3 p-1 border-2 rounded-lg">
            {theme === 'dark' && <Sun color='yellow' onClick={toggleTheme} />}
            {theme === 'light' && <Moon color='gray' onClick={toggleTheme} />}
        </div>
    </>);
}