var net = require('net')
var strftime = require('strftime')

function mySolution() {
	var server = net.createServer(function (socket) {
		socket.end(strftime('%F %H:%M', new Date())+'\n')
	})
	server.listen(process.argv[2])
}

function officialSolution() {
	function zeroFill(i) {
		return (i < 10 ? '0' : '') + i
	}

	function now() {
		var d = new Date()
		return d.getFullYear() + '-'
			+ zeroFill(d.getMonth() + 1) + '-'
			+ zeroFill(d.getDate()) + ' '
			+ zeroFill(d.getHours()) + ':'
			+ zeroFill(d.getMinutes())
	}

	var server = net.createServer(function (socket) {
		socket.end(now() + '\n')
	})

	server.listen(Number(process.argv[2]))
}

//mySolution()
officialSolution()