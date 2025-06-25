// Seleziona l'input all'interno del rettangolo
const input = document.querySelector('.text-inside');

// Aggiunge evento per attivare la tastiera al tocco
input.addEventListener('click', function() {
    this.focus(); // Attiva il focus per mostrare la tastiera
    this.value = this.value || ''; // Pulisce il valore se vuoto
});

// Opzionale: Rimuove il focus quando si tocca fuori
document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.rectangle')) {
        input.blur(); // Nasconde la tastiera
    }
});