const gulp = require('gulp');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const zip = require('gulp-zip');

function distStyles() {
  return gulp
    .src('src/scss/main.scss')

    .pipe(
      sass({
        outputStyle: 'nested',
        precision: 10,
        includePaths: ['.', './node_modules/'],
        onError: console.error.bind(console, 'Sass error:'),
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(rename('yale-ui.css'))
    .pipe(gulp.dest('./dist/css'))

    .pipe(csso())
    .pipe(rename('yale-ui.min.css'))
    .pipe(gulp.dest('./dist/css'));
}

function moveScss() {
  return gulp.src('./src/scss/**').pipe(gulp.dest('./dist/scss'));
}

function zippit() {
  return gulp
    .src('./dist/**')
    .pipe(zip('ui-component-library.zip'))
    .pipe(gulp.dest('./docs/assets/distribution'));
}

async function compile() {
  await gulp.series([distStyles, moveScss, zippit])();
}

exports.default = compile;
