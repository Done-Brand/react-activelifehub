<?php
require_once("Database.php");
require_once("cors.php");

session_start();

$data = json_decode(file_get_contents("php://input"));

// Ensure that the user is authenticated
if (!isset($_SESSION['User'])) {
    http_response_code(401); // Unauthorized
    echo json_encode(array("message" => "User not authenticated"));
    exit();
}

$user_email = $_SESSION['User'];

$db = new Database();

// Get user ID from the email stored in the session
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

if (!empty($user_id) && !empty($data->product_id) && !empty($data->quantity)) {
    $product_id = $data->product_id;
    $quantity = $data->quantity;

    // Check if product is already in the cart
    $sql = "SELECT * FROM cart WHERE user_id = :user_id AND product_id = :product_id";
    $db->query($sql);
    $db->bind(':user_id', $user_id);
    $db->bind(':product_id', $product_id);
    $db->execute();

    if ($db->rowCount() > 0) {
        // Update quantity if product is already in the cart
        $sql = "UPDATE cart SET quantity = quantity + :quantity WHERE user_id = :user_id AND product_id = :product_id";
    } else {
        // Insert new product into cart
        $sql = "INSERT INTO cart (user_id, product_id, quantity) VALUES (:user_id, :product_id, :quantity)";
    }

    $db->query($sql);
    $db->bind(':user_id', $user_id);
    $db->bind(':product_id', $product_id);
    $db->bind(':quantity', $quantity);

    if ($db->execute()) {
        http_response_code(201);
        echo json_encode(array("message" => "Product added to cart."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to add product to cart."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
}
