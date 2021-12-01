const nodemailer = require('nodemailer');

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
    <p>Mari mulai jelajahi barang yang hilang ataupun yang ditemukan di <a href="http://localhost:5500/posts" target="_blank">sini</a></p>
    butuh bantuan? <a href="mailto:cadlabahlimited@gmail.com">Tanya melalui email</a>
    `,
    html: `
    <p>Hai, ${fullName}!. Kami Sangat senang karena anda telah bergabung pada platform kami.</p>
    <p>Mari mulai jelajahi barang yang hilang ataupun yang ditemukan di <a href="http://localhost:5500/posts" target="_blank">sini</a></p>
    butuh bantuan? <a href="mailto:cadlabahlimited@gmail.com">Tanya melalui email</a>
    `,
  });
};

sendGreetingsFirstTime(mailTransporter(), {
  fullName: 'Deri',
  to: 'deri.netuchi@gmail.com',
});

module.exports = { mailTransporter, sendGreetingsFirstTime };
