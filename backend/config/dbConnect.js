const mongoose = require("mongoose")

// =========== mongodb connect via mongoose npm

const dbConnect= ()=>{

   mongoose.connect("your mongodb database link")
    .then(() => {
        console.log("database connected")
    })
}

module.exports = dbConnect
