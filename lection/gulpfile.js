const {series, src, dest, watch} = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require("gulp-babel");

function copyHtml(){
    return src('./src/index.html')
        .pipe(dest('./dist'));

}

function copyVendorJS(){
    return src(['./node_modules/jquery/dist/jquery.min.js',
                './node_modules/simplelightbox/dist/simple-lightbox.jquery.min.js'
                ])
            .pipe(concat('vendors.js'))
            .pipe(dest('./dist'))
}
function copyVendorCss(){
    return src(['./node_modules/simplelightbox/dist/simple-lightbox.css'
                ])
            .pipe(concat('vendors.css'))
            .pipe(dest('./dist'))
}

function copyJs(){
    return src('./src/**/*.js')
            .pipe(babel())
            .pipe(concat('app.js'))
            .pipe(uglify())
            .pipe(rename({extname: '.min.js'}))
            .pipe(dest('./dist'))
}

function copyCss(){
    return src('./src/**/*.css')
            .pipe(concat('styles.css'))
            .pipe(dest('./dist'))
}

function cleanDist(){
    return src('./dist', {read: false})
        .pipe(clean());
}

function watchFiles(){
    watch('./src/**/*.js', function rebuild() {
        return copyJs();
    });
    watch('./src/**/*.css', function rebuild() {
        return copyCss();
    });
}


module.exports = {
    build: series(cleanDist, copyHtml,copyCss, copyJs, copyVendorJS, copyVendorCss),
    serve: series(cleanDist, copyHtml,copyCss, copyJs, copyVendorJS, copyVendorCss, watchFiles)
}