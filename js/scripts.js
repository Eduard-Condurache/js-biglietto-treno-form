// Messo il form dentro una variabile.
const infoForm = document.querySelector('form');

// Aggiunto metodo per registrare una funzione con il submit.
infoForm.addEventListener ('submit',
    function(event) {

        event.preventDefault(); 

        // Variabile con il valore del numero dei Km.
        const kmNumber = document.getElementById('km-number').value;

        // Variabile con il valore del numero del eta'.
        const age = document.getElementById('age').value;
        
        // Variabile con il valore del prezzo del biglietto.
        let ticketPrice = 0.21 * kmNumber;

        if (age < 18) {
            ticketPrice = ticketPrice * 0.80;
        }
        else if (age > 65) {
            ticketPrice = ticketPrice * 0.60;
        }

        console.log('Il prezzo che devi pagare per il biglietto è: ' + ticketPrice.toFixed(2) + ' euro');
    }
);



