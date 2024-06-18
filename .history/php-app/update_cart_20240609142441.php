<?php
ini_set('session.cookie_samesite', 'None');
ini_set('session.cookie_secure', 'True');
ini_set('session.cookie_httponly', 'True');

session_start();

require_once("Database.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Debugging: Log session data
error_log('Update Cart Quantity Session ID: ' . session_id());
error_log('Update Cart Quantity Session data: ' . print_r($_SESSION, true));

if (!isset($_SESSION['User'])) {
    error_log('Session User is not set.');
    echo json_encode(array("message" => "Unauthorized", "session" => $_SESSION));
    http_response_code(401); // Unauthorized
    exit();
} else {
    $user_email = $_SESSION['User'];
    error_log('Session User: ' . $user_email);
}

$data = json_decode(file_get_contents("php://input"));

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(array("message" => "Invalid JSON input"));
    http_response_code(400); // Bad Request
    exit();
}

$product_id = $data->productId ?? '';
$quantity = $data->quantity ?? '';

if (empty($product_id) || empty($quantity)) {
    echo json_encode(array("message" => "Product ID and quantity are required"));
    http_response_code(400); // Bad Request
    exit();
}

try {
    $db = new Database();

    // Get the user_id from the email stored in the session
    $sql = "SELECT id FROM users WHERE email = :email";
    $db->query($sql);
    $db->bind(':email', $user_email);
    $user = $db->single();
    if (!$user) {
        echo json_encode(array("message" => "User not found", "user_email" => $user_email));
        http_response_code(404); // Not Found
        exit();
    }
    $user_id = $user['id'];

    // Update the quantity for the cart item
    $sql = "UPDATE cart SET quantity = :quantity WHERE user_id = :user_id AND product_id = :product_id";
    $db->query($sql);
    $db->bind(':quantity', $quantity);
    $db->bind(':user_id', $user_id);
    $db->bind(':product_id', $product_id);
    $db->execute();

    echo json_encode(array("message" => "Quantity updated successfully"));
} catch (PDOException $e) {
    // Log the error message for debugging purposes
    error_log("Database error: " . $e->getMessage());

    echo json_encode(array("message" => "Internal Server Error", "error" => $e->getMessage(), "user_email" => $user_email));
    http_response_code(500); // Internal Server Error
}
