import { format, isValid, parseISO } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { TbUvIndex } from 'react-icons/tb';
import {
    WiBarometer,
    WiCloudyGusts,
    WiHumidity,
    WiRaindrops,
    WiThermometer,
} from 'react-icons/wi';

import UvIndex from './UvIndex';
import weatherCode from './weatherCode';

const WeatherContainer = (props) => {
    const { weatherInfo } = props;
    if (weatherInfo === undefined)
        return <div style={{ color: 'white' }}>Error</div>;

    return (
        <>
            <div className="weather_location">
                <div>{weatherInfo?.location?.name}</div>
                <div>
                    {isValid(parseISO(weatherInfo?.location?.localtime))
                        ? format(
                              parseISO(weatherInfo?.location?.localtime),
                              'p'
                          )
                        : ''}
                </div>
            </div>
            <div className="weather">
                <div className="weather_current">
                    <div className="weather_current__icon">
                        {
                            weatherCode[weatherInfo?.current?.condition?.code]
                                ?.icon
                        }
                    </div>
                    <div className="weather_current__desc">
                        <div>
                            {
                                weatherCode[
                                    weatherInfo?.current?.condition?.code
                                ]?.description
                            }
                        </div>
                    </div>
                    <div className="weather_current__temp">
                        <div className="weather_current__temp_wrapper">
                            <div className="weather_current__temp__icon">
                                <WiThermometer />
                            </div>
                            <div className="weather_current__temp__text">
                                {weatherInfo?.current?.temp_c}°C
                            </div>
                        </div>
                    </div>
                    <div className="weather_current__feels">
                        <div>
                            Feels like: {weatherInfo?.current?.feelslike_c}
                            °C
                        </div>
                    </div>
                </div>
                <div className="weather_info">
                    <div className="weather_info__row">
                        <div className="weather_info__row__icon">
                            {
                                weatherCode[
                                    weatherInfo?.current?.condition?.code
                                ]?.icon
                            }
                        </div>
                        <div className="weather_info__row__text">
                            <div>
                                {
                                    weatherCode[
                                        weatherInfo?.current?.condition?.code
                                    ]?.description
                                }
                            </div>
                        </div>
                    </div>

                    <div className="weather_info__row">
                        <div className="weather_info__row__icon">
                            <WiRaindrops />
                        </div>
                        <div className="weather_info__row__text">
                            <div>{weatherInfo?.current?.precip_mm} mm</div>
                        </div>
                    </div>

                    <div className="weather_info__row">
                        <div className="weather_info__row__icon">
                            <WiHumidity />
                        </div>
                        <div className="weather_info__row__text">
                            <div>{weatherInfo?.current?.humidity} %</div>
                        </div>
                    </div>

                    <div className="weather_info__row">
                        <div className="weather_info__row__icon">
                            <WiCloudyGusts />
                        </div>
                        <div className="weather_info__row__text">
                            <div>{weatherInfo?.current?.wind_kph} km/h</div>
                        </div>
                    </div>

                    <div className="weather_info__row">
                        <div className="weather_info__row__icon">
                            <WiBarometer />
                        </div>
                        <div className="weather_info__row__text">
                            <div>{weatherInfo?.current?.pressure_mb} mbar</div>
                        </div>
                    </div>

                    <div className="weather_info__row">
                        <div className="weather_info__row__icon">
                            <TbUvIndex />
                        </div>
                        <div className="weather_info__row__text">
                            <div>
                                {weatherInfo?.current?.uv}{' '}
                                {UvIndex(weatherInfo?.current?.uv)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeatherContainer;
