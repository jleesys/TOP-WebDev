let currentOperator;

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
const keysInput = document.querySelectorAll('button.num');
const minusButton = document.querySelector('.minus-button');
const equalsButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');

minusButton.addEventListener('click', () => {
    currentOperator = 'minus';
    console.log(`the current operator: ${currentOperator}`)
})

equalsButton.addEventListener('click', () => {
    console.log(operate(a, b, operator));
})

keysInput.forEach(item => {
    item.addEventListener('click', () => {
        let numberInput = item.innerHTML;
        display.textContent = display.textContent + numberInput;
    })
})

clearButton.addEventListener('click', () => {
    display.textContent = '';
    console.log('clear')
})

/*
// have to use forEach due to using querySelectorAll (node list)
keysInput.addEventListener('click', () => {
    display.textContent = display.textContent + keysInput.innerHTML;
    console.log(`inserting character ${keysInput.innerHTML}`)
})
*/