
const infoForm = document.querySelector('form');

infoForm.addEventListener ('submit',
    function(event) {

        event.preventDefault(); 

        const passengerName = document.getElementById('name').value;

        const kmNumber = document.getElementById('km-number').value;

        const ageSelect = document.getElementById('age');

        const ageText = ageSelect.options[ageSelect.selectedIndex].text;

        let ticketPrice = 0.21 * kmNumber;

        let ticketInfo

        if (ageText === 'Minorenne') {
            ticketPrice = ticketPrice * 0.80;

            ticketInfo = document.getElementById('ticket-type').innerText = 'Scontato 20%'
            
        } else if (ageText === 'Over 65') {
            ticketPrice = ticketPrice * 0.60;

            ticketInfo = document.getElementById('ticket-type').innerText = 'Scontato 40%'

        } else {
            
            ticketInfo = document.getElementById('ticket-type').innerText = 'Biglietto Standard'
        }

        document.getElementById('ticket-price').innerText = ticketPrice.toFixed(2) + '€';

        document.getElementById('ticket-name').innerText = passengerName;
    }
);



