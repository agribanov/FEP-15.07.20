function createCalculator(baseValue) {
    return {
        sum: (value) => (baseValue += value),
        sub: (value) => (baseValue -= value),
        div: (value) => (baseValue /= value),
        mult: (value) => (baseValue *= value),
        set: (value) => (baseValue = value),
    };
}

const calc = createCalculator(5);

console.log(calc.sum(10)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); //
