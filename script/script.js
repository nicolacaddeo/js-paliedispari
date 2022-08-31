/*
// funzione che crea un array nel quale ogni carattere è un elemento
function reverseString(string) {
    // splitta la parola in un array
    let splitString = string.split('');

    // creo un array con la stessa parola ma al contrario
    let reverseUserWord = splitString.reverse();

    // creo una stringa che contiene la parola al contrario
    let reverseWordJoin = reverseUserWord.join('');

    // controllo 
    if (string == reverseWordJoin) {
        console.log(`La parola ${string} è palindroma`)
    } else {
        console.log(`La parola ${string} NON è palindroma`)
    }

}
// let userInput = prompt('Inserisci una parola ');
reverseString(userInput);
*/
// -----------------------------------------------------

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo gli input all'utente
let oddOrEven = prompt('Pari o dispari?');
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

// funzione per numero random da 1 a 5
function getRandomNumber(num1, num2) {
    let computerNumber = Math.floor(Math.random() * num2) + num1;
    console.log(`Il computer ha fatto: ${computerNumber}`);
    return computerNumber;
}

let sum = userNumber + getRandomNumber(1, 5);
console.log(sum);























