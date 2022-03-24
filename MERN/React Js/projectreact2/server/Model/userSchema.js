const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

userSchema.methods.generateAuthToken = async function (){
    try {
        let tokenJwt = jwt.sign({_id:this._id},process.env.JWT_KEY);
        this.tokens = this.tokens.concat({token:tokenJwt});
        await this.save();
        return tokenJwt;
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model("myusers", userSchema);

module.exports = User;