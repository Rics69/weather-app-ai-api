import '../styles/components/Main.scss'
import CurrentWeather from "./CurrentWeather.tsx";
import Forecast from "./Forecast.tsx";
import WeatherContext from "../context/weather.context.tsx";
import {useContext} from "react";
import Loader from "./Loader.tsx";

const Main = () => {
    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error("WeatherProvider must be used within a WeatherProvider");
    }

    const {loading, currentWeather, dailyForecast, hourlyForecast} = context;

    return (
        <div className="Main">
            {loading ? (
                <Loader/>) : (
                <>
                    <CurrentWeather data={currentWeather} />
                    <Forecast type="hourly" title="HOURLY FORECAST" data={hourlyForecast}/>
                    <Forecast type="daily" title="21 DAYS FORECAST" data={dailyForecast}/>
                </>)}
        </div>
    )
}

export default Main;