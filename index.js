const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.port || 3000

const resturent = require('./data/res.json')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hellow bai')
})

app.get('/resturent',(req,res)=>{
    res.send(resturent)
})
app.listen(port,()=>{
    console.log(`al most right:${port}`)
})