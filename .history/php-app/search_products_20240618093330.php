<?php
require_once("Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['title'])) {
    $title = $_GET['title'];
    $db = new Database();
    $sql = "SELECT products.id, products.title, products.description, products.price, categories.category_title AS category, brands.brand_title AS brand, products.keywords, products.image FROM products JOIN categories ON products.category = categories.category_id JOIN brands ON products.brand = brands.brand_id WHERE products.title = :title";
    $db->query($sql);
    $db->bind(':title', $title);
    $product = $db->single();
    if ($product) {
        echo json_encode($product);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Product not found."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Invalid request."));
}
