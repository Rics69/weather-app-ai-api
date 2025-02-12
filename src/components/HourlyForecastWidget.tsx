import WeatherIcon from "./WeatherIcon.tsx";

import '../styles/components/CurrentWeather.scss'
import {useContext} from "react";
import WeatherContext from "../context/weather.context.tsx";

type Props = {
    data: {
        date: string;
        icon: number;
        summary: string;
        temperature: number;
        precipitation: {
            total: number;
        }
        wind: {
            speed: number;
            angle: number;
        };
    }
}

const HourlyForecastWidget = ({data}:Props) => {

    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error("App must be used within a WeatherProvider");
    }

    const { units } = context;

    const {date, icon, summary, temperature, precipitation, wind} = data;

    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
        }).format(new Date()),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date().setMinutes(0)),
    };
    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
        }).format(new Date(date)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date(date).setMinutes(0)),
    };

    weather_date.day = weather_date.day === now_date.day && weather_date.time === now_date.time ? "Now" : weather_date.time === "00:00" ? weather_date.day : "";

    return (
        <div className="widget">
            <div className="day">{weather_date.day} </div>
            <div className="time">{weather_date.time} </div>
            <div className="icon-temp">
                <div className="icon">
                    <WeatherIcon iconNumber={icon} alt={summary} />
                </div>
                <div className="temperature">
                    {Math.round(temperature)} {units.temperature}
                </div>
            </div>
            <div className="precipitation">
                {Math.round(precipitation.total)} {units.precipitation}
            </div>
            <div className="wind">
                <div className="speed">
                    {Math.round(wind.speed)} {units.wind.speed}
                </div>
                <div
                    className='dir'
                    style={{ transform: `rotate(${-45 + wind.angle}deg)` }}
                >
                    <i className='bi bi-send-fill'></i>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecastWidget;