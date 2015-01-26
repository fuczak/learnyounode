var http = require('http')
var map = require('through2-map')

function mySolution() {
	var server = http.createServer(function (req, res) {
		//POST-check wasnt in my solution
		if(req.method != 'POST')
			return res.end('I accept only POST requests.')
		
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase()
		})).pipe(res)
	})

	server.listen(process.argv[2])
}

mySolution()