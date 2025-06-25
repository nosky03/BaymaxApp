// Seleziona l'input all'interno del rettangolo
const input = document.querySelector('.text-inside');

// Aggiunge evento per attivare la tastiera al tocco
input.addEventListener('click', function() {
    this.focus(); // Attiva il focus per mostrare la tastiera
    if (this.value === 'Chiedi qualsiasi cosa') {
        this.value = ''; // Rimuove il testo iniziale se coincide
    }
});

// Ripristina il placeholder se l'input viene svuotato e perso il focus
input.addEventListener('blur', function() {
    if (!this.value) {
        this.value = 'Chiedi qualsiasi cosa'; // Ripristina se vuoto
    }
});

// Opzionale: Rimuove il focus quando si tocca fuori
document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.rectangle')) {
        input.blur(); // Nasconde la tastiera
    }
});