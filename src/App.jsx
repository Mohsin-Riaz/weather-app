import { SearchBox } from '@mapbox/search-js-react';
import { QRCodeSVG } from 'qrcode.react';
import React, { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import Loading from './Loading';
import WeatherContainer from './WeatherContainer';
import getLongLat from './api/mapBox';
import getCurrentWeather from './api/weatherStack';
import geolocationIcon from './assets/geolocation.svg';
import searchIcon from './assets/search.svg';

import './main.css';
function App() {
    const accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    const [loading, setLoading] = useState(false);
    const [weatherLocation, setWeatherLocation] = useState('');
    const [weatherInfo, setWeatherInfo] = useState({});
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);

    function clickHandler() {
        if (weatherLocation === '') return alert('Please enter a location');
        setInProp(false);
        setLoading(true);
        getWeather(weatherLocation);
    }

    function keyHandler(e) {
        if (e.keyCode !== 13) return;
        if (weatherLocation === '') return alert('Please enter a location');
        setInProp(false);
        setLoading(true);
        getWeather(weatherLocation);
    }

    function handleGeolocation() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLoading(true);
                return getWeather([pos.coords.longitude, pos.coords.latitude]);
            },
            (err) => console.log(err),
            {}
        );
    }

    async function getWeather(search_text) {
        const longlat = await getLongLat(search_text);
        const weather = await getCurrentWeather(longlat);
        setWeatherInfo(weather);
        setLoading(false);
        setInProp(true);
        setWeatherLocation('');
    }

    async function getWeatherAuto(longlat) {
        const weather = await getCurrentWeather(longlat);
        setWeatherInfo(weather);
        setLoading(false);
        setInProp(true);
        setWeatherLocation('');
    }

    const duration = 300;
    const defaultStyle = {
        transition: `${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    return (
        <main className="main" key={'main'}>
            <div className="qr">
                <div>This site is meant for mobile, try it!</div>
                <QRCodeSVG className="qrcode" value={window.location.href} />
            </div>
            <div className="input-container">
                <button
                    className="input_geolocation"
                    onClick={handleGeolocation}
                    disabled={loading}
                >
                    <img src={geolocationIcon} alt="" />
                </button>
                <SearchBox
                    className="input_search"
                    accessToken={accessToken}
                    value={weatherLocation}
                    onChange={(e) => setWeatherLocation(e)}
                    onRetrieve={(e) =>
                        getWeatherAuto([
                            e.features[0].properties.coordinates.longitude,
                            e.features[0].properties.coordinates.latitude,
                        ])
                    }
                    placeholder="Toronto"
                />

                <button
                    className="input_button"
                    onClick={clickHandler}
                    disabled={loading}
                >
                    <img src={searchIcon} alt="" />
                </button>
            </div>

            <Transition
                nodeRef={nodeRef}
                in={inProp}
                timeout={duration}
                unmountOnExit={true}
            >
                {(state) => (
                    <div
                        className="weather-container"
                        key={weatherInfo}
                        ref={nodeRef}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        <WeatherContainer
                            weatherInfo={weatherInfo}
                            in={inProp}
                        />
                    </div>
                )}
            </Transition>
        </main>
    );
}

export default App;
