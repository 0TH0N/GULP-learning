'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('frontend/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('public/css'));
})