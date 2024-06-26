<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Forecast - Zephyr Weather Forecasting</title>
    <link rel="stylesheet" href="../assets/css/styles.css">
    <script src="../assets/js/main.js" defer></script>
    <script src="../assets/js/forecast.js" defer></script>
</head>
<body>
    <header class="header">
        <?php include('../includes/header.php'); ?>
    </header>
    <main>
        <section id="forecast" class="weather-section">
            <h2>Weather Forecast</h2>

            <section id="location-input" class="location-section">
                <h3>Enter Your Location</h3>
                <form id="location-form">
                    <input type="text" id="location" name="location" placeholder="Enter city or ZIP code" required>
                    <button type="submit">Get Forecast</button>
                </form>
            </section>

            <div id="forecast-results" class="results-section">
                <div id="forecast-data">
                    <p>Loading forecast data...</p>
                </div>
                <div id="map-data">
                    <p>Loading map data...</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <?php include('../includes/footer.php'); ?>
    </footer>
</body>
</html>
