// Opgave 6.1
let talrække = [0, 12, 0, 22, 300, 4, 5];
let sum = 0;
for (let i = 0; i < talrække.length; i++){
    sum += talrække[i];
}
console.log(sum);


// Opgave 6.2
let talrække2 = [0, 12, 0, 22, 300, 4, 5];
talrække2.forEach((tal) => {
    console.log(tal);
})


// Opgave 6.3
let talrække3 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
let talrække4 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122];

function talIndex (talrækkeNummer){
    for (let index in talrækkeNummer){
        let højesteTalTalrække = Math.max(...talrækkeNummer);
        let højesteTalIndexTalrække = talrækkeNummer.indexOf(Math.max(...talrækkeNummer));
        if (talrækkeNummer.length === Number(index)+1) {
            console.log(`Højeste tal: ${højesteTalTalrække} Index: ${højesteTalIndexTalrække}`);
        }
    }
}
talIndex(talrække3); talIndex(talrække4);


// Opgave 6.4
let talrække5 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
let antalAf12Taller = 0;
for (let index in talrække5) {
    if (talrække5[index] === 12) {
        antalAf12Taller++;
    }
    if (talrække5.length === Number(index)+1) {
        console.log(`Antal 12 taller: ${antalAf12Taller}`);
    }
}


// Opgave 6.5
let talrække6 = [0, -12, 0, -22, -300, 4, 5, -12, 12, -212, 12]
let antalPositiveTal = 0;
for (let index in talrække6){
    if (talrække6[index] > 0){
        antalPositiveTal++;
    }
    if (talrække6.length === Number(index)+1) {
        console.log(`Antal positive tal: ${antalPositiveTal}`);
    }
}


// Opgave 6.6
let talrække7 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];
function gennemsnit(talrækkeListe){
    let talrækkeSum = 0;
    let talrække7Gennemsnit = 0;
    for (let index in talrækkeListe) {
        talrækkeSum += talrækkeListe[index];
        if (talrækkeListe.length === Number(index)+1) {
            talrække7Gennemsnit = talrækkeSum / talrækkeListe.length
        }
    }
    console.log(talrække7Gennemsnit);
    return talrække7Gennemsnit;
}
gennemsnit(talrække7);


// Opgave 6.7
let talrække8 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];
function varians(talrækkeliste2){
    let middelvaerdi = gennemsnit(talrækkeliste2);
    let varianspart = 0;
    for (let index in talrækkeliste2){
        varianspart += ((talrækkeliste2[index]-middelvaerdi)**2);
    }
    let varians = varianspart / talrækkeliste2.length;
    console.log(`Varians er: ${varians}`);
}
varians(talrække8);


// Opgave 6.8
const person1 = {
    firstName: "Anders",
    lastName: "Andersen",
    age: 29,
    eyeColor: "grøn"
};
const person2 = {
    firstName: "Mads",
    lastName: "Madsen",
    age: 32,
    eyeColor: "blå"
};
const person3 = {
    firstName: "Hans",
    lastName: "Hansen",
    age: 55,
    eyeColor: "brun"
};
function person (person){
    let entries = Object.entries(person);
    if (person.age > 30 && (person.eyeColor === "blå" || person.eyeColor === "grøn" || person.eyeColor === "rød")){
        console.log(person.firstName, person.lastName);
    } else{
        console.log("Ingen personer fundet!");
    }
}
person(person2);