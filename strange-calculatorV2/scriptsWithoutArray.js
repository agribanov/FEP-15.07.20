const action = getAction();
const operandsCount = getOperandsCount();

calculate(action, operandsCount);

function getAction() {
    let userInput;

    do {
        userInput = prompt('What to do? + - / *');
    } while (checkAction(userInput));

    return userInput;
}

function checkAction(actionInput) {
    return (
        actionInput != '+' &&
        actionInput != '-' &&
        actionInput != '/' &&
        actionInput != '*'
    );
}

function getOperandsCount() {
    let userInput;

    do {
        userInput = prompt('How many?');
    } while (checkOperandsCount(userInput));

    return +userInput;
}

function checkOperandsCount(operandsCountInput) {
    return (
        operandsCountInput === '' ||
        isNaN(operandsCountInput) ||
        operandsCountInput < 2 ||
        operandsCountInput > 7
    );
}

function getUserNumber(index) {
    let userInput;

    do {
        userInput = prompt('Enter number ' + index);
    } while (checkUserNumber(userInput));

    return +userInput;
}

function checkUserNumber(userNumberInput) {
    return userNumberInput === '' || isNaN(userNumberInput);
}

function calculate(operation, operandsCount) {
    let result = getUserNumber(1);
    let expression = result;

    for (let i = 2; i <= operandsCount; i++) {
        const operand = getUserNumber(i);
        switch (operation) {
            case '+':
                result = sum(result, operand);
                expression += ' + ' + operand;
                break;
            case '-':
                result = sub(result, operand);
                expression += ' - ' + operand;

                break;
            case '*':
                result = mult(result, operand);
                expression += ' * ' + operand;
                break;
            case '/':
                result = div(result, operand);
                expression += ' / ' + operand;
                break;
        }
    }

    console.log(`${expression} = ${result}`);
}
function sum(a, b) {
    const result = a + b;
    return result;
}

function sub(a, b) {
    const result = a - b;
    return result;
}
function mult(a, b) {
    const result = a * b;
    return result;
}

function div(a, b) {
    const result = a / b;
    return result;
}
