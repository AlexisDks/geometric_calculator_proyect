const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  server = require("browser-sync").create();

const SRC_PATH = "src/";
const DEST_PATH = "docs/";

gulp.task("pug", () => {
  return gulp
    .src(`${SRC_PATH}*.pug`)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(`${DEST_PATH}`));
});

gulp.task("sass", () => {
  return gulp
    .src(`${SRC_PATH}scss/*.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(`${DEST_PATH}assets/css`));
});

gulp.task("default", () => {
  server.init({
    server: `${DEST_PATH}`,
  });
  gulp
    .watch(`${SRC_PATH}*.pug`, gulp.series("pug"))
    .on("change", server.reload);
  gulp
    .watch(`${SRC_PATH}scss/**/*.scss`, gulp.series("sass"))
    .on("change", server.reload);
});
