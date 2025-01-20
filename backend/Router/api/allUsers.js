const express = require("express")
const allUserRoute = express.Router()
const regUsers = require("../../modal/RegistrationSchema")

// ========== allUsers get
allUserRoute.get("/",async (req, res) => {

    const { _id } = req.query

    const allUsers = await regUsers.find({ _id: { $ne: _id } })

    res.send(allUsers)
})

module.exports = allUserRoute;