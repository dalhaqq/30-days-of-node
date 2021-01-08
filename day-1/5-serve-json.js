//day-1/5-serve-json.js

var http = require('http');
console.log('Server will listen at : http://127.0.0.1:3000');
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"application/json"});
    let json_res = {
        status : 200,
        message : 'success',
        result : ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        code : 2000
    };
    console.log("Server running");
    res.end(JSON.stringify(json_res));
}).listen(3000);