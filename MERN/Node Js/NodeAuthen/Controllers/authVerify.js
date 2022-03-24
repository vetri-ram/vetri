const {tokenValidator} = require("./userAuth");

module.exports = async (req,res,next)=>{
    try {
        const {jwt} = req.cookies;
    const valid = tokenValidator(jwt);
    if(valid){
        next()
    }
    else{
        res.send("Access Denied")
    }
    } catch (error) {
        res.send(error)
        
    }
}