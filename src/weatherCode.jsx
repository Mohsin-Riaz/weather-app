import {
    WiCloudy,
    WiDayRain,
    WiDaySnow,
    WiDaySunny,
    WiDaySunnyOvercast,
    WiFog,
    WiNightPartlyCloudy,
    WiNightSleet,
    WiNightSnowThunderstorm,
    WiRainMix,
    WiShowers,
    WiSleet,
    WiSnow,
    WiSnowWind,
    WiThunderstorm,
} from 'react-icons/wi';

const weatherCode = {
    113: {
        description: 'Sunny',
        icon: <WiDaySunny />,
    },
    116: {
        description: 'Partly Cloudy',
        icon: <WiNightPartlyCloudy />,
    },
    119: {
        description: 'Cloudy',
        icon: <WiCloudy />,
    },
    122: {
        description: 'Overcast',
        icon: <WiDaySunnyOvercast />,
    },
    143: {
        description: 'Mist',
        icon: <WiFog />,
    },
    176: {
        description: 'Patchy rain nearby',
        icon: <WiDayRain />,
    },
    179: {
        description: 'Patchy snow nearby',
        icon: <WiDaySnow />,
    },
    182: {
        description: 'Patchy sleet nearby',
        icon: <WiNightSleet />,
    },
    185: {
        description: 'Patchy freezing drizzle nearby',
        icon: <WiRainMix />,
    },
    200: {
        description: 'Thundery outbreaks in nearby',
        icon: <WiThunderstorm />,
    },
    227: {
        description: 'Blowing snow',
        icon: <WiSnowWind />,
    },
    230: {
        description: 'Blizzard',
        icon: <WiSnow />,
    },
    248: {
        description: 'Fog',
        icon: <WiFog />,
    },
    260: {
        description: 'Freezing fog',
        icon: <WiFog />,
    },
    263: {
        description: 'Patchy light drizzle',
        icon: <WiDayRain />,
    },
    266: {
        description: 'Light drizzle',
        icon: <WiDayRain />,
    },
    281: {
        description: 'Freezing drizzle',
        icon: <WiDayRain />,
    },
    284: {
        description: 'Heavy freezing drizzle',
        icon: <WiDayRain />,
    },
    293: {
        description: 'Patchy light rain',
        icon: <WiDayRain />,
    },
    299: {
        description: 'Moderate rain at times',
        icon: <WiDayRain />,
    },
    302: {
        description: 'Moderate rain',
        icon: <WiDayRain />,
    },
    305: {
        description: 'Heavy rain at times',
        icon: <WiDayRain />,
    },
    308: {
        description: 'Heavy rain',
        icon: <WiDayRain />,
    },
    311: {
        description: 'Light freezing rain',
        icon: <WiDayRain />,
    },
    314: {
        description: 'Moderate or Heavy freezing rain',
        icon: <WiDayRain />,
    },
    317: {
        description: 'Light sleet',
        icon: <WiSleet />,
    },
    320: {
        description: 'Moderate or heavy sleet',
        icon: <WiSleet />,
    },
    323: {
        description: 'Patchy light snow',
        icon: <WiSnow />,
    },
    326: {
        description: 'Light snow',
        icon: <WiSnow />,
    },
    329: {
        description: 'Patchy moderate snow',
        icon: <WiSnow />,
    },
    332: {
        description: 'Moderate snow',
        icon: <WiSnow />,
    },
    335: {
        description: 'Patchy heavy snow',
        icon: <WiSnow />,
    },
    338: {
        description: 'Heavy snow',
        icon: <WiSnow />,
    },
    350: {
        description: 'Ice pellets',
        icon: <WiSleet />,
    },
    353: {
        description: 'Light rain shower',
        icon: <WiShowers />,
    },
    356: {
        description: 'Moderate or heavy rain shower',
        icon: <WiShowers />,
    },
    359: {
        description: 'Torrential rain shower',
        icon: <WiShowers />,
    },
    362: {
        description: 'Light sleet showers',
        icon: <WiRainMix />,
    },
    365: {
        description: 'Moderate or heavy sleet showers',
        icon: <WiRainMix />,
    },
    368: {
        description: 'Light snow showers',
        icon: <WiRainMix />,
    },
    371: {
        description: 'Moderate or heavy snow showers',
        icon: <WiRainMix />,
    },
    374: {
        description: 'Light showers of ice pellets',
        icon: <WiRainMix />,
    },
    377: {
        description: 'Moderate or heavy showers of ice pellets',
        icon: <WiRainMix />,
    },
    386: {
        description: 'Patchy light rain in area with thunder',
        icon: <WiThunderstorm />,
    },
    389: {
        description: 'Moderate or heavy rain in area with thunder',
        icon: <WiThunderstorm />,
    },
    392: {
        description: '>Patchy light snow in area with thunder',
        icon: <WiNightSnowThunderstorm />,
    },
    395: {
        description: '>Patchy light snow in area with thunder',
        icon: <WiNightSnowThunderstorm />,
    },
};

export default weatherCode;
