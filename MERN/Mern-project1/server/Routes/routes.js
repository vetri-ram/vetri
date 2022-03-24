const express = require('express')
const Task = require('../models/model')
const router = express.Router()

 router.get('/', (req,res) => {
    //  const task = new Task({
    //      todo : 'Make Luch',
    //      isComplete: false
    //  })
    //  task.save((err,doc) => {
    //      if (err) console.log(err)
    //      console.log(doc);
    //  })

    Task.find((err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
 })

 router.post('/',(req,res) => {
     const task = new Task(req.body)
     task.save((err,docs) =>{
         if (err) console.log(err)
         res.json(docs)
     })
 })
router.put('/',(req,res)=>{
    Task.findOneAndUpdate({
        _id : req.params.find
    },req.body,{
        new : true
    }, (err,doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})
router.delete('/',(req,res)=>{
    Task.findByIdAndDelete(req.params.id,(err,doc) =>{
        if (err) console.log(err)
        res.json(doc)
    })
})
 module.exports = router
