import {getCurrentWeather} from "../api";

import '../styles/components/CurrentWeather.scss'

const CurrentWeather = () => {
    const data = getCurrentWeather();

    const {
        cloud_cover,
        feels_like,
        humidity,
        icon_num,
        precipitation,
        summary,
        temperature,
        uv_index,
        visibility,
        wind
    } = data;

    return (
        <div className="CurrentWeather">
            <div className="temperature">
                <div className="weather-icon">
                    <img src={`${import.meta.env.BASE_URL}dist/weather_icons/set04/big/${icon_num}.png`} alt={summary}/>
                </div>
                <div className="value">
                    <div className="real">
                        {temperature} °C
                    </div>
                    <div className="feels_like">
                        feels like {feels_like} °C
                    </div>
                </div>
                <div className="summary">
                    {summary}
                </div>
            </div>
            <div className="other-infos">
                
            </div>
        </div>
    )
}

export default CurrentWeather;