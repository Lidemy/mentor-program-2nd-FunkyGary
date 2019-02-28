<?
$is_login = false;
$username = '';
$nickname = '';
require_once('conn.php');
if (isset ($_COOKIE["id"])) {
    $id = $_COOKIE["id"];
} else {
    $id = 0;
}
$sql = "SELECT * FROM users_certificate LEFT JOIN users ON users_certificate.username = users.username where users_certificate.id='" . $id . "'";
$result = $conn->query($sql);
if ( $result->num_rows > 0 ) {
    $row = $result->fetch_assoc();
    $is_login = true;
    $nickname = $row['nickname'];
    $username = $row['username'];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- <link rel="stylesheet" type="text/css" href="index.css"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<style>
* {
    box-sizing: border-box;
}

.container {
    width: 80%;
    margin: 10px auto;
}

.background_blue {
    background: blue;
}

.box {
    width: 50%;
    margin-top: 10px;
    border: 1px solid gray;
    padding: 10px;
}

.subbox {
    margin-top: 10px;
    padding: 10px;
}

input {
    width: 100%;
    height: 100%;
}

.message {
    padding-top: 10px;
    height: 200px;
}

.btn {
    margin: 30px auto;
    width: 100%;
}

.submessage {
    width: 80%;
}

.page-bar {
    list-style: none;
    display: flex;
}

.bottom__footer {
    margin: 0 auto;
}

li {
    padding: 10px;
}

.editMode {
    border: 1px solid red;
}

.editComment {
    display: none;
}

.editMode input[type=text] {
    display: block;
    position: absolute; 
    top: 0px;
}

.editMode label {
    display: none;
}

.content label {
    border-top: 1px solid black;
    display:block;
    position: relative; 
}
</style>

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
                    echo "$nickname
                    <input type='hidden' name='username' value='$username'>";
                } else {
                    echo "訪客";
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
            $sql = "SELECT comments.id, comments.content, comments.`created_at`, users.nickname, users.username FROM comments LEFT JOIN users ON comments.username = users.username WHERE comments.parent_id = 0 ORDER BY `created_at` DESC LIMIT " . ($page - 1)*10 . " ,10 ";
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

<script>
let editBtn = document.querySelectorAll(".edit");
editBtn.forEach( btn => {
    btn.addEventListener("click", function() {
        let comment_id = parseInt(this.parentNode.parentNode.parentNode.querySelector(".submessage").querySelector("#comment_id").value);
        let listItem = this.parentNode.parentNode;
        let editInput = this.parentNode.parentNode.querySelector(".editComment");
        let label = listItem.querySelector("label");
        let containsClass = listItem.classList.contains('editMode');
        if (containsClass) {
            fetch('./edit_comment.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id:comment_id, content:editInput.value})
            }).then(response => response.text()).then((body) => {
                console.log(body);
                label.innerHTML = `${editInput.value} <input class='editComment' type="text">`;
            });
        } else {
            editInput.value = label.innerText;
        }
        listItem.classList.toggle('editMode');
    });
});

let subeditBtn = document.querySelectorAll(".sub_edit");
subeditBtn.forEach( btn => {
    btn.addEventListener("click", function() {
        let comment_id = parseInt(this.parentNode.parentNode.parentNode.parentNode.querySelector("#comment_id").value);
        let listItem = this.parentNode.parentNode;
        let editInput = this.parentNode.parentNode.querySelector(".editComment");
        let label = listItem.querySelector("label");
        let containsClass = listItem.classList.contains('editMode');
        if (containsClass) {
            fetch('./edit_comment.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id:comment_id, content:editInput.value})
            }).then(response => response.text()).then((body) => {
                console.log(body);
                label.innerHTML = `${editInput.value} <input class='editComment' type="text">`;
            });
        } else {
            editInput.value = label.innerText;
        }
        listItem.classList.toggle('editMode');
    });
});

document.querySelector(".delete").addEventListener("click", function() {
    let comment_id = parseInt(this.parentNode.parentNode.parentNode.querySelector(".submessage").querySelector("#comment_id").value);
    // console.log(comment_id);
    fetch('./delete_comment.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment_id)
    }).then(response => response.text()).then((body) => {
        // console.log(body);
        let box = this.parentNode.parentNode.parentNode;
        box.remove();
    });
});
</script>
</html>
