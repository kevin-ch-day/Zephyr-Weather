const apiKey = 'a608a6c36767407d9b3221135242905';
const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

export function fetchExtendedForecast(location, startDate, endDate) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&dt=${startDate}&end_dt=${endDate}`)
        .then(response => response.json())
        .then(data => {
            const forecastData = document.getElementById('forecast-data');
            forecastData.innerHTML = `
                <div class="forecast-summary">
                    <h3>Weather Forecast for ${data.location.name}, ${data.location.region}</h3>
                    <p>Latitude: ${data.location.lat}, Longitude: ${data.location.lon}</p>
                </div>
                <table class="forecast-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temperature</th>
                            <th>Condition</th>
                            <th>Humidity</th>
                            <th>Wind Speed</th>
                            <th>Precipitation</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.forecast.forecastday.map(day => `
                            <tr>
                                <td>${day.date}</td>
                                <td>${day.day.avgtemp_c}°C</td>
                                <td>
                                    <img src="${day.day.condition.icon}" alt="${day.day.condition.text}" title="${day.day.condition.text}">
                                    ${day.day.condition.text}
                                </td>
                                <td>${day.day.avghumidity}%</td>
                                <td>${day.day.maxwind_kph} kph</td>
                                <td>${day.day.totalprecip_mm} mm</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;

            const mapData = document.getElementById('map-data');
            mapData.innerHTML = `
                <iframe
                    width="600"
                    height="450"
                    frameborder="0" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${data.location.lat},${data.location.lon}"
                    allowfullscreen>
                </iframe>
            `;
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            const forecastData = document.getElementById('forecast-data');
            forecastData.innerHTML = '<p>Error loading forecast data. Please try again later.</p>';
        });
}
