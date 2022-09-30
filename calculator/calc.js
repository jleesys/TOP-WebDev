let currentOperator;
let currentOperatorText;
let a = 0;
let b = 0;
let inputState = 0;
let isNumber = 1;
let numberInput = '';

const operate = (a, b, operator) => {
    let output;
    switch (operator) {
        case "add":
            output = add(a, b);
            break;
        case "subtract":
            output = subtract(a, b);
            break;
        case "multiply":
            output = multiply(a, b);
            break;
        case "divide":
            output = divide(a, b);
            break;
        default:
            console.log('error');
    }
    return output;
}
const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

function pressKey() {

}

const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const keysInput = document.querySelectorAll('button.num');
const minusButton = document.querySelector('.minus-button');
const equalsButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');

function parseOperator(item) {
    currentOperatorText = item.innerHTML;

    switch (currentOperatorText) {
        case '-':
            currentOperator = 'subtract';
            console.log(`the current operator is now ${currentOperator} ${currentOperatorText}`)
    }
}

function setNumber() {
    if (display.innerHTML == '') {
        display.innerHTML = `0 ${currentOperatorText} `;
        inputState++; return;
    }
    if (inputState == 0) {
        a = numberInput;
        display.textContent = display.textContent + ` ${currentOperatorText} `;
        inputState++;
        console.log(`var a has changed. a = ${a}`)
    } else {
        b = numberInput;
        // display.textContent = display.textContent + ` ${currentOperatorText} `;
        display.textContent = operate(a, b, currentOperator);
        inputState--;
        console.log(`var b has changed. b = ${b}`)
    }
    numberInput = '';
}

operators.forEach(item => {
    item.addEventListener('click', () => {
        if (isNumber != 0) {
            parseOperator(item);
            setNumber();
            isNumber = 0;
        }
    })
})

equalsButton.addEventListener('click', () => {
    if (inputState == 1) b = numberInput;
    console.log(operate(a, b, currentOperator));
    display.textContent = operate(a, b, currentOperator);
    isNumber = 0;
})

keysInput.forEach(item => {
    item.addEventListener('click', () => {
        let digitInput = item.innerHTML;
        isNumber++;
        numberInput += digitInput;
        display.textContent = display.textContent + digitInput;
    })
})

clearButton.addEventListener('click', () => {
    display.textContent = '';
    a = '';
    b = '';
    digitInput = '';
    numberInput = '';
    inputState = 0;
    isNumber = 0;
    console.log(`clear\na: ${a}\nb: ${b}`)
})