<?php
session_start();
require_once("Database.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if (!isset($_SESSION['User'])) {
    echo json_encode(array("message" => "Unauthorized"));
    http_response_code(401); // Unauthorized
    exit();
}

try {
    $db = new Database();
    $user_email = $_SESSION['User'];

    // Get the user_id from the email stored in the session
    $sql = "SELECT id FROM users WHERE email = :email";
    $db->query($sql);
    $db->bind(':email', $user_email);
    $user = $db->single();
    if (!$user) {
        echo json_encode(array("message" => "User not found"));
        http_response_code(404); // Not Found
        exit();
    }
    $user_id = $user['id'];

    // Clear the cart for the current user
    $sql = "DELETE FROM cart WHERE user_id = :user_id";
    $db->query($sql);
    $db->bind(':user_id', $user_id);
    $db->execute();

    echo json_encode(array("message" => "Order placed and cart cleared"));
} catch (PDOException $e) {
    echo json_encode(array("message" => "Internal Server Error", "error" => $e->getMessage()));
    http_response_code(500); // Internal Server Error
}
