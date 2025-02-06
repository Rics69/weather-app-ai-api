import {createContext, useEffect, useState} from "react";
import {DEFAULT_PLACE} from '../constants/index.tsx'

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

    useEffect(() => {
        async function _getWeatherData() {
             setLoading(true);

             setLoading(false);
        }
    })

    return (
        <WeatherContext.Provider value={{place, loading}}>
            {children}
        </WeatherContext.Provider>
    )
}

export {WeatherProvider};
export default WeatherContext;