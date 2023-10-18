import axios from 'axios';
const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

const api_key = {
    access_token: import.meta.env.VITE_MAPBOX_TOKEN,
};

//RESPONSE in LONG LAT

const getLongLat = async (search_text) => {
    try {
        const response = await axios.get(`${baseURL}/${search_text}.json`, {
            params: {
                ...api_key,
            },
        });
        if (response.status === 200) return response.data.features[0].center;
    } catch (error) {
        console.log(error);
    }
};

export default getLongLat;
