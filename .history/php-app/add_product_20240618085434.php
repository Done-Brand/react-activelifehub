// add_product.php

require_once("Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
if (
isset($_POST['title']) &&
isset($_POST['description']) &&
isset($_POST['price']) &&
isset($_POST['category']) &&
isset($_POST['brand']) &&
isset($_POST['keywords']) &&
isset($_FILES['image'])
) {
$title = $_POST['title'];
$description = $_POST['description'];
$price = $_POST['price'];
$category = $_POST['category'];
$brand = $_POST['brand'];
$keywords = $_POST['keywords'];
$image = $_FILES['image']['name'];
$temp_image = $_FILES['image']['tmp_name'];

// Check and create the upload directory if it doesn't exist
$upload_dir = __DIR__ . '/uploads/';
if (!is_dir($upload_dir)) {
mkdir($upload_dir, 0755, true);
}

$target_file = $upload_dir . basename($image);

if (move_uploaded_file($temp_image, $target_file)) {
$db = new Database();

// Check if category exists, if not, insert it
$sql = "SELECT category_id FROM categories WHERE category_title = :category";
$db->query($sql);
$db->bind(':category', $category);
$category_result = $db->single();
if ($category_result) {
$category_id = $category_result['category_id'];
} else {
$sql = "INSERT INTO categories (category_title) VALUES (:category)";
$db->query($sql);
$db->bind(':category', $category);
if ($db->execute()) {
$category_id = $db->lastInsertId();
} else {
error_log("Failed to insert category: " . implode(", ", $db->errorInfo()));
http_response_code(503);
echo json_encode(array("message" => "Unable to add product."));
exit;
}
}

// Check if brand exists, if not, insert it
$sql = "SELECT brand_id FROM brands WHERE brand_title = :brand";
$db->query($sql);
$db->bind(':brand', $brand);
$brand_result = $db->single();
if ($brand_result) {
$brand_id = $brand_result['brand_id'];
} else {
$sql = "INSERT INTO brands (brand_title) VALUES (:brand)";
$db->query($sql);
$db->bind(':brand', $brand);
if ($db->execute()) {
$brand_id = $db->lastInsertId();
} else {
error_log("Failed to insert brand: " . implode(", ", $db->errorInfo()));
http_response_code(503);
echo json_encode(array("message" => "Unable to add product."));
exit;
}
}

// Insert the product
$sql = "INSERT INTO products (title, description, price, category, brand, keywords, image) VALUES (:title, :description, :price, :category_id, :brand_id, :keywords, :image)";
$db->query($sql);
$db->bind(':title', $title);
$db->bind(':description', $description);
$db->bind(':price', $price);
$db->bind(':category_id', $category_id);
$db->bind(':brand_id', $brand_id);
$db->bind(':keywords', $keywords);
$db->bind(':image', $image);

if ($db->execute()) {
http_response_code(201);
echo json_encode(array("message" => "Product added successfully."));
} else {
error_log("Database error: " . implode(", ", $db->errorInfo()));
http_response_code(503);
echo json_encode(array("message" => "Unable to add product."));
}
} else {
error_log("Failed to move uploaded file.");
http_response_code(500);
echo json_encode(array("message" => "Sorry, there was an error uploading your file."));
}
} else {
error_log("Incomplete data.");
http_response_code(400);
echo json_encode(array("message" => "Incomplete data."));
}
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
$db = new Database();
$sql = "SELECT products.id, products.title, products.description, products.price, categories.category_title AS category, brands.brand_title AS brand, products.keywords, products.image FROM products JOIN categories ON products.category = categories.category_id JOIN brands ON products.brand = brands.brand_id";
$db->query($sql);
$products = $db->resultset();
echo json_encode($products);
}