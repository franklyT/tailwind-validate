var gulp = require("gulp");
var postcss = require("gulp-postcss");
var concat = require("gulp-concat");
var clean = require("gulp-clean-css");

gulp.task("default", function () {
  return gulp
    .src("src/tailwind/root.css")
    .pipe(postcss([require("tailwindcss"), require("autoprefixer")]))
    .pipe(concat("root.min.css"))
    .pipe(clean())
    .pipe(gulp.dest("dist/CSS"));
});
