var expect = chai.expect;

describe('Hello World', function(){
	it('should print Hello World to the console', function(){
		var HW = 'Hello World';
		console.log(HW);
		expect(HW).to.equal('Hello World');
	});
});