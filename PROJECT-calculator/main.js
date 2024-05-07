const userText = document.querySelector('#user-text');
const inputs = document.querySelector('#inputs');

let storedNum = null;
let currentNum = null;

inputs.addEventListener('click', clickListener);

function numInput(buttonID) {
    if (buttonID === '.' && !(userText.innerText.includes('.'))) {
        userText.innerText += buttonID;
    } else if (buttonID !== '.' && userText.innerText === '0') {
        userText.innerText = buttonID;
    } else if (buttonID !== '.') {
        userText.innerText += buttonID;
    }
}

function clearDisplay() {
    userText.innerText = '0';
}

function changeSign() {
    if (userText.innerText != '0') {
        userText.innerText = Number(userText.innerText) * -1;
    }
}

function percent() {
    userText.innerText = Math.round(Number(userText.innerText)) / 100;
}

function functionInput(buttonID) {
    switch (buttonID) {
        case 'AC':
            clearDisplay();
            break;
        case '+/-':
            changeSign();
            break;
        case '%':
            percent();
            break;
        default:
            break;
    }
}

function divide() {

}

function multiply() {

}

function subtract() {

}

function add() {
    // if (!currentNum) {
    //    currentNum = userText;
    // }
    // if (currentNum) {
    //     storedNum = currentNum;
    // }
    if (storedNum) {
        storedNum = storedNum + currentNum;
    } else {
        storedNum = currentNum
    }
    currentNum = null;
}

function evaluate() {
    if (storedNum) {
        userText = storedNum;
    }
}

function operationInput(buttonID) {
    currentNum = userText;
    switch (buttonID) {
        case '÷':
            divide();
            break;
        case 'x':
            multiply();
            break;
        case '-':
            subtract();
            break;
        case '+':
            add();
            break;
        case '=':
            evaluate();
            break;
    }
}

function clickListener(event) {
    classList = event.target.classList;
    switch (true) {
        case classList.contains('num-input'):
            numInput(event.target.id);
            break;
        case classList.contains('function'):
            functionInput(event.target.id);
            break;
        case classList.contains('operator'):
            // TODO When user clicks operator we need to handle new input and
            // prepare math operation
            operationInput(event.target.id);
            break;
        default: 
            break;
    }
}