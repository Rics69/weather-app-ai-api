type Props = {
    iconNumber: number;
    alt: string;
}

const WeatherIcon = ({iconNumber, alt} : Props) => {
    return <img src={`${import.meta.env.BASE_URL}dist/weather_icons/set04/big/${iconNumber}.png`} alt={alt} draggable={false}/>
}

export default WeatherIcon;