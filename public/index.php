<?php include('../includes/header.php'); ?>

<section id="intro" class="intro-section">
    <h2>Welcome to Zephyr</h2>
    <p>Your reliable source for accurate weather forecasts.</p>
</section>

<section id="location-input" class="location-section">
    <h2>Enter Your Location</h2>
    <form id="location-form">
        <input type="text" id="location" name="location" placeholder="Enter city or ZIP code">
        <button type="submit">Get Weather</button>
    </form>
</section>

<section id="current-weather" class="weather-section">
    <h2>Current Weather</h2>
    <div id="weather-data">
        <p>Loading current weather data...</p>
    </div>
</section>

<section id="extended-forecast" class="forecast-section">
    <h2>Extended Weather Forecast</h2>
    <div id="forecast-data">
        <p>Loading extended forecast data...</p>
    </div>
</section>

<section id="weather-alerts" class="alerts-section">
    <h2>Weather Alerts</h2>
    <div id="alerts-data">
        <p>Loading weather alerts...</p>
    </div>
</section>

<section id="weather-map" class="map-section">
    <h2>Weather Map</h2>
    <div id="map-data">
        <p>Loading weather map...</p>
    </div>
</section>

<section id="historical-weather" class="historical-section">
    <h2>Historical Weather Data</h2>
    <form id="historical-form">
        <input type="text" id="location" name="location" placeholder="Enter city or ZIP code">
        <input type="date" id="date" name="date">
        <button type="submit">Get Historical Data</button>
    </form>
    <div id="historical-data">
        <p>Loading historical weather data...</p>
    </div>
</section>

<section id="weather-news" class="news-section">
    <h2>Latest Weather News</h2>
    <div id="news-data">
        <p>Loading weather news...</p>
    </div>
</section>

<section id="weather-updates" class="updates-section">
    <h2>Latest Updates</h2>
    <p>Stay tuned for the latest weather updates.</p>
</section>

<?php include('../includes/footer.php'); ?>
