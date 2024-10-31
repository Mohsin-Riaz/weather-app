# Weather App

A modern React-based weather application that provides real-time weather information based on location search. The app combines Mapbox's geolocation services with WeatherAPI's comprehensive weather data to deliver accurate weather forecasts.

## Features

-   🔍 Location search with autocomplete using Mapbox
-   🌡️ Real-time weather information from WeatherAPI
-   📱 Responsive design for all device sizes
-   🎨 Clean and intuitive user interface
-   📍 Precise location-based weather data

## Live Demo

[☁ Weather App](https://mohsinriaz.ca/weather-app/)

## Technologies Used

-   **React.js** - Frontend framework
-   **Vite** - Build tool and development server
-   **Mapbox Search API** - For location search and coordinates
-   **WeatherAPI** - For weather data
-   **Axios** - HTTP client for API requests
-   **date-fns** - Date formatting and manipulation
-   **React Icons** - UI icons
-   **React Transition Group** - Smooth component transitions
-   **SASS** - CSS preprocessor
-   **GitHub Pages** - Hosting platform

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Mohsin-Riaz/weather-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your API keys:

```env
VITE_MAPBOX_TOKEN=your_mapbox_api_key
VITE_WEATHER_API_TOKEN=your_weather_api_key
```

## Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run lint` - Run ESLint
-   `npm run preview` - Preview production build locally
-   `npm run deploy` - Deploy to GitHub Pages

## Development

To start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Deployment

The app is configured for deployment to GitHub Pages. To deploy:

1. Update the `vite.config.js` with your repository base URL:

```javascript
export default defineConfig({
    base: '/your-repo-name/',
    // ... other config
});
```

2. Run the deploy command:

```bash
npm run deploy
```

This will build the app and deploy it to the `gh-pages` branch.

## Usage

1. Enter a location in the search bar
2. Select from the autocomplete suggestions
3. View detailed weather information for the selected location

## Environment Variables

The following environment variables are required:

-   `VITE_MAPBOX_TOKEN` - Your Mapbox API key
-   `VITE_WEATHER_API_TOKEN` - Your WeatherAPI key

## API Integration

### Mapbox API

-   Used for converting location searches into coordinates
-   Provides autocomplete suggestions for location search
-   Documentation: [Mapbox Search API](https://docs.mapbox.com/api/search/)

### WeatherAPI

-   Provides comprehensive weather data
-   Supports current weather and forecasts
-   Documentation: [WeatherAPI Docs](https://www.weatherapi.com/docs/)

## Acknowledgments

-   Mapbox for their API [🔗 Mapbox](https://www.mapbox.com/)
-   WeatherAPI for their API [🔗 WeatherAPI](https://www.weatherapi.com/)
