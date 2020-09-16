function Student(name, marks) {
    this.marks = marks;
    this.name = name;
}

Student.prototype.avarageMark = function () {
    return arrayAvg(this.marks);
};

function arrayAvg(arr) {
    return arr.reduce((sum, num) => sum + num) / arr.length;
}

const students = [
    new Student('John Smith', [10, 8, 6, 9, 8, 0, 7]),
    new Student('John Doe', [9, 8, 7, 6, 0, 7]),
    new Student('Thomas Anderson', [6, 7, 10, 8]),
    new Student('Jean-Baptiste Emanuel Zorg', [10, 9, 8, 9]),
];

console.log(students[0].avarageMark());

// studentAvarageMark(students[1]);
// groupAvarageMark(students);

// function studentAvarageMark(student) {
//     return arrayAvg(student.marks);
// }

// function groupAvarageMark(studentsList) {
//     const allMarks = studentsList.flatMap((student) => student.marks);
//     return arrayAvg(allMarks);
// }
