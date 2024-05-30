const apiKey = 'a608a6c36767407d9b3221135242905';
const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

function fetchDefaultForecast() {
    const defaultLocation = 'San Francisco';
    fetchForecastData(defaultLocation);
}

function fetchForecastData(location) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`)
        .then(response => response.json())
        .then(data => {
            displayForecastData(data);
            displayMapData(data.location.lat, data.location.lon);
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            const forecastData = document.getElementById('forecast-data');
            forecastData.innerHTML = '<p>Error loading forecast data. Please try again later.</p>';
        });
}

function displayForecastData(data) {
    const forecastData = document.getElementById('forecast-data');
    forecastData.innerHTML = `
        <div class="forecast-summary">
            <h3>7-Day Weather Forecast for ${data.location.name}, ${data.location.region}</h3>
            <p>Latitude: ${data.location.lat}, Longitude: ${data.location.lon}</p>
        </div>
        <div class="forecast-container">
            ${data.forecast.forecastday.map(day => `
                <div class="forecast-day">
                    <p>${day.date}</p>
                    <p><strong>${day.day.avgtemp_c}°C</strong></p>
                    <p><img src="${day.day.condition.icon}" alt="${day.day.condition.text}" title="${day.day.condition.text}">${day.day.condition.text}</p>
                    <p>Humidity: ${day.day.avghumidity}%</p>
                    <p>Wind: ${day.day.maxwind_kph} kph</p>
                    <p>Precipitation: ${day.day.totalprecip_mm} mm</p>
                </div>
            `).join('')}
        </div>
    `;
}

function displayMapData(lat, lon) {
    const mapData = document.getElementById('map-data');
    mapData.innerHTML = `
        <iframe
            width="600"
            height="450"
            frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${lat},${lon}"
            allowfullscreen>
        </iframe>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    fetchDefaultForecast();

    const form = document.getElementById('location-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('location').value;
        fetchForecastData(location);
    });
});
