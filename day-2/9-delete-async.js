//day-2/9-delete-async.js

var fs = require('fs');

fs.unlink('toDelete.txt', (err) => {
    if (err)
        throw err;
    
    console.log('File deleted successfully');
})