const mongoose = require("mongoose")

// =========== mongodb connect via mongoose npm

const mongodbDataBase = ()=>{

   mongoose.connect("mongodb+srv://backendPractice:ex114Vetxe26CENw@mubin.gq4oa.mongodb.net/Users?retryWrites=true&w=majority&appName=mubin")
    .then(() => {
        console.log("database connected")
    })
}

module.exports = mongodbDataBase