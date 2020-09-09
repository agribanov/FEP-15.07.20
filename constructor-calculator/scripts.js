function Calculator(baseValue) {
    this.baseValue = baseValue;
    this.expression = expression;

    this.sum = function (value) {
        this.expression += '+' + value;
        return (this.baseValue += value);
    };
    this.sub = function (value) {
        this.expression += '-' + value;
        return (this.baseValue -= value);
    };
    this.div = function (value) {
        this.expression += '/' + value;
        return (this.baseValue /= value);
    };
    this.mult = function (value) {
        this.expression += '*' + value;
        return (this.baseValue *= value);
    };
    this.set = function (value) {
        this.expression = value;
        return (this.baseValue = value);
    };
    this.getResult = function () {
        return this.expression + '=' + this.baseValue;
    };
}

let calc = new Calculator(5);

calc2.sum(10);

console.log(calc.sum(10)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); //
