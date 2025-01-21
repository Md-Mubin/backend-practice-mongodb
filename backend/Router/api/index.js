const express = require("express")
const myProfileRoute = require("./myProfile")
const authRoute = require("./auth")
const apiRoute = express.Router()

// ======== from login route
apiRoute.use("/auth", authRoute)

// ======== from myProfile route
apiRoute.use("/myprofile", myProfileRoute)


module.exports = apiRoute
