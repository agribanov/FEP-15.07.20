fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => console.log(data));

// 1) Pending
// 2) Resolved
// 3) Rejected

// document.addEventListener('click', function () {});

// function rec(i) {
//     console.log(i);
//     rec(i + 1);
// }

// rec(0);

// setInterval(function () {
//     console.log('long function 100ms');
// }, 50);

// function onTimeout() {
//     console.log('long function 100ms');
//     setTimeout(onTimeout, 50);
// }

// setTimeout(onTimeout, 50);

// new Accordeon(document.querySelector('#container'));

// http(s)

// URL
//     protocol http/https
//     domain
//     path
//     queryParameter

// METHOD
//     GET
//     POST *
//     PUT *
//     DELETE
//     OPTIONS
//     PATCH *

// BODY - тело

// HEADERS - Служебная информация

// STATUS
//     100
//         101

//     200
//         204
//         201

//     300
//         301
//         302

//     400
//         404
//         401
//         403

//     500
//         503
//         502
