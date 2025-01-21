const express = require("express")
const authLogin = require("../../controllers/auth/login")
const authRegister = require("../../controllers/auth/register")
const authRoute = express.Router()

authRoute.post("/login", authLogin)

authRoute.post("/register", authRegister)

module.exports = authRoute