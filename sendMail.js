const nodemailer = require('nodemailer');

async function sendMail({ name, email, message }) {
    // Configure your SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail', // or your email provider
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_email_password_or_app_password'
        }
    });

    // Email options
    let mailOptions = {
        from: email,
        to: 'your_email@gmail.com', // your receiving email
        subject: `New message from ${name}`,
        text: message
    };

    // Send email
    await transporter.sendMail(mailOptions);
}

module.exports = sendMail;
