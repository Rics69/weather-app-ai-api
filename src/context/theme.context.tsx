import {createContext, useEffect, useState} from "react";

type ThemeContextType = {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
    saveThemeToLocalStorage: (theme:string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_KEY = 'isDark';

type themeProviderProps = {
    children: React.ReactNode;
}

function ThemeProvider ({children}:themeProviderProps) {
    const [dark, setDark] = useState(true);

    const saveThemeToLocalStorage = (theme: string) => {
        localStorage.setItem(THEME_KEY, theme)
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme !== null) {
            setDark(savedTheme === 'true');
            return;
        }

        const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDark(isSystemThemeDark === true);
    }, [])

    return (
        <ThemeContext.Provider value={{dark, setDark, saveThemeToLocalStorage}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider};
export default ThemeContext;