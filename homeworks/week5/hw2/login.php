<?
    require_once('conn.php');
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * from users where username='" . $username . "' and password='". $password ."'";

    $result = $conn->query($sql);

    if ( $result->num_rows > 0 ) {
        echo '登入成功！';
    } else {
        header('Location: index.php');
    }
?>