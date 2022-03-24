const express = require('express');
const workRouter = express.Router();
const {myWork} = require('../Models/myWork');
const bcrypt = require('bcrypt');

workRouter.get('/',(req,res)=>{
    res.send("<h2> hi This is from Router</h2>")
});

workRouter.post('/signup', async (req,res)=>{
    const {username, email,password} = req.body;
    if(!username||!email||!password){
        res.send("please fill all fields")
    }
   const hashPassword = await bcrypt.hash(password,10);
    const work = new myWork({
        username,
        email,
        password:hashPassword
    })

    const saveWork = await work.save();
    res.send(saveWork)
})

workRouter.post('/signin',async (req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email||!password){
            res.send("please fill all fields")
        }
        const verUser = myWork.findOne({email:email});

        if(!verUser)
        {
            res.send("Email Invalid")
        }
        res.send(" successfully Login")
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = workRouter;