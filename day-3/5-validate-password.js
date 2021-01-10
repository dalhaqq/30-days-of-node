//day-3/5-validate-password.js

var password = 'Abdalhaqq@2002';
var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

var res = password.match(pattern);
if (res){
    console.log("Valid Password");
}else{
    console.log("Not a valid password");
}