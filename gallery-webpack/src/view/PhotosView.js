import $ from 'jquery';

export default class PhotosView{
    constructor(){
        this.$el = this.initView();
    }

    initView(){
        return $('<div id="photos" class="photos nine columns"></div>')
    }

    renderList(list){
        this.$el.html(
            list.map((photo) => this.generatePhotoHtml(photo))
                .join('\n')
        )
    }

    generatePhotoHtml({thumbnailUrl, title}) {
        return `<img class="photo-item" src="${thumbnailUrl}" alt="${title}"/>`;
    }
}