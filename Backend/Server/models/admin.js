const mongoose = require('mongoose')

const adminTable = new mongoose.Schema({
    username:String,
    password: String
})
module.exports = mongoose.model('admin', AdminTable)
