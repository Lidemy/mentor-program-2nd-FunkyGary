let num1 = '';
let num2 = '';
let operator = '';
let total = '';

function handleNumber(num) {
    if (operator === '') {
        console.log(num1)
        num1 += num;
        displayButton(num1);
    } else {
        console.log(num2)
        num2 += num;
        displayButton(num2);
    }
}

function handleOperator(oper) {
    operator = oper;
}

function displayButton(num) {
    $('#result').text(num);
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

$('.nums').on('click', e => {
    let btn = e.target.innerHTML;
    handleNumber(btn);
});

$('.operator').on('click', e => {
    let btn = e.target.innerHTML;
    handleOperator(btn);
});

$('#equal').on('click', () => {
    console.log(num1)
    console.log(num2)
    console.log(operator)
    console.log(total)
    handleTotal();
});

$('#ac').on('click', e => {
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
    console.log(num1)
    console.log(num2)
    console.log(operator)
    console.log(total)
    $('#result').text(0);
});