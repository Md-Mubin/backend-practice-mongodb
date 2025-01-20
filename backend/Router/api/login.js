const express = require("express")
const regUsers = require("../../modal/RegistrationSchema")
const loginRoute = express.Router()

// =========== login post
loginRoute.post("/", async (req, res) => {
    const { email, password } = req.body
    const errors = {}

    if (!email) {
        errors.emailError = "Email Required"
    }
    if (!password) {
        errors.passwordError = "Password Required"
    }

    if (Object.keys(errors).length > 0) {
        return res.send(errors)
    }

    const registeredUser = await regUsers.findOne({ email, password })

    if (!registeredUser) {
        return res.send({ loginFailedMsg: "Something is Wrong" })
    }

    res.send({ loginSuccessMsg: "Login Successfull", registeredUser })
})

module.exports = loginRoute;