<?
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "transaction";
$conn = new mysqli($servername, $username, $password, $dbname);
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);

// echo $decoded['product1_order'];
// echo $decoded['product2_order'];

$product1_order = $decoded['product1_order'];
$product2_order = $decoded['product2_order'];

$conn->autocommit(FALSE);
$conn->begin_transaction();
$result1 = $conn->query('SELECT amount FROM products WHERE id = 1 for update');
$result2 = $conn->query('SELECT amount FROM products WHERE id = 2 for update');
$row1 = $result1->fetch_assoc();
$row2 = $result2->fetch_assoc();
if ($row1['amount'] >= $product1_order && $row2['amount'] >= $product2_order) {
    $conn->query("UPDATE products SET amount = amount - $product1_order WHERE id = 1");
    $conn->query("UPDATE products SET amount = amount - $product2_order WHERE id = 2");
    echo '購買成功';
} else {
    echo '購買失敗';
}
$conn->commit();
$conn->close();    


// $remove_product_amount = $conn->prepare("DELETE FROM comments WHERE comments.id = ?");

// $removecomment->bind_param('i', $id);

// if ($removecomment->execute()) {
//     $removecomment->close();
//     $conn->close();
//     echo $id;
// } else {
//     echo "失敗";
// }
?>