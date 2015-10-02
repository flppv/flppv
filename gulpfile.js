var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['styles', 'templates'], function () {
  browserSync.init({
      server: {
        baseDir: './'
      },
      browser: 'google chrome'
  });

  gulp.watch('src/styles/**/*.sass', ['styles']);
  gulp.watch('src/**/*.jade', ['templates']);
});

gulp.task('styles', function () {
  gulp.src('src/styles/*.sass')
    .pipe(plumber())
    .pipe(sass({ outputStyle : 'expanded' }))
    .pipe(autoprefixer({ browsers: ['last 3 version'] }))
    .pipe(gulp.dest('./'))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(browserSync.stream())
    .pipe(gulp.dest('./'));
});

gulp.task('templates', function () {
  gulp.src('src/*.jade')
    .pipe(plumber())
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('normalize', function () {
  gulp.src('bower_components/normalize-css/normalize.css')
    .pipe(gulp.dest('./'));
});

gulp.task('clean', function () {
  gulp.src('main.css', { read: false })
    .pipe(clean());
  gulp.src('main.min.sass', { read: false })
    .pipe(clean());
  gulp.src('main.sass', { read: false })
    .pipe(clean());
});


gulp.task('default', ['serve', 'normalize', 'clean']);