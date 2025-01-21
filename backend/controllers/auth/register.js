const regUsers = require("../../modal/RegistrationSchema")

const authRegister = async (req, res) => {

    const { name, email, password, age } = req.body
    const errors = {}

    // ======== error for empty inputs
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

    // ======== if email is alredy reguistered
    const existUser = await regUsers.find({ email })

    if (existUser.length > 0) {
        return res.send({ existUserMsg: "Email Already in Use" })
    }

    // ======== if email is new make a new user
    const users = new regUsers({
        name, email, password, age
    })

    await users.save() // save the data 

    res.send({ regSuccessMsg: "Register Successful" }) // send the register successfull massage 
}

module.exports = authRegister