//day-2/2-read-sync.js

var fs = require('fs');
var message = fs.readFileSync('message.txt');
console.log('Content : ' + message);