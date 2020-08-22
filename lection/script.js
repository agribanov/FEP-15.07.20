let counts = 0;

const counter = {
    inc: function () {
        counts++;
    },
    dec: function () {
        dec--;
    },
    add: function () {
        counts += 45;
    },
    log: function () {
        console.log(name, counts);
    },
};

// const counter = createCounter('counter 1');
const counter2 = createCounter('counter 1');
const counter3 = createCounter('counter 1');
const counter4 = createCounter('counter 1');

counter.inc();
counter.inc();
counter.add(45);
counter.log();

counter2.inc();
