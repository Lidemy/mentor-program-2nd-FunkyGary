<?
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "transaction";
$conn = new mysqli($servername, $username, $password, $dbname);

$amount1 = 0;
$amount2 = 0;

$result = $conn->query("SELECT * FROM products where products.id = 1");
if ( $result->num_rows > 0 ) {
    $row = $result->fetch_assoc();
    $amount1 = $row['amount'];
}
$result = $conn->query("SELECT * FROM products where products.id = 2");
if ( $result->num_rows > 0 ) {
    $row = $result->fetch_assoc();
    $amount2 = $row['amount'];
}
?>

<h1>Shopping cart</h1>
<div class="product1">
    <p>Porduct1 amount: <span><?= $amount1 ?></span> </p>
    <button class='plus'>+</button>
    <input type="number" value='0'>
    <button class='minus'>-</button>
</div>
<div class="product2">
    <p>Porduct2 amount: <span><?= $amount2 ?></span> </p>
    <button class='plus'>+</button>
    <input type="number" value='0'>
    <button class='minus'>-</button>
</div>
<br>
<button class='sumbit'>buy now!</button>
<script>
document.querySelector(".product1 .plus").addEventListener("click", function() {
    this.parentNode.querySelector("input").value = parseFloat(this.parentNode.querySelector("input").value) + 1; 
});
document.querySelector(".product1 .minus").addEventListener("click", function() {
    this.parentNode.querySelector("input").value = parseFloat(this.parentNode.querySelector("input").value) - 1; 
});
document.querySelector(".product2 .plus").addEventListener("click", function() {
    this.parentNode.querySelector("input").value = parseFloat(this.parentNode.querySelector("input").value) + 1; 
});
document.querySelector(".product2 .minus").addEventListener("click", function() {
    this.parentNode.querySelector("input").value = parseFloat(this.parentNode.querySelector("input").value) - 1; 
});
document.querySelector(".sumbit").addEventListener("click", function() {
    let product1_order = this.parentNode.querySelector(".product1 input").value;
    let product2_order = this.parentNode.querySelector(".product2 input").value;
    fetch('./order.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'product1_order':product1_order,
            'product2_order':product2_order,
        })
    }).then(response => response.text()).then((body) => {
        alert(body);
        console.log(document.querySelector(".product1 p"));
        console.log(document.querySelector(".product2 p"));
        document.querySelector(".product1 input").value = 0;
        document.querySelector(".product2 input").value = 0;
        if (body == '購買成功') {
            document.querySelector(".product1 p span").innerHTML = <?= $amount1 ?> - product1_order;
            document.querySelector(".product2 p span").innerHTML = <?= $amount2 ?> - product2_order;
        }
    });
});


</script>