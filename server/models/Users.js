const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   age: {
    type: Number,
    reqired: true
   },
   username: {
    type: String,
    required: true

   }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel