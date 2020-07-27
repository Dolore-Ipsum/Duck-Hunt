const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

exports.default = () => (
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
);
        

function style () {
    return gulp.src('./scss/**/*.scss') 
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
}
}) 
    gulp.watch ('./scss/**/*.scss', style);
    gulp.watch ('./*.html').on('change', browserSync. reload);
}

exports.style = style;
exports.watch = watch;