const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thesssak@gmail.com',
    pass: 'ganhsat555'
  }
});

// var mailOptions = {
//   from: 'thesssak@gmail.com',
//   to: 'thesssak+butt@gmail.com',
//   subject: 'vart',
//   text: 'vartlicker'
// };

const sendEmail = mailOptions => {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendEmail
}
