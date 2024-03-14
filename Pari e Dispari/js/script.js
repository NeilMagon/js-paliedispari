// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente pario o dispari
const userEvenOrOdd = prompt(`Scegli pari o dispari ?`);
console.log(userEvenOrOdd);

// Chiedo all'utente un numero da 1 a 5
const userNumber = parseInt(prompt(`Dimmi un numero tra 1 e 5`));
console.log(userNumber);

// Genero dei numeri casuali per il pc
const computerNumber = getRndInteger(1, 5);
console.log(computerNumber);

// Sommo i numeri
let total = sumNumber(userNumber, computerNumber);
console.log(total);

// Controllo se l'utente ha scelto pari o dispari
let evenOrOdd;

if (userEvenOrOdd === (`pari`)) {
    evenOrOdd = (`pari`);
} else {
    evenOrOdd = (`dispari`);
}

// Controllo chi ha vinto
let winner;

if (evenOrOdd === (`pari`) && total % 2 ===  0) {
    alert(`Hai vinto`)
} else {
    alert (`Ha vinto il computer`)
}

// Creo una funziona per generare numeri casuali per il pc
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Creo una funziona per calcolare i numeri
function sumNumber(userNumb, computerNumb){
    const sum = userNumb + computerNumb;
    return  sum; 
}

