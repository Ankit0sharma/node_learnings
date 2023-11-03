//One To One relationship
const addUserComponent = require("../../components/v1/user_crud/addUser")
const addUserProfileComponent = require("../../components/v1/user_crud/addUserProfile")
const getUserInfoComponent = require("../../components/v1/user_crud/getUserInfo")

const userRouter = require("express").Router()

userRouter.post("/user", addUserComponent)
userRouter.post("/profile", addUserProfileComponent)
userRouter.get("/info", getUserInfoComponent)

module.exports = userRouter
