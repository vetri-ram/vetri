const mongoose = require('mongoose');
const Users = require("../Models/userModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


const userControllers = {
    //signup
    register: async (req,res) => {
        try{
            const {username,email,password} = req.body

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg:"user already exists"})

            if (password.length < 6) return res.status(400).json({msg:"password should be atleast 6 letters"})

            if(!username || !email || !password)
            {
                return res.status(400).json({msg:"Please fill all the fields"})
            }

            //hash the password 

            const hashPassword = await bcrypt.hash(password,10)

            //save to db

            const userData = new Users({
                username,
                email,
                password:hashPassword
            })
            await userData.save()
            return res.status(200).json({msg:"signed up Successfully", userData})
        }catch (error){
            return res.status(400).json({msg:"signed up failed"})
        }
    },
    signin: async (req,res) => {
        try{
           const { email, password} = req.body
           if(!email || !password)
           {
            return res.status(400).json({msg:"please fill all the fields"})
           }

           const user = await Users.findOne({email})
           if(!user) return res.status(400).json({msg:"User does not exists"})

           const isMatch = await bcrypt.compare(password, user.password)
           if(!isMatch) return res.status(400).json({msg:"password is incorrect"})
        
           if(isMatch){
               const accessToken = createAccessToken({_id:user._id})
               const {id, username,email} = user
               return res.status(200).json({accessToken, savedUser:{id, username,email}})
           }
        
        }catch (error){

        }
    }

}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.TOKEN_KEY, {expiresIn:'2d'})
}

module.exports = {userControllers}