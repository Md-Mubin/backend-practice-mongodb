const express = require("express")
const registerRoute = express.Router()
const regUsers = require("../../modal/RegistrationSchema")

// =========== register post
registerRoute.post("/", async (req, res) => {

    const { name, email, password, age } = req.body
    const errors = {}

    if (!name) {
        errors.nameError = "Name Required"
    }
    if (!email) {
        errors.emailError = "Eamil Required"
    }
    if (!password) {
        errors.passwordError = "Password Required"
    }
    if (!age) {
        errors.ageError = "Age Required"
    }

    if (Object.keys(errors).length > 0) {
        return res.send(errors)
    }

    const existUser = await regUsers.find({ email })

    if (existUser.length > 0) {
        return res.send({ existUserMsg: "Email Already in Use" })
    }

    const users = new regUsers({
        name, email, password, age
    })

    await users.save()

    res.send({ regSuccessMsg: "Register Successful" })
})

module.exports = registerRoute;