// Opgave 5.1
function myFunction() {
    console.log("Hello World")
   }
myFunction();


// Opgave 5.2
function addNumbers(a, b){
    return a + b;
}
let result = addNumbers(3, 18);
console.log(result);


// Opgave 5.3
function trueFalse(x){
    if (x.toLowerCase() === "ja"){
        return console.log("True");
    } else {
        return console.log("False");
    }
}
trueFalse("Ja");


// Opgave 5.4
const password = "AbCdEf"
function pswdCheck(pswd){
    if (pswd === password){
        return console.log("True");
    } else {
        return console.log("False");
    }
}
pswdCheck("AbCdEf")


// Opgave 5.5
let userName = "Mags";

function checkUserName(user){
    if (user.toLowerCase() === userName.toLowerCase()){
        return console.log("True");
    } else {
        return console.log("False");
    }
}
checkUserName("mags")