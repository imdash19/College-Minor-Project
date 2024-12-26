document.getElementById('complaintForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Collect form data
    const name = document.getElementById('name').value;
    const pnrNumber = document.getElementById('PNRNumber').value;
    const email = document.getElementById('email').value;
    const complaint = document.getElementById('complaint').value;

    // Simple form validation
    if (name && pnrNumber && email && complaint) {
        // Display success message
        document.getElementById('responseMessage').textContent =
            `Thank you, ${name}. Your complaint regarding PNR number ${pnrNumber} has been submitted. We will get back to you at ${email}.`;

        // Reset form
        document.getElementById('complaintForm').reset();
    } else {
        document.getElementById('responseMessage').textContent =
            'Please fill in all fields before submitting your complaint.';
        document.getElementById('responseMessage').style.color = 'red';
    }
});
