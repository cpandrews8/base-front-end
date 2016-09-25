var gulp = require('gulp');
var config = require(__dirname + '/gulp.config')();
var $ = require('gulp-load-plugins')();

gulp.task('test', function(done) {
	startTests(true, done);
});

gulp.task('autotest', function(done) {
	startTests(false, done);
});

function startTests(singleRun, done) {
	var karmaFail = 1;
	var Karma = require('karma').Server;

	new Karma({
		configFile: config.karma.karmaConf,
		exclude: config.karma.exclude,
		singleRun: !!singleRun
	}, karmaCompleted).start();

	function karmaCompleted(karmaResult) {
		if (karmaResult == karmaFail) {
			done('karma: test failed with code' + karmaResult);
		} else {
			done();
		}
	}
}