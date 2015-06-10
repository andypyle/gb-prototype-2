// Include gulp & friends.
var gulp = require('gulp'),
	less = require('gulp-less'),
	prefix = require('gulp-autoprefixer'),
	plumb = require('gulp-plumber'),
	minify = require('gulp-minify-css')
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload')
	gutil = require('gulp-util');


var lessOpts = {
	'in':'less/style.less',
	'out':'css'
};

// LESS task.
gulp.task('less', function(){
	return gulp.src(lessOpts.in)
			.pipe(plumb())
			.pipe(less())
			.on('error', function(err){
				gutil.log(err);
				this.emit('end');
			})
			.pipe(prefix({
				browsers: [
                        '> 1%',
                        'last 2 versions',
                        'firefox >= 4',
                        'safari 7',
                        'safari 8',
                        'IE 8',
                        'IE 9',
                        'IE 10',
                        'IE 11'
                    ],
				cascade: true
			}))
			.pipe(rename('style.css'))
			.pipe(gulp.dest('css'))
			.pipe(minify())
			.pipe(concat('style.min.css'))
			.pipe(gulp.dest('css')).on('error', gutil.log)
			.pipe(livereload({ start: true }));
});

gulp.task('html', function(){
	return gulp.src('index.html')
		.pipe(livereload({ start: true }));
});

gulp.task('watch', function(){
	gulp.watch(['less/**/*.less', 'index.html'], ['less','html']);
});

gulp.task('default', ['less','html', 'watch']);