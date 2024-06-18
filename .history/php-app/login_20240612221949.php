<?php
require_once("../php-app/Database.php");

session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Read the raw POST data and decode it as JSON
$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['email']) && isset($input['password'])) {
    $email = $input['email'];
    $password = $input['password'];

    // Create an instance of the Database class
    $db = new Database();

    // Check if the user exists in the database
    $sql = "SELECT * FROM users WHERE email = :email AND password = :password";
    $db->query($sql);
    $db->bind(':email', $email);
    $db->bind(':password', $password);
    $result = $db->single();

    if ($result) {
        // Store the email in the session
        $_SESSION['User'] = $email;

        if ($email === 'admin@admin.com' && $password === 'admin') {
            echo json_encode(array("message" => "Admin login successful", "redirect" => "admin.php"));
            exit();
        }

        echo json_encode(array("message" => "Login successful", "redirect" => "home.php"));
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "Invalid email or password"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Email and password are required"));
}
