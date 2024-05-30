<?php
session_start();

function loginUser($username, $password) {
    // Authentication logic here
}

function logoutUser() {
    // Logout logic here
}

function isAuthenticated() {
    return isset($_SESSION['user']);
}
?>
