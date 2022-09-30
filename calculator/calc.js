// let currentOperator;
// let currentOperatorText;
let a = 0;
let b = 0;
let inputState = 0;
let isNumber = 1;
let readyCalc = 0;
let numberInput = '';
let currentOperator = 'add';
let currentOperatorText = '+';

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
    return +a + +b;
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
            display.textContent = display.textContent + ` ${currentOperatorText} `;
            break;
        case '+':
            currentOperator = 'add';
            console.log(`the current operator is now ${currentOperator} ${currentOperatorText}`)
            display.textContent = display.textContent + ` ${currentOperatorText} `;
            break;
        case '*':
            currentOperator = 'multiply';
            console.log(`the current operator is now ${currentOperator} ${currentOperatorText}`)
            display.textContent = display.textContent + ` ${currentOperatorText} `;
            break;
        case '/':
            currentOperator = 'divide';
            console.log(`the current operator is now ${currentOperator} ${currentOperatorText}`)
            display.textContent = display.textContent + ` ${currentOperatorText} `;
            break;
    }
}

/* if inputState is 1, a is loaded. b is empty
if inputState is 0, b is 
*/
function setNumber() {
    /*
    if (display.innerHTML == '') {
        display.innerHTML = `0 ${currentOperatorText} `;
        inputState++; return;
    }
    */
    if (inputState == 0) {
        a = numberInput;
        inputState++;
        console.log(`var a has changed. a = ${a}`)
    } else {
        b = numberInput;
        readyCalc = 1;
        console.log(`var b has changed. b = ${b}`)
    }
    numberInput = '';
}

function calculate() {
    let output = operate(a, b, currentOperator);
    display.textContent = output;
    console.log(`${a} ${currentOperatorText} ${b}`);
    readyCalc = 0;
    return output;
}

operators.forEach(item => {
    item.addEventListener('click', () => {
        // if (isNumber != 0) {
            parseOperator(item);
            if (numberInput != '') {
            setNumber();
            if (readyCalc) {
                let output = calculate();
                a = output;
                b = 0;
            }
        }
    })
})

equalsButton.addEventListener('click', () => {
    setNumber();
    let output = calculate();
    a = output;
    b = 0;
    // inputState = 0;
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
    readyCalc = 0;
    console.log(`clear\na: ${a}\nb: ${b}`)
})