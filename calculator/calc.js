let currentOperator;

const operate = (a,b,operator) => {
    let output;
    switch (operator) {
        case "add":
            output = add(a,b);
            break;
        case "subtract":
            output = subtract(a,b);
            break;
        case "multiply":
            output = multiply(a,b);
            break;
        case "divide":
            output = divide(a,b);
            break;
        default:
            console.log('error');
    }
    return output;
}
const add = function(a,b){
    return a+b;
}

const subtract = function (a,b) {
    return a-b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}

function pressKey() {

}

const display = document.querySelector('.display');
const buttons = document.querySelector('.keys');
const minusButton = document.querySelector('.minus-button');
const equalsButton = document.querySelector('.equals-button');

minusButton.addEventListener('click', () => {
    currentOperator = 'minus';
})

equalsButton.addEventListener('click', () => {
    console.log(operate(a,b,operator));
})

buttons.addEventListener('click', () => {
    display.textContent = buttons.innerHTML;
})