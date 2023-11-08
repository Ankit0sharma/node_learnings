//TODO Twilio added in config.routes.js file and Socket-io added in different branch

const userRouter = require("./user.routes");
const authorRouter = require("./author.routes");
const personRouter = require("./person.routes");
const commentRouter = require("./comment.routes");
const configRouter = require("./config.routes");
const employeeRouter = require("./employee.routes");
const productRouter = require("./product.routes");
const companyRouter = require("./company.routes")

const appRouter = require("express").Router()

appRouter.use("/user", userRouter);
appRouter.use("/author", authorRouter);
appRouter.use("/person", personRouter);
appRouter.use("/comment", commentRouter);
appRouter.use("/send", configRouter);
appRouter.use("/employee", employeeRouter);
appRouter.use("/product", productRouter);
appRouter.use("/company", companyRouter)

module.exports = appRouter
