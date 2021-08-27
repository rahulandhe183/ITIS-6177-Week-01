var http = require('http');

var server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text');
    res.end('Hello Git');
});

server.listen(3000);

console.log('Node.js web server at port 8000..')