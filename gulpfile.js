var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb){
	gulp.src('./project/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./project'));
	cb();
	// done();
});
// следит за изменениями
gulp.task('sass:watch', function(cb){
		gulp.watch('./project/**/*.scss',gulp.parallel('sass'));
	// done();
	cb();
});