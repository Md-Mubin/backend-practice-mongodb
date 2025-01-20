const express = require("express")
const myProfileRoute = express.Router()
const regUsers = require("../../modal/RegistrationSchema")
app.use(myProfileRoute)

// =========== myprofile post
myProfileRoute.post("/myprofile", async (req, res) => {
    const {id} = req.body

    await regUsers.findByIdAndDelete(id)
})

module.exports = myProfileRoute;