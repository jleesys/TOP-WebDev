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