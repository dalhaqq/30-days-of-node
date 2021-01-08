//day-2/3-write-async.js

var fs = require('fs');
var toWrite = 'This is the content written using nodejs asynchronously';
fs.writeFile('message.txt', toWrite, (err) => {
    if (err)
        throw err;
    
    console.log('File written successfully');
});