import {createContext, useEffect, useState} from "react";
import {DEFAULT_PLACE, MEASUREMENT_SYSTEMS, UNITS} from '../constants/index.tsx'
import {getWeatherData} from "../api";

type WeatherProviderProps = {
    name: string;
    place_id: string;
    adm_area1: string;
    adm_area2: string;
    country: string;
    lat: string;
    lon: string;
    timezone: string;
    type: string;
}

type WeatherContextType = {
    place: WeatherProviderProps;
    loading: boolean;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

function WeatherProvider({ children }: { children?: React.ReactNode }) {
    const [place, setPlace] = useState<WeatherProviderProps>(DEFAULT_PLACE);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    const [measurementSystem, setMeasurementSystem] = useState<string>(MEASUREMENT_SYSTEMS.AUTO );
    const [units, setUnits] = useState({});

    useEffect(() => {
        async function _getWeatherData() {
             setLoading(true);

             const cw = await getWeatherData("current", place.place_id, measurementSystem);
             setCurrentWeather(cw.current);
             setUnits(UNITS[cw.units]);

             const hf = await getWeatherData("hourly", place.place_id, measurementSystem);
             setHourlyForecast(hf.hourly.data);

            const df = await getWeatherData("daily", place.place_id, measurementSystem);
            setDailyForecast(df.daily.data);

             setLoading(false);
        }
        _getWeatherData();
    }, [place, measurementSystem]);

    return (
        <WeatherContext.Provider value={{place, loading, currentWeather, hourlyForecast, dailyForecast, measurementSystem, setMeasurementSystem, units}}>
            {children}
        </WeatherContext.Provider>
    )
}

export {WeatherProvider};
export default WeatherContext;