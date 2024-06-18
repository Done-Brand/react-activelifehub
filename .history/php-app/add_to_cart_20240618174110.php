<?php

require_once("Database.php");
require_once("cors.php");

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->user_id) && !empty($data->product_id) && !empty($data->quantity)) {
    $user_id = $data->user_id;
    $product_id = $data->product_id;
    $quantity = $data->quantity;
    error_log($user_id);
    error_log($user_id);
    error_log($user_id);
    error_log($user_id);
    error_log($user_id);


    $db = new Database();

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
