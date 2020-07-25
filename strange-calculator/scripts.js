'use strict';

const operation = prompt('What do you want to do? (sum, sub, mult, div, pow)');
const operandA = getOperand('Argument A');
const operandB = getOperand('Argument B');

calculate(operation, operandA, operandB);

function calculate(op, operandA, operandB) {
    switch (op) {
        case 'sum':
            sum(operandA, operandB);
            break;
        case 'sub':
            sub(operandA, operandB);
            break;
        case 'mult':
            mult(operandA, operandB);
            break;
        case 'div':
            div(operandA, operandB);
            break;
        case 'pow':
            pow(operandA, operandB);
            break;
    }
}

function getOperand(msg) {
    const answer = prompt(msg);

    if (answer === null) {
        return 0;
    } else {
        return +answer;
    }
}

function pow(a, b) {
    const result = Math.pow(a, b);
    console.log(`${a} ^ ${b} = ${result}`);
    return result;
}

function sum(a, b) {
    const result = a + b;

    console.log(`${a} + ${b} = ${result}`);

    return result;
}

function sub(a, b) {
    const result = a - b;
    console.log(`${a} - ${b} = ${result}`);

    return result;
}
function mult(a, b) {
    const result = a * b;
    console.log(`${a} * ${b} = ${result}`);

    return result;
}

function div(a, b) {
    const result = a / b;
    console.log(`${a} / ${b} = ${result}`);

    return result;
}
