const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function style() {
    return gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function css() {
    return gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function fonts() {
    return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(browserSync.stream());
}

function html() {
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

function images() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
}

function images_build() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./dist",
           index: "/index.html"
        }
    });
    gulp.watch('src/styles/**/*.scss', style);
    gulp.watch('src/css/**/*.css', css);
    gulp.watch('src/fonts/**/*', fonts);
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch('src/images/**/*', images);
}

function build() {
    style();
    css();
    fonts();
    html();
    scripts();
    images_build();
}

exports.style = style;
exports.watch = watch;
exports.build = build;