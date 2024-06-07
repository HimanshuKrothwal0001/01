require("dotenv").config();
const express = require("express")
const app = express();
const User = require('./model/user')
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("'<h1>hello</h1>")
})
app.post("/register",async(req,res)=>{
    const{firstname,lastname,email, password} = req.body;
    if (!(email && password && firstname && lastname)){
        res.status(400).send('All fields are required')    }
    const existingUser =await User.findOne({email});//promise 
    if (existingUser){
        res.status(401).send('Already exists');
    }
    
});



module.exports=app;