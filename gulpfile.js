/*
* @Author: Marte
* @Date:   2018-09-28 17:26:01
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-28 20:42:50
*/

var gulp = require('gulp'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano'),
    concat = require("gulp-concat"),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    bs = require('browser-sync').create();


//less编译 压缩 合并
gulp.task('style',function(){
        gulp.src(['src/styles/*.less','!src/styles/_*.less'])
            .pipe(less())
            .pipe(cssnano())
            .pipe(gulp.dest('dist/styles'));
    })
//js合并 压缩混淆
gulp.task('script',function(){
        gulp.src('src/scripts/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/script'));
    })

//图片复制
gulp.task('image',function(){
        gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'));
    })

//html压缩
gulp.task('html',function(){
        gulp.src('src/index.html')
        .pipe(htmlmin({
            collapseWhitespace:'ture',
            removeComments:true
                }))
        .pipe(gulp.dest('dist'))
    })


gulp.task('serve',function(){
        bs.init({
                server:'./dist/',
                index:'index.html',
                port:3306,
            })
        bs.watch('index.html',bs.reload());
    })