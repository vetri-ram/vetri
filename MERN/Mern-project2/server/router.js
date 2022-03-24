const express = require('express');
const router = express.Router();
const InfoRouter = require('./infoSchema');



router.post('/create',
async (req, res) => {
    try {
        const {  name, age, city} = req.body;
        
            await InfoRouter.create({
               name:name, 
               age:age,
               city:city
            });
            res.json("success");
    } catch (error) {
        res.json(error)
    }
});

router.get('/', async (req,res) =>{
    var findData = await InfoRouter.find();
    res.json(findData);
})

router.put('/update', async (req,res) => {
    var update = await InfoRouter.updateOne({_id:req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }})
    res.json(update);
})

router.delete("/del/:id", async (req,res) =>{
    let delData = await InfoRouter.findByIdAndDelete(req.params.id).then(e => {
        res.json({message:"Successfully Deleted"})
    })
})

router.get('/',(req,res) => {
    res.json("I am from Router File");
})

module.exports = router;