const RIGHT_ANSWER_POINTS = 10;
let score = 0;

const firstAnswer = prompt('Сколько будет 2+2?');
if (firstAnswer == '4') {
    score += RIGHT_ANSWER_POINTS;
}

const secondAnswer = prompt('Солнце встает на востоке?');
if (secondAnswer.toLowerCase() == 'да' || secondAnswer.toLowerCase() == 'yes') {
    score += RIGHT_ANSWER_POINTS;
}

const thirdAnswer = prompt('Сколько будет 5 / 0?');
if (thirdAnswer.toLowerCase() == 'infinity') {
    score += RIGHT_ANSWER_POINTS;
}

const fourthAnswer = prompt('Какого цвета небо?');
if (fourthAnswer == 'Синий') {
    score += RIGHT_ANSWER_POINTS;
}

const fifthAnswer = prompt(
    'Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?'
);
if (fifthAnswer == '42') {
    score += RIGHT_ANSWER_POINTS;
}

alert(`Счет: ${score}`);
