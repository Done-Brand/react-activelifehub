<?php
// Start the session and set up error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('session.cookie_samesite', 'None');
ini_set('session.cookie_secure', 'True');
ini_set('session.cookie_httponly', 'True');
error_reporting(E_ALL);

session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/includes/Database.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

error_log('Fetch Cart Session ID: ' . session_id());
error_log('Fetch Cart Session data: ' . print_r($_SESSION, true));


if (!isset($_SESSION['User'])) {
    error_log('Session User is not set.');
    echo json_encode(array("message" => "Unauthorized", "session" => $_SESSION));
    http_response_code(401); // Unauthorized
    exit();
} else {
    $user_email = $_SESSION['User'];
    error_log('Session User: ' . $user_email);
}

// Fetch and log the received data for debugging
$data = json_decode(file_get_contents("php://input"), true);
error_log('Received data: ' . print_r($data, true));

$product_id = $data['productId'] ?? '';

if (empty($product_id)) {
    echo json_encode(["error" => "Product ID is required."]);
    exit;
}

try {


    $db = new Database();

    // Fetch the user ID based on email
    $sql = "SELECT id FROM users WHERE email = :email";
    $db->query($sql);
    $stmt->bindParam(':email', $user_email);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo json_encode(["error" => "User not found."]);
        exit;
    }

    $user_id = $user['id'];

    // Remove the product from the cart
    $sql = "DELETE FROM cart WHERE user_id = :user_id AND product_id = :product_id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':product_id', $product_id);

    if ($stmt->execute()) {
        echo json_encode(["success" => "Product removed from cart successfully."]);
    } else {
        echo json_encode(["error" => "Failed to remove product from cart."]);
    }
} catch (PDOException $e) {
    error_log("PDOException: " . $e->getMessage());
    echo json_encode(["error" => "Internal Server Error."]);
    http_response_code(500);
}
