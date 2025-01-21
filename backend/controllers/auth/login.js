const regUsers = require("../../modal/RegistrationSchema")

const authLogin = async (req, res) => {

    const { email, password } = req.body
    const errors = {}

    // ======== error for empty inputs
    if (!email) {
        errors.emailError = "Email Required"
    }
    if (!password) {
        errors.passwordError = "Password Required"
    }

    if (Object.keys(errors).length > 0) {
        return res.send(errors)
    }

    // ======== find that user via input email and match the password
    const registeredUser = await regUsers.findOne({ email, password })
    
    // ======== if the password or email is wrong , send error massage
    if (!registeredUser) {
        return res.send({ loginFailedMsg: "Something is Wrong" })
    }

    // ======== if everything is fine than send the user"s data with login success massage
    res.send({ loginSuccessMsg: "Login Successfull", registeredUser })
}

module.exports = authLogin