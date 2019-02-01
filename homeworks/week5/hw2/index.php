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
        <h1>留言板</h1>
        <div class="box">
            <form action="/Gary/add_comment.php" method='POST'>
                <div class="nickname">
                    暱稱: <input name='nickname' type="text"/>
                </div>
                <div class="message">
                    留言: <input name='content' type="text"/>
                </div>
                <div class="btn">
                    <input type="submit" />
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
            while($row = $result->fetch_assoc()) {
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

<h1>登入</h1>
<form action="/Gary/login.php" method='POST'>
    username: <input name='username' />
    password: <input name='password' type='password'/>
    <input type="submit" />
</form>
<h1>註冊</h1>
<form action="/Gary/register.php" method='POST'>
    username: <input name='username' />
    password: <input name='password' type='password'/>
    <input type="submit" />
</form>
