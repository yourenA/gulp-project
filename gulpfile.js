/**
 * Created by Administrator on 2017/2/9.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    babel = require("gulp-babel"),
    sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
gulp.task('connect', function() {
    connect.server({
        port: 3001, //端口号，可不写，默认8000
        root: './dist', //当前项目主目录
        livereload: true //自动刷新
    });
});
gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});
gulp.task('sass', function() {
    sass('./src/sass/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});
gulp.task('watch', function() {
    gulp.watch('./src/sass/*.scss', ['sass']); //监控scss文件
    gulp.watch(['./src/*.html'], ['html']); //监控html文件
    gulp.watch(['./src/js/*.js'], ['js']); //监控js文件
});

gulp.task('default', ['connect', 'watch']);