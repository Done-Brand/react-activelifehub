<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");
session_start();
header('Content-Type: application/json');
require_once("Database.php");

if (isset($_SESSION['email'])) {
    $email = $_SESSION['email'];

    $db = new Database();

    // Fetch user ID based on the email
    $sql = "SELECT id FROM users WHERE email = :email";
    $db->query($sql);
    $db->bind(':email', $email);
    $db->execute();
    $user = $db->single();

    if ($user) {
        echo json_encode(array("user_id" => $user['id']));
    } else {
        http_response_code(404); // Not Found
        echo json_encode(array("message" => "User not found"));
    }
} else {
    http_response_code(400); // Bad Request
    echo json_encode(array("message" => "Email not found in session"));
}
