'use strict';

const STORAGE_KEY = 'studentsList';
const DELETE_BTN_CLASS = 'delete-btn';
const ITEM_CLASS = 'item';

const groupAvarageMarkEl = document.getElementById('groupAvarageMark');
const listEl = document.getElementById('studentsList');
const nameInputEl = document.getElementById('studentName');
const marksInputEl = document.getElementById('studentMarks');
const addBtnEl = document.getElementById('addBtn');
const studentTemplate = document.getElementById('studentTemplate').innerHTML;

let list = [];

addBtnEl.addEventListener('click', onAddBtnClick);
listEl.addEventListener('click', onListElClick);

init();

function onAddBtnClick() {
    submitForm();
}

function onListElClick(e) {
    switch (true) {
        case e.target.classList.contains(DELETE_BTN_CLASS):
            deleteStudent(e.target.closest('.' + ITEM_CLASS));
    }
}

// Инициализация приложения при старте
function init() {
    // восстанавливаем данные из хранилища
    restoreData();
    // рендерим список, который взяли из хранилища
    renderList(list);

    updateGroupAverage();

    console.log('list', list);
}

// Сохранение юзера
function submitForm() {
    // Проверяем, что все введенное пользователем валидно
    if (isFormValid()) {
        const marksArray = studentMarks.value.split(',').map((num) => +num);
        const studentObj = {
            id: Date.now(),
            name: nameInputEl.value,
            marks: marksArray,
            averageMark: arrayAvg(marksArray),
        };

        // Передаем в вфункцию для добавления в список
        addStudent(studentObj);

        // Сбарсываем форму
        resetForm();
    } else {
        // Если нет, показываем ошибку
        alert('Invalid values');
    }
}

function addStudent(student) {
    // Добавляем новый обьект в список
    list.push(student);
    // Сохраняем список в хранилище
    saveData();

    updateGroupAverage();

    // Рендерим юзера
    renderStudent(student);
}

function renderStudent(student) {
    // Из всех полей юзера собираем html из шаблона
    const html = Object.keys(student).reduce(
        (template, key) => template.replace('{{' + key + '}}', student[key]),
        studentTemplate
    );

    // Вставляем его в ДОМ
    listEl.insertAdjacentHTML('beforeend', html);
}

function renderList(studentsList) {
    // Для всех елементов списка вызываем функцию рендера, которая вставит для всех html
    studentsList.forEach((item) => renderStudent(item));
}

function deleteStudent(studentEl) {
    // Берем ид юзера, которого нужно удалить
    const id = +studentEl.dataset.id;

    // Создаем новый список, на основе старого. В ноый берем только элементы, у которых ид не тот, который нужно удалить
    list = list.filter((item) => item.id !== id);

    // Сохраняем список в хранилище
    saveData();

    updateGroupAverage();

    // Удаляем элемент, который отображает конкртеного юзера
    studentEl.remove();
}

function isFormValid() {
    //return nameInputEl.value && phoneInputEl.value; // Тоже самое
    return nameInputEl.value !== '' && isMarksInputValid();
}

function isMarksInputValid() {
    return (
        marksInputEl.value !== '' && !marksInputEl.value.split(',').find(isNaN)
    );
}

function resetForm() {
    nameInputEl.value = '';
    marksInputEl.value = '';
}

function updateGroupAverage() {
    groupAvarageMarkEl.textContent = groupAvarageMark(list);
}

function groupAvarageMark(studentsList) {
    const allMarks = studentsList.flatMap((student) => student.marks);
    return arrayAvg(allMarks);
}

function arrayAvg(arr) {
    return arr.length ? arr.reduce((sum, num) => sum + num) / arr.length : 0;
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function restoreData() {
    const data = localStorage.getItem(STORAGE_KEY);

    list = data ? JSON.parse(data) : [];
}
