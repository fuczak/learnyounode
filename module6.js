var fs = require('fs');
var path = require('path');

module.exports = function (directory, filter, callback) {
	//console.log('module function init');
	fs.readdir(directory, function (err, list) {
		//console.log('module readdir completed')
		if (err)
			return callback(err)
		//console.log('modeule readdir no error')
		list = list.filter(function (file) {
			//console.log('module list filter applied')
			return path.extname(file) === '.' + filter
		})
		//console.log('module callback with null')
		callback(null, list)		
	})
};