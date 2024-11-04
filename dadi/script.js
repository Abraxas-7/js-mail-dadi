// Genera un numero casuale da 1 a 6 per il giocatore
const playerRoll = Math.floor(Math.random() * 6) + 1;

// Genera un numero casuale da 1 a 6 per il computer
const computerRoll = Math.floor(Math.random() * 6) + 1;

console.log(`Giocatore: ${playerRoll}`);
console.log(`Computer: ${computerRoll}`);

// Determina il vincitore
if (playerRoll > computerRoll) {
    console.log("Il giocatore vince!");
} else if (playerRoll < computerRoll) {
    console.log("Il computer vince!");
} else {
    console.log("È un pareggio!");
}
