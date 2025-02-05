import '../styles/components/Settings.scss'
import {useContext} from "react";
import ThemeContext from "../context/theme.context.tsx";

const Settings = () => {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("App must be used within a ThemeProvider");
    }

    const { dark, setDark, saveThemeToLocalStorage } = context;

    const toggleTheme = () => {
        setDark(prevDark=> !prevDark);
        saveThemeToLocalStorage(String(!dark));
    }

    return (
        <div className="Settings">
            <div className="theme-toggler">
                <div className="theme-buttons" onClick={toggleTheme}>
                    <div className={`light-theme-btn ${dark ? "" : "active"}`}>
                        <i className="bi bi-sun"></i>
                    </div>
                    <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
                        <i className="bi bi-moon"></i>
                    </div>
                </div>
            </div>
            <div className="settings-btn">
                <i className="bi bi-gear"></i>
            </div>
        </div>
    )
}

export default Settings;