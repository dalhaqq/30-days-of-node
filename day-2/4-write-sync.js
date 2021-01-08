//day-2/4-write-sync.js

var fs = require('fs');
var toWrite = 'Written synchronously';

fs.writeFileSync('message.txt', toWrite);
console.log('File written successfully');