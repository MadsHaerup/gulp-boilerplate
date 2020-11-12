var {dest, src} = require('gulp');
var {init, write} = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

function processJs() {
    return src("./src/js/**/*.js")
    .pipe(init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('all.js'))
    .pipe(write('.'))
    .pipe(dest("./dist/assets/js"))  //gulp lave assets og css mappe
}

module.exports = processJs;