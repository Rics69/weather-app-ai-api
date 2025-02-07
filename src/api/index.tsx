import axios from 'axios';

export async function getWeatherData(endpoint, place_id, measurementSystem) {
    const options = {
        method: 'GET',
        url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
        params: {
            place_id,
            timezone: 'auto',
            language: 'en',
            units: measurementSystem
        },
        headers: {
            'x-rapidapi-key': 'eff24adea2msh37e325c444aba22p1c2bc9jsn03c7fbdec311',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}