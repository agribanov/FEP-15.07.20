function sum(max) {
    if (max === 0) return 0;

    return max + sum(max - 1);
}

console.log(sum(100));

const person = {
    name: 'Alex',
    age: 22,
    adress: {
        city: 'Dnipro',
        country: 'Ukraine',
    },
};

function copy(obj) {
    return obj;
}

copy(person); // {name: 'Alex', age: 22}
