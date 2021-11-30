// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

// let nameGuest = ['Luca', 'Pippo', ];
// let surnameGuest = ['Corto', 'Largo'];
// let guest = [];

// guest.push('Luca' + ' Largo');
// guest.push('Pippo' + ' Corto');
// console.log(guest);

// console.log(nameGuest[Math.floor(Math.random() * 2)]);
// console.log(surnameGuest[Math.floor(Math.random() * 2)]);

// guest.push(nameGuest[Math.floor(Math.random() * 2)] + ' ' + surnameGuest[Math.floor(Math.random() * 2)]);
// guest.push(nameGuest[Math.floor(Math.random() * 2)] + ' ' + surnameGuest[Math.floor(Math.random() * 2)]);
// console.log(guest);

// console.log(nameGuest[Math.floor(Math.random() * (nameGuest.length))]);

let nameGuest = ['Emma', 'Gaia', 'Gina', 'Ines', 'Iris', 'Anita', 'Ariel', 'Bella', 'Betta', 'Carla', 'Clara', 'Dalia', 'Diana', 'Elena', 'Elisa', 'Luca', 'Milo', 'Nemo', 'Nico', 'Nino', 'Omar', 'Owen', 'Marco'];
let surnameGuest = ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Moretti', 'Barbieri', 'Fontana', 'Santoro', 'Mariani', 'Rinaldi', 'Caruso', 'Ferrara', 'Galli', 'Martini', 'Leone', 'Longo', 'Gentile', 'Martinelli', 'Vitale', 'Lombardo', 'Serra', 'Coppola', 'De Santis', 'Marchetti'];
let numGuest = 0;
let guests = [];

guests.push(nameGuest[Math.floor(Math.random() * (nameGuest.length))] + ' ' + surnameGuest[Math.floor(Math.random() * (surnameGuest.length))]);
guests.push(nameGuest[Math.floor(Math.random() * (nameGuest.length))] + ' ' + surnameGuest[Math.floor(Math.random() * (nameGuest.length))]);

numGuest = Math.floor(Math.random() * (35 - 3) ) + 3;
for (let i = 0; i < Math.floor(Math.random() * numGuest); i++) {
    guests.push(nameGuest[Math.floor(Math.random() * (nameGuest.length))] + ' ' + surnameGuest[Math.floor(Math.random() * (surnameGuest.length))]);
}

console.log(guests);