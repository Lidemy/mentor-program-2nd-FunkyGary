<div class="subbox  <? if ($username === $row['username']) {
    echo background_blue;
} ?>">
    <div>
        建立時間: <? echo $sub_row['created_at'] ?>
    </div>
    <div>
        暱稱: <? echo $sub_row['nickname'] ?>
    </div>
    <div class="content">
    留言:
        <label><? echo $sub_row['content'] ?>
            <input class='editComment' type="text">
        </label>
    </div>
<?      
    if ($username === $row['username']) {
?>
    <div class="btnGroup">
        <button class='sub_edit'>編輯</button>
        <button class='sub_delete'>刪除</button>
    </div>
<?
    }   
?>
</div>