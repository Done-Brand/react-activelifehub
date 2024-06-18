<?php
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
    echo json_encode(array("message" => "Email is required in session"));
}
