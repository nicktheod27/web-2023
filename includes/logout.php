<?php
session_start();

if (isset($_POST['logout'])) {
    // Destroy all session data
    $_SESSION = array();

    // If you have a session cookie, delete it
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }

    // Destroy the session
    session_destroy();

    // Respond with a success message (optional)
    echo 'Logged out successfully';
}
