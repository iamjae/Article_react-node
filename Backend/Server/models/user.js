const mongoose = require('mongoose')
const usersTable = new mongoose.Schema({
    name:String,
    password:String,
    email:String
})
module.exports = mongoose.model('users', usersTable)