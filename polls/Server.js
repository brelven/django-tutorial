var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1><b>Hello World</h1></b>\n');
}).listen(1337, "127.0.0.1");

