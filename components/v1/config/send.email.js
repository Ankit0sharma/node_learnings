const { ErrorHandler } = require('../../../lib/utils/custom.error');
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
      return res.success('Email sent successfully');
    })
    .catch(error => {
      return res.serverError(500, ErrorHandler(error));
    });
}
