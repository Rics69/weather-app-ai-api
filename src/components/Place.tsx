import {useContext} from "react";
import WeatherContext from "../context/weather.context.tsx";

const Place = () => {
    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error("Place must be used within a WeatherProvider");
    }

    const { place } = context;

    return (
        <div className="Place">
            <i className="bi bi-geo-alt-fill"></i> <b>{place.name}</b>, {place.country}
        </div>
    )
}

export default Place;