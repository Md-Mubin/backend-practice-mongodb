const express = require("express")
const myProfileRoute = express.Router()
const profileInfo = require("../../controllers/profile/profile")
const allUsers = require("../../controllers/profile/allUsers")

// =========== myprofile post
myProfileRoute.post("/", profileInfo)

//============ myProfile allusers route
myProfileRoute.get("/allUsers", allUsers)

module.exports = myProfileRoute;