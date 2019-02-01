<?
setcookie('user_id','');
session_destroy();
header('Location: login.php');
?>