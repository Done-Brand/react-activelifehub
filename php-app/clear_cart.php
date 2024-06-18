<?php
// Start the session and set up error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/includes/Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if (!isset($_SESSION['User'])) {
    echo json_encode(["error" => "Please log in to clear the cart."]);
    exit;
}

$user_email = $_SESSION['User'];

try {
    $db = new Database();

    // Fetch the user ID based on email
    $sql = "SELECT id FROM users WHERE email = :email";
    $db->query($sql);
    $db->bind(':email', $user_email);
    $user = $db->single();

    error_log("User email: $user_email"); // Log user email
    error_log("User fetched: " . print_r($user, true)); // Log fetched user

    if (!$user) {
        echo json_encode(["error" => "User not found."]);
        exit;
    }

    $user_id = $user['id'];

    // Clear the cart
    $sql = "DELETE FROM cart WHERE user_id = :user_id";
    $db->query($sql);
    $db->bind(':user_id', $user_id);

    if ($db->execute()) {
        echo json_encode(["success" => "Cart cleared successfully."]);
    } else {
        echo json_encode(["error" => "Failed to clear the cart."]);
    }
} catch (PDOException $e) {
    error_log("PDOException: " . $e->getMessage());
    echo json_encode(["error" => "Internal Server Error."]);
    http_response_code(500);
}
