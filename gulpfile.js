var del    = require('del');
var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil  = require('gulp-util');

gulp.task('clean', function (callback) {
    del(['dist'], callback);
});

gulp.task('build', function () {
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

// @todo: make sure build is called AFTER the clean.
gulp.task('default', ['clean', 'build']);
