var gulp = require('gulp');
var gulpTaskPath = './gulp/';
var config = require(gulpTaskPath + '/gulp.config')();
var fs = require('fs');
var browserSync = require('browser-sync').create('rec-server');
var gulpRequires = new RegExp('js$');
var $ = require('gulp-load-plugins')({
	lazy: true
});

fs.readdirSync(gulpTaskPath)
	.forEach(function(file){
		if(gulpRequires.test(file)){
			require(gulpTaskPath +file);
		}
	});

gulp.task('serve', function(){
	browserSync.init({
		server: true,
		startPath: 'index.html'
	});
});

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);