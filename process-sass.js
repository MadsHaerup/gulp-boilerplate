var { src, dest } = require("gulp");
var { init, write } = require("gulp-sourcemaps");
var cleanCss = require("gulp-clean-css");
var { reload } = require("gulp-connect");
var sass = require("gulp-sass");

function processSass() {
    return src("./src/sass/**/*.scss")
        .pipe(init()) //initialisere sourcemaps
        .pipe(sass())//kører sass
        .pipe(cleanCss({ compatibility: "ie9" })) //minify css
        .pipe(write("."))//. = samme mappe som dest
        .pipe(dest("./dist/assets/css"))  //gulp lave assets og css mappe
        .pipe(reload());
}

module.exports = processSass;