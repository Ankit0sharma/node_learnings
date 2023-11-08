const { ErrorHandler } = require('../../../lib/utils/custom.error');
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
                return res.success(result.success);
            } else {
                return res.serverError(500, ErrorHandler(error));
            }
        })
        .catch((error) => {
            return res.serverError(500, ErrorHandler(error));
        });
};
