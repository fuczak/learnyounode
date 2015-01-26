var fs = require('fs');
var path = require('path');

/* MY SOLUTION */
/*
fs.readdir(process.argv[2], function callback (err, list) {
	for(var i = 0; i<list.length; i++) {
		if(path.extname(list[i]) == '.' + process.argv[3]) {
			console.log(list[i])
		}
	}
});
*/

/* OFFICIAL SOLUTION */
/*
fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function(file) {
		if (path.extname(file) === '.' + process.argv[3])
			console.log(file);
	});
});
*/