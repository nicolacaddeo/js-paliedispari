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
// -----------------------------------------------------
let userInput = prompt('Inserisci una parola ');
reverseString(userInput);





















