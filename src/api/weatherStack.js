import axios from 'axios';
const baseURL = 'http://api.weatherstack.com';

const api_key = { access_key: import.meta.env.VITE_WEATHERSTACK_TOKEN };

const weatherURL =
    'https://api.weatherapi.com/v1/search.json?key=455a0cbc480240a8aaf235613242804&q=Toronto&aqi=no';
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

        // const response = await axios.get(`${baseURL}/current`, {
        //     params: {
        //         ...api_key,
        //         query: `${lat.toPrecision(8)},${long.toPrecision(8)}`,
        //     },
        // });
        if (response.status === 200) return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getCurrentWeather;
