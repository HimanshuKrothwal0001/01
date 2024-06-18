require("dotenv").config();
const express = require("express")
const app = express();
const User = require('./model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const user = require("./model/user");
app.use(express.json());
const secretKey = process.env.secretKey

app.get("/",(req,res)=>{
    res.send("'<h1>hello</h1>")
})
app.post("/register",async(req,res)=>{
    try{
        const{firstname,lastname,email, password} = req.body;
    if (!(email && password && firstname && lastname)){
        res.status(400).send('All fields are required')    }
    const existingUser =await User.findOne({email});//promise 
    if (existingUser){
        res.status(401).send('Already exists');
    }
    const passwordEncrypted = await bcrypt.hash(password, 10);
    const user = await user.create({
        firstname,
        lastname,
        email : email.toLowerCase(),
        password:passwordEncrypted

    })
    //token 
    const token = jwt.sign({user_id:user._id,email},
    secretKey,
    { expiresIn: '1h' })
    user.token=token;
    }catch(error){
        console.log(error)
    }

    
});



module.exports=app;