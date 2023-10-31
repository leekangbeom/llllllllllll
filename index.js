const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kangbeom15:abcd1234@kangbeom.m1tjkuf.mongodb.net/')
.then(() =>console.log('mongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!~~~~안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})