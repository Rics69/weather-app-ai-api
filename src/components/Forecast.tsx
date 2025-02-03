import HourlyForecastWidget from "./HourlyForecastWidget.tsx";
import DailyForecastWidget from "./DailyForecastWidget.tsx";

import '../styles/components/Forecast.scss'
import HorizontallyScrollable from "./HorizontallyScrollable.tsx";

type HourlyForecastData = {
    date: string;
    icon: number;
    summary: string;
    temperature: number;
    precipitation: {
        total: number;
    };
    wind: {
        speed: number;
        angle: number;
    };
};

type DailyForecastData = {
    day: string;
    icon: number;
    summary: string;
    temperature_max: number;
    temperature_min: number;
    precipitation: {
        total: number;
    };
};

type ForecastData = HourlyForecastData | DailyForecastData;

type Props = {
    type: "hourly" | "daily";
    title: string;
    data: ForecastData[];
};

const Forecast = ({type, title, data}: Props) => {
    return (
        <div className="Forecast">
            <div className="forecast-container">
                <h3>{title}</h3>
                <HorizontallyScrollable className="widget-container">
                    {
                        data.map((singleData:ForecastData) => (
                            <div key={"date" in singleData ? singleData.date : singleData.day}>
                                {type === "hourly" && "date" in singleData ? (
                                    <HourlyForecastWidget data={singleData} />
                                ) : type === "daily" && "day" in singleData ? (
                                    <DailyForecastWidget data={singleData} />
                                ) : null}
                            </div>
                        ))
                    }
                </HorizontallyScrollable>
            </div>
        </div>
    )
}

export default Forecast;