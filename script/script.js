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

// chiedo gli input all'utente
let oddOrEven = prompt('pari o dispari?');
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

//log di prova
console.log(`L'utente ha scelto ${oddOrEven}`);
console.log(`L'utente ha scelto come numero ${userNumber}`);

// funzione per numero random da 1 a 5
function getRandomNumber(num1, num2) {
    let computerNumber = Math.floor(Math.random() * num2) + num1;
    console.log(`Il computer ha fatto: ${computerNumber}`);
    return computerNumber;
}

// funzione per determinare se un numero è pari o dispari
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let sum = userNumber + getRandomNumber(1, 5);
console.log(`La somma dei due numeri è ${sum}`);

// determino chi vince
if (oddOrEven == 'pari' && isEven(sum)) {
    console.log('L\'utente vince!');
} else if (oddOrEven == 'pari' && !isEven(sum)) {
    console.log('Il computer vince');
} else if (oddOrEven == 'dispari' && !isEven(sum)) {
    console.log('L\'utente vince!');
} else {
    console.log('Il computer vince');
}


























