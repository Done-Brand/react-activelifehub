<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit(0);
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "react_activelifehub_db";

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(array("message" => "Connection failed: " . $conn->connect_error));
    exit();
}

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->{'email-address'}) && isset($data->password) && isset($data->{'confirm-password'})) {
    $username = $data->username;
    $email = $data->{'email-address'};
    $password = $data->password;

    if ($password !== $data->{'confirm-password'}) {
        echo json_encode(array("message" => "Passwords do not match"));
        exit();
    }

    // Check for duplicate user
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(array("message" => "User already exists"));
        exit();
    }
    $stmt->close();

    // Store plain text password (not recommended for production)
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    if ($stmt === false) {
        http_response_code(500);
        echo json_encode(array("message" => "Error preparing statement: " . $conn->error));
        exit();
    }

    $stmt->bind_param("sss", $username, $email, $password);

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(array("message" => "User created successfully"));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Error: " . $stmt->error));
    }

    $stmt->close();
} else {
    echo json_encode(array("message" => "Invalid input"));
}

$conn->close();
