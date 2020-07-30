// 1) Спрашиваем операнцию
// 2) Спрашиваем количество операндов

// 3) спросить операнд несколько раз
// 4) посчитать результат
// 5) сформировать полностью выражение

// 1) Спрашиваем операнцию
// - спросить операцию
// - проверить правильность
// - персмпросить, еслине правильность

//
const operation = getOperantion();
const operandsCount = getOperandsCount();
const numbers = getNumbers();

console.log(numbers);

//
// calculate(operation, operandsCount);

//
function getOperantion() {
    let operationInput = '';

    do {
        operationInput = prompt('What to do? + - * /');
    } while (isOpearionInvalid(operationInput));

    return operationInput;
}

function isOpearionInvalid(operationInput) {
    return (
        operationInput !== '+' &&
        operationInput !== '-' &&
        operationInput !== '*' &&
        operationInput !== '/'
    );
}

function getOperandsCount() {
    let countInput = '';

    do {
        countInput = prompt('How many?');
    } while (isCountInvalid(countInput));

    return +countInput;
}

function isCountInvalid(countInput) {
    return (
        isNaN(countInput) ||
        countInput === '' ||
        countInput < 2 ||
        countInput > 7
    );
}

function calculate(operation, operandsCount) {
    let result = getOperand();
    let expression = result;

    for (let i = 1; i < operandsCount; i++) {
        const operand = getOperand();

        switch (operation) {
            case '+':
                result += operand;
                expression += ' + ' + operand;
                break;
            case '-':
                result -= operand;
                expression += ' - ' + operand;
                break;
            case '*':
                result *= operand;
                expression += ' * ' + operand;
                break;
            case '/':
                result /= operand;
                expression += ' / ' + operand;
                break;
        }
    }

    alert(`${expression} = ${result}`);
}

function getOperand() {
    let operandInput = '';

    do {
        operandInput = prompt('Give me number?');
    } while (isOperandInvalid(operandInput));

    return +operandInput;
}

function isOperandInvalid(operandInput) {
    return isNaN(operandInput);
}

function getNumbers() {
    const inputs = [];
    for (let i = 0; i < operandsCount; i++) {
        inputs[i] = getOperand();
    }

    return inputs;
}

// 2) Спрашиваем количество операндов
// -спросить - проверить - переспроисть;

// let operation = '';

// do {
//     operation = prompt('What to do? + - * /');
// } while (
//     operation !== '+' &&
//     operation !== '-' &&
//     operation !== '*' &&
//     operation !== '/'
// );
