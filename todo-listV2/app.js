const TASK_ITEM_CLASS = 'task-item';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'done';

const addTaskForm = document.getElementById('addTaskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;

let todoList = [];

addTaskForm.addEventListener('submit', onAddTaskFormSubmit);
taskList.addEventListener('click', onTaskListClick);

init();

function onAddTaskFormSubmit(event) {
    event.preventDefault();

    submitForm();
}

function onTaskListClick(event) {
    switch (true) {
        case event.target.classList.contains(TASK_ITEM_CLASS):
            toggleTaskState(event.target);
            break;
        case event.target.classList.contains(DELETE_BTN_CLASS):
            deleteTask(event.target.parentElement);
            break;
    }
}

function init() {
    restoreData();
    renderList();
}

function submitForm() {
    const todoItem = {
        // id: Math.random(),
        id: Date.now(),
        title: taskNameInput.value,
        isDone: false,
    };

    addTask(todoItem);
}

function addTask(todoItem) {
    todoList.push(todoItem);

    saveData();

    renderTask(todoItem);
}

function renderList() {
    todoList.forEach((todoItem) => renderTask(todoItem));
}

function renderTask(todoItem) {
    const html = taskItemTemplate
        .replace('{{id}}', todoItem.id)
        .replace('{{doneClass}}', todoItem.isDone ? TASK_DONE_CLASS : '')
        .replace('{{title}}', todoItem.title);
    taskList.insertAdjacentHTML('beforeend', html);
}
/// ====
function toggleTaskState(el) {
    console.log(el.dataset.todoId);
    const todoId = el.dataset.todoId;
    const todo = todoList.find((item) => item.id == todoId);

    todo.isDone = !todo.isDone;

    saveData();

    el.classList.toggle(TASK_DONE_CLASS);
}
/// ===
function deleteTask(el) {
    const todoId = +el.dataset.todoId;
    todoList = todoList.filter((item) => item.id !== todoId);

    saveData();

    el.remove();
}

// ===
function saveData() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function restoreData() {
    const data = localStorage.getItem('todoList');
    todoList = data ? JSON.parse(data) : [];
}
