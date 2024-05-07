function numInput(buttonID) {
    const userText = document.querySelector('#user-text');
    if (buttonID === '.' && !(userText.textContent.includes('.'))) {
        userText.textContent += buttonID;
    } else if (buttonID === '.' && userText.textContent.includes('.')) {
        // Do nothing
        console.log('Do nothing');
    } else if (userText.textContent === '0') {
        userText.textContent = buttonID;
    } else {
        userText.textContent += buttonID;
    }
}

function clearDisplay() {
    const userText = document.querySelector('#user-text');
    userText.textContent = '0';
}

function changeSign() {
    const userText = document.querySelector('#user-text');
    if (userText.textContent != '0') {
        userText.textContent = Number(userText.textContent) * -1;
    }
}

function percent() {
    const userText = document.querySelector('#user-text');
    userText.textContent = Math.round(Number(userText.textContent)) / 100;
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

function operationInput(buttonID) {}

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

const inputs = document.querySelector('#inputs');

inputs.addEventListener('click', clickListener);