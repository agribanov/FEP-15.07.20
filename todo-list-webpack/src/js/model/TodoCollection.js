import {TODOS_URL} from '../config';

export default class TodoCollection{
    constructor(){
        console.log('collection created', TODOS_URL);

        this.list = [];
    }

    getList(){
        return fetch(TODOS_URL)
            .then(res => res.json())
            .then((data) => this.list = data)
    }

    toggle(id){
        const todo = this.list.find(item => item.id == id);
        todo.isDone = !todo.isDone;

        return fetch(`${TODOS_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    delete(id){
        this.list = this.list.filter((item) => item.id != id);

        return fetch(`${TODOS_URL}/${id}`, {
            method: 'DELETE'
        });
    }

    add(newTask){
        newTask.isDone = false;

        return fetch(`${TODOS_URL}`, {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(task => this.list.push(task));
    }
}