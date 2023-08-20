import axios from 'axios';
const baseURL = 'http://api.weatherstack.com';

const api_key = { access_key: '978484962ad496f6c495ca11a267f961' };

const getCurrentWeather = async ([long, lat]) => {
    try {
        const response = await axios.get(`${baseURL}/current`, {
            params: {
                ...api_key,
                query: `${lat.toPrecision(4)},${long.toPrecision(4)}`,
            },
        });
        if (response.status === 200) return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getCurrentWeather;
