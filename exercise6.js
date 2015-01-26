var module = require('./module6.js');
var directory = process.argv[2];
var filter = process.argv[3];

module(directory, filter, function (err, list) {
	if (err)
		return console.error('There was an error: ', err)

	list.forEach(function (file) {
		console.log(file)
	})
});