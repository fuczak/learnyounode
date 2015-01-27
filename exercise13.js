var http = require('http')
var url = require('url')

function mySolution() {
	var server = http.createServer(function (req, res) {
		var request = url.parse(req.url, true)
		var time = new Date(request.query.iso)
		
		if(request.pathname == '/api/parsetime') {
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify({
				"hour": time.getHours(),
				"minute": time.getMinutes(),
				"second": time.getSeconds()
			}))		
		} else if(request.pathname == '/api/unixtime') {
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify({
				"unixtime": time.getTime()
			}))
		}
	})

	server.listen(process.argv[2])
}

function officialSolution() {
		function parsetime (time) {
	  		return {
			    hour: time.getHours(),
			    minute: time.getMinutes(),
			    second: time.getSeconds()
	  		}
		}

		function unixtime (time) {
			return { unixtime : time.getTime() }
		}

		var server = http.createServer(function (req, res) {
	  		var parsedUrl = url.parse(req.url, true)
	  		var time = new Date(parsedUrl.query.iso)
	  		var result

	  		if (/^\/api\/parsetime/.test(req.url))
	    		result = parsetime(time)
	  		else if (/^\/api\/unixtime/.test(req.url))
	    		result = unixtime(time)

	  		if (result) {
	    		res.writeHead(200, { 'Content-Type': 'application/json' })
	    		res.end(JSON.stringify(result))
	  		} else {
	    		res.writeHead(404)
	    		res.end()
	  		}
		})
		server.listen(Number(process.argv[2]))
}

mySolution();
//officialSolution();