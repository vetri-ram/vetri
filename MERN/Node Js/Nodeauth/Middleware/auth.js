const Users = require('../Models/userModel');
const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    const {authorization} = req.headers

    if(!authorization){
        res.status(404).json({error:"you must logged in"})
    }
        const accessToken = authorization.replace('Bearer', "")
        jwt.verify(accessToken, process.env.TOKEN_KEY, (err,payload) => {
            if(err) {
                return res.status(404).json({error:"you must logged in"});
            }
            const {_id} = payload
            Users.findOne({_id})
            .then(userData => {
                req.user = userData
                next()
            })
        })
    
}