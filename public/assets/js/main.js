import { fetchWeatherData } from './weather.js';
import { fetchExtendedForecast } from './forecast.js';
import { fetchWeatherAlerts } from './alerts.js';
import { fetchWeatherMap } from './map.js';
import { fetchHistoricalWeather } from './historical.js';
import { fetchWeatherNews } from './news.js';

document.addEventListener("DOMContentLoaded", function() {
    console.log("Zephyr Weather Forecasting is ready.");

    const defaultLocation = 'San Francisco';

    fetchWeatherData(defaultLocation);
    fetchExtendedForecast(defaultLocation);
    fetchWeatherAlerts(defaultLocation);
    fetchWeatherMap(defaultLocation);
    fetchWeatherNews();

    document.getElementById('location-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('location').value;
        fetchWeatherData(location);
        fetchExtendedForecast(location);
        fetchWeatherAlerts(location);
        fetchWeatherMap(location);
        fetchWeatherNews();
    });

    document.getElementById('historical-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        fetchHistoricalWeather(location, date);
    });
});
