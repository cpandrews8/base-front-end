var gulp = require('gulp');
var config = require(__dirname + '/gulp.config')();
var browserSync = require('browser-sync').create('rec-server');
var plato = require('plato');
var $ = require('gulp-load-plugins')();

gulp.task('report', function () {
    plato.inspect(reportingFiles, config.parentPath + '/reports', {}, afterReport);
});

var reportingFiles = [config.parentPath + 'gulp/*.js', config.parentPath + 'test/*.js'];

function afterReport(){
    console.log('Done Reporting');
}

gulp.task('showreport', ['report'], function(){
	browserSync.init({
		server: true,
        port: 8888,
		startPath: 'reports/index.html'
	});
});