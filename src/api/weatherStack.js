import axios from 'axios';
const apiKey = import.meta.env.VITE_WEATHER_API_TOKEN;
const weatherApiUrl = import.meta.env.VITE_WEATHER_URL;

const getCurrentWeather = async ([long, lat]) => {
    // if (!weatherApiUrl) return new Error('No api connected');
    // try {
    //     await axios({
    //         method: 'GET',
    //         url: weatherApiUrl + '/?' + `${lat},${long}`,
    //     });
    // } catch (error) {
    //     console.log(error);
    // }

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
