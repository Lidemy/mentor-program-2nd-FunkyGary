let num1 = '';
let num2 = '';
let operator = '';
let total = '';

function handleNumber(num) {
    if (operator === '') {
        num1 += num;
        displayButton(num1);
    } else {
        num2 += num;
        displayButton(num2);
    }
}

function handleOperator(oper) {
    operator = oper;
}

function displayButton(num) {
    document.querySelector('#result').innerHTML = num;
}

function handleTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            displayButton(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '÷':
            total = +num1 / +num2;
            displayButton(total);
            break;
        case 'x':
            total = +num1 * +num2;
            displayButton(total);
            break;
    }
    updateVariables();
}

function updateVariables() {
    num1 = total;
    num2 = '';
    operator = '';
}

function selectnumber(e) {
    let btn = e.innerHTML;
    handleNumber(btn);
}

function selectoperator(e) {
    let btn = e.innerHTML;
    handleOperator(btn);
}

function allclear() {
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
    document.querySelector('#result').innerHTML = 0;
}