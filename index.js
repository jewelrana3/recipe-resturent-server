const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 3000

const food = require('./data/food.json')
// const food = require('./data/food.json')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hellow bai')
})

app.get('/food',(req,res)=>{
    res.send(food)
})

app.get('/food',(req,res)=>{
    res.send(food)
})

app.get('/food/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const selected = food.find(n=>n.id == id)
    res.send(selected)
})

app.listen(port,()=>{
    console.log(`al most right:${port}`)
})