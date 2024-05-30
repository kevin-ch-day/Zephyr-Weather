const apiKey = 'a608a6c36767407d9b3221135242905';

export function fetchWeatherAlerts(location) {
    fetch(`https://api.weatherapi.com/v1/alerts.json?key=${apiKey}&q=${location}`)
        .then(response => response.json())
        .then(data => {
            const alertsData = document.getElementById('alerts-data');
            if (data.alerts.length > 0) {
                alertsData.innerHTML = data.alerts.map(alert => `
                    <div>
                        <p>${alert.headline}</p>
                        <p>${alert.msg}</p>
                    </div>
                `).join('');
            } else {
                alertsData.innerHTML = '<p>No weather alerts at this time.</p>';
            }
        })
        .catch(error => console.error('Error fetching weather alerts:', error));
}
