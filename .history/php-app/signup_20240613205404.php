<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit(0);
}

require_once 'Database.php';

$db = new Database();

$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->email) && isset($data->password) && isset($data->confirmPassword)) {
    $username = $data->username;
    $email = $data->email;
    $password = $data->password;
    $confirmPassword = $data->confirmPassword;

    if ($password !== $confirmPassword) {
        echo json_encode(array("message" => "Passwords do not match"));
        exit();
    }

    $db->query("SELECT * FROM users WHERE username = :username OR email = :email");
    $db->bind(':username', $username);
    $db->bind(':email', $email);
    $db->execute();
    $result = $db->resultSet();

    if (count($result) > 0) {
        echo json_encode(array("message" => "User already exists"));
        exit();
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Secure password storage
    $db->query("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $db->bind(':username', $username);
    $db->bind(':email', $email);
    $db->bind(':password', $hashedPassword);

    if ($db->execute()) {
        echo json_encode(array("message" => "User created successfully"));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Error: " . $db->stmt->errorInfo()[2]));
    }
} else {
    echo json_encode(array("message" => "Invalid input"));
}
