var module = require('./module6.js');
var directory = process.argv[2];
var filter = process.argv[3];

//console.log('executing module')
module(directory, filter, function (err, list) {
	//console.log('callback declared in exercise init')
	if (err)
		return console.error('There was an error: ', err)
	//console.log('callback declared in exercise no error')
	list.forEach(function (file) {
		//console.log('forEach log')
		console.log(file)
	})
});