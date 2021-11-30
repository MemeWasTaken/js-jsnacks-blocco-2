// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let numsList = [1, 2, 3, 4, 5, 8, 76, 43, 23, 21, 12,];
let sum = 0;

// console.log(numsList);

for (let i = 0; i < numsList.length; i++) {

    if ((i % 2) == 1) {
        sum += numsList[i];
    }
}

console.log(sum);
