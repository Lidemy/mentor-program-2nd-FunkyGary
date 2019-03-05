document.querySelector(".edit").addEventListener("click", function() {
    let listItem = this.parentNode;
    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains('editMode');
    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    listItem.classList.toggle('editMode');
});

document.querySelector(".delete").addEventListener("click", function() {
    let comment_id = this.parentNode.parentNode.querySelector(".submessage").querySelector("#comment_id").value;
    let formData = new FormData();
    formData.append('id', comment_id);

    // console.log(comment_id);
    fetch('./delete_comment.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => response.text()).then((body) => {
        console.log(body);
        // let listItem = this.parentNode;
        // let box = this.parentNode.parentNode;
        // box.remove();
    });
});