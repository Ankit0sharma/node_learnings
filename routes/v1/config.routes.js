const sendEmailComponent = require("../../components/v1/config/send.email")
const sendSMSComponent = require("../../components/v1/config/send.sms")

const configRouter = require("express").Router()

configRouter.post("/email", sendEmailComponent)
configRouter.post("/sms", sendSMSComponent)

module.exports = configRouter