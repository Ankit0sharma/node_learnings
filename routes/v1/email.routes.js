const sendSmsComponent = require("../../components/v1/config/send.email")

const emailRouter = require("express").Router()

emailRouter.post("/send", sendSmsComponent)

module.exports = emailRouter