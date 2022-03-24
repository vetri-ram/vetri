const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// app.get('/', async (req,res) => {
//     let token = jwt.sign({
//         date : new Date
//     }, "asdfghnbvcxzasdfghnbvcxzahjdksmand")
//     console.log(token);
//     res.json({
//         message: "success",
//         token
//     })
// });

// app.get("/check/:tokenID",async (req,res) => {
//     console.log(req.params.token);
//     let token = req.params.token;
//     let tokenResult = await jsonwebtoken.verify(token,"asdfghnbvcxzasdfghnbvcxzahjdksmand");
//     console.log(tokenResult)
//     res.json({
//         message : "success"
//     })
// })

const createToken = async() =>{
    const token = jwt.sign({_id:"5111317"},"mynameisvetrithirumalvalavan")
    console.log(token)
    const dataVer = jwt.verify(token,"mynameisvetrithirumalvalavan")
    console.log(dataVer);

    }
    
createToken();

// const userVerify = ((token)=>{
//     try {
//      const dataVer = jwt.verify(token,"mynameisvetrithirumalvalavan")
//      console.log(dataVer);
//     } catch (error) {
//      console.log(error);
//     }
//  })
// userVerify();

app.listen(3030,()=>{
    console.log("Server is running on PORT 3030")
})