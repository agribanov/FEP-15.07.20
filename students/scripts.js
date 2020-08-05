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

studentAvarageMark(students[1]);
groupAvarageMark(students);

function studentAvarageMark(student) {
    return arrayAvg(student.marks);
}

function groupAvarageMark(studentsList) {
    const allMarks = studentsList.flatMap((student) => student.marks);
    return arrayAvg(allMarks);
}

function arrayAvg(arr) {
    return arr.reduce((sum, num) => sum + num) / arr.length;
}
