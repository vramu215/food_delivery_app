const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('.models/User.js')
const PORT=3000

const app=express()
mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected successfully......")
).catch(
    (err)=>console.log(err)
)
app.get('/register',async(req,res)=>{
    try{
        res.send('<h1 align=center>Welcome to the back-end </h1>')

    }
    catch(err){
        console.log(err)
    }
})
app.post('/register',async(req,res)=>{
    const {User,emial,password}=req.body
    try{

    }
    catch(err){
        console.log(err)

    }

})
app.listen (PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is running|affirmative"+PORT)
})