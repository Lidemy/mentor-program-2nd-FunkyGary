<?
require_once('conn.php');
$id = file_get_contents('php://input');
$removecomment = $conn->prepare("DELETE FROM comments WHERE comments.id = ?");

$removecomment->bind_param('i', $id);

if ($removecomment->execute()) {
    $removecomment->close();
    $conn->close();
    echo $id;
} else {
    echo "失敗";
}
?>