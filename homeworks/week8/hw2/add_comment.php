<? 
    require_once('conn.php');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $username = $_POST['username'];
    $content =  htmlspecialchars($_POST['content']);
    $parent_id = $_POST['parent_id'];

    $stmt = $conn->prepare("INSERT INTO comments (username,content,parent_id) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $username, $content, $parent_id);


    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        header('Location: index.php');
    } else {
        echo "留言失敗";
    }
?>