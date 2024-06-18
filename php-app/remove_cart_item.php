<?php
ini_set('session.cookie_samesite', 'None');
ini_set('session.cookie_secure', 'True');
ini_set('session.cookie_httponly', 'True');

session_start();

require_once("Database.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if (!isset($_SESSION['User'])) {
    echo json_encode(array("message" => "Unauthorized", "session" => $_SESSION));
    http_response_code(401); // Unauthorized
    exit();
} else {
    $user_email = $_SESSION['User'];
}

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['productId'])) {
    echo json_encode(array("message" => "Bad Request"));
    http_response_code(400); // Bad Request
    exit();
}

$productId = $input['productId'];

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

    // Remove the cart item
    $sql = "DELETE FROM cart WHERE user_id = :user_id AND product_id = :product_id";
    $db->query($sql);
    $db->bind(':user_id', $user_id);
    $db->bind(':product_id', $productId);
    $db->execute();

    echo json_encode(array("message" => "Cart item removed"));
} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    echo json_encode(array("message" => "Internal Server Error", "error" => $e->getMessage()));
    http_response_code(500); // Internal Server Error
}
