const express = require("express")
const myProfileRoute = express.Router()
const regUsers = require("../../modal/RegistrationSchema")
const allUserRoute = require("./allUsers")

// =========== myprofile post
myProfileRoute.post("/", async (req, res) => {
    const {id} = req.body

    await regUsers.findByIdAndDelete(id)
})

//============ myProfile allusers route
allUserRoute.get("/allUsers", allUserRoute)

module.exports = myProfileRoute;