// Lista di email autorizzate
const authorizedEmails = ["utente1@email.com", "utente2@email.com", "utente3@email.com"];

// Chiedi l'email all'utente
const userEmail = prompt("Inserisci la tua email:");

// Controlla se l'email è nella lista autorizzata
if (authorizedEmails.includes(userEmail)) {
    console.log("Accesso consentito. Benvenuto!");
} else {
    console.log("Accesso negato. La tua email non è autorizzata.");
}