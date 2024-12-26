const totalSeats = 108; // Total number of seats
const seatPrice = 100; // Price per seat
let bookedSeats = [];

function createSeatMap() {
    const seatMap = document.getElementById('seatMap');
    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.innerText = i;
        seat.addEventListener('click', () => toggleSeatSelection(seat, i));
        seatMap.appendChild(seat);
    }
}

function toggleSeatSelection(seat, seatNumber) {
    if (seat.classList.contains('booked')) {
        alert('This seat is already booked!');
        return;
    }
    
    seat.classList.toggle('selected');
    updateBookingSummary();
}

function updateBookingSummary() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const selectedSeatsArray = Array.from(selectedSeats).map(seat => seat.innerText);
    bookedSeats = selectedSeatsArray;

    document.getElementById('selectedSeats').innerText = `Selected Seats: ${bookedSeats.join(', ')}`;
    document.getElementById('totalPrice').innerText = `Total Price: $${bookedSeats.length * seatPrice}`;
}

document.getElementById('bookTickets').addEventListener('click', () => {
    if (bookedSeats.length === 0) {
        alert('Please select at least one seat to book.');
        return;
    }

    bookedSeats.forEach(seatNumber => {
        const seat = Array.from(document.querySelectorAll('.seat')).find(el => el.innerText == seatNumber);
        seat.classList.add('booked');
        seat.classList.remove('selected');
    });
    
    alert(`Tickets booked for seats: ${bookedSeats.join(', ')}`);
    bookedSeats = [];
    updateBookingSummary();
});

createSeatMap();
