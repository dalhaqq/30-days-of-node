//day-1/7-serve-mp3.js

var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    console.log('Port Number : 3000');
    fs.stat('audio.mp3', (err, stats) => {
        if(err){
            if(err.code==='ENOENT'){
                res.end("Its a 404");
            }else{
                res.writeHead(200, {"Content-Type":"application/json"});
                let error_res = {
                    status : 'error',
                    msg : err
                }
                res.end(JSON.stringify(error_res));
            }
        }else{
            res.writeHead(200, {'Content-Type':'audio/mp3'});
            var rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(res);
        }
    })
}).listen(3000);