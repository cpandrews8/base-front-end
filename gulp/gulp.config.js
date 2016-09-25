module.exports = function(){
	var path = require('path');
	var parentPath = path.join(__dirname, '../');
	var testPath = parentPath + 'test/';

	var specs = testPath + '**/*.spec.js';
	var reports = parentPath + 'reports/';

	var config = {
		parentPath: parentPath,
		reportsPath: reports,
		testPath: testPath
	};

	config.karma = getKarmaOptions();

	return config;

	function getKarmaOptions(){

		var options = {
			karmaConf: parentPath + '/karma.conf.js',
			files: [].concat(
				parentPath + 'node_modules/sinon/lib/sinon/*.js',
				specs
			),
			exclude:[]
		};
		return options;
	}
};