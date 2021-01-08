//day-2/10-delete-sync.js

var fs = require('fs');

fs.unlinkSync('toDelete.txt');
console.log('File deleted successfully');