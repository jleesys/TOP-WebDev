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

const display = document.querySelector('.display');
const buttons = document.querySelector('.keys');

buttons.addEventListener('click', () => {
    display.textContent = buttons.innerHTML;
})