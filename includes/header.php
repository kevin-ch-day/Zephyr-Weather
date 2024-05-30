<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zephyr Weather Forecasting</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="assets/js/main.js" defer></script>
    <script src="assets/js/alerts.js" defer></script>
    <script src="assets/js/forecast.js" defer></script>
    <script src="assets/js/historical.js" defer></script>
    <script src="assets/js/map.js" defer></script>
    <script src="assets/js/news.js" defer></script>
    <script src="assets/js/weather.js" defer></script>
</head>
<body>
    <header class="header">
        <div class="header-content">
            <div class="logo">
                <img src="assets/images/logo.png" alt="Zephyr Weather Logo">
                <h1>Zephyr Weather Forecasting</h1>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="forecast.php">Forecast</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <?php if (isset($_SESSION['user'])): ?>
                        <li><a href="dashboard.php">Dashboard</a></li>
                        <li><a href="logout.php">Logout</a></li>
                    <?php else: ?>
                        <li><a href="login.php">Login</a></li>
                        <li><a href="register.php">Register</a></li>
                    <?php endif; ?>
                </ul>
                <div class="hamburger">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </nav>
        </div>
    </header>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        });
    </script>
</body>
</html>
