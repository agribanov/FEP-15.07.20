import $ from 'jquery';

export default class ListView{
    constructor(config){
        this.config = config;
        this.$el = this.initView()
    }

    initView(){
        this.$listContainer = $('<tbody id="contactsList"></tbody>')
            .on('click', '.edit-btn', (e) => this.onEditClick(e))
            .on('click', '.delete-btn', (e) => this.onDeleteClick(e));

        return $(` <table class="u-full-width">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    </table>`)
                    .append(
                        this.$listContainer
                    );
        
    }

    render(list){
        this.$listContainer.html(list.map(this.getContactTemplate).join('\n'))
    }

    getContactTemplate(contact) {
        return `<tr class="contact-row" data-id="${contact.id}">
                    <td>${contact.name}</td>
                    <td>${contact.surname}</td>
                    <td>${contact.phone}</td>
                    <td>
                        <button type="button" class="edit-btn">Edit</button>
                        <button type="button" class="delete-btn">Delete</button>
                    </td>
                </tr>`
    }

    onEditClick(e){
        console.log(this.getElementId(e.target))
        this.config.onEdit && this.config.onEdit(this.getElementId(e.target))
    }

    onDeleteClick(e){
        this.config.onDelete && this.config.onDelete(this.getElementId(e.target))
    }

    getElementId(el){
        return $(el).closest('.contact-row').data('id');
    }
}