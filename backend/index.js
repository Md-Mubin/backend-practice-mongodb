// =========== imports variables
const express = require("express")
const dbConnect = require("./config/dbConnect")
const app = express()

// =========== all uses of app
dbConnect()

// =========== port online
app.listen(4000, () => {
    console.log("executing data $$$4000##")
})