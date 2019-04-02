require('dotenv').config()
const express = require("express")
const app = express()
const router = require('./routes/router')
const mongoose = require("mongoose")
const bodyParser =require("body-parser")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', router)

const port = 3000

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
mongoose.connect('mongodb://localhost:27017/Wealthy-Words', { useNewUrlParser: true}).then(() => {
  console.log('database conect ok')
}).catch(()=>
console.log('error'))