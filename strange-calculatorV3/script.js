const action = getAction();
const userNumbers = getUserNumbers();
calculate(action, userNumbers);

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

function getUserNumbers() {
    do {
        userInput = prompt('Put your numbers');
    } while (!userInput); // 2wwqed 3  4

    const userInputArray = userInput.split(' ');
    // ['2wwqed', '3', '', '4'];

    return filterNumbers(userInputArray);
}

function filterNumbers(strArray) {
    return strArray.filter(isNumber).map((item) => +item);
}

function isNumber(num) {
    return num && !isNaN(num);
}

function calculate(operation, operands) {
    console.log(operands);
    switch (operation) {
        case '/':
            div(operands);
            break;
        case '+':
            sum(operands);
            break;
        case '-':
            sub(operands);
            break;
        case '*':
            mult(operands);
            break;
    }
}

function div(operands) {
    let result = operands[0];
    let expression = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result /= operands[i];
        expression += ' / ' + operands[i];
    }

    console.log(expression + ' = ' + result);
}

function sum(operands) {
    let result = operands[0];
    let expression = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result += operands[i];
        expression += ' + ' + operands[i];
    }

    console.log(expression + ' = ' + result);
}

function sub(operands) {
    let result = operands[0];
    let expression = operands[0];

    console.log('sub', operands);
    for (let i = 1; i < operands.length; i++) {
        result -= operands[i];
        expression += ' - ' + operands[i];
    }

    console.log(expression + ' = ' + result);
}

function mult(operands) {
    let result = operands[0];
    let expression = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result *= operands[i];
        expression += ' * ' + operands[i];
    }

    console.log(expression + ' = ' + result);
}
