const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.port || 3000

const resturent = require('./data/res.json')
const food = require('./data/food.json')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hellow bai')
})

app.get('/resturent',(req,res)=>{
    res.send(resturent)
})

app.get('/food',(req,res)=>{
    res.send(food)
})

app.get('/food/:id',(req,res)=>{
    const id = req.params.id;
    const selected = food.find(n=>n_id === id)
    res.send(selected)
})
app.listen(port,()=>{
    console.log(`al most right:${port}`)
})