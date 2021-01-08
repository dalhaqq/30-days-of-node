//day-3/1-find-string.js

var fs = require('fs');
var filename = 'data.txt';
var pattern = /man/gim;
fs.readFile(filename, (err, data) => {
    if(err) throw err;
    var str = data.toString();
    var matches = str.match(pattern);
    var len = matches.length;
    console.log("Occurrences of pattern in the string is : " + len);
})