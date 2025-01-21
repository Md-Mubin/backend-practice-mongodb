const regUsers = require("../../modal/RegistrationSchema")

const profileInfo = async (req, res) => {
    const {id} = req.body

    await regUsers.findByIdAndDelete(id)
}

module.exports = profileInfo