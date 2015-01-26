var http = require('http')
var url = require('url')

function mySolution() {
	var server = http.createServer(function (req, res) {
		if(req.method != 'GET')
			return res.end('I only accept GET requests')

		//todo
	})

	server.listen(process.argv[2])
}

mySolution();