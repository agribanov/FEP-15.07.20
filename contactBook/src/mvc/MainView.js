import $ from 'jquery';

import ListView from "./ListView";
import FormView from "./FormView";

export default class MainView{
    constructor($container, config){
        this.$container = $container;
        this.config = config;
        this.$el = this.initView();

        this.$container.append(this.$el)
    }

    initView(){
        this.listView = new ListView({
            onEdit: this.config.onEdit,
            onDelete: this.config.onDelete,
        });

        this.formView = new FormView({
            onSave: this.config.onSave
        })

        const $el = $('<div class="container"></div>');
        const $addBtn = $('<button>Add</button>')
                            .on('click', () => this.config.onAdd && this.config.onAdd());

        $('<div class="row"></div>')
            .append(this.listView.$el)
            .appendTo($el);

        $('<div class="row"></div>')
            .append($addBtn)
            .appendTo($el);
        
        return $el;
    }

    renderList(list){
        this.listView.render(list);
    }

    openModal(contact){
        this.formView.openForm(contact)
    }
}