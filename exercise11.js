var http = require('http')
var fs = require('fs')

function mySolution() {
	var server = http.createServer(function (request, response) {
		//next line was not in my solution
		response.writeHead(200, { 'content-type': 'text/plain' })
		fs.createReadStream(process.argv[3]).pipe(response)
	})

	server.listen(process.argv[2])

}

mySolution()
