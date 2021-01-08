//day-2/8-rename-sync.js

var fs = require('fs');
fs.renameSync('data.txt', 'message.txt');
console.log('File renamed successfully');

console.log('Synchronously');