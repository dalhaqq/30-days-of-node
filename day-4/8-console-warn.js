//day-4/8-console-warn.js

var x = 10;
var y = 20;
var result = x/y;

if((result % 1) == 0){
    console.log("Result : %d", result);
}else{
    console.warn("Warning : Decimal number");
}