//day-3/2-find-tags.js

var fs = require('fs');
var filename = 'data.html';
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
fs.readFile(filename, (err, data) => {
    if(err) throw err;
    var str = data.toString();
    var matches = str.match(pattern);
    var len = matches.length;
    console.log("Occurences: " + len);
});