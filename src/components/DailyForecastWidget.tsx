import WeatherIcon from "./WeatherIcon.tsx";
import {useContext} from "react";
import WeatherContext from "../context/weather.context.tsx";

type Props = {
    data: {
        day: string;
        icon: number;
        summary: string;
        temperature_max: number;
        temperature_min: number;
        precipitation: {
            total: number;
        }
    }
}

const DailyForecastWidget = ({data} : Props) => {

    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error("App must be used within a WeatherProvider");
    }

    const { units } = context;

    const {day, icon, summary, temperature_max, temperature_min, precipitation} = data;

    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
        }).format(new Date())
    };
    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
        }).format(new Date(day))
    };

    weather_date.day = now_date.day === weather_date.day ? "Today" : weather_date.day;

    return (
        <div className="widget">
            <div className="day">{weather_date.day}</div>
            <div className="icon-temp">
                <div className="icon">
                    <WeatherIcon iconNumber={icon} alt={summary} />
                </div>
                <div className="temperature">
                    <div className="max">
                        {Math.round(temperature_max)} {units.temperature}
                    </div>
                    <div className="min">
                        {Math.round(temperature_min)} {units.temperature}
                    </div>
                </div>
            </div>
            <div className="precipitation">
                {Math.round(precipitation.total)} {units.precipitation}
            </div>
        </div>
    )
}

export default DailyForecastWidget;