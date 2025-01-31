import HourlyForecastWidget from "./HourlyForecastWidget.tsx";
import DailyForecastWidget from "./DailyForecastWidget.tsx";

import '../styles/components/Forecast.scss'

type Props = {
    type: "hourly" | "daily",
    title: string,
    data: []
}

const Forecast = ({type, title, data}:Props) => {
    return (
        <div className="Forecast">
            <div className="forecast-container">
                <h3>{title}</h3>
                <div className="widget-container">
                    {
                        data.map((singleData, i) => (
                            <div key={i}>
                                {
                                    type === "hourly" ? <HourlyForecastWidget data={singleData}/> : <DailyForecastWidget data={singleData}/>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Forecast;