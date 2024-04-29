import axios from 'axios';
const apiKey = import.meta.env.VITE_WEATHER_API_TOKEN;
const getCurrentWeather = async ([long, lat]) => {
    try {
        const response = await axios({
            method: 'GET',
            url:
                'https://api.weatherapi.com/v1/current.json' +
                `?key=${apiKey}&q=${lat},${long}` +
                '&aqi=no',
        });
        if (response.status === 200) return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getCurrentWeather;
