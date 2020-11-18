import MainView from "./MainView";
import Model from "./Model";

export default class Controller{
    constructor($container){
        this.model = new Model;

        this.view = new MainView($container, {
            onAdd: () => this.addContact(),
            onEdit: (id) => this.editContact(id),
            onDelete: (id) => this.deleteContact(id),
            onSave: (contact) => this.saveContact(contact),
        });

        this.view.renderList(this.model.list);
    }

    addContact(){
        this.view.openModal(this.model.getEmptyContact());
    }

    editContact(id){
        this.view.openModal(this.model.getContact(id));
    }

    saveContact(contact){
        this.model.save(contact);
        this.view.renderList(this.model.list);
    }

    deleteContact(id){
        console.log('controller delete', id)
        this.model.delete(id);
        this.view.renderList(this.model.list);

    }
}