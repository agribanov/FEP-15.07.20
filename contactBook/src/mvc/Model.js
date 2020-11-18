const LS_KEY = 'contacts';
const EMPTY_COTACT = {
    id: '',
    name: '',
    surname: '',
    phone: ''
}

export default class Model{
    constructor(){
        this.list = [];
        this.loadData()
    }

    loadData(){
        const data = localStorage.getItem(LS_KEY);

        this.list = data ? JSON.parse(data) : [];
    }

    saveData(){
        localStorage.setItem(LS_KEY, JSON.stringify(this.list));
    }

    getEmptyContact(){
        return EMPTY_COTACT;
    }

    getContact(id){
        return this.list.find(item => item.id == id);
    }

    save(contact){
        if (contact.id){
            this.update(contact)
        } else {
            this.create(contact);
        }

        this.saveData();
    }

    update(contact){
        this.list = this.list.map(item => item.id == contact.id ? contact : item);
    }

    create(contact){
        contact.id = Date.now();

        this.list = [...this.list, contact];
    }

    delete(id){
        this.list = this.list.filter(item => item.id != id);
        this.saveData();
    }
}