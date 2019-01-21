$('#submit').click(e => {
    let success = 0;
    const necessary_questions = 5;
    $('input').not('#other, #submit').each(function() {
        if (this.name === 'radio') {
            if (!$(':input[type = radio]').is(':checked')) {
                $('#reminder__type').css('display', 'block');
                $('#reminder__type').parent(".form__content").css('background', 'rgb(255, 214, 214)')
                success--;
            } else {
                $('#reminder__type').css('display', 'none');
                $('#reminder__type').parent(".form__content").css('background', 'white')
                success++;
            }
        } else {
            if ($(this).val() === "") {
                $(this).next().css('display', 'block');
                $(this).parent(".form__content").css('background', 'rgb(255, 214, 214)')
                success--;
            } else {
                $(this).next().css('display', 'none');
                $(this).parent(".form__content").css('background', 'white')
                success++;
            }
        }
    })
    if (success === necessary_questions) {
        alert('success')
    }
})

function PostData() {
    $.ajax({
        type: "POST",
        url: "post.go",
        data: "",
        success: function(msg) {}
    });
    return false;
}