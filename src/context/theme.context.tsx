import {createContext, ReactNode} from "react";

const ThemeContext = createContext();

function ThemeProvider ({children}) {
    return (
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    )
}