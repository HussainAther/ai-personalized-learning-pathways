fetch('/api/student-progress')
    .then(response => response.json())
    .then(data => {
        document.getElementById('progress').innerText = `Progress: ${data.progress}%`;
    })
    .catch(error => console.error('Error:', error));

