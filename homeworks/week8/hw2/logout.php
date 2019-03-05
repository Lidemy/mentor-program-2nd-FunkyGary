<?
require('conn.php');
session_start();
session_unset();
session_destroy();
// $session = $_COOKIE['id'];
// $removesession = $conn->prepare("DELETE FROM users_certificate WHERE users_certificate.id = ?");
// $removesession->bind_param('s', $session);
// if ($removesession->execute()) {
//     $removesession->close();
//     $conn->close();
//     setcookie("id", "", time() + 3600);
//     header('Location: login.php');
// } else {
//     echo "失敗";
// }
?>