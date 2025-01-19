const mongoose = require("mongoose")
const schema = mongoose.Schema

// =========== registration schema variables
const regSchema = new schema({
    name: String,
    age: Number,
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Users", regSchema)