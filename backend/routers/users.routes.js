const express = require("express")
const userRouter = express.Router()
const userController = require("../controllers/users.controller")


userRouter.post('/signUp', userController.userSignUp);
userRouter.post('/logIn', userController.userLogIn);
userRouter.post('/logOut', userController.logOut)
module.exports = userRouter
