```javascript
// ...existing code...

async function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {    node d:\PROJECTS\project\server\index.js
        alert('Message sent!');
    } else {
        alert('Failed to send message.');
    }
}

// Attach to button
document.getElementById('sendBtn').addEventListener('click', sendMessage);

// ...existing code...
```