'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpUglify = require('gulp-uglify');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');



sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('hw1.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function() {
    gulp.watch('hw1.scss', ['sass']);
});

gulp.task('uglify', function() {
    gulp.src('hw1.js') // 指定要處理的原始 JavaScript 檔案目錄
        .pipe(gulpUglify()) // 將 JavaScript 做最小化
        .pipe(gulp.dest('./')); // 指定最小化後的 JavaScript 檔案目錄
});

gulp.task('babel', () =>
    gulp.src('hw1.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify-css', 'uglify', 'babel', 'sass', 'sass:watch']);