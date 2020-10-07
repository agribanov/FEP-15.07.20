const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';

const DELETE_NOTE_CLASS = 'delete-note';
const EDIT_NOTE_CONTROL_CLASS = 'edit-note-control';

const noteTemplate = document.getElementById('noteTemplate').innerHTML;
const fieldElement = document.getElementById('field');

let notesList = [];

document
    .getElementById('addNoteBtn')
    .addEventListener('click', onAddNoteBtnClick);

fieldElement.addEventListener('click', onFieldElementClick);
fieldElement.addEventListener('focusout', onFieldElementFocusout);
init();

function onAddNoteBtnClick() {
    createNote();
}

function onClearAllBtnClick() {
    clearAll();
}

function onFieldElementClick(e) {
    switch (true) {
        case e.target.classList.contains(DELETE_NOTE_CLASS):
            deleteNote(e.target.parentElement.dataset.noteIndex);
            break;
    }
}

function onFieldElementFocusout(e) {
    const element = e.target;

    switch (true) {
        case e.target.classList.contains(EDIT_NOTE_CONTROL_CLASS):
            updateNote(
                element.parentElement.dataset.noteIndex,
                element.name,
                element.value
            );
            break;
    }
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
    return (notesList = data);
}

function getNoteElement(id) {
    return fieldElement.querySelector(`[data-note-index="${id}"]`);
}

function createNote() {
    const note = {
        description: '',
    };

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    })
        .then((res) => res.json())
        .then((note) => {
            notesList.push(note);
            renderNote(note);
        });
}

function updateNote(id, name, value) {
    const note = notesList.find((el) => el.id == id);

    note[name] = value;

    fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
}

function deleteNote(id) {
    notesList = notesList.filter((el) => el.id != id);

    deleteNoteElement(id);

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
}

function deleteNoteElement(id) {
    const element = getNoteElement(id);

    element && element.remove();
}

function renderList(notesList) {
    notesList.forEach(renderNote);
}

function renderNote(note) {
    fieldElement.insertAdjacentHTML('beforeEnd', getNoteHtml(note));
}

function getNoteHtml(note) {
    return noteTemplate
        .replace('{{id}}', note.id)
        .replace('{{description}}', note.description);
}
