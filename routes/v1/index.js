//TODO Implemented proper role base authentication in employee's last two APIs
//TODO In company route created a proper get.all API

const userRouter = require("./user.routes");
const authorRouter = require("./author.routes");
const personRouter = require("./person.routes");
const commentRouter = require("./comment.routes");
const emailRouter = require("./email.routes");
const employeeRouter = require("./employee.routes");
const productRouter = require("./product.routes");
const companyRouter = require("./company.routes")

const appRouter = require("express").Router()

appRouter.use("/user", userRouter);
appRouter.use("/author", authorRouter);
appRouter.use("/person", personRouter);
appRouter.use("/comment", commentRouter);
appRouter.use("/email", emailRouter);
appRouter.use("/employee", employeeRouter);
appRouter.use("/product", productRouter);
appRouter.use("/company", companyRouter)

module.exports = appRouter
