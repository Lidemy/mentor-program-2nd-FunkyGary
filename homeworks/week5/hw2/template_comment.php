<div class="box">
    <h2>留言</h2>
    <div>
        建立時間: <? echo $row['created_at'] ?>
    </div>
    <div>
        暱稱: <? echo $row['nickname'] ?>
    </div>
    <div>
        留言:
        <div class="content">
            <? echo $row['content'] ?>
        </div>
    </div>
    <div class="submessage">
        <h2>回應</h2>
        <?
            $parent_id = $row['id'];
            $sql_child = "SELECT * FROM comments WHERE parent_id = $parent_id ORDER BY `created_at` DESC";
            $result_child = $conn->query($sql_child);
            while($row = $result_child->fetch_assoc()) {
                require('template_subcomment.php');
            }
        ?>
        <form action="/Gary/add_comment.php" method='POST'>
                <input type='hidden' name='nickname' value='<? echo $nickname?>'>  
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
                <input type="hidden" name='parent_id' value='<? echo $parent_id?>'>
            </form>  
    </div>
</div>


