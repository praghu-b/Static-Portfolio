require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.use('/', express.static(__dirname + '/public'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.set('views', __dirname + '/views')

app.get('/', (req, res) => { res.render('index') })

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let html_Content = `
    <h3>Name: ${name}</h3>
    <h3>Email: ${email}</h3>
    <hr>
    <h3>Message:</h3>
    <p>${message}</p>`

    // Email data
    let mailOptions = {
        from: `"${name}" <${email}>`,
        to: `${process.env.EMAIL_USER}`,
        subject: 'New Contact Form Submission',
        html: html_Content
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ success: false, message: 'Sorry, something went wrong. Please try again later.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/?success=true#contact');
        }
    });
});

module.exports = app