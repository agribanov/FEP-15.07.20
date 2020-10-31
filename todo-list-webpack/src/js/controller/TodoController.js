import TodoListView from '../view/TodoListView';
import TodoFormView from '../view/TodoFormView';
import TodoCollection from '../model/TodoCollection';

export default class TodoController{
    constructor(){
        this.listview = new TodoListView({
            onToggle: this.onToggle.bind(this),
            onDelete: (id) => this.onDelete(id)
        });
        
        this.formView = new TodoFormView({
            onSave: (task) => this.onSave(task)
        });

        $('.container')
            .append(this.listview.$el)
            .append(this.formView.$el);

        this.collection = new TodoCollection();

        this.collection.getList()
            .then(() => this.renderList())
    }

    onToggle(id){
        console.log('this', this);
        this.collection.toggle(id);
        this.renderList()
    }

    onDelete(id){
        this.collection.delete(id)
        this.renderList()
    }

    onSave(task){
        this.collection.add(task).then(() => this.renderList())
    }

    renderList(){
        this.listview.render(this.collection.list)
    }
}