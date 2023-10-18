import axios from 'axios';
const baseURL = 'http://api.weatherstack.com';

const api_key = { access_key: import.meta.env.VITE_WEATHERSTACK_TOKEN };

console.log(api_key);

const getCurrentWeather = async ([long, lat]) => {
    try {
        const response = await axios.get(`${baseURL}/current`, {
            params: {
                ...api_key,
                query: `${lat.toPrecision(8)},${long.toPrecision(8)}`,
            },
        });
        if (response.status === 200) return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getCurrentWeather;
