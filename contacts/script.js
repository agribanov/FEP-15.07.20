'use strict';

const STORAGE_KEY = 'asfasdfsaf';
const DELETE_BTN_CLASS = 'delete-btn';
const ITEM_CLASS = 'item';

const listEl = document.getElementById('usersList');
const nameInputEl = document.getElementById('userName');
const phoneInputEl = document.getElementById('userPhone');
const addBtnEl = document.getElementById('addUserBtn');
const userTemplate = document.getElementById('userTemplate').innerHTML;

let list = [];

addBtnEl.addEventListener('click', onAddBtnClick);
listEl.addEventListener('click', onListElClick);

init();

function onAddBtnClick() {
    console.log('AddBtn click');
    submitForm();
}

function onListElClick(e) {
    switch (true) {
        case e.target.classList.contains(DELETE_BTN_CLASS):
            deleteUser(e.target.closest('.' + ITEM_CLASS));
    }
}

// Инициализация приложения при старте
function init() {
    // восстанавливаем данные из хранилища
    restoreData();
    // рендерим список, который взяли из хранилища
    renderList(list);

    console.log('list', list);
}

// Сохранение юзера
function submitForm() {
    // Проверяем, что все введенное пользователем валидно
    if (isFormValid()) {
        // Если да, сохраняем
        // Создаем новый обьект
        const userObj = {
            id: Date.now(),
            name: nameInputEl.value,
            phone: phoneInputEl.value,
        };

        // Передаем в вфункцию для добавления в список
        addUser(userObj);

        // Сбарсываем форму
        resetForm();
    } else {
        // Если нет, показываем ошибку
        alert('Invalid values');
    }
}

function addUser(user) {
    console.log('adding user', user);
    // Добавляем новый обьект в список
    list.push(user);
    // Сохраняем список в хранилище
    saveData();

    // Рендерим юзера
    renderUser(user);
}

function renderUser(user) {
    console.log(Object.keys(user));

    // Из всех полей юзера собираем html из шаблона
    const html = Object.keys(user).reduce(
        (template, key) => template.replace('{{' + key + '}}', user[key]),
        userTemplate
    );

    // const keys = Object.keys(user);
    // let html = userTemplate;

    // for(let i=0; i<keys.length; i++){
    //     html = html.replace('{{'+keys[i]+'}}', user[keys[i]])
    // }

    // const html = userTemplate
    //     .replace('{{id}}', user.id)
    //     .replace('{{name}}', user.name)
    //     .replace('{{phone}}', user.phone);

    // Вставляем его в ДОМ
    listEl.insertAdjacentHTML('beforeend', html);

    console.log(html);
}

function renderList(usersList) {
    // Для всех елементов списка вызываем функцию рендера, которая вставит для всех html
    usersList.forEach((item) => renderUser(item));
}

function deleteUser(userEl) {
    // Берем ид юзера, которого нужно удалить
    const id = +userEl.dataset.id;

    // Создаем новый список, на основе старого. В ноый берем только элементы, у которых ид не тот, который нужно удалить
    list = list.filter((item) => item.id !== id);

    // Сохраняем список в хранилище
    saveData();

    // Удаляем элемент, который отображает конкртеного юзера
    userEl.remove();
}

function isFormValid() {
    //return nameInputEl.value && phoneInputEl.value; // Тоже самое
    return nameInputEl.value !== '' && phoneInputEl.value !== '';
}

function resetForm() {
    nameInputEl.value = '';
    phoneInputEl.value = '';
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function restoreData() {
    const data = localStorage.getItem(STORAGE_KEY);

    list = data ? JSON.parse(data) : [];
}
