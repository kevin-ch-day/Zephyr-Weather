<?php include('../includes/header.php'); ?>

<section id="forecast" class="weather-section">
    <h2>Weather Forecast</h2>

    <section id="location-input" class="location-section">
        <h3>Enter Your Location</h3>
        <form id="location-form">
            <input type="text" id="location" name="location" placeholder="Enter city or ZIP code">
            <label for="start-date">Start Date:</label>
            <input type="date" id="start-date" name="start-date">
            <label for="end-date">End Date:</label>
            <input type="date" id="end-date" name="end-date">
            <button type="submit">Get Forecast</button>
        </form>
    </section>

    <div id="forecast-data">
        <p>Loading weather forecast data...</p>
    </div>
    
    <div id="map-data" class="map-section">
        <p>Loading map...</p>
    </div>
</section>

<?php include('../includes/footer.php'); ?>
