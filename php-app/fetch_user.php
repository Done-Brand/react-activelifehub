<?php
require_once("Database.php");

session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if (!isset($_SESSION['User'])) {
    http_response_code(401);
    echo json_encode(["message" => "Unauthorized"]);
    exit();
}

$email = $_SESSION['User'];

try {
    $db = new Database();
    $sql = "SELECT username, email FROM users WHERE email = :email";
    $db->query($sql);
    $db->bind(':email', $email);
    $user = $db->single();

    if ($user) {
        echo json_encode($user);
    } else {
        http_response_code(404);
        echo json_encode(["message" => "User not found"]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => "Database error: " . $e->getMessage()]);
}
