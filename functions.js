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
    if (x === "Ja"){
        return console.log("True");
    } else {
        return console.log("False");
    }
}
trueFalse("Ja");