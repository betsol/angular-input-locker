var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('clean', function () {
    gulp.src('dist/', { read: false })
        .pipe(clean())
    ;
});

gulp.task('default', function () {
    gulp.src('src/angular-input-locker.js')
        .pipe(uglify())
        .pipe(rename('angular-input-locker.min.js'))
        .pipe(gulp.dest('dist'))
        .on('error', gutil.log)
    ;
    gulp.src('src/angular-input-locker.js')
        .pipe(gulp.dest('dist'))
        .on('error', gutil.log)
    ;
});