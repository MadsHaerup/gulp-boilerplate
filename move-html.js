var { src, dest } = require("gulp"); 
var { reload } = require("gulp-connect"); //{ } = kan fjerne connect foran reload "connect.reload"
var { init, write } = require("gulp-sourcemaps"); //{ } = kan fjerne sourcemaps foran init og write "sourcemaps.init"
var htmlmin = require("gulp-htmlmin");
var rename = require("gulp-rename");

function moveHTML() {
    return src("./src/html/**/*.html")
        .pipe(init())
        .pipe(htmlmin({ collapseWhitespace: true }))

        .pipe(rename(function (path) {
            if (path.basename != "index") {//hvis filen ikke hedder index
                path.dirname = path.dirname + "/" + path.basename; //så skal den ligge inde i en mappe der hedder det basename hedder
                path.basename = "index"; //omdøber filnavnet til index
            } 
          }))
        
        .pipe(write("."))
        .pipe(dest("./dist"))  //dest = destination, hvor skal filen spyttes hen index html skal ligge i roden
        .pipe(reload());
}

module.exports = moveHTML;