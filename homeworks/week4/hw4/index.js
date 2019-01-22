function q(c) {
    return document.querySelector(c)
}


function hide() {
    let element = q(' .title ')
    console.log(element)
    element.style.display = 'none'; //隱藏
}

function show() {
    let element = q(' .title ')
    console.log(element)
    element.style.display = 'block'; //隱藏
}