<?
    require_once('conn.php');
    $error_megssage = '';
    if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['nickname'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $nickname = $_POST['nickname'];
        $sql = "INSERT INTO users(username, password, nickname) VALUES ('$username', '$password', '$nickname')";
        $result = $conn->query($sql);
        if ($result) {
            $last_id = $conn->insert_id;
            setcookie("user_id", $last_id, time()+3600*24);
            header('Location: index.php');
        }
        $conn->close();
        header('Location: index.php');
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
        <h1>註冊</h1>
        <form action="/Gary/register.php" method='POST'>
            username: <input name='username' />
            password: <input name='password' type='password'/>
            nickname: <input name='nickname' type='nickname'/>
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
