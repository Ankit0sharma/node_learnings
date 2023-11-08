const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: process.env.SENDGRID_FROM,
    subject,
    text,
  };
  sgMail.send(msg)
    .then(() => {
      res.json({ message: 'Email sent successfully' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    });
}
