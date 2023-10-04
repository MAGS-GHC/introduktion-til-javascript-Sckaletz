// Opgave 3.1
for (let i = 1; i <= 100; i++){
    console.log(i)
}

// Opgave 3.2
col1 = 0;
col2 = 1;
col3 = 2;
for (let i = 0; i <= 100; i++) {
    console.log(col1, col2, col3);
    col1++;
    col2++;
    col3++;
}

// Opgave 3.3
for (let i = 1; i <= 100; i++){
    
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}

let i = 0
while (i < 100){
    i++
    
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}

// Opgave 3.4
let n = 1
for (let i = 10; i >= 1; i--){
    n = n * i
    if (i == 1){
        console.log(n);
    }
}

let n2 = 1
let i2 = 10
while (i2 >= 1){
    n2 = n2 * i2
    i2--
    if (i2 == 1){
        console.log(n2);
    }    
}

// Opgave 3.5
let a = 1
for(a = 1; a <= 9; a++){
    a2 = a * 15
        console.log("15 x " + a + " = " + a2);
}