const addBtnEl = document.getElementById('addBtn');
const resultEl = document.getElementById('result');

let i = 0;

addBtnEl.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    resultEl.innerHTML = resultEl.innerHTML + '-' + ++i;
}
