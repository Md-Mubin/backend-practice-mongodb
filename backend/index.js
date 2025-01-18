// =========== imports variables
const express = require("express")
const mongoose = require("mongoose")
const schema = mongoose.Schema
const router = express.Router()
const cors = require("cors")
const app = express()

// =========== all uses of app
app.use(express.json())
app.use(cors())
app.use(router)

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

const regUsers = mongoose.model("Users", regSchema)

// =========== mongodb connect via mongoose npm
mongoose.connect("mongodb+srv://backendPractice:ex114Vetxe26CENw@mubin.gq4oa.mongodb.net/Users?retryWrites=true&w=majority&appName=mubin")
    .then(() => {
        console.log("database connected")
    })


// =========== register post
router.post("/register", async (req, res) => {

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

// =========== login post
router.post("/", async (req, res) => {
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


// ========== allUsers get
router.get("/myprofile/allUsers", async (req, res) => {

    const { _id } = req.query

    const allUsers = await regUsers.find({ _id: { $ne: _id } })

    res.send(allUsers)
})

// =========== myprofile post
router.post("/myprofile", async (req, res) => {
    const {id} = req.body

    await regUsers.findByIdAndDelete(id)
})

// =========== port online
app.listen(4000, () => {
    console.log("executing data $$$4000##")
})