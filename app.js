
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use('/', express.static( __dirname + '/public'))
app.use('/node_modules', express.static( __dirname + '/node_modules'))
app.set('views', __dirname + '/views')

app.get('/', (req,res) => { res.render('index')})

module.exports = app