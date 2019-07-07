/*
Error: self signed certificate in certificate chain
at TLSSocket.onConnectSecure (_tls_wrap.js:1055:34)
at TLSSocket.emit (events.js:198:13)
at TLSSocket._finishInit (_tls_wrap.js:633:8) code: 'ESOCKET', command: 'CONN'
*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'sender@gmail.com',
            pass: 'sender password'
        }
    }
);

var mailOptions = {
    from: 'sender@gmail.com',
    to: 'recipient1@gmail.com, recipient2@gmail.com, recipient1@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Welcome to world of NodeJS'
    //,html: '<h1>Hello User,<br>Welcome to world of NodeJS</h1>'
};

transporter.sendMail(mailOptions, 
    function(error, info){
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    }
);
