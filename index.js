const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hellow bai')
})
app.listen(port,()=>{
    console.log(`al most right:${port}`)
})