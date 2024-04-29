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
    1000: {
        description: 'Sunny',
        icon: <WiDaySunny />,
    },
    1003: {
        description: 'Partly Cloudy',
        icon: <WiNightPartlyCloudy />,
    },
    1006: {
        description: 'Cloudy',
        icon: <WiCloudy />,
    },
    1009: {
        description: 'Overcast',
        icon: <WiDaySunnyOvercast />,
    },
    1030: {
        description: 'Mist',
        icon: <WiFog />,
    },
    1063: {
        description: 'Patchy rain nearby',
        icon: <WiDayRain />,
    },
    1066: {
        description: 'Patchy snow nearby',
        icon: <WiDaySnow />,
    },
    1069: {
        description: 'Patchy sleet nearby',
        icon: <WiNightSleet />,
    },
    1072: {
        description: 'Patchy freezing drizzle nearby',
        icon: <WiRainMix />,
    },
    1087: {
        description: 'Thundery outbreaks in nearby',
        icon: <WiThunderstorm />,
    },
    1114: {
        description: 'Blowing snow',
        icon: <WiSnowWind />,
    },
    1117: {
        description: 'Blizzard',
        icon: <WiSnow />,
    },
    1135: {
        description: 'Fog',
        icon: <WiFog />,
    },
    1147: {
        description: 'Freezing fog',
        icon: <WiFog />,
    },
    1150: {
        description: 'Patchy light drizzle',
        icon: <WiDayRain />,
    },
    1153: {
        description: 'Light drizzle',
        icon: <WiDayRain />,
    },
    1168: {
        description: 'Freezing drizzle',
        icon: <WiDayRain />,
    },
    1171: {
        description: 'Heavy freezing drizzle',
        icon: <WiDayRain />,
    },
    1180: {
        description: 'Patchy light rain',
        icon: <WiDayRain />,
    },
    1183: {
        description: 'Light rain',
        icon: <WiDayRain />,
    },
    1186: {
        description: 'Moderate rain at times',
        icon: <WiDayRain />,
    },
    1189: {
        description: 'Moderate rain',
        icon: <WiDayRain />,
    },
    1192: {
        description: 'Heavy rain at times',
        icon: <WiDayRain />,
    },
    1195: {
        description: 'Heavy rain',
        icon: <WiDayRain />,
    },
    1198: {
        description: 'Light freezing rain',
        icon: <WiDayRain />,
    },
    1201: {
        description: 'Moderate or Heavy freezing rain',
        icon: <WiDayRain />,
    },
    1204: {
        description: 'Light sleet',
        icon: <WiSleet />,
    },
    1207: {
        description: 'Moderate or heavy sleet',
        icon: <WiSleet />,
    },
    1210: {
        description: 'Patchy light snow',
        icon: <WiSnow />,
    },
    1213: {
        description: 'Light snow',
        icon: <WiSnow />,
    },
    1216: {
        description: 'Patchy moderate snow',
        icon: <WiSnow />,
    },
    1219: {
        description: 'Moderate snow',
        icon: <WiSnow />,
    },
    1222: {
        description: 'Patchy heavy snow',
        icon: <WiSnow />,
    },
    1225: {
        description: 'Heavy snow',
        icon: <WiSnow />,
    },
    1237: {
        description: 'Ice pellets',
        icon: <WiSleet />,
    },
    1240: {
        description: 'Light rain shower',
        icon: <WiShowers />,
    },
    1243: {
        description: 'Moderate or heavy rain shower',
        icon: <WiShowers />,
    },
    1246: {
        description: 'Torrential rain shower',
        icon: <WiShowers />,
    },
    1249: {
        description: 'Light sleet showers',
        icon: <WiRainMix />,
    },
    1252: {
        description: 'Moderate or heavy sleet showers',
        icon: <WiRainMix />,
    },
    1255: {
        description: 'Light snow showers',
        icon: <WiRainMix />,
    },
    1258: {
        description: 'Moderate or heavy snow showers',
        icon: <WiRainMix />,
    },
    1261: {
        description: 'Light showers of ice pellets',
        icon: <WiRainMix />,
    },
    1264: {
        description: 'Moderate or heavy showers of ice pellets',
        icon: <WiRainMix />,
    },
    1273: {
        description: 'Patchy light rain in area with thunder',
        icon: <WiThunderstorm />,
    },
    1276: {
        description: 'Moderate or heavy rain in area with thunder',
        icon: <WiThunderstorm />,
    },
    1279: {
        description: 'Patchy light snow with thunder"',
        icon: <WiNightSnowThunderstorm />,
    },
    1282: {
        description: 'Moderate or heavy snow with thunder',
        icon: <WiNightSnowThunderstorm />,
    },
};

export default weatherCode;
