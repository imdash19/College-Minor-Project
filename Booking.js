document.getElementById('ticket-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const Boarding = document.getElementById('Boarding').value;
    const Destination = document.getElementById('Destination').value;
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;
    const passengers = document.getElementById('passengers').value;
  
    if (Boarding && Destination && date && travelClass && passengers) {
      document.getElementById('success-message').textContent = `Ticket reserved successfully for ${passengers} passenger(s) from ${Boarding} to ${Destination} on ${date} in ${travelClass} class.`;
      document.getElementById('ticket-form').reset();
    } else {
      document.getElementById('success-message').textContent = 'Please fill out all fields.';
    }
  });
  