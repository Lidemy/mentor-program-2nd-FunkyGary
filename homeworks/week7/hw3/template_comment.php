<div class="box">
    <h2>留言</h2>
    <div>
        建立時間: <? echo $row['created_at'];
?>
    </div>
    <div>
        暱稱: <? echo $row['nickname'] ?>
    </div>
    <div class="content">
        留言:
        <label><? echo $row['content'] ?>
            <input class='editComment' type="text">
        </label>
<?      
        if ($username === $row['username']) {
?>
         <div class="btnGroup">
            <button class='edit'>編輯</button>
            <button class='delete'>刪除</button>
         </div>
<?
    }
?>
    </div>
    <div class="submessage">
        <h2>回應</h2>
        <?
            $parent_id = $row['id'];
            $sub_stmt = $conn->prepare("SELECT * FROM comments LEFT JOIN users ON comments.username = users.username WHERE parent_id = ? ORDER BY `created_at` DESC");
            $sub_stmt -> bind_param( "i" , $parent_id);
            $sub_stmt->execute();
            $sub_result = $sub_stmt -> get_result();
            while ( $sub_row = $sub_result -> fetch_assoc() ) {
                require('template_subcomment.php');
            }
        ?>
        <form action="/Gary/add_comment.php" method='POST'>
            <input type='hidden' name='username' value='<? echo $username?>'>  
            <div class="message">
                留言: <input name='content' type="text"/>
            </div>
            <div class="btn btn-primary submitbtn">
    <?
                if($is_login) {
                    echo "留言<input class='display_none' type='submit' />";
                } else {
                    echo "請先登入<input class='display_none' type='submit' disabled />";
                }
    ?>  
            </div>
            <input id="comment_id" type="hidden" name='parent_id' value='<? echo $parent_id?>'>
        </form>  
    </div>
</div>


