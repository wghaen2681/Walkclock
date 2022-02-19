// define function variable -- start
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass')(require('sass'));
// define function variable -- end


// for pug -- start 
gulp.task('pug', function() {
  return gulp
    .src('pug/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./html'))
})
// for pug -- end


// for sass -- start 
gulp.task('sass', function() {
  return gulp
    .src('./sass/*.sass') // define source 
    .pipe(sass().on('error', sass.logError)) // handling error
    .pipe(gulp.dest('./css')); // define destination
})
// for sass -- end


// for excecution -- start
gulp.task('watch', async function() {
  gulp.watch('pug/*', gulp.series('pug', 'sass'))
})

gulp.task('default', gulp.parallel('watch'))
// for excecution -- end