const mongoose = require('mongoose')

const Post2 = new mongoose.Schema({
        username: {
            type: String,
            required: true,
        },
        userpost: {
            type: String,
            required: true,
        }
})

const ThePost2Data = mongoose.model("challeng2post",Post2)

module.exports = ThePost2Data
