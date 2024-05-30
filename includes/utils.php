<?php
session_start();

// Database connection parameters
define('DB_HOST', 'localhost');
define('DB_NAME', 'weather_app');
define('DB_USER', 'root');
define('DB_PASS', '');

/**
 * Establish a database connection
 */
function getDbConnection() {
    try {
        $pdo = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        logError($e->getMessage());
        die('Database connection failed: ' . $e->getMessage());
    }
}

/**
 * Log errors to a file
 */
function logError($message) {
    error_log(date('[Y-m-d H:i:s] ') . $message . PHP_EOL, 3, 'errors.log');
}

/**
 * Check if the user is authenticated
 */
function isAuthenticated() {
    return isset($_SESSION['user']);
}

/**
 * Redirect to a specific page
 */
function redirect($url) {
    header("Location: $url");
    exit();
}

/**
 * Handle user login
 */
function loginUser($username, $password) {
    $pdo = getDbConnection();
    $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user'] = $user['username'];
        $_SESSION['user_id'] = $user['id'];
        return true;
    }

    return false;
}

/**
 * Handle user logout
 */
function logoutUser() {
    unset($_SESSION['user']);
    unset($_SESSION['user_id']);
    session_destroy();
}

/**
 * Register a new user
 */
function registerUser($username, $password) {
    $pdo = getDbConnection();
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare('INSERT INTO users (username, password) VALUES (:username, :password)');
    $stmt->execute(['username' => $username, 'password' => $hashedPassword]);
    return $pdo->lastInsertId();
}
?>
