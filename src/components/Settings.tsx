import '../styles/components/Settings.scss'
import {useContext, useState} from "react";
import ThemeContext from "../context/theme.context.tsx";
import {MEASUREMENT_SYSTEMS} from "../constants";
import WeatherContext from "../context/weather.context.tsx";

const Settings = () => {

    const [openSettings, setOpenSettings] = useState<boolean>(false);

    const context1 = useContext(ThemeContext);

    if (!context1) {
        throw new Error("App must be used within a ThemeProvider");
    }

    const { dark, setDark, saveThemeToLocalStorage } = context1;

    const context2 = useContext(WeatherContext);

    if (!context2) {
        throw new Error("App must be used within a ThemeProvider");
    }

    const { measurementSystem, setMeasurementSystem } = context2;

    const toggleTheme = () => {
        setDark(prevDark=> !prevDark);
        saveThemeToLocalStorage(String(!dark));
    }

    const changeMeasurementSystem = (system) => {
        setMeasurementSystem(system);
        setOpenSettings(false);
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
            <div className="settings-btn" onClick={() => setOpenSettings(prevVal => !prevVal)}>
                <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
            </div>
            <div className={`settings-menu ${openSettings ? "open" : ""}`}>
                <div className="measurement-systems">
                    <h4>Measurement Systems:</h4>
                    <div className="systems">
                        {
                            Object.values(MEASUREMENT_SYSTEMS).map(system => (
                                <div className={`system ${system === measurementSystem ? "active" : ""}`} key={system} onClick={() => changeMeasurementSystem(system)}>
                                    {system}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;