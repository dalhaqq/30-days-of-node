//day-2/7-rename-async.js

var fs = require('fs');

fs.rename('message.txt', 'data.txt', (err) => {
    if(err)
        throw err;
    console.log('File renamed successfully');
});

console.log('Asynchronously');