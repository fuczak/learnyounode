var fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', function callback(err, data) {
	err? console.log('An error has occured') : console.log(data.split('\n').length-1);
});