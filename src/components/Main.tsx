import '../styles/components/Main.scss'
import CurrentWeather from "./CurrentWeather.tsx";
import Forecast from "./Forecast.tsx";
import {getDailyForecast, getHourlyForecast} from "../api";

const Main = () => {
    return (
        <div className="Main">
            <CurrentWeather />
            <Forecast type="hourly" title="HOURLY FORECAST" data={getHourlyForecast()} />
            <Forecast type="daily" title="21 DAYS FORECAST" data={getDailyForecast()} />
        </div>
    )
}

export default Main;