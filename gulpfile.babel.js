import gulp from 'gulp';
import babel from 'gulp-babel';
import connect from 'gulp-connect-php';
import browserSync from 'browser-sync';

import fontAwesome from 'node-font-awesome';
import path from 'path';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();
import cleanCSS from 'gulp-clean-css';


import webpackStream from 'webpack-stream';
import webpack from 'webpack';
const webpackConfig = require("./webpack.config");

// build task (fonts)
gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest('./fonts'));
});

// build task (sripts)
gulp.task('scripts', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe($.uglify())
    .pipe(gulp.dest('assets'));
});

// build tasks (styles)
gulp.task('sass', () => {
  gulp.src(`src/styles/*.scss`)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: [
        '.',
         fontAwesome.scssPath,
      ]
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
});

gulp.task('less', () => {
  gulp.src(`src/styles/*.less`)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.less({
      paths: [
        path.join(__dirname, 'less', 'includes'),
        './node_modules/bootstrap-less',
         fontAwesome.lessPath,
      ]
    }))
    .pipe($.autoprefixer())
    .pipe(cleanCSS())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('assets'));
});

gulp.task('styles', ['sass', 'less']);

// build task (all)
gulp.task('build', ['scripts', 'styles', 'fonts']);

// watch
gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/styles/**/*.less', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
});

// browserSync
gulp.task('start', ['watch'], () => {
  connect.server({
    port: 8001,
    stdio: 'ignore',
  }, () => {
    browserSync({
      proxy: 'localhost:8001',
    });
  });

  gulp.watch([
    '**/*.html',
    '**/*.php',
    'assets/**/*.css',
    'assets/**/*.js'
  ]).on('change', browserSync.reload);
});

// defailt
gulp.task('default', ['build', 'start']);
