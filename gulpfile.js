// Include gulp & friends.
var gulp = require('gulp'),
	less = require('gulp-less'),
	prefix = require('gulp-autoprefixer'),
	plumb = require('gulp-plumber'),
	minify = require('gulp-minify-css')
	concat = require('gulp-concat'),
	rename = require('gulp-rename');

/*
	in  = Base LESS file.
	out = Folder with CSS.
*/ 
var lessOpts = {
	'in':'less/style.less',
	'out':'css'
};

// LESS task.
gulp.task('less', function(){
	return gulp.src(lessOpts.in)

			.pipe(less())
			.pipe(prefix({
				browsers: ['> 5%'],
				cascade: true
			}))
			.pipe(rename('style.css'))
			.pipe(gulp.dest('css'))
			.pipe(minify())
			.pipe(concat('style.min.css'))
			.pipe(gulp.dest('css'));	
});

gulp.task('watch', function(){
	gulp.watch('less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);