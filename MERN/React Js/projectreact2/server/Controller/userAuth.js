const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

  require('../DB/conn');
const User = require('../Model/userSchema');


router.get('/', (req,res)=>{
    res.send(" this is Router Page")
})
//Promises
// router.post('/register', (req,res)=>{

//     const {name, mobile, city, work, email, password, cpassword} = req.body;


//     if(!name||!mobile||!city||!work||!email||!password||!cpassword)
//     {
//         return res.status(400).json({msg:"plz fill all the Fields"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({msg:"User Already Register"});
//         }
    
//         const user = new User({name, mobile, city, work, email, password, cpassword});
    
//          user.save().then(()=>{
//              res.status(201).json({message:"user register successfully"});
//             }).catch((err) => res.status(500).json({error:"Failed to registered"}));
    
//      }).catch((err) => {console.log(err);});
//     });

//Async and await

router.post('/register', async (req,res)=>{

    const {name, mobile, city, work, email, password, cpassword} = req.body;

    if(! name||! mobile||! city||! work||! email||! password||! cpassword)
    {
        return res.status(200).json({msg:"please fill the field properly"})
   }

    try
    {
        

         const userExist = await User.findOne({email:email});
         if(userExist){
             return res.status(404).json({msg:"Email Already Exists"});
         }
         const hashpassword = await bcrypt.hash(password,10);
        const hashcpassword = await bcrypt.hash(cpassword,10);
         const user = new User({
             name, 
             mobile, 
             city, 
             work, 
             email, 
             password:hashpassword, 
             cpassword:hashcpassword});
        const userRegister= await user.save();

             if(userRegister) {
                 return res.status(400).json({msg:"User Registered Successfully"});
             }else
             {
                res.status(500).json({error:"Failed to registered"})
             }
             
        
    }catch(err){
       console.log(err);
    }


});

router.post('/signin', async (req,res) => {
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({err:"Please filled the fields"})
        }
         const userLogin = await User.findOne({email:email});

         const isMatch = await bcrypt.compare(password, userLogin.password)
           
         if(!userLogin)
         {
         res.status(400).json({message:"Invalid User, you must be Register"});
         } else if(!isMatch) 
         {
             return res.status(400).json({msg:"password is incorrect"})
         }else
         {
            const token = await userLogin.generateAuthToken();
            console.log(token);
            // res.json({message:"user Signin Successfully"});
         }
         

    }catch(err){
           console.log(err);
    }
})

module.exports = router;