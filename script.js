document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;

    // Send data to the server
    fetch('https://your-server-url.com/submit', {
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
