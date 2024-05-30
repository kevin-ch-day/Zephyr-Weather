const apiKey = 'a608a6c36767407d9b3221135242905';

export function fetchHistoricalWeather(location, date) {
    fetch(`https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${location}&dt=${date}`)
        .then(response => response.json())
        .then(data => {
            const historicalData = document.getElementById('historical-data');
            historicalData.innerHTML = `
                <p>Date: ${data.forecast.forecastday[0].date}</p>
                <p>Temperature: ${data.forecast.forecastday[0].day.avgtemp_c}°C</p>
                <p>Condition: ${data.forecast.forecastday[0].day.condition.text}</p>
                <img src="${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text}">
            `;
        })
        .catch(error => console.error('Error fetching historical weather data:', error));
}
