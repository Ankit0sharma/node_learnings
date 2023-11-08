const twilio = require("twilio");

class SMSService {
  constructor(accountSid, authToken, messagingServiceSid) {
    this.client = new twilio(accountSid, authToken);
    this.messagingServiceSid = messagingServiceSid;
  }

  sendSMS(to, body) {
    return this.client.messages
      .create({
        body: body,
        to: to,
        messagingServiceSid: this.messagingServiceSid,
      })
      .then((message) => {
        console.log('SMS sent with SID: ' + message.sid);
        return { success: true, message: 'SMS sent successfully' };
      })
      .catch((error) => {
        console.error(error);
        return { success: false, message: error.message };
      });
  }
}

module.exports = SMSService;
