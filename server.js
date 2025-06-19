const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./sendMail');

const app = express();
app.use(bodyParser.json());

app.post('/api/send-message', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await sendMail({ name, email, message });
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});