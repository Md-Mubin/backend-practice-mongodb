const express = require("express")
const loginRoute = require("./login")
const apiRoute = express.Router()

apiRoute.get("/login", loginRoute)

module.exports = apiRoute
