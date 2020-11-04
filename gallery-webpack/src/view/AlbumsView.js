import $ from 'jquery';

export default class AlbumsView{
    constructor(config){
        this.config = config;
        this.$el = this.initView()
    }

    initView(){
        return $('<div id="albums" class="albums three columns"></div>')
                    .on('click', '.album-item', (e) => this.config.onAlbumSelect($(e.target).data('id')));
    }

    renderList(list){
        this.$el.html(
            list.map(this.generateAlbumHtml)
                .join('\n')
        )
    }

    generateAlbumHtml({id, title}) {
        return `<div class="album-item" data-id="${id}">${title}</div>`;
    }
}