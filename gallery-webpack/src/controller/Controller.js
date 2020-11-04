import AlbumsCollection from "../model/AlbumsCollection";
import PhotosCollection from "../model/PhotosCollections";
import AlbumsView from "../view/AlbumsView";
import PhotosView from "../view/PhotosView";

export default class Controller{
    constructor($container){
        console.log('controller started')
        this.$container = $container;

        this.albumsView = new AlbumsView({
            onAlbumSelect: (id) => this.getAlbumPhotos(id)
        });
        this.photosView = new PhotosView({});

        this.$container
            .append(this.albumsView.$el)
            .append(this.photosView.$el);

        this.albumsCollection = new AlbumsCollection();
        this.photosCollection = new PhotosCollection();

        this.init();
    }

    async init(){
        // this.albumsCollection.getList()
        //     .then(() => {
        //         this.albumsView.renderList(this.albumsCollection.list)
        //         this.getAlbumPhotos(this.albumsCollection.list[0].id);
        //     }).catch((e) => {console.log(e)});

        await this.albumsCollection.getList();
        this.albumsView.renderList(this.albumsCollection.list)
        this.getAlbumPhotos(this.albumsCollection.list[0].id);
        
    }

    async getAlbumPhotos(albumId){
        await this.photosCollection.getPhotos(albumId);

        this.photosView.renderList(this.photosCollection.list)
                    
    }
}