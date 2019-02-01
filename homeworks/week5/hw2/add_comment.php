<? 
    require_once('conn.php');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $nickname = $_POST['nickname'];
    $content = $_POST['content'];
    $parent_id = $_POST['parent_id'];

    $sql = "INSERT INTO comments (nickname,content,parent_id) VALUES ('$nickname','$content','$parent_id') ";
    if ($conn->query($sql) === TRUE) {
        header('Location: index.php');        
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>