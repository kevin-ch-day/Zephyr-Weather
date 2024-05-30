const apiKey = 'a608a6c36767407d9b3221135242905';

export function fetchWeatherData(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
        .then(response => response.json())
        .then(data => {
            const weatherData = document.getElementById('weather-data');
            weatherData.innerHTML = `
                <p>Location: ${data.location.name}, ${data.location.region}</p>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
