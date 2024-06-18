<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

require_once("Database.php");

if (isset($_SESSION['User'])) {
    $email = $_SESSION['User'];

    $db = new Database();

    // Fetch user ID based on the email
    $sql = "SELECT id FROM users WHERE email = :email";
    $db->query($sql);
    $db->bind(':email', $email);
    $db->execute();
    $user = $db->single();
    echo json_encode(array("user_id" => $user['id']));


    if ($user) {
    } else {
        http_response_code(404); // Not Found
        echo json_encode(array("message" => "User not found"));
    }
} else {
    http_response_code(400); // Bad Request
    echo json_encode(array("message" => "Email not found in session"));
}
