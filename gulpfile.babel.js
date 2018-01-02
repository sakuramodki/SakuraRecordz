import gulp from 'gulp';
import babel from 'gulp-babel';
import connect from 'gulp-connect-php';
import browserSync from 'browser-sync';
import path from 'path';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// build task (sripts)
gulp.task('scripts', () => {
  gulp.src('src/scripts/main.js')
    .pipe($.webpack({
      output: {
        filename: 'main.bundle.js'
      },
      module: {
        rules: [{
          test: /\.js$/,
          use: [{
            loader: 'babel-loader',
            options: { }
          }],
        }],
      },
    }))
    .pipe(gulp.dest('./assets/'))
});

// build tasks (styles)
gulp.task('sass', () => {
  gulp.src(`src/styles/**/*.scss`)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
});

gulp.task('less', () => {
  gulp.src(`src/styles/**/*.less`)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('assets'));
});

gulp.task('styles', ['sass', 'less']);

// build task (all)
gulp.task('build', ['scripts', 'styles']);

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
