const { src, dest, series, parallel, watch } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserify = require('gulp-browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
const rigger = require('gulp-rigger');

function html() {
    return src('src/pages/**/index.html')
        .pipe(rigger())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('build'))
        .pipe(browserSync.stream());
}
function css() {
    return src('src/styles/style.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(rename('main.css'))
        .pipe(dest('build'))
        .pipe(browserSync.stream());
}
function js() {
    return src('src/js/main.js')
        .pipe(browserify({ transform: [babelify.configure({ presets: ['@babel/preset-env'] })] }))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(rename('main.bundle.js'))
        .pipe(dest('build'))
        .pipe(browserSync.stream());
}
function images() {
    return src('src/images/**')
        .pipe(imagemin())
        .pipe(dest('build/images'))
        .pipe(browserSync.stream());
}
function fonts() {
    return src('src/fonts/*')
        .pipe(dest('build/fonts'))
        .pipe(browserSync.stream());
}
function clean(){
    return del(['./build/*']);
}
function dev(){
    browserSync.init({
        server: './build'
    });
    watch('src/pages/**/*.html', html);
    watch('src/styles/**/*.scss', css);
    watch('src/js/**/*.js', js);
    watch('src/images/*', images);
    watch('src/fonts/*', fonts);
}
function build(){
    return series(clean, parallel(js, css), images, fonts, html);
}
exports.build = build();
exports.dev = series(clean, build(), dev);