var {watch, task, parallel, series} = require("gulp"); //kan fjerne gulp. foran watch/task/parallel
var {server} = require('gulp-connect'); //henter biblioteket 

//importere funktionerne
var moveHTML = require("./move-html"); 
var processSass = require("./process-sass");


function watchEverything() {
   watch("./src/html/**/*.html", { //Kigger om der ændringer i filen
        ignoreInitial: false //udføre en task før der er sket en ændring
    },
       moveHTML); //referer til den som et callback
    
    watch("./src/sass/**/*.scss", {
        ignoreInitial: false
    }, processSass);
}

function serve() {
    return server({
        root: 'dist',
        livereload: true,
        port: 80
      });
}
task("default", parallel(serve, watchEverything)); //køre funktionen hver gang der er en ændring
task("build", series(moveHTML, processSass));