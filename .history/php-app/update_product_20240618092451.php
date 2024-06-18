<?php
require_once("Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (
        isset($_POST['id']) &&
        isset($_POST['title']) &&
        isset($_POST['description']) &&
        isset($_POST['price']) &&
        isset($_POST['category']) &&
        isset($_POST['brand']) &&
        isset($_POST['keywords'])
    ) {
        $id = $_POST['id'];
        $title = $_POST['title'];
        $description = $_POST['description'];
        $price = $_POST['price'];
        $category = $_POST['category'];
        $brand = $_POST['brand'];
        $keywords = $_POST['keywords'];

        $db = new Database();

        // Update the product
        $sql = "UPDATE products SET title = :title, description = :description, price = :price, category = :category, brand = :brand, keywords = :keywords WHERE id = :id";
        $db->query($sql);
        $db->bind(':id', $id);
        $db->bind(':title', $title);
        $db->bind(':description', $description);
        $db->bind(':price', $price);
        $db->bind(':category', $category);
        $db->bind(':brand', $brand);
        $db->bind(':keywords', $keywords);

        if ($db->execute()) {
            http_response_code(200);
            echo json_encode(array("message" => "Product updated successfully."));
        } else {
            error_log("Database error: " . implode(", ", $db->errorInfo()));
            http_response_code(503);
            echo json_encode(array("message" => "Unable to update product."));
        }
    } else {
        error_log("Incomplete data.");
        http_response_code(400);
        echo json_encode(array("message" => "Incomplete data."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Invalid request."));
}
