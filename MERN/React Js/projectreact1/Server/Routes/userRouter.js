const express = require('express');
const UserInfo = require('../Models/userModels');
const router = express.Router();

// router.get('/', (req,res) => {
//     try{
//         res.json("Hi am form Router");
//     }
//     catch(err)
//     {
//         console.log("routing is error");
//     }
// })

router.post('/create', async(req,res)=>{
  
     const {name,email,password,mobile,city} = req.body;
    try{
        let data = new UserInfo({
            name,
            email,
            password,
            mobile,
            city
        });
        await data.save();
        res.json(data);
    }
    catch(error)
    {
        res.json("error")
    }
});

router.get('/', async (req,res)=>{
    var findData = await UserInfo.find();
    res.send(findData);
})
router.put('/', async (req,res) => {
    let update = await UserInfo.updateOne({_id:req.body._id},{$set:{
        name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
            city:req.body.city
    }});
    res.json(update);
})

router.delete("/del/:id", async (req,res) => {
    let delData = await UserInfo.findByIdAndRemove(req.params.id).then(e=>{
        res.json({message:"Data Successfully Deleted"});
    })
})

module.exports = router;