'use strict';
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';

const listEl = document.getElementById('contactsList');
const idInputEl = document.getElementById('contactId');
const nameInputEl = document.getElementById('contactName');
const surnameInputEl = document.getElementById('contactSurname');
const phoneInputEl = document.getElementById('contactPhone');
const addBtnEl = document.getElementById('addContactBtn');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;

let list = [];

listEl.addEventListener('click', onListElClick);
addBtnEl.addEventListener('click', onaAdBtnElClick);

init();

function onListElClick(e) {
    switch (true) {
        case e.target.classList.contains(DELETE_BTN_CLASS):
            deleteItem(getElementId(e.target));
            break;
        case e.target.classList.contains(EDIT_BTN_CLASS):
            editItem(getElementId(e.target));
            break;
    }
}

function getElementId(element) {
    return element.closest('.item').dataset.id;
}

function onaAdBtnElClick(e) {
    submitForm();
}

function init() {
    getList();
}

function getList() {
    fetch(URL)
        .then((res) => res.json())
        .then(setData)
        .then(renderList);
}

function setData(data) {
    return (list = data);
}

function renderList(data) {
    listEl.innerHTML = data.map(getItemElementHtml).join('');
}

function getItemElementHtml(item) {
    return contactTemplate
        .replace('{{id}}', item.id)
        .replace('{{name}}', item.name)
        .replace('{{surname}}', item.surname)
        .replace('{{phone}}', item.phone);
}

function deleteItem(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

    list = list.filter((item) => item.id != id);

    renderList(list);
}

function editItem(id) {
    const item = list.find((el) => el.id == id);

    fillForm(item);
}

function submitForm() {
    const item = getFormData();

    if (item.id) {
        updateContact(item);
    } else {
        addContact(item);
    }
}

function addContact(item) {
    delete item.id;

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
        .then((res) => res.json())
        .then((data) => {
            list.push(data);
            renderList(list);
            clearForm();
        });
}

function updateContact(item) {
    fetch(`${URL}/${item.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    }).catch(() => getList());
    // .then((res) => res.json())
    // .then((data) => {
    // });

    list = list.map((el) => (el.id != item.id ? el : item));

    renderList(list);
    clearForm();
}

function getFormData() {
    return {
        id: idInputEl.value,
        name: nameInputEl.value,
        surname: surnameInputEl.value,
        phone: phoneInputEl.value,
    };
}

function fillForm(obj) {
    idInputEl.value = obj.id;
    nameInputEl.value = obj.name;
    surnameInputEl.value = obj.surname;
    phoneInputEl.value = obj.phone;
}

function clearForm() {
    idInputEl.value = '';
    nameInputEl.value = '';
    surnameInputEl.value = '';
    phoneInputEl.value = '';
}
