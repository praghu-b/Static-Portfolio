require('dotenv').config()
const app = require('./app')

app.listen( process.env.PORT, (req,res)=>{
    console.log(`Listening on PORT: ${process.env.PORT}`)
})