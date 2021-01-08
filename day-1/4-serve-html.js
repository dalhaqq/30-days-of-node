//day-1/4-serve-html.js

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log("Port Number : 3000");
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.readFile('index.html', (err, data) => {
        if (err)
            throw err;
        console.log("Operation success");
        res.end(data);
    });
}).listen(3000);