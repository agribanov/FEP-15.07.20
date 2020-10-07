$(() => {
    const TODOS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';

    const $container = $('#container');
    const $taskTitleInput = $('#taskTitle');

    $container.on('click', 'li', onLiClick);
    $container.on('click', 'span', onDeleteClick);
    $('#taskForm').on('submit', onFormSubmit);

    let tasksList = [];

    function onFormSubmit(e) {
        e.preventDefault();
        submitForm();
    }

    function onLiClick() {
        const id = $(this).data('id');
        toggleTask(id);
    }
    function onDeleteClick(e) {
        e.stopPropagation();
        const id = $(this).parent().data('id');
        deleteTask(id);
    }

    init();
    function init() {
        getList();
    }

    function getList() {
        return fetch(TODOS_URL)
            .then((res) => res.json())
            .then((data) => (tasksList = data))
            .then(renderTodos);
    }

    function renderTodos(list) {
        console.log(list);

        $container.html(
            list
                .map(
                    (task) =>
                        `<li class="${task.isDone ? 'done' : ''}" data-id="${
                            task.id
                        }">${task.title} <span>X</span></li>`
                )
                .join('')
        );
    }

    // ====
    function submitForm() {
        const task = {
            title: $taskTitleInput.val(),
            isDone: false,
        };

        addTask(task).then(getList);
    }

    function addTask(task) {
        console.log(task);

        return fetch(TODOS_URL, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    // ====
    function toggleTask(id) {
        const task = tasksList.find((item) => item.id === id);

        task.isDone = !task.isDone;

        fetch(TODOS_URL + task.id, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(getList);
    }
    // ====
    function deleteTask(id) {
        fetch(TODOS_URL + id, {
            method: 'DELETE',
        }).then(getList);
    }
});

// // ----- 1) рендер списка
// // ----- 2) добавление новых
// // ----- 3) переключение состояния
// // 4) удаление

// // http(s)

// // URL
// //     protocol http/https
// //     domain
// //     path
// //     queryParameter

// // METHOD
// //     GET
// //     POST *
// //     PUT *
// //     DELETE
// //     OPTIONS
// //     PATCH *

// // BODY - тело

// // HEADERS - Служебная информация

// // STATUS
// //     100
// //         101

// //     200
// //         204
// //         201

// //     300
// //         301
// //         302

// //     400
// //         404
// //         401
// //         403

// //     500
// //         503
// //         502

// // REST

// // apiURL/users

// // LIST    - GET /
// // GETONE  - GET /:id

// // ADD     - POST / body:{name: 'Alex', age:23} <== {id: 101, name: 'Alex', age:23}
// // full UPDATE     - PUT /:id body:{id: :id, name: 'Bob', age:23} <== {id: :id, name: 'Bob', age:23}
// // // Partial UPDATE  - PATCH /:id body:{name: 'Bob'} <== {id: :id, name: 'Bob', age:23}

// // DELETE  - DELETE /:id
