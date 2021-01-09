//day-3/4-validate-hex.js

var hex = '00ffcc';
var pattern = /^[a-fA-F0-9]+$/g;

var res = hex.match(pattern);

if(res) console.log('Valid hexadecimal number');
else console.log('Not a valid hex');