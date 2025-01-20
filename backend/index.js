// =========== imports variables
const express = require("express")
const dbConnect = require("./config/dbConnect")
const router = require("./Router")
const app = express()

// =========== all uses of app
app.use(express.json())
app.use(router)
dbConnect()

// =========== port online
app.listen(4000, () => {
    console.log("executing data $$$4000##")
})