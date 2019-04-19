const gulp = require("gulp");
const webser = require("gulp-webserver");
gulp.task("server", () => {
    gulp.src("./src")
        .pipe(webser({
            port: 8000,
            open: true,
            livereload: true
        }))
})
gulp.task("default", gulp.parallel("server"))