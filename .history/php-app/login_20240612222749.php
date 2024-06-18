<?php
require_once("Database.php");

ini_set('session.cookie_samesite', 'None');
ini_set('session.cookie_secure', 'True');
ini_set('session.cookie_httponly', 'True');

session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(array("message" => "Invalid JSON input"));
        http_response_code(400); // Bad Request
        exit();
    }

    $email = $data->email ?? '';
    $password = $data->password ?? '';

    if (empty($email) || empty($password)) {
        echo json_encode(array("message" => "Email and password are required"));
        http_response_code(400); // Bad Request
        exit();
    }

    try {
        $db = new Database();

        // Check if the user exists in the database
        $sql = "SELECT * FROM users WHERE email = :email";
        $db->query($sql);
        $db->bind(':email', $email);
        $user = $db->single();

        if ($user && password_verify($password, $user['password'])) {
            if ($email === 'admin@admin.com') {
                echo json_encode(array("message" => "Admin login successful", "redirect" => "admin"));
                exit();
            }

            $_SESSION['User'] = $email;

            // Log session data for debugging
            error_log('Login Session ID: ' . session_id());
            error_log('Login Session data after setting User: ' . print_r($_SESSION, true));

            echo json_encode(array("message" => "Login successful", "redirect" => "home.php"));
            exit();
        } else {
            echo json_encode(array("message" => "Invalid email or password"));
            http_response_code(401); // Unauthorized
            exit();
        }
    } catch (PDOException $e) {
        echo json_encode(array("message" => "Database error: " . $e->getMessage()));
        http_response_code(500); // Internal Server Error
        exit();
    }
}
