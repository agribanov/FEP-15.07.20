// ООП

// Наследование
// Инкапсуляция
// Полиморфизм

// red
// blue
// white

// function createTemaplate(template) {
//     return function (obj) {
//         return Object.keys(obj).reduce(
//             (str, key) => str.replace('{{' + key + '}}', obj[key]),
//             template
//         );
//     };
// }

// const userTemplate = createTemaplate('Hello, {{name}}! {{age}}');

// console.log(userTemplate({ name: 'Alex', age: 22 }));
// console.log(userTemplate({ name: 'Bob', age: 55 }));
// console.log(userTemplate({ name: 'Smith', age: 2222 }));

const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 0, 7],
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 0, 7],
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8],
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9],
    },
];

// studentAvarageMark(students[1]);
// studentAvarageMark();

function studentAvarageMark(greeting, bye) {
    console.log(greeting, this.name, arrayAvg(this.marks), bye);
    return arrayAvg(this.marks);
}

function arrayAvg(arr) {
    return arr.reduce((sum, num) => sum + num) / arr.length;
}

// studentAvarageMark('Hi')

studentAvarageMark.call(students[0], 'Hi', 'Bye-Bye');
studentAvarageMark.apply(students[0], ['Hi', 'Bye-Bye']);
