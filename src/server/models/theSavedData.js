const mongoose = require('mongoose')

const User = new mongoose.Schema({
        data: {
            type: String,
            required: true,
        }
})

const TheSavedData = mongoose.model("whatsapplog",User)

module.exports = TheSavedData
