import React, { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import WeatherContainer from './WeatherContainer';
import getLongLat from './api/mapBox';
import getCurrentWeather from './api/weatherStack';
import geolocationIcon from './assets/geolocation.svg';
import searchIcon from './assets/search.svg';
import './main.css';

function App() {
    const [loading, setLoading] = useState(false);
    const [weatherLocation, setWeatherLocation] = useState('');
    const [weatherInfo, setWeatherInfo] = useState({});
    const [inProp, setInProp] = useState(false);

    function clickHandler() {
        if (weatherLocation === '') return alert('Please enter a location');
        setInProp(!inProp);
        setLoading(true);
        getWeather(weatherLocation);
    }

    function keyHandler(e) {
        if (e.keyCode !== 13) return;
        if (weatherLocation === '') return alert('Please enter a location');
        setInProp(!inProp);
        setLoading(true);
        getWeather(weatherLocation);
    }

    function handleGeolocation() {
        window.navigator.geolocation.getCurrentPosition((pos) => {
            setLoading(true);
            return getWeather([pos.coords.longitude, pos.coords.latitude]);
        });
    }

    async function getWeather(search_text) {
        const longlat = await getLongLat(search_text);
        const weather = await getCurrentWeather(longlat);
        setWeatherInfo(weather);
        setLoading(false);
        setInProp(!inProp);
        setWeatherLocation('');
    }

    return (
        <main className="main" key={'main'}>
            <div className="input-container">
                <button
                    className="input_geolocation"
                    onClick={handleGeolocation}
                    disabled={loading}
                >
                    <img src={geolocationIcon} alt="" />
                </button>

                <input
                    className="input_search"
                    type="text"
                    name=""
                    id=""
                    placeholder="Toronto"
                    onChange={(e) => setWeatherLocation(e.currentTarget.value)}
                    value={weatherLocation}
                    onKeyUp={(e) => keyHandler(e)}
                    disabled={loading}
                />

                <button
                    className="input_button"
                    onClick={clickHandler}
                    disabled={loading}
                >
                    <img src={searchIcon} alt="" />
                </button>
            </div>

            {/* {loading ? (
                <div>Loading...</div>
            ) : !weatherInfo ? (
                <div></div>
            ) : ( */}
            {!loading && (
                <WeatherContainer weatherInfo={weatherInfo} in={inProp} />
            )}
            {/* )} */}
        </main>
    );
}

export default App;
