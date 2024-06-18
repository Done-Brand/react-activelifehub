<?php
require_once("cors.php");
require_once("Database.php");

header("Content-Type: application/json; charset=UTF-8");

if (isset($_GET['query'])) {
    $query = $_GET['query'];

    $db = new Database();

    $sql = "SELECT * FROM products WHERE keywords LIKE :query OR title LIKE :query OR description LIKE :query";
    $db->query($sql);
    $db->bind(':query', '%' . $query . '%');
    $results = $db->resultSet();

    echo json_encode($results);
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Query parameter is required."));
}
