


const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY ||  '', // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN || '' // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = ( from, to, subject, text,) => {
    const mailOptions = {
        from: from, // TODO replace this with your own email
        to: to, // TODO: the receiver email has to be authorized for the free tier
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return (err, null);
        }
        return (null, data);
    });
}

module.exports = sendMail;