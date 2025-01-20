const express = require("express")
const router = express.Router()
const cors = require("cors")
const apiRoute = require("./api")
router.use(cors())

// ========== for login route
router.use("/", apiRoute)

// ========== for anyother route
router.use((req,res)=>{
    res.send("page not found")
})

module.exports = router;