document.getElementById('result').addEventListener('click', onUlClick);

function onUlClick(e) {
    if (e.target.classList.contains('liItem')) {
        e.target.classList.toggle('red');
    }
}

// document.addEventListener(
//     'click',
//     (e) => {
//         console.log('clicked on document on capturing', e.target);
//     },
//     true
// );
// document.addEventListener('click', (e) =>
//     console.log('clicked on document on bubbling', e.target)
// );
// document.body.addEventListener('click', (e) =>
//     console.log('clicked on body', e.target)
// );
// document.getElementById('result').addEventListener('click', (e) => {
//     e.stopPropagation();

//     console.log('clicked on result', e.target);
// });
// document.getElementById('secondLi').addEventListener('click', (e) => {
//     console.log('clicked on li', e.target);
// });
