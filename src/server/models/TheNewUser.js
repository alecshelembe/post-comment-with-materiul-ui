const mongoose = require('mongoose')
const NewUser = new mongoose.Schema({
 
        UserData: {
            type: String,
            required: true,
        },
        UserDataLast: {
            type: String,
            required: true,
        }
})

const TheNewUser = mongoose.model("newuser",NewUser)

module.exports = TheNewUser
