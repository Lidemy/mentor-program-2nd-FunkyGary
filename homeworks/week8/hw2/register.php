<?
    require_once('conn.php');
    $error_megssage = '';
    if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['nickname'])) {
        $username = $_POST['username'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $nickname = $_POST['nickname'];
        $stmt = $conn->prepare("INSERT INTO users(username, password, nickname) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $password, $nickname);
        if ($stmt->execute()) {
            // $newid = session_create_id();
            // $saveSession = "INSERT INTO `users_certificate` (`id`, `username`) VALUES ('{$newid}', '{$username}')";
            // $conn -> query( $saveSession );
            // setcookie ( "id" , $newid , time () +  60  *  60 );
            $_SESSION['username'] = $username;
            $_SESSION['nickname'] = $nickname;           
            header('Location: index.php');
        } else {
            $error_megssage = '註冊失敗';
            header('Location: register.php');
        }
    } else {
        $error_megssage = '請填寫全部欄位';
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
