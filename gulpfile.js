'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/*.sass', ['sass']);
});

gulp.task('default', ['sass:watch']);

