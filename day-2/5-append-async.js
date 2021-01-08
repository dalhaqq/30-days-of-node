//day-2/5-append-sync.js

var fs = require('fs');
toAppend = "This data will be appended asynchronously";
fs.appendFile('message.txt', toAppend, (err) => {
    if(err)
        throw err;
    
    console.log("Appended successfully");
});