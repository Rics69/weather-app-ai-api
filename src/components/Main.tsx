import '../styles/components/Main.scss'
import CurrentWeather from "./CurrentWeather.tsx";
import Forecast from "./Forecast.tsx";
import {getDailyForecast, getHourlyForecast} from "../api";
import WeatherContext from "../context/weather.context.tsx";
import {useContext} from "react";
import Loader from "./Loader.tsx";

const Main = () => {
    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error("WeatherProvider must be used within a WeatherProvider");
    }

    const {loading} = context;

    return (
        <div className="Main">
            {loading ? (
                <Loader/>) : (
                <>
                    <CurrentWeather/>
                    <Forecast type="hourly" title="HOURLY FORECAST" data={getHourlyForecast()}/>
                    <Forecast type="daily" title="21 DAYS FORECAST" data={getDailyForecast()}/>
                </>)}
        </div>
    )
}

export default Main;