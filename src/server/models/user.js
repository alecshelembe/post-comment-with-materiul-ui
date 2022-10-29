const mongoose = require('mongoose')

const User = new mongoose.Schema({
        username: {
            type: String,
            required: true,
        },
        useremail: {
            type: String,
            required: true,
        },
        userpassword: {
            type: String,
            required: true,
        },
        usernumber: {
            type: Number,
            required: true,
        }
})

const TheData = mongoose.model("user",User)

module.exports = TheData
