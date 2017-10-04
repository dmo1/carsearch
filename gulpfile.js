'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
//var eslint = require('gulp-eslint');
//var stylelint = require('gulp-stylelint');

var src = {css: 'src/css/sass/main.scss', js: 'src/js/**/*.js'};
var dest = {css: 'dist/css', js: 'dist/js'};

gulp.task('watch', function () {
    gulp.watch('src/css/sass/**/*.scss', ['css']);
    gulp.watch(src.js, ['js']);
});

gulp.task('css', function () {
    return gulp.src(src.css)
            .pipe(sass())
            .pipe(concat('main.min.css'))
            .pipe(autoprefix())
            .pipe(cssnano())
            .pipe(gulp.dest(dest.css));
});

gulp.task('js', function () {
    return gulp.src(src.js)
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(dest.js));
});




gulp.task('test', function (done) {
  var Karma = require('karma').Server;
  new Karma({
    configFile: __dirname + '/src/test/karma.conf.js',
    singleRun: true
  }, done).start();
});


/*
gulp.task('csslint', function () {
    return gulp
            .src(src.css)
            .pipe(stylelint({
                reporters: [
                    {formatter: 'string', console: true}
                ]
            }));
});
*/
