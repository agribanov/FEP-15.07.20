class TodoListView{
    constructor(config){
        console.log('TodoListView created');

        this.config = config;
        this.$el = this.initView()
    }

    initView(){
        return $(`<div id="taskList" class="task-list u-full-width"></div>`)
                    .on('click', '.task-item', (e) => this.onItemClick(e))
                    .on('click', '.delete-btn', (e) => this.onDeleteClick(e))
        
    }

    render(list){
        this.$el.html(list.map(this.getTodoTemplate).join('\n'))
    }

    getTodoTemplate(todoItem) {
        return `<div class="task-item u-full-width ${todoItem.isDone ? 'done' : ''}" data-todo-id="${todoItem.id}">
                    ${todoItem.title}
                    <span class="delete-btn">✘</span>
                </div>`
    }

    onItemClick(e){
        const id = $(e.target).data('todoId');
        this.config.onToggle(id)
    }

    onDeleteClick(e){
        e.stopPropagation()
        const id = $(e.target).closest('.task-item').data('todoId');
        this.config.onDelete(id)
    }
}