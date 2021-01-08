//day-2/6-append-sync.js

var fs = require('fs');
toAppend = "This is appended synchronously";
fs.appendFileSync('message.txt', toAppend);
console.log('File appended successfully');