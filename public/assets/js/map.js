import { fetchWeatherData } from './weather.js';
import { fetchExtendedForecast } from './forecast.js';
import { fetchWeatherAlerts } from './alerts.js';
import { fetchWeatherMap } from './map.js';
import { fetchHistoricalWeather } from './historical.js';
import { fetchWeatherNews } from './news.js';

document.addEventListener("DOMContentLoaded", function() {
    console.log("Zephyr Weather Forecasting is ready.");

    const defaultLocation = 'San Francisco';
    const defaultStartDate = new Date().toISOString().split('T')[0]; // Today's date
    const defaultEndDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0]; // 7 days from today

    fetchWeatherData(defaultLocation);
    fetchExtendedForecast(defaultLocation, defaultStartDate, defaultEndDate);
    fetchWeatherAlerts(defaultLocation);
    fetchWeatherMap(defaultLocation);
    fetchWeatherNews();

    document.getElementById('location-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('location').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        fetchWeatherData(location);
        fetchExtendedForecast(location, startDate, endDate);
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
