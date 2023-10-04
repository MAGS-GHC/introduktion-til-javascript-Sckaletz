// Opgave 4.1
byer = ["Randers", "Viborg", "Aarhus", "København"]
console.log(byer[1]);

// Opgave 4.2
byer = ["Randers", "Viborg", "Aarhus", "København"];
byer.push("Skive")
console.log(byer);

// Opgave 4.3 (har fået fjernet 0 på index 2, men mangler er indsætte 2 på index 2 i stedet)
let talrække = [0, 1, 0, 3, 4, 5, 6];
let taldelete = talrække.splice(2, 1);
console.log(talrække);