<div class="subbox  <? if ($username === $sub_row['username']) {
    echo background_blue;
} ?>">
    <input id="sub_comment_id" type="hidden" name='id' value='<?= $sub_row['id']?>'>
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
    if ($username === $sub_row['username']) {
?>
    <div class="btnGroup">
        <button class='sub_edit'>編輯</button>
        <button class='sub_delete'>刪除</button>
    </div>
<?
    }   
?>
</div>