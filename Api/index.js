const express = require('express');
const route  = require('../router/productRouter');
const connectDB = require('../config/db');
require ('dotenv').config();

const app=express()
const PORT = process.env.PORT
connectDB()
app.use(cors())
app.use('/products', route)

app.get('/',(req,res)=>{
    res.send("it is working")
})

app.listen(PORT , ()=>{
    console.log(`server runing ${PORT}`)
})
