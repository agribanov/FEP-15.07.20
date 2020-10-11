$(() => {
    const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';

    const DELETE_NOTE_SELECTOR = '.delete-note';
    const EDIT_NOTE_CONTROL_CLASS = 'edit-note-control';

    const noteTemplate = $('#noteTemplate').html();
    const $fieldElement = $('#field')
        .on('click', DELETE_NOTE_SELECTOR, onDeleteNoteClick)
        .on('focusout', '.' + EDIT_NOTE_CONTROL_CLASS, onFieldElementFocusout);

    const $newNoteDescription = $('#newNoteDescription');
    const $dialog = $('#dialogForm').dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        close: () => $newNoteDescription.val(''),
        buttons: {
            Save: () => {
                const note = {
                    description: $newNoteDescription.val(),
                };

                createNote(note);
                $dialog.dialog('close');
            },
            Cancel: () => $dialog.dialog('close'),
        },
    });
    let notesList = [];

    $('#addNoteBtn').on('click', onAddNoteBtnClick);

    init();

    function onAddNoteBtnClick() {
        openModal();
        // createNote();
    }

    function openModal() {
        console.log('open modal');
        $dialog.dialog('open');
    }

    function onDeleteNoteClick(e) {
        const $element = $(this).parent();

        $element.addClass('fadeOut');

        setTimeout(2000, () => deleteNote($element.data('noteIndex')));

        // $element.effect('explode', {}, 2000, () =>
        //     deleteNote($element.data('noteIndex'))
        // );
    }

    function onFieldElementFocusout(e) {
        const $element = $(this);

        updateNote($element.parent().data('noteIndex'), {
            description: $element.val(),
        });
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
        return $fieldElement.find(`[data-note-index="${id}"]`);
    }

    function createNote(note) {
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

    function updateNote(id, changes) {
        // {width: 'adksjfhalskdhf', height: 200}
        const note = notesList.find((el) => el.id == id);

        Object.keys(changes).forEach((key) => (note[key] = changes[key]));

        // const $element = getNoteElement(id);
        // $element.replaceWith(getNoteHtml(note));

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
        const $element = getNoteElement(id);

        $element && $element.remove();
    }

    function renderList(notesList) {
        notesList.forEach(renderNote);
    }

    function renderNote(note) {
        const $noteElement = $(getNoteHtml(note))
            .css({
                width: note.width,
                height: note.height,
                top: note.y,
                left: note.x,
            })
            .resizable({
                stop: (event, ui) => {
                    updateNote(note.id, ui.size);
                },
            })
            .draggable({
                handle: '.drag-note',
                stop: (event, ui) => {
                    console.log(ui);
                    updateNote(note.id, {
                        x: ui.position.left,
                        y: ui.position.top,
                    });
                },
            });

        $fieldElement.append($noteElement);
    }

    function getNoteHtml(note) {
        return noteTemplate
            .replace('{{id}}', note.id)
            .replace('{{description}}', note.description);
    }
});
