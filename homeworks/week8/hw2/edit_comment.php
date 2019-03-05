<?
require_once('conn.php');
$data = json_decode(file_get_contents('php://input'));
$id = $data->{'id'};
$content = $data->{'content'};
$updatecomment = $conn->prepare("UPDATE comments SET content = ? WHERE comments.id = ?");
$updatecomment->bind_param('si',$content, $id);

if ($updatecomment->execute()) {
    $updatecomment->close();
    $conn->close();
    echo $content;
} else {
    echo "失敗";
}
?>