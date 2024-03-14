// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!

// Chiedo la parola all'utente
const userWord = prompt (`Inserisci una parola: `);

let word = revertedWord(userWord);

// Controllo che la parola sia palindroma
if (word ===  userWord) {
    alert(`La tua parola è Palidroma`)
} else {
    alert("La tua parola non è Palidroma")
};

// Creo la funziona per leggere la parola al contrario
function revertedWord(word) {
    let revertedWord = ``;
    for (let i = userWord.length - 1; i >= 0; i--) {
        let letter = userWord[i];
        revertedWord += letter;
    }
    return revertedWord;
}