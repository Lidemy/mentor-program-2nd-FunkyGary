function submitform() {
    event.preventDefault();
    let success = 0;
    let radioChecked = 0;
    const necessary_questions = 5;
    document.querySelectorAll('input:not(#other):not(#submit)').forEach(function(e) {
        if (e.name === 'radio') {
            if (e.checked) {
                ++radioChecked;
            }
            if (radioChecked) {
                document.querySelector('#reminder__type').style.display = 'none';
                document.querySelector('#reminder__type').parentNode.style.background = 'rgb(255,255,255)';
                success++;
            } else {
                document.querySelector('#reminder__type').style.display = 'block';
                document.querySelector('#reminder__type').parentNode.style.background = 'rgb(255, 214, 214)';
                success--;
            }
        } else {
            if (e.value === "") {
                console.log(e.nextElementSibling)
                e.nextElementSibling.style.display = 'block';
                e.parentNode.style.background = 'rgb(255, 214, 214)';
                success--;
            } else {
                e.nextElementSibling.style.display = 'none';
                e.parentNode.style.background = 'rgb(255,255,255)';
                success++;
            }
        }
    })
    if (success === necessary_questions) {
        alert('success');
    }
}