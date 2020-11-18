import $ from 'jquery';
import 'webpack-jquery-ui/dialog';

export default class FormView{
    constructor(config){
        this.config = config;
        this.$el = this.initView()
    }

    initView(){
        this.$form = $(`<form id="contactForm">
                            <fieldset>
                                <label for="name">Name</label>
                                <input
                                    type="hidden"
                                    name="id"
                                    id="id"
                                    value=""
                                    class="u-full-width contact-input"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value=""
                                    class="u-full-width contact-input"
                                />
                                <label for="surname">Surname</label>
                                <input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    value=""
                                    class="u-full-width contact-input"
                                />
                                <label for="phone">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value=""
                                    class="u-full-width contact-input"
                                />

                                <!-- Allow form submission with keyboard without duplicating the dialog button -->
                                <input
                                    type="submit"
                                    tabindex="-1"
                                    style="position: absolute; top: -1000px"
                                />
                            </fieldset>
                        </form>`)
                        .on('submit', () => {
                                e.preventDefault();
                                this.onSaveContact();
                            })
        
        this.$inputs = this.$form.find('.contact-input');

       return $(`<div id="dialogForm" title="Contact"></div>`).dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                Save: () => {
                    this.onSaveContact();
                    this.$el.dialog('close');
                },
                Cancel: () => this.$el.dialog('close'),
            },
            close: () => {
                this.resetForm();
            },
        })
        .append(
            this.$form
        );
        
    }

    openForm(contact){
        this.$inputs.each((i, el) => {
            el.value = contact[el.name];
        });

        this.$el.dialog('open');
    }

    resetForm(){
        this.$form[0].reset();
    }

    onSaveContact(){
        const obj = {};

        this.$form.serializeArray().forEach(({name, value}) => {
            obj[name] = value
        });

        this.config.onSave && this.config.onSave(obj)
    }
}