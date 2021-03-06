//day-1/3-serve-string.js

var http = require('http');

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world!");
    response.end();
});

server.listen(port, host, (error) => {
    if(error) {
        return console.log('Error occured : ', error );
    }

    console.log('Server running on ' + host + ':' + port);
});