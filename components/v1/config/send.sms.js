const SMSService = require("../../../lib/utils/twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

const smsService = new SMSService(accountSid, authToken, messagingServiceSid);

module.exports = (req, res) => {
  const { to, body } = req.body;

  smsService
    .sendSMS(to, body)
    .then((result) => {
      if (result.success) {
        res.send(result.message);
      } else {
        res.status(500).json({
          message: result.message,
        });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Failed to send SMS",
      });
    });
};
