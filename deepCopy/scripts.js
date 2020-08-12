function copy(obj) {
    const objCopy = {};
    for (let key in obj) {
        objCopy[key] = isObject(obj[key]) ? copy(obj[key]) : obj[key];
    }

    return objCopy;
}

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

function copy2(obj){
    if (!isObject(obj)) return obj;

    const objCopy = {};
    for (let key in obj) {
        objCopy[key] =copy2(obj[key])
    }

    return objCopy
}

const obj = {name: 'Alex', age: 33, adress: { country: 'UA', city: 'Dnipro'}} 
const objCopy = copy(obj);
const objCopy2 = copy2(obj);
