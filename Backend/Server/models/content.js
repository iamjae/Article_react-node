const mongoose = require('mongoose')
const contentSchema = new mongoose.Schema({
    title:String,
    chapter:String,
    author:String

})
module.exports = mongoose.model('authors', contentSchema)