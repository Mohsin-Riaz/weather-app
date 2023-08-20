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

import { Transition } from 'react-transition-group';

import UvIndex from './UvIndex';
import weatherCode from './weatherCode';

const WeatherContainer = (props) => {
    const { weatherInfo, nodeRef, in: inProp } = props;
    // console.log(props);
    const duration = 400;
    const defaultStyle = {
        transition: `${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: { opacity: 0.5 },
        entered: { opacity: 1 },
        exiting: { opacity: 0.5 },
        exited: { opacity: 0 },
    };
    console.log(inProp);
    return (
        <Transition
            nodeRef={nodeRef}
            in={inProp}
            timeout={duration}
            onEntered={() =>
                console.log('Entered', transitionStyles['entered'])
            }
            onEntering={() =>
                console.log('Entering', transitionStyles['entering'])
            }
            onExited={() => console.log('Exited', transitionStyles['exited'])}
            onExiting={() =>
                console.log('Exiting', transitionStyles['exiting'])
            }
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
                    <div className="weather_location">
                        <div>{weatherInfo?.location?.name}</div>
                        <div>
                            {isValid(parseISO(weatherInfo?.location?.localtime))
                                ? format(
                                      parseISO(
                                          weatherInfo?.location?.localtime
                                      ),
                                      'p'
                                  )
                                : ''}
                        </div>
                    </div>
                    <div className="weather">
                        <div className="weather_current">
                            <div className="weather_current__icon">
                                {
                                    weatherCode[
                                        weatherInfo?.current?.weather_code
                                    ]?.icon
                                }
                            </div>
                            <div className="weather_current__desc">
                                <div>
                                    {
                                        weatherCode[
                                            weatherInfo?.current?.weather_code
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
                                        {weatherInfo?.current?.temperature}°C
                                    </div>
                                </div>
                            </div>
                            <div className="weather_current__feels">
                                <div>
                                    Feels like:{' '}
                                    {weatherInfo?.current?.feelslike}
                                    °C
                                </div>
                            </div>
                        </div>
                        <div className="weather_info">
                            <div className="weather_info__row">
                                <div className="weather_info__row__icon">
                                    {
                                        weatherCode[
                                            weatherInfo?.current?.weather_code
                                        ]?.icon
                                    }
                                </div>
                                <div className="weather_info__row__text">
                                    <div>
                                        {
                                            weatherCode[
                                                weatherInfo?.current
                                                    ?.weather_code
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
                                    <div>
                                        {weatherInfo?.current?.precip}% Chance
                                    </div>
                                </div>
                            </div>

                            <div className="weather_info__row">
                                <div className="weather_info__row__icon">
                                    <WiHumidity />
                                </div>
                                <div className="weather_info__row__text">
                                    <div>{weatherInfo?.current?.humidity}%</div>
                                </div>
                            </div>

                            <div className="weather_info__row">
                                <div className="weather_info__row__icon">
                                    <WiCloudyGusts />
                                </div>
                                <div className="weather_info__row__text">
                                    <div>
                                        {weatherInfo?.current?.wind_speed} km/h
                                    </div>
                                </div>
                            </div>

                            <div className="weather_info__row">
                                <div className="weather_info__row__icon">
                                    <WiBarometer />
                                </div>
                                <div className="weather_info__row__text">
                                    <div>
                                        x{weatherInfo?.current?.pressure} mbar
                                    </div>
                                </div>
                            </div>

                            <div className="weather_info__row">
                                <div className="weather_info__row__icon">
                                    <TbUvIndex />
                                </div>
                                <div className="weather_info__row__text">
                                    <div>
                                        {weatherInfo?.current?.uv_index}{' '}
                                        {UvIndex(
                                            weatherInfo?.current?.uv_index
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default WeatherContainer;
