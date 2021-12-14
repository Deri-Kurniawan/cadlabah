const nodemailer = require('nodemailer');
const { BASE_URL } = require('../configs/config');

const mailTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'cadlabahlimited@gmail.com',
      pass: 'cadlabah123',
    },
    priority: 'normal',
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
};

const sendGreetingsFirstTime = async (transporter, { fullName, to }) => {
  await transporter.sendMail({
    from: 'Cadlabah <cadlabahlimited@gmail.com>',
    to,
    subject: `Welcome to Cadlabah ${fullName}!`,
    text: `
    <p>Hai, ${fullName}!. Kami Sangat senang karena anda telah bergabung pada platform kami.</p>
    <p>Mari mulai jelajahi barang yang hilang ataupun yang ditemukan di <a href="${BASE_URL}posts" target="_blank" rel="noopener">sini</a></p>
    butuh bantuan? <a href="mailto:cadlabahlimited@gmail.com">Tanya melalui email</a>
    `,
    html: `
    <p>Hai, ${fullName}!. Kami Sangat senang karena anda telah bergabung pada platform kami.</p>
    <p>Mari mulai jelajahi barang yang hilang ataupun yang ditemukan di <a href="${BASE_URL}posts" target="_blank" rel="noopener">sini</a></p>
    butuh bantuan? <a href="mailto:cadlabahlimited@gmail.com">Tanya melalui email</a>
    `,
  });
};

module.exports = { mailTransporter, sendGreetingsFirstTime };
