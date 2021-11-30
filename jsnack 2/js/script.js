// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// let numsList = [1, 2, 3, 4, 5, 8, 76, 43, 23, 21, 12];
// let sum = 0;

// console.log(numsList);

// for (let i = 0; i < numsList.length; i++) {

//     if ((i % 2) == 1) {
//         sum += numsList[i];
//     }
// }

// console.log(sum);

let numsList = [];
let sum = 0;

// Math.floor(Math.random() * (30 - 11) ) + 11; //Numero elementi array casuale
// Math.floor(Math.random() * (100 - 1) ) + 1; //Numero casuale -> elemento

for (let i = 0; i < (Math.floor(Math.random() * (30 - 11) ) + 11); i++ ) {
    numsList.push(Math.floor(Math.random() * (100 - 1) ) + 1);
    
    if ((i % 2) == 1) {
        sum += numsList[i];
    }
}

console.log(numsList);
console.log(sum);