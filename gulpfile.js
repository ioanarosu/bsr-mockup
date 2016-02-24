var gulp = require('gulp');
var fileInclude = require('gulp-file-include');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('html', function(){
  gulp.src('src/index.html')
  .pipe(
    fileInclude({indent: true})
  ).pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});

gulp.task('sass', function(){
  gulp.src('src/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'))
  .pipe(connect.reload());
});

gulp.task('js', function(){
  gulp.src('src/js/*.js')
  .pipe(gulp.dest('./dist/js'))
  .pipe(connect.reload());
});

gulp.task('images', function(){
  gulp.src('src/img/*.*')
  .pipe(gulp.dest('./dist/img'))
  .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('server', function(){
  connect.server({
    root: 'dist',
    livereload: true
   });
});

gulp.task('default', ['html', 'sass', 'js', 'images', 'server', 'watch']);
