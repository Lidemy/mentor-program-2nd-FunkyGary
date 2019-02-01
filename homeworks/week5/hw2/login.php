<?
    require_once('conn.php');
    $error_megssage = '';
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $sql = "SELECT * from users where username='" . $username . "' and password='". $password ."'";
        $result = $conn->query($sql);
        if ( $result->num_rows > 0 ) {
            $row = $result->fetch_assoc();
            setcookie("user_id", $row['id'], time()+3600*24);
            header('Location: index.php');
        } else {
            $error_megssage = '帳號或密碼錯誤';
        }
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1>登入</h1>
        <form action="/Gary/login.php" method='POST'>
            username: <input name='username' />
            password: <input name='password' type='password'/>
            <input type="submit" />
        </form>
<?
        if ($error_megssage !== '') {
            echo $error_megssage;
        }
?>
    </div>
</body>
</html>



