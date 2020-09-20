class Accordeon {
    static CONTENT_CLASS = 'accordeon-content';
    static TITLE_CLASS = 'accordeon-title';
    static VISIBLE_CLASS = 'accordeon-visible';

    constructor(container) {
        this._container = container;
        console.log('Accordeon started');

        this.bindClasses();
        this.bindEventListener();
    }

    bindClasses() {
        const contentElements = this._container.querySelectorAll('.content');

        for (let i = 0; i < contentElements.length; i++) {
            contentElements[i].classList.add(Accordeon.CONTENT_CLASS);
        }

        const titleElements = this._container.querySelectorAll('.title');
        for (let i = 0; i < titleElements.length; i++) {
            titleElements[i].classList.add(Accordeon.TITLE_CLASS);
        }
    }

    bindEventListener() {
        this._container.addEventListener('click', (event) => {
            if (event.target.classList.contains(Accordeon.TITLE_CLASS)) {
                this.toggleItem(event.target.parentNode);
            }
        });
    }

    toggleItem(el) {
        if (this.isItemVisible(el)) {
            this.hideItem(el);
        } else {
            this.hideAll();
            this.showItem(el);
        }
    }

    hideItem(el) {
        el.classList.remove(Accordeon.VISIBLE_CLASS);
    }

    showItem(el) {
        el.classList.add(Accordeon.VISIBLE_CLASS);
    }

    isItemVisible(el) {
        return el.classList.contains(Accordeon.VISIBLE_CLASS);
    }

    hideAll() {
        Array.prototype.forEach.call(this._container.children, (item) => {
            this.hideItem(item);
        });
        // for (let i = 0; i < this._container.children.length; i++) {
        //     this.hideItem(this._container.children[i]);
        // }
    }
}
