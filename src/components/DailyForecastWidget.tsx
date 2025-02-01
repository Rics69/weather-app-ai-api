import WeatherIcon from "./WeatherIcon.tsx";

type Props = {
    data: {
        date: string;
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
    const {date, icon, summary, temperature_max, temperature_min, precipitation} = data;

    return (
        <div className="widget">
            <div className="day">{} </div>
            <div className="icon-temp">
                <div className="icon">
                    <WeatherIcon iconNumber={icon} alt={summary} />
                </div>
                <div className="temperature">
                    <div className="max">
                        {Math.round(temperature_max)} °C
                    </div>
                    <div className="min">
                        {Math.round(temperature_min)} °C
                    </div>
                </div>
            </div>
            <div className="precipitation">
                {Math.round(precipitation.total)} mm/h
            </div>
        </div>
    )
}

export default DailyForecastWidget;