const mongoose = require('mongoose')

const Post1 = new mongoose.Schema({
        username: {
            type: String,
            required: true,
        },
        userpost: {
            type: String,
            required: true,
        }
})

const ThePost1Data = mongoose.model("challeng1post",Post1)

module.exports = ThePost1Data
