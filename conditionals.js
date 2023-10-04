// Conditionals

// Opgave 2.1
let tal = 10;
if (tal % 2 == 0){
    console.log("Et lige tal");
} else{
    console.log("Et ulige tal");
}

// Opgave 2.2
let tal2 = 11;   
if (tal2 % 5 == 0){
    console.log("5 går op i " + tal2);
} else{
    console.log("5 går ikke op i " + tal2);
}

// Opgave 2.3
let tal3 = Math.floor(Math.random()*101);
if (tal3 % 5 == 0){
    console.log("5 går op i " + tal3);
} else{
    console.log("5 går ikke op i " + tal3);
}

// Opgave 2.4
let a = 50;
let b = 33;
let c = 60;
if (a > b && a > c){
    console.log("A er størst");
} else if (b > a && b > c){
    console.log("B er størst");
} else {
    console.log("C er størst");
}

// Opgave 2.5
let temp = 40;
if (temp <= 0){
    console.log("Det er frostvejr");
} else if (temp >= 1 && temp <= 10){
    console.log("Det er meget koldt");
} else if (temp >= 11 && temp <= 20){
    console.log("Det er koldt");
} else if (temp >= 21 && temp <= 30){
    console.log("Det er normalt vejr");
} else if (temp >= 31 && temp <= 40){
    console.log("Det er varmt");
} else if (temp >= 41){
    console.log("Det er meget varmt");
}

// Opgave 2.6
let dag = 7;
if (dag == 1){
    console.log("Mandag");
} else if (dag == 2){
    console.log("Tirsdag");
} else if (dag == 3){
    console.log("Onsdag");
} else if (dag == 4){
    console.log("Torsdag");
} else if (dag == 5){
    console.log("Fredag");
} else if (dag == 6){
    console.log("Lørdag");
} else if (dag == 7){
    console.log("Søndag");
} else {
    console.log("Tallet er ikke en ugedag");
}