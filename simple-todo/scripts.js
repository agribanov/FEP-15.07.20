const taskInput = document.getElementById('task');
const listEl = document.getElementById('list');

document.getElementById('addTaskBtn').addEventListener('click', onAddBtnClick);

document
    .getElementById('addFixedTaskBtn')
    .addEventListener('click', onAddFixedBtnClick);

addNewTask('Hello world form script');

function onAddBtnClick() {
    addNewTask(taskInput.value);
    clearInput();
}

function onAddFixedBtnClick() {
    addNewTask('Hello world');
}

function addNewTask(title) {
    const li = document.createElement('li');
    li.className = 'red';
    li.textContent = title;
    listEl.append(li);
}

function clearInput() {
    taskInput.value = '';
}
