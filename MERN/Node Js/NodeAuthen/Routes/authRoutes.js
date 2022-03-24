const express = require('express');
const authRouter = express.Router();
const User = require('../Model/UserModel');
const {hashGenerate} = require('../Controllers/userController');
const {hashValidator} = require('../Controllers/userController');
const {tokenGenerator} = require('../Controllers/userAuth');
const  authVerify = require("../Controllers/authVerify")

authRouter.get('/',(req,res)=>{
    res.send("<h1>Hello World from router</h1>")
})

authRouter.post('/signup', async (req,res)=>{
    try {
        const hashPassword = await hashGenerate(req.body.password)
    const {username, email} = req.body;
    const user = new User({
        username,
        email,
        password:hashPassword
    });

    const userSaved = await user.save();
    res.send(userSaved);
    } catch (error) {
        res.send(error)
        
    }
    
});

authRouter.post('/signin',async (req,res)=>{
    try {
        const userExist = await User.findOne({email:req.body.email});
   if(!userExist) {
       res.send("Email is Invalid");
   }else{
       const checkUser = await hashValidator(req.body.password,userExist.password);
       if(!checkUser){
           res.send("Password is InValid");
       }    
          else{
            const token = await tokenGenerator(userExist.email);
            res.cookie("jwt",token);
            res.send(token);
          }
        }
        
    } catch (error) {
        res.send(error)
        
    }
   
})

authRouter.get("/protect",authVerify,(req,res)=>{
    res.send("I am From Protect")
})

module.exports = authRouter;