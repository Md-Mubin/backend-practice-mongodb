const regUsers = require("../../modal/RegistrationSchema")

const allUsers = async (req, res) => {

    const { _id } = req.query

    const allUsers = await regUsers.find({ _id: { $ne: _id } })

    res.send(allUsers)
}

module.exports = allUsers