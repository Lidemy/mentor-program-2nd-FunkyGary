<?
$is_login = false;
$user_id = '';
$nickname = '';
require_once('conn.php');
if (isset($_COOKIE["user_id"]) && !empty($_COOKIE["user_id"])) {
    $is_login = true;
    $user_id = $_COOKIE["user_id"];
    $sql = "SELECT * from users where id='" . $user_id . "'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $nickname = $row['nickname'];
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>


<body>
    <div class="container">
        <header>
<?
            if(!$is_login){
?>
            <a href="register.php" id='logout'>註冊</a>
            <a href="login.php" id='login'>登入</a>
<?
            } else {
?>
            <a href="logout.php" id='logout'>登出</a>
<?
            }
?>
        </header>
        <h1>留言板</h1>
        <div class="box">
            <form action="/Gary/add_comment.php" method='POST'>
                <div class="nickname">
                暱稱：
<?
                if($is_login) {
                    require_once('conn.php');
                    $sql = "SELECT * from users where id='" . $user_id . "'";
                    $result = $conn->query($sql);
                    $row = $result->fetch_assoc();
                    echo "$row[nickname]
                    <input type='hidden' name='nickname' value='$row[nickname]'>";
                } else {
                    echo "暱稱: 訪客請先登入";
                }
?>  
                </div>
                <div class="message">
                    留言: <input name='content' type="text"/>
                </div>
                <div class="btn">
<?
                if($is_login) {
                    echo "<input type='submit' />";
                } else {
                    echo "<input type='submit' value='請先登入' disabled />";
                }
?>  
                </div>
                <input type='hidden' name='parent_id' value="0"/>
            </form>  
        </div>
        <? 
            require_once('conn.php');
            // 確認頁數
            $page_sql = "SELECT COUNT(parent_id) FROM comments WHERE parent_id = 0";
            $page_result = $conn->query($page_sql);
            $page_row = $page_result->fetch_assoc();
            $pages_num = ceil($page_row['COUNT(parent_id)'] / 10);
            // 設定目前所在的頁數
            if(!isset($_GET['page'])) $page = 1;
            else $page = intval($_GET['page']);
            $sql = "SELECT * FROM comments WHERE parent_id = 0 ORDER BY `created_at` DESC LIMIT " . ($page - 1)*10 . " ,10 ";
            $result = $conn->query($sql);
            while($row = $result->fetch_array()) {
                require('template_comment.php');
            }
        ?>
        <footer class='bottom__footer'>
            <ul class="page-bar">
                <?php
                    //設定頁碼
                    for ( $i = 1; $i<=$pages_num; $i++ ){
                        //如果是目前頁面的頁碼不做連結
                        if ( $i  ===  $page ) echo " <li class='page'><b>$i</b></li> " ;
                        else echo " <li class='page'><a href='index.php?page=".$i."'>".$i."</a></li> ";
                    }
                ?>
            </ul>
        </footer>
    </div>
</body>
</html>
