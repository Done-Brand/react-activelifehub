<?php
include('cors.php');
session_start();
session_unset();
session_destroy();

header('Content-Type: application/json');
echo json_encode(array("message" => "Logged out successfully"));
exit();
