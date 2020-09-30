const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId={{id}}';

const ALBUM_ITEM_CLASS = 'album-item';

const albumsEl = document.querySelector('#albums');
const photosEl = document.querySelector('#photos');

const albumItemTemplate = document.querySelector('#albumItemTemplate')
    .innerHTML;
const photoItemTemplate = document.querySelector('#photoItemTemplate')
    .innerHTML;

albumsEl.addEventListener('click', onAlbumsClick);

init();

function init() {
    getAlbums().then(getFirstAlbumPhotos);
}

function getAlbums() {
    return fetch(ALBUMS_URL)
        .then((resp) => resp.json())
        .then((albumsList) => {
            renderAlbums(albumsList);
            return albumsList;
        });
}

function renderAlbums(data) {
    albumsEl.innerHTML = data
        .map((album) => generateAlbumHtml(album))
        .join('\n');
}

function generateAlbumHtml(album) {
    return albumItemTemplate
        .replace('{{id}}', album.id)
        .replace('{{title}}', album.title);
}

function getFirstAlbumPhotos(data) {
    if (data.length) {
        getPhotos(data[0].id);
    }
}

function getPhotos(albumId) {
    return fetch(getPhotosUrl(albumId))
        .then((resp) => resp.json())
        .then(renderPhotos);
}

function getPhotosUrl(albumId) {
    return PHOTOS_URL.replace('{{id}}', albumId);
}

function renderPhotos(data) {
    photosEl.innerHTML = data
        .map((photo) => generatePhotoHtml(photo))
        .join('\n');
}

function generatePhotoHtml(photo) {
    return photoItemTemplate
        .replace('{{url}}', photo.thumbnailUrl)
        .replace('{{title}}', photo.title);
}

function onAlbumsClick(e) {
    if (e.target.classList.contains(ALBUM_ITEM_CLASS)) {
        getPhotos(e.target.dataset.id);
    }
}
