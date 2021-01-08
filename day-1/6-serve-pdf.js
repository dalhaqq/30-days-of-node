//day-1/6-serve-pdf.js

var http = require('http');
var fs = require('fs');

console.log('Server will listen at : http://127.0.0.1:3000');
http.createServer((req, res) => {
    console.log('Port number : 3000');
    fs.readFile('index.pdf', (err, data) => {
        if(err){
            res.writeHead(200, {"Content-Type":"application/json"});
            let error_res = {
                status : 'error',
                msg : err
            }
            res.end(JSON.stringify(error_res));
        }else{
            res.writeHead(200, {"Content-Type":"application/pdf"});
            res.write(data);
            res.end();
        }
    });
}).listen(3000);