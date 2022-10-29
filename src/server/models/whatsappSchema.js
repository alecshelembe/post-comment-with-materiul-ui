const mongoose = require('mongoose')

const User = new mongoose.Schema({
        userphonenumber: {
            type: String,
            required: true,
        },
        usermessage: {
            type: String,
            required: true,
        }
})

const TheWhatsAppData = mongoose.model("whatsapp-user",User)

module.exports = TheWhatsAppData
