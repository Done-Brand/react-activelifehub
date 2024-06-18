<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit(0);
}

require_once 'Database.php'; // Include the Database class

$db = new Database();

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
    $db->query("SELECT * FROM users WHERE username = :username OR email = :email");
    $db->bind(':username', $username);
    $db->bind(':email', $email);
    $db->execute();
    $result = $db->resultSet();

    if (count($result) > 0) {
        echo json_encode(array("message" => "User already exists"));
        exit();
    }

    // Store plain text password (not recommended for production)
    $db->query("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $db->bind(':username', $username);
    $db->bind(':email', $email);
    $db->bind(':password', $password);

    // Execute the statement
    if ($db->execute()) {
        echo json_encode(array("message" => "User created successfully"));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Error: " . $db->stmt->errorInfo()[2]));
    }
} else {
    echo json_encode(array("message" => "Invalid input"));
}
