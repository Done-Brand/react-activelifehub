<?php
require_once("Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if (isset($_GET['query'])) {
    $query = $_GET['query'];

    $db = new Database();
    $sql = "SELECT * FROM products WHERE title LIKE :query OR keywords LIKE :query";
    $db->query($sql);
    $db->bind(':query', '%' . $query . '%');
    $results = $db->resultSet();

    echo json_encode($results);
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Query parameter is missing."));
}
