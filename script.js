document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;

    console.log({ name, id }); // Log the data being sent

    // Send data to the server
    fetch('https://14be4976-2bdf-40ff-bc2f-e3b95d41b9e1-00-2e5spuvhz454d.spock.replit.dev/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, id }),
    })
    .then(response => {
        if (response.ok) {
            alert('Attendance recorded!');
        } else {
            alert('Error recording attendance.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error recording attendance.');
    });
});
