const express = require("express")
const loginRoute = require("./login")
const registerRoute = require("./register")
const myProfileRoute = require("./myProfile")
const apiRoute = express.Router()

// ======== from login route
apiRoute.use("/", loginRoute)

// ======== from register route
apiRoute.use("/register", registerRoute)

// ======== from myProfile route
apiRoute.use("/myprofile", myProfileRoute)


module.exports = apiRoute
